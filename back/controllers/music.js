const Track = require('../models/track')
const errorHandler = require('../utils/errorHandler')
const { moveFile } = require('../utils/moveFile')
require('dotenv').config()
const fs = require('fs')
const { constants } = require('os')

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
        const track = await Track.findById(req.params.id)
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
            await fs.unlinkSync(newPath)
            console.log('Image deleted.')
            imagePath = moveFile('./public/images/', req.files.image)
            update = {
                ...update,
                image: imagePath
            }
        }

        if(req.files.track){
            let newPath = track.path.replace(process.env.HOST, ".")
            await fs.unlinkSync(newPath)
            console.log('Track deleted.')
            trackPath = moveFile('./public/music/', req.files.track)
            update = {
                ...update,
                path: trackPath
            }
        }

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

module.exports.delete = async function(req, res){
    try{
        const track = await Track.findById(req.params.id)
        if(!track){
            return res.status(404).send({
                message: "Track not found!"
            })
        }
        let newImagePath = track.image.replace(process.env.HOST, ".")
        let newTrackPath = track.path.replace(process.env.HOST, ".")
        
        await fs.unlinkSync(newImagePath)
        console.log('Image deleted.')
        
        await fs.unlinkSync(newTrackPath)
        console.log('Track deleted.')

        await track.remove()

        return res.status(200).json({
            message: "ok"
        })
    }catch(err) {
        errorHandler(res, err)
    }
}