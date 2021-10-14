const Track = require('../models/track')
const errorHandler = require('../utils/errorHandler')

module.exports.create = async function(req, res) {
    console.log(req.body)
    console.log(req.files)
    return res.status(201).json({
        message: "ok"
    })
    try{
        // const track = new Track({
        //     name: req.body.name,
        //     artist: req.body.artist,
        //     genre: req.body.genre,
        //     year_of_release: req.body.year_of_release,
        //     image: ""
        // })
    }catch(err) {
        errorHandler(res, err)
    }
}