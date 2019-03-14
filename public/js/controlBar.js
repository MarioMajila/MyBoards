const { remote } = require('electron')

let win = remote.getCurrentWindow();

const minimize = document.querySelector('#minimize')
const maximize = document.querySelector('#close')

minimize.addEventListener('click', () => {
    win.minimize();
});

maximize.addEventListener('click', () => {
    win.close();
});
