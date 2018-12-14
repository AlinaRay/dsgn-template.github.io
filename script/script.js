
// open navigation

var navigation = document.querySelector(".navigation");
document.querySelector(".nav--toggle")
    .addEventListener("click", function () {
        if(!this.classList.contains("active")){
            this.classList.toggle("active");
            navigation.style.opacity="1";
            navigation.style.width = "600%";
        }else{
            this.classList.remove("active");
            navigation.style.opacity = "0";
             navigation.style.width = "0";
        }});

//nav button animation "swing"

var swing = document.querySelector('.header--nav--button');
swing.onmouseover = function() {
    if(navigation.style.opacity==="1") {
        this.style.animation="none";
    }else{
        this.style.animation="swing 0.5s";
    }
};

swing.onmouseout = function() {
    this.style.animation="none";
};
