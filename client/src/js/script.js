const menu  = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const img_placeholder = document.querySelector('.img_placeholder')
const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');


accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', event => {
        const arrow = accordionItemHeader.querySelector('.arrowDown')
        arrow.classList.toggle('rotate-arrow');
 
        accordionItemHeader.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        }else{
            accordionItemBody.style.maxHeight = 0;
        }
    })
});


const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

function fileValue(value) {
    console.log(value.files[0]);
    var path = value.value;
    var extenstion = path.split('.').pop();
    if(extenstion === "jpg" || extenstion === "svg" || extenstion === "jpeg" || extenstion === "png"|| extenstion === "gif"){
        document.getElementById('image-preview').src = window.URL.createObjectURL(value.files[0]);
        var filename = path.replace(/^.*[\\/]/, '').split('.').slice(0, -1).join('.');
        document.getElementById("filename").innerHTML = filename;

        var section = document.getElementById("next");
        if (section) {
            img_placeholder.src =  window.URL.createObjectURL(value.files[0]);
            section.scrollIntoView({ behavior: 'smooth' });
            console.log(img_placeholder)
        }
    }else{
        alert("File not supported. Kindly Upload the Image of below given extension ")
    }
}