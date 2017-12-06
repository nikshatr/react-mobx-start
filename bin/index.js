#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const copydir = require('copy-dir');

const folder = path.resolve(process.argv.slice(2)[0]);
const template = path.resolve(__dirname, '../template');

function copyDir() {
    copydir(template, folder, err => {
        if (err) return console.log(err);

        console.log('OK');
    });
};

function createWorkspace() {
    if (process.argv.slice(2)[0] === '.') {
        copyDir();
        return;
    };

    fs.mkdir(folder, err => {
        if (err) {
            if (err.code !== 'EEXIST') {
                return console.log('Error copy: %s', err)
            } else {
                copyDir()
                return;
            }
        };

        copyDir();
    });
};

createWorkspace();
