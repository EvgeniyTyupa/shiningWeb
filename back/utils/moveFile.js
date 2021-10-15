require('dotenv').config()
const fs = require('fs')

module.exports.moveFile = async function(path, file) {
    try{
        let date = Date.now()

        await file.mv(path + file.name)

        await fs.renameSync(path + file.name, path + date + "_" + file.name)

        let newPath = path.replace('./public', '/public')

        let fullPath = process.env.HOST + newPath + date + "_" + file.name

        return fullPath
    }catch(err){
        console.log(err)
    }
}