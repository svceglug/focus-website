# Website for Sri Venkateshwara College of Engineering - GNU/Linux User Group

## Work In Progress

## Setup Workspace

1) Install Node.js.
```shell
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
```

2) Setup Node Package manager to install packages without sudo.
```shell
mkdir -p ~/npm-packages
npm config set prefix ~/npm-packages
```

3) Add Node packages bin directory into PATH
```shell
echo 'export PATH=$HOME/npm-packages/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

4) Install grunt-cli to run grunt from command line.
```shell
npm install grunt-cli
```

5) Change into project directory and run.
```shell
npm install
```

6) Start grunt using grunt command
```shell
grunt
```

7) Visit localhost:9000 to see webpage.

