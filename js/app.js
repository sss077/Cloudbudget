let p = document.querySelector('.header__txt');
let txt = p.innerHTML
p.innerHTML = ""

function runTxt(x = 0) { 
    console.log(txt[x]);
    p.innerHTML += txt[x]
    x++
    if( x < txt.length){
        setTimeout(() => {
            runTxt(x)
        }, 50);
    }
 }
 runTxt()
 let featureCards = document.querySelector('.features');
 window.addEventListener('scroll', () =>{
    fadeRight(featureCards, 2)
 })

function fadeRight(section, ) {
    let fadeRight = section.querySelectorAll(`.fade-right`)

    fadeRight.forEach(fadeRights => {
        const speed = +fadeRights.getAttribute("data-speed")
        fadeRights.style.transition = `${speed}ms`
        if (window.scrollY >= section.offsetTop - section.offsetHeight) {
            fadeRights.classList.add("active")
        } else {
            fadeRights.classList.remove("active")
        }
    });
}