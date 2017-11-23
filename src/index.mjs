// import cp from 'child_process'
// import * as packages from './packages'

// const dependencies = cp.spawn('npm', ['install', ...packages.dependencies], { 'pipe': 'pipe' })
// // const devDependencies = cp.spawn('npm', ['install', '-D', ...packages.devDependencies])

// function install() {
//   dependencies.stdio.on('data', (data) => {
//     console.log('send')
//   })

//   dependencies.stdout.on('data', (data) => {
//     console.log('Install dependencies')
//   })
  
//   dependencies.stderr.on('data', (data) => {
//     console.log(`${data}`)
//   })
  
//   dependencies.on('exit', (code) => {
//     console.log(`Exit with ${code}`)
//   })

//   devDependencies.stdout.on('data', (data) => {
//     console.log(`devDependencies: ${data}`)
//   })
  
//   devDependencies.stderr.on('data', (data) => {
//     console.log(`error: ${data}`)
//   })
  
//   devDependencies.on('exit', (code) => {
//     console.log(`Exit with ${code}`)
//   })
// }

// install()
import process from 'process'
import fs from 'fs'
import path from 'path'

if (process.argv.slice(2)[0] === '.') {
  copyFiles()
} else {
  fs.mkdir(process.argv.slice(2)[0])

  fs.readdir('template', (err, files) => {
    if (err) {
      console.log(err)
      process.exit()
    }

    files.forEach(file => {
      console.log(file)

      console.log(fs.lstatSync('template/' + file).isDirectory())

      if (fs.lstatSync('template/' + file).isDirectory()) {

      }

      fs.copyFile('template/' + file, process.argv.slice(2)[0] + '/' + file, err => {
        if (err) {
          console.log(err)
          process.exit()
        }
      
        console.log('Success')
      })
    })
  })
}
