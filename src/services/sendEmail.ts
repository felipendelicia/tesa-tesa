import axios from 'axios'

function sendEmail(to:string, subject:string, body:string){
    const data = {
        sender: {
            name: 'Luca Delicia',
            email: to
        },
        to: [
            {
                email: 'delicia4581@gmail.com',
                name: 'Felipe Delicia'
            }
        ],
        subject: subject,
        htmlContent: body
    }
    axios.post('https://api.sendinblue.com/v3/smtp/email', data, {
        headers: {
            'accept': 'application/json',
            'api-key': process.env.REACT_APP_SENDINBLUE_API_KEY,
            'content-type': 'application/json',
        }
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

export default sendEmail