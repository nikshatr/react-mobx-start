const process = require('process');
const fs = require('fs');
const path = require('path');
const copydir = require('copy-dir');

if (process.argv.slice(2)[0] === '.') {
};

const folder = path.resolve(process.argv.slice(2)[0]);

function createWorkspace() {
    fs.mkdir(folder, err => {
        if (err) {
            if (err.code !== 'EEXIST') {
                return console.log('Error copy: %s', err);
            } else {
                fs.rmdir(folder, err => {
                    console.log('Remove Folder');
    
                    copydir(path.resolve() + '/template', folder, err => {
                        if (err) return console.log(err);
    
                        console.log('OK');
                    });
                });
            };
            return;
        };

        copydir(path.resolve() + '/template', folder, err => {
            if (err) return console.log(err);

            console.log('OK');
        });
    });
};

createWorkspace();
