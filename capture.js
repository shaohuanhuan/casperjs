var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    viewportSize:{width:1920,height:1200}
});

var args = casper.cli.args;
var url = args[0];
var filename = args[1];
var selector = args[2];

casper.start(url);
var callbackFun = function() {
    var args = [filename];
    var method = 'capture';
    if (selector) {
        args.push(selector);
        method = 'captureSelector';
    }
    this[method].apply(this, args);
}

var nextStep ='then';
var nextStepArgs= [callbackFun];
if(selector){
    nextStep = 'waitForSelector';
    nextStepArgs.unshift(selector);
    nextStepArgs.push(function(){this.echo('Timeout Error!!!')});
    nextStepArgs.push(10000);
}

casper[nextStep].apply(casper,nextStepArgs);

casper.run(function() {
    this.echo('Done.').exit();
});