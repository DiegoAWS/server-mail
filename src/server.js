require('dotenv').config()

const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const cors = require('cors')
const http = require('http')
const env = process.env


app.use(cors())

const Transport = nodemailer.createTransport({
    service: env.EMAIL_SERVICE,
    host: env.EMAIL_HOST,
    secure: env.EMAIL_SECURE,
    port: env.EMAIL_PORT,
    auth: {
        user: env.GMAIL_USER_NAME,
        pass: env.GMAIL_USER_PASSWORD
    }
})

const texto = `Mensaje OK enviado a las ${new Date().toDateString()}`
const mail = {
    from: '"Social"<social.bot.secure@gmail.com>',
    to: 'diego.netsolutions@gmail.com',
    subject: 'It Works!!',
    text: texto

}

app.get('/sendMail', (req, res) => {
    // Transport.sendMail(mail, (error, info) => {
    //     if (error) {
    //         console.log(error)
    //         res.json(error)

    //     }

    //     else {
    //         console.log('Mail Enviado')
    //         console.log(info)


    //         res.json(info)
    //     }
    // })
res.send('Works!')
})

const server = http.createServer(app)

server.listen( () => {
    console.log('The server is Runing....')

})