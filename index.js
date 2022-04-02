var submit = document.querySelector(".cardfront");
var appear = document.querySelector(".cardback");
var numrating = document.querySelector(".cardback-rating");


document.querySelector(".submit").addEventListener("click", function(){
    
    submit.classList.toggle("hidden");
    appear.classList.toggle("apprating");

});

document.querySelector(".btn1").addEventListener("click", function(){
    numrating.innerHTML ="You selected 1 out of 5";
});
document.querySelector(".btn2").addEventListener("click", function(){
    numrating.innerHTML ="You selected 2 out of 5";
});
document.querySelector(".btn3").addEventListener("click", function(){
    numrating.innerHTML= "You selected 3 out of 5";
});
document.querySelector(".btn4").addEventListener("click", function(){
    numrating.innerHTML ="You selected 4 out of 5";
});
document.querySelector(".btn5").addEventListener("click", function(){
    numrating.innerHTML ="You selected 5 out of 5";
});

