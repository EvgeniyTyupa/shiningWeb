const Admin = require('../models/admin')
const passwordHash = require('password-hash')
const jwt = require('jsonwebtoken')
const errorHandler = require('../utils/errorHandler')
require('dotenv').config()

module.exports.register = async function(req, res){
    try{
        const candidate = await Admin.findOne({ username: req.body.username })
        if(candidate){
            return res.status(409).json({
                message: 'Admin already exist!'
            })
        }else {
            const admin = new Admin({
                username: req.body.username,
                password: passwordHash.generate(req.body.password),
                adminLevel: 1
            })
            try{
                await admin.save()
                return res.status(201).json({
                    message: 'success',
                    username: admin.username
                })
            }catch(err){
                errorHandler(res, err)
            }
        }
    }catch(err) {
        errorHandler(res, err)
    }
}

module.exports.login = async function(req, res) {
    try {
        const candidate = await Admin.findOne({ username: req.body.username })
        if(candidate) {
            const passwordResult = passwordHash.verify(req.body.password, candidate.password)
            if(passwordResult) {
                const token = jwt.sign({
                    _id: candidate._id
                }, process.env.JWT, { expiresIn: 60 * 60 })
                return res.status(200).json({
                    token: token
                })
            }else {
                return res.status(404).json({
                    message: 'Wrong email or password! 1'
                })
            }
        }else {
            return res.status(404).json({
                message: 'Wrong email or password! 2'
            })
        }
    }catch(err) {
        errorHandler(res, err)
    }
}

module.exports.me = async function(req, res) {
    try {
        if(req.headers && req.headers.authorization) {
            let decoded;
            let token = req.headers.authorization.split(' ')[1];
            try {
                decoded = jwt.verify(token, process.env.JWT)
            }catch(err) {
                return res.status(401).send({
                    message: 'Unauthorized.'
                })
            }
            const admin = await Admin.findById(decoded._id)
            return res.status(200).json({
                _id: admin._id,
                username: admin.username,
                adminLevel: admin.adminLevel
            })
        }else {
            return res.send(500)
        }
    }catch(err) {
        errorHandler(res, err)
    }
}