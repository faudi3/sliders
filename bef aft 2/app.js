const container = document.querySelector('.Beforecontainer');
document.querySelector('.Beforeslider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
})

