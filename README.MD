## About

Web application for food delivery service with such features:
+ Responsive web design
+ Simple user interface
+ Gifts to user depending on cart total price
+ Discounts
+ Tags

## Tools involved

+ Bootstrap theme [Material Design for Bootstrap](https://fezvrasta.github.io/bootstrap-material-design/)
+ ECMAScript2015 via [Babel](https://babeljs.io/) transpiler
+ [LESS](http://lesscss.org/) as CSS preprocessor
+ [Webpack](https://webpack.github.io/) as build tool
+ Backend written in Python with [Django](https://www.djangoproject.com/) framework
+ [Nginx](http://nginx.org/) as frontend webserver and [Gunicorn](http://gunicorn.org/) as python webserver

## Deployment

1. Install python requirements
2. Install nodejs
3. From `src/` run `npm install` to install npm and bower dependencies
4. Run `webpack --config webpack.config.js` to build ES2015 and LESS
5. Deploy it with like any other Django application. I personally prefer nginx + gunicorn


## License

I've not decided yet. Please, feel free to ask me.

## TODO

1. Replace jQuery mess with something like React
2. Tests.

## Screenshot

![alt text](http://i.imgur.com/LlDhKw5.png "Application screenshot")