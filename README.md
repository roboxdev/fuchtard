## About
Web application for food delivery service with such features:
+ React driven Single Page Application
+ Mobile-first responsive design following Material design specs
+ Simple UI, minimum steps from start to checkout
+ Decoupled server and client

## Tech stack
#### Frontend
+ CSS modules
+ postcss-cssnext
+ react
+ react-router v4
+ react-toolbox Material Design UI Kit
+ redux
+ redux-thunk
+ reselect
+ seamless-immutable
+ webpack and babel w/o create-react-app
#### Backend
+ Python
+ Django
+ Django REST Framework
#### Deployment
+ Docker and docker-compose
+ nginx
+ uwsgi

## Deployment
1. Install `docker` and `docker-compose`
1. Clone this repo and `cd` into
1. Run `docker-compose up -d` to start up containers
1. Apply migrations by running `docker-compose run backend migrate`

## Maintenance 

#### update
1. rebuild bundle
```bash
docker-compose up frontend
```
2. restart containers
```bash
docker-compose restart
```

#### database back up
```bash
pg_dump -U fuchtard -Fc fuchtard > ~/dump_`date +%Y-%m-%d"_"%H_%M_%S`.bak
```

#### database restore
```bash
pg_restore -U fuchtard -d fuchtard -Fc dump.bak
```


## License

Contact me

## TODO

1. ~~Get rid of jQuery mess~~
1. Increase test coverage

## Screenshots

![Mobile](https://i.imgur.com/qUbzqA9.png "Mobile")
![Desktop](https://i.imgur.com/pkScjPL.png "Desktop")
