import {MAIL_SENDER} from './API'

export default function emailRequestHandler(formInputsData, URL = MAIL_SENDER) {
    return fetch(URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formInputsData
    })
        .then(response => {
            return response.type === 'opaque' || response.ok;
        })
        .catch(e => console.log(e))
}
