const fs = require('fs');
const execSync = require('child_process').execSync;

module.exports = function(context){
    console.log('Building Angular 2 application into "./www" directory.');
    const bashPath = context.opts.projectRoot;
    const baseWww = bashPath + '/www';

    console.log(execSync(
        "ng build --base-href",
        {
            maxBuffer: 1024*1024,
            cwd: bashPath + '/..'
        }
    ).toString('utf-8'));
    var files = fs.readdirSync(baseWww);
    for (var i = 0; i < files.length; i++) {
        if(files[i].endsWith('.gz')){
            fs.unlinkSync(baseWww + '/'+files[i]);
        }
    }
};