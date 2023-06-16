# Cloud Computing repository of SavePlate-sql-rest-api.
## Welcome to SavePlate-sql-rest-api
<p align="center"> <img src="https://github.com/dhimasalfathi/SavePlate-CC/blob/master/saveplate.jpg?raw=true" width="150" height="150" /> </p>
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
   git clone https://github.com/aldybw/camerlang-sql-rest-api
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Go to [Google Cloud Platform](https://console.cloud.google.com/)
4. Go to search field and search for SQL service
5. Create an Instance, and choose mySQL
6. select MySQL 5.7 for Database version
7. Click on "show configuration option and select "machine type"
8. Click the drop down box and choose standard machine (1 vCPU, 3.75 GB)
9. Storage type SSD and select the capacity 10GB. Don't forget to checklist "Enable automatic storage increases"
10. Expand the connections setting, checklist on public IP then click add network, fill the network with "0.0.0.0/0", click done.
11. And create Instance
12. Open new terminal (shell or Bash), make sure your project location to "/CAMerlang-sql-rest-api"
13. Open ".env" file and change to your configuration

    >> #PRODUCTION<br>
    >> DB_PORT=3306 (Your DB port)<br>
    >> DB_NAME=camerlang_db (Your DB name)<br>
    >> DB_USERNAME=root (Your DB username)<br>
    >> DB_PASSWORD=qwerty123 (Your DB pass)<br>
    >> DB_HOSTNAME=35.226.234.192 (Your SQL Public IP address)<br>
    >> INSTANCE_CONNECTION_NAME=35.226.234.192 (Your SQL Public IP address)

14. Open "deploy.sh" file and change to your configuration

    >> GOOGLE_PROJECT_ID=camerlang-development (your project id)<br>
    >> CLOUD_RUN_SERVICE=camerlang-api-service (your service name)<br>
    >> INSTANCE_CONNECTION_NAME=camerlang-development:us-central1:camerlang-rest-api (your connection name)<br>
    >> DB_USERNAME=root (your DB username)<br>
    >> DB_PASSWORD=qwerty123 (your DB pass)<br>
    >> DB_NAME=camerlang_db (your DB name)<br>
    >> DB_HOSTNAME=35.226.234.192 (your SQL public IP address)<br>
    >> DB_PORT=3306 (your DB port)

15. Run the command below:
    ```sh
    ./deploy.sh
    ```
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact
