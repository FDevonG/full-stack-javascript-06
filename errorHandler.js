/**
 * 404 error handler
 */
const errorFourOhFour = ((req, res, next) => {
    const err = new Error();
    err.message = "Page not found";
    err.status = 404;
    console.log(err.status + " " + err.message);
    res.status(404).render('page-not-found', {err});
});

/**
 * Global Error Handler
 */
const golbalError = ((err, req, res, next) => {
    if(err){
        console.log("Global error handled");
    }
    
    if(err.status === 404){
       res.status(404).render('page-not-found', {err});
    } else {
        err.message = err.message || 'It looks like something went wrong on the server.';
        console.log(err.message);
        res.status(err.status || 500).render('error', {err});
    }
});

module.exports = {errorFourOhFour, golbalError}