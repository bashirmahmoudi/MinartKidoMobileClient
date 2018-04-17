const fs = require('fs');
const execSync = require('child_process').execSync;

module.exports = function(context) {
    console.log('Building Angular 2 application into "./www" directory.');
    const bashPath = context.opts.projectRoot;
    const baseWWW = bashPath + '/www';

    console.log(execSync(
        "ng build --base-href",
        {
            maxBuffer: 1024*1024,
            cwd: bashPath + '/..'
        }
    ).toString('utf-8'));

    var files = fs.readdirSync(baseWWW);
    for (let i = 0; i < files.length; i++) {
        if(files[i].endsWith('.gz')) {
            fs.unlinkSync(baseWWW + '/' + files[i]);
        }
    }
};
