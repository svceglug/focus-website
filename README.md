# Website for Sri Venkateshwara College of Engineering - GNU/Linux User Group

### Work In Progress

## Setup Workspace

1) Install Git, Apache2, PHP5, MySQL
```shell
sudo add-apt install git-core php5 mysql-server php5-mysql libapache2-mod-php5 apache2-utils php-pear php5-gd  php5-mcrypt php5-curl
```
It may ask you to set a MySQL root password.

2) Fork this repository.

3) Clone the forked repository on your local machine at /var/www/ or /var/www/html depending upon your root location on your machine
```shell
git clone git@github.com:svceglug/focus-website.git .
```
will clone this repository on Present Working Directory

4) Start coding and follow the git workflow which is below

5) Send pull request to this repository. We prefer more number of small pull requests rather than a huge one.

6) Congratulate yourself, you are a contributor now

#### Its not necessary that every pull request you send will be accepted but it DEFINITELY is a very good sign, you are a contributer when you send a pull request.

## Git Workflow:
1) Create a new branch for every new feature/static file you create.
```shelll
git checkout -b <yourbranch>
```
2) Code on that branch

3) Merge it to master

## Configure Text Editor.
1. Use 2 spaces of Indentation.
2. Use spaces. No Tabs.
3. No trailing whitespaces.
4. Use Unix style line endings.
5. Empty new line at the end of the file.
