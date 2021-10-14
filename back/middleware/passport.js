const passport = require('passport')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const Admin = mongoose.model('Admin')
require('dotenv').config()

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT
}

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try{
                const admin = await Admin.findById(payload._id).select('username id')
                if(admin){
                    done(null, admin)
                }else {
                    done(null, false)
                }
            }catch(err){
                console.log(err)
            }
        })
    )
}