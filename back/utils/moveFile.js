require('dotenv').config()

module.exports.moveFile = function(path, file) {
    try{
        file.mv(path + file.name)

        let newPath = path.replace('./public', '/public')

        let fullPath = process.env.HOST + newPath + file.name

        return fullPath
    }catch(err){
        console.log(err)
    }
}