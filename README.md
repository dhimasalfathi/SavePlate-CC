# Cloud Computing repository of SavePlate-sql-rest-api.
## Welcome to SavePlate-sql-rest-api
<p align="center"> <img src="https://github.com/dhimasalfathi/SavePlate-CC/blob/master/saveplate.jpg?raw=true" /> </p>
<div align="center">
  <p align="center">
    <a href="https://github.com/aldybw/SavePlate-sql-rest-api"><strong>Back to the main repository</strong></a>
  </p>
</div>

## What is this repository about?

Hello and welcome to SavePlate-sql-rest-api project repository for the cloud computing! 

As the we mentioned before, this repository is used as the primary working repository for cloud computing side of the SavePlate project done as part of Bangkit 2023's Product-based Capstone Project built in Node JS with Express JS.

<p align="right">(<a href="#top">back to top</a>)</p>


### This application built with

* [Express JS](https://expressjs.com/)
* other libraries included in "package.json" file

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Before replicating this project, make sure you have [Git](https://git-scm.com/downloads) installed on your computer.

### Prerequisites

Open your terminal and install the latest Node Package Manager
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation SavePlate rest API

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/dhimasalfathi/SavePlate-CC
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Go to [Google Cloud Platform](https://console.cloud.google.com/)
5. Create an Instance, in Compute Engine
7. Click on "show configuration option and select "machine type"
8. Click the drop down box and choose standard machine (1 vCPU, 3.75 GB)
9. Storage type SSD and select the capacity 10GB. Don't forget to checklist "Enable automatic storage increases"
10. Expand the connections setting, checklist on public IP then click add network, fill the network with "0.0.0.0/0", click done.
11. And create Instance
12. Open ssh and clone github repo in ssh
13. install all the necessary dependencies (pm2, flask, and npm)
14. test the endpoint by running command "nodemon index.js" if succes the you're good to go
15. then run pm2 start index.js for running REST API backend

15. Run the command below:
    ```sh
    ./deploy.sh
    ```
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- API Endpoint -->
## API Endpoint

* API Documentation
    https://documenter.getpostman.com/view/21074828/2s93sXduov

<!-- API List -->
## API List

### User Sign Up
* URL
    http://34.143.148.129:5000/signup
* Method
    Post
* Request Body
    - username (string)
    - email (string)
    - password (string)
    - confPassword (string)
* Respone
    ```sh
  {
      "message": "string",
  }
  ```

### User Sign In
* URL
    http://34.143.148.129:5000/signin
* Method
    Post
* Request Body
    - email (string)
    - password (string)
* Respone
    ```sh
  {
      "message": "string",
  }
  ```

### Profile
* URL
    http://34.143.148.129:5000/users
* Method
    Get
* Respone
    ```sh
  {
      "message": "string",
  }
  ```

### Update Profile
* URL
    http://34.143.148.129:5000/update
* Method
    Put
* Request Body
    - username (string)
    - email (string)
    - pic (file)
* Respone
    ```sh
  {
      "message": "string",
  }
  ```

### User Sign Out
* URL
    http://34.143.148.129:5000/signout
* Method
    Delete
* Respone
    ```sh
  {
      "message": "string",
  }
  ```
