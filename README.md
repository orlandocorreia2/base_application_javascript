## Requirements

- Docker: https://docs.docker.com/engine/install/
- Docker Compose: https://docs.docker.com/compose/install/

## Installation

- `git clone https://orlandonascimento1@bitbucket.org/orlandonascimento1/pde_cfe2.0.git`
- Access application folder
- `docker-compose up -d`
- `docker exec -it pde_cfe_api bash`
- `cd api`
- `yarn`

## Setup docker database postgree

- Create database pde_cfe in your app manager database with user: postgres and password: root
- `yarn typeorm migration:run `

## Setup docker database mongo

- donwload from internet MongoDB Compass
- create a new connection
- `mongodb://localhost:27017`

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](https://mit-license.org/)**
- Pdecfe 2020 © <a href="javascript:;" target="_blank">Pde Cfe</a>.
