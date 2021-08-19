
//test mail
const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "cd84d6f5ae9c8f",
      pass: "eb13b11ae090f3"
    }
}
const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option,(error, info)=>{
        if(error) {
            console.log(error)
        }else {
            console.log(info);
            return info.response;
        }
    });
}
let email_data ={
    from : 'dbsxortime@naver.com',
    to : 'dbsxortime@naver.com',
    subject:'Test Mail',
    text : 'test send email with node.js'
}

send(email_data);