var  menuHref = document.querySelector(".menu ");
var tooltip = document.querySelector(".tooltip");




    menuHref.addEventListener('mouseover', function () {
        tooltip.classList.add('visible');
    });
    menuHref.addEventListener('mouseout', function () {
        tooltip.classList.remove('visible');

    });


var productVisibility = document.querySelector(".productleft");


productVisibility.addEventListener('mouseover', function () {
    this.firstElementChild.classList.add('hidden');
});
productVisibility.addEventListener('mouseout', function () {
    this.firstElementChild.classList.remove('hidden');
});


var centerVisibility = document.querySelector(".productcenter");

centerVisibility.addEventListener('mouseover', function () {
    this.firstElementChild.classList.add('hidden');
});
centerVisibility.addEventListener('mouseout', function () {
    this.firstElementChild.classList.remove('hidden');
});


var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

var tempSlider = document.querySelector(".slider");
var slider = tempSlider.querySelectorAll("li");


var index = 0;

slider[index].className += "visibleBlock";


next.addEventListener('click', function(){
    slider[index].classList.remove("visibleBlock");
    index = index +1;
    if ( index > 2){
        index = 0;
    }
    slider[index].classList.add("visibleBlock");
});



prev.addEventListener('click', function(){
    slider[index].classList.remove("visibleBlock");
    index = index - 1;
    if (index < 0){
        index = 2;
    }
    slider[index].classList.add("visibleBlock");
});



// Rozwijane





var dropButton = document.querySelectorAll('.drop_down_list');
console.log(dropButton);




for (var i = 0; i < dropButton.length; i++){
    var button = dropButton[i].firstElementChild.nextElementSibling;
    button.addEventListener('click', function () {
        dropContent =this.nextElementSibling;
        dropContent.classList.toggle('visiblePanel');
    })



}

