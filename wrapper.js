const { spawn } = require('child_process');

const pythonProcess = spawn('python', ['C:\\Users\\vitos\\OneDrive\\Desktop\\School\\Sem 6\\Qoding\\Capstone\\ML3\\main.py']);

pythonProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

pythonProcess.on('error', (error) => {
    console.error(`Error: ${error.message}`);
});

pythonProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});