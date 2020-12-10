const dotenv = require('dotenv');
const mailServer = require('../mailServer');

dotenv.config();

const sendMail = async (req, res, next) => {
    try {
        const {nome, email, telefone, assunto, conheceu, message} = req.body;

        const body = `
        Nome: ${nome}
        Email: ${email}
        Telefone: ${telefone}
        Como nos conheceu: ${conheceu}
        Mensagem: ${message}`;

        await mailServer({
            destinationUser: process.env.CLIENT_EMAIL,
            subjectText: assunto,
            textOption: body
        });

        res.status(200).send('Email enviado');
    } catch {
        res.status(500).send('Erro ao enviar mensagem');
        console.log(error);
    }
}

module.exports = sendMail;