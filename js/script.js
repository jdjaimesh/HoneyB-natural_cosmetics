function scrollToProducts(){

    document.getElementById("productos")
    .scrollIntoView({
        behavior:"smooth"
    });

}

AOS.init({
    duration: 1000,
    once: true
});