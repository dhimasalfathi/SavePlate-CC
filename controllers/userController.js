const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { format } = require("util");
const { Storage } = require("@google-cloud/storage");
const processPic = require("../middlewares/upload");
const storage = new Storage({ keyFilename: "google-cloud-key.json" });
const bucket = storage.bucket("profile_user");

const testing = async(req, res) => {
    return res.status(401).json({ message: "Testos" });
}

const signup = async(req, res) => {
    const { username, email, password, confPassword } = req.body;

    const user = await userModel.findOne({ email: req.body.email });
    if (user)
        return res.status(409).json({ message: "Email already exist" });

    if (password !== confPassword)
        return res.status(400).json({ message: "The password confirmation does not match" });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        await userModel.create({
            username: username,
            email: email,
            password: hashPassword
        });
        res.status(201).json({ message: "Thanks for signing up" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

const signin = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 1000
        });

        res.status(201).json({ message: "Login successful" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

const signout = async(req, res) => {
    try {
        res.cookie('jwt', '', { maxAge: 0 })
        res.status(201).json({ message: "Signout Succesfully" });
    } catch (error) {
        res.status(500).send(error);
    }
}

const profile = async(req, res) => {
    try {
        const cookie = req.cookies['jwt']
        const auth = jwt.verify(cookie, process.env.SECRET_KEY);

        if (!auth) {
            return res.status(401).json({ message: "Unauthorized User" });
        }

        const users = await userModel.findOne({ _id: auth._id });

        const dataUser = {
            id: users._id,
            username: users.username,
            email: users.email,
            pic: users.pic
        }
        res.status(201).json({ data: dataUser })
    } catch {
        res.status(500).send(error);
    }
}

const update = async(req, res) => {
    const cookie = req.cookies['jwt']
    const auth = jwt.verify(cookie, process.env.SECRET_KEY);

    if (!auth) {
        return res.status(401).json({ message: "Unauthorized User" });
    }

    try {
        await processPic(req, res);

        if (!req.file) {
            return res.status(400).send({ message: "Please upload a profile picture" });
        }

        const object = bucket.file(req.file.originalname);
        const objectStream = object.createWriteStream({
            resumable: false,
        });

        objectStream.on("error", (err) => {
            res.status(500).send({ message: err.message });
        });

        objectStream.on("finish", async(data) => {
            const pictureUrl = format(
                `https://storage.googleapis.com/${bucket.name}/${object.name}`
            );

            await bucket.file(req.file.originalname).makePublic();

            const { username, email } = req.body;

            const user = await userModel.findOne({ email: req.body.email });

            if (user && user._id.toString() !== auth._id) {
                return res.status(409).json({ message: "Email already exist" });
            }

            await userModel.findByIdAndUpdate(auth._id, {
                username,
                email,
                pic: pictureUrl,
            });

            res.status(201).json({ message: 'Profile updated successfully' })
                // const users = await userModel.findOne({_id: auth._id});

            // const dataUser = {
            //     id: users._id,
            //     username: users.username,
            //     email: users.email,
            //     pic: users.pic
            // }
            // res.status(201).json({data: dataUser})
        });

        objectStream.end(req.file.buffer);
    } catch (err) {
        if (err.code == "LIMIT_FILE_SIZE") {
            return res.status(500).send({
                message: "File size cannot be larger than 2MB",
            });
        }

        res.status(500).send({
            message: "Could not upload the file",
        });
    }
}

module.exports = { signup, signin, signout, profile, update, testing };