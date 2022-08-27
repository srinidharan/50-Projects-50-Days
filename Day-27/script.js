const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const meassages = [
    'message one',
    'message Two',
    'message Three',
    'message Four'
];

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createnotification ());

function createnotification (message = null, type = null) {
        const notif = document.createElement('div');
        notif.classList.add('toast');
        notif.classList.add(type ? type : getrandomtype() );

        notif.innerText= message ? message : getrandommessage();

        toasts.appendChild(notif)
        

        setTimeout(() => {
            notif.remove()
        }, 3000);



}

function getrandommessage() {
    return meassages[Math.floor(Math.random() * meassages.length)];
}

function getrandomtype() {
    return types[Math.floor(Math.random() * types .length)];
}