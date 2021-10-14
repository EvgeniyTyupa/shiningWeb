const Track = require('../models/track')
const errorHandler = require('../utils/errorHandler')
const { moveFile } = require('../utils/moveFile')
require('dotenv').config()
const fs = require('fs')

module.exports.create = async function(req, res) {
    let image = req.files.image
    let track = req.files.track

    try{
        let imagePath = moveFile('./public/images/', image)
        let trackPath = moveFile('./public/music/', track)

        const newTrack = new Track({
            name: req.body.name,
            artist: req.body.artist,
            genre: req.body.genre,
            year_of_release: req.body.year_of_release,
            image: imagePath,
            path: trackPath
        })

        await newTrack.save()
        return res.status(201).json({
            message: "ok",
            track: newTrack
        })
    }catch(err) {
        errorHandler(res, err)
    }
}

module.exports.get = async function(req, res){
    try{
        await Track.find()
        .then(music => {
            return res.status(200).json({
                music: music
            })
        })
    }catch(err){
        errorHandler(res, err)
    }
}

module.exports.update = async function(req, res){
    try{
        let track = await Track.findById(req.params.id)
        if(!track){
            return res.status(404).send({
                message: "Track not found!"
            })
        }

        let imagePath = ""
        let trackPath = ""

        let update = { 
            name: req.body.name,
            artist: req.body.artist,
            genre: req.body.genre,
        }

        if(req.files.image){
            let newPath = track.image.replace(process.env.HOST, ".")
            await fs.unlink(newPath, function(err){
                if(err) throw err
                console.log('Image deleted.')
                imagePath = moveFile('./public/images/', req.files.image)
                update = {
                    ...update,
                    image: imagePath
                }
                console.log(update)
            })
        }

        if(req.files.music){
            await fs.unlink(track.path, function(err){
                if(err) throw err
                console.log('Track deleted.')
                trackPath = moveFile('./public/images/', req.files.track)
                update = {
                    ...update,
                    path: trackPath
                }
            })
        }
        console.log(update)
        Object.assign(track, update)

        await track.save()

        return res.status(201).json({
            message: "ok",
            track: track
        })
        
    }catch(err){
        errorHandler(res, err)
    }
}