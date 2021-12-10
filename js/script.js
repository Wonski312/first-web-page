const scrollBtn = document.querySelector(".scroll__btn");
const footerYear = document.querySelector('.footer__year');

let scrollCount;


const handleScrollBtn = () =>{
    
    scrollCount = window.scrollY;
    
    if ( window.scrollY > '400') {
        scrollBtn.style.display = "block";
    }else{
        scrollBtn.style.display = "none";
    }
}

const handleYear = () =>{
    
    let today = new Date();
    let year = today.getFullYear();

    footerYear.textContent = year;


}


handleYear();
document.addEventListener('scroll', handleScrollBtn);