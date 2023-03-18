import axios from 'axios'

type IFromInfo = {name: string, email: string}

function sendEmail(from:IFromInfo, body:string){
    const data = {
        sender: {
            name: from.name,
            email: from.email
        },
        to: [
            {
                email: 'delicia4581@gmail.com',
                name: 'Felipe Delicia'
            }
        ],
        subject: 'tesa-tesa contact email',
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