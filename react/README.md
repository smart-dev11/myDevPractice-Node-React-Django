Node install
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install build-essential openssl libssl-dev pkg-config
wget http://nodejs.org/dist/v8.9.4/node-v8.9.4.tar.gz
tar -zxf node-v8.9.4.tar.gz
./configure
make
sudo make install


sudo npm install -g create-react-app
create-react-app movie_app
yarn start


yarn add prop-types
yarn cache clean
yarn
