if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
        .them(function() {
            console.log('SW: registered')
        })
        .catch(function() {
            console.log('SW: failed :(', err)
        })
    })
}

/** ---- Slider para logos ---- */
let actual = 0;

function mostrar(n) {
    const images = document.getElementsByClassName('item-img')
    for (i = 0; i < images.length; i ++) {
        if (images[i].className.includes('active')) {
            images[i].className = images[i].className.replace('active', "");
            break;
        }
    }
    actual = n;
    images[n].className += ' active'
}

function next() {
    actual++;;
    if (actual >= 5) {
        actual = 0
    }
    mostrar(actual)
}

function prev() {
    actual --;
    if (actual <= 0) {
        actual = 5;
    }
    mostrar(actual)
}

let speed = 5000
let play = setInterval('next()', speed)

const btn_pre = document.querySelector('.prev')
const btn_next = document.querySelector('.next')

btn_pre.addEventListener('click', () => {
    next()
    console.log('click en prev')
})
btn_next.addEventListener('click', () => {
    prev()
    console.log('click en next')
})