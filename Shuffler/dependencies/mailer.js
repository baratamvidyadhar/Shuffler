const sendgridapi="YOUR API KEY";
const sgMail = require('@sendgrid/mail')

function sendMail(to,whom){
sgMail.setApiKey(sendgridapi);
const msg = {
    to:to,
    from: 'YOUR DL email',
    subject: 'you are secret santa to',
    text: 'Happy christmas',
    html: `<strong>${whom}</strong>`,
};

sgMail.send(msg).then(() => {
        console.log('Email sent')
    }).catch((error) => {
        console.error(error)
    });
}

function printdata(unshuffledusers,shuffledusers)
{
    for(let i=0;i<shuffledusers.length;i++){
        sendMail(unshuffledusers[i],shuffledusers[i]);
    }
}

module.exports ={
    printdata:printdata
};