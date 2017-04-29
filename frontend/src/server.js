import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from 'components/app';
import template from './template';

const app = express();

app.use('/assets', express.static('dist/assets'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    const appString = renderToString(<App />);

    res.send(template({
        body: appString,
        title: 'Hello World from the server'
    }));
});

app.listen(8080);