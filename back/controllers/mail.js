const errorHandler = require('../utils/errorHandler')
const transporter = require('../utils/mailer')

const sendMail = async (order) => {
    let mailOptions = {
        from: process.env.GMAIL_EMAIL,
        to: process.env.GMAIL_EMAIL,
        subject: 'New Order',
        text: '',
        html: `
            <head>
                <style type="text/css">
                    .im {
                        color: #000000 !important;
                    }
                </style>
            </head>
            <div>
                <p>${order.name} ${order.phone}</p>
            </div>
        `
    }
    await transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error)
        }else {
            console.log('Email sent: ' + info.response)
        }
    })
}

module.exports.send = async function(req, res) {
    const order = { 
        name: req.body.name,
        phone: req.body.phone
    }
    try{
        await sendMail(order)
    
        return res.status(201).json({
            message: 'Success!'
        })
    }catch(e){
        errorHandler(res, e)
    }
}
