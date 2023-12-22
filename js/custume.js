
document.querySelector(".menu-area ul").addEventListener("click", function(){
  document.querySelector(".menu-area ul li i").classList.toggle('rotate-toggle');
});



document.querySelector(".menu-area ul").addEventListener("click", function(){
  document.querySelector(".drop-down").classList.toggle('display-toggle');
});








document.querySelector("button").addEventListener("click", function(){
  document.querySelector("button i").classList.toggle('rotate-toggle');
});

document.querySelector("#clickbtn1").addEventListener("click", function(){
  document.querySelector("#clickbtn1 i").classList.toggle('rotate-toggle');
});

document.querySelector("#clickbtn2").addEventListener("click", function(){
  document.querySelector("#clickbtn2 i").classList.toggle('rotate-toggle');
});

document.querySelector("#clickbtn3").addEventListener("click", function(){
  document.querySelector("#clickbtn3 i").classList.toggle('rotate-toggle');
});

document.querySelector("#clickbtn4").addEventListener("click", function(){
  document.querySelector("#clickbtn4 i").classList.toggle('rotate-toggle');
});






var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}





let addBtn = document.querySelector("#add");
let subBtn = document.querySelector("#sub");
let qty = document.querySelector("#qtyBox");

console.log(addBtn, subBtn, qty)

addBtn.addEventListener("click", () => {
  qty.value = parseInt(qty.value) + 1;
})

subBtn.addEventListener("click", () => {
  if (qty.value <= 0) {
    qty.value = 0;
  } else {
    qty.value = parseInt(qty.value) - 1;
  }
})





const theSelect = document.getElementById("theSelect");
const theDiv = document.getElementById("theDiv");

theSelect.addEventListener("change", function (event) {
  if (event.target.value == '৳ 00') {
    theDiv.style.visibility = "hidden"
  } else if (event.target.value == '৳ 80', '৳ 150') {
    theDiv.style.visibility = "visible"
  }
});









$('.responsive').slick({
  dots: true,
  speed: 300,
  prevArrow: '<span class="prevarrow"><i class="fa-solid fa-angle-left"></i></span>',
  nextArrow: '<span class="nextarrow"><i class="fa-solid fa-angle-right"></i></span>',
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




















let valueCoount = 1;
let increment = document.getElementById("add");
let decrement = document.getElementById("sub");
let count  = document.getElementById("qtyBox");
let totalCount  = document.getElementById("amount");

increment.addEventListener("click", () => {
  let add = valueCoount++;
  count.value = add;
  totalCount.innerHTML=  "৳" + " " + add * 500;
});

decrement.addEventListener("click", () => {
  if(valueCoount >= 2){
    let sub = --valueCoount;
    count.value=sub;
    totalCount.innerHTML =  "৳" + " " + sub *  500;
  }
})






theSelect.onchange = function (){
  deliveryfee.innerText = this.value;
}

document.querySelector("#delete").addEventListener("click", function(){
  document.querySelector(".icon").style.display = "none";
});













