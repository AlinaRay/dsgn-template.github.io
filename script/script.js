
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

// adding rate
let a = document.querySelectorAll(".project-rate");
a.forEach(function(s) { s.addEventListener("click", function (e) {
    var flagScale = true;
    let rate = this.querySelector(".rate-style");
    let far = this.querySelector(".fa-heart-style");
    far.style.transform="rotate(45deg)";
    setTimeout(function(){
        far.style.transform="rotate(0)";

    }, 1000);
    let number = Number(rate.innerHTML.substr(1, rate.innerHTML.length))+1;
    rate.removeChild(rate.firstChild);
rate.appendChild(document.createTextNode("+"+number));
})});