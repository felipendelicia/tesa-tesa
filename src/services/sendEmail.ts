import axios from 'axios'

function sendEmail(to:string, subject:string, body:string){
    const data = {
        to:[{email:to}],
        subject: subject,
        htmlContent: body,
        from: {email: 'delicia4581@gmail.com', name: 'Felipe Delicia'}
    }
    axios.post('https://api.sendinblue.com/v3/smtp/email', data, {
        headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.REACT_APP_SENDINBLUE_API_KEY
        }
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

export default sendEmail