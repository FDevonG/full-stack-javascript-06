const express = require('express');
const router = express.Router();
const { projects } = require('./data');

/**
 * routes to the home page
 */
router.get('/', (req, res) => {
    res.locals.projects = projects;
    res.render('index');
});

/**
 * routes to the about page
 */
router.get('/about', (req, res) => {
    res.render('about');
});

/**
 * routes to the project oage
 */
router.get('/project/:id', (req, res, next) => {
    if (projects[req.params.id.replace(':', '')]){
        res.locals.project = projects[req.params.id.replace(':', '')];
        res.render('project');
    } else {
        next();
    }
});

module.exports = router;