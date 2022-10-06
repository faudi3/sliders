const container = document.querySelector('.container');
document.querySelector('.slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
})
// setTimeout(() => {
//
//
// },1000)
// for (let i = 0; i < 30; i++) {
//     document.querySelector('.container').style.setProperty('--position', `${i}%`);
//     console.log(i);
// }