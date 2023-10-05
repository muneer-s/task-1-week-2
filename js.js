const toTop = document.querySelector(".to-top"); /*access to totop button-mqueryselector for css selector */
window.addEventListener("scroll", ()=> {         /* event listener to window object - for scroll */
    if(window.pageYOffset >100) {                /* scroll page u[to 100px add clas add or remove active cls] */
      toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})


