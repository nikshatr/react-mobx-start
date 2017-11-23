import fs from 'fs'

export const copy = (name) => {
    fs.copyFile(name, name, err => {
        if (err) {
          console.log(err)
          process.exit()
        }
      
        console.log('Success')
      })
}