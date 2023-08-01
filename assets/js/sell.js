const carousel = document.querySelector(".carousel");
const arrowBtn = document.querySelectorAll(".wapper i");
const firstCarWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false, startX,startScrollLeft;

arrowBtn.forEach(btn =>{
    btn.addEventListener("click", () => {
        
        carousel.scrollLeft += btn.id === "left" ? -firstCarWidth : firstCarWidth;
        });

});

const dragStart = (e) =>{
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;

}

const dragging = (e) =>{
    if(!isDragging) return;//if isdragging is false retuen frome here
    carousel.scrollLeft = startScrollLeft -  (e.pageX - startX);
}

const dragStop = () =>{
    isDragging =false;
    carousel.classList.remove("dragging");

}

carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove",dragging);
document.addEventListener("mouseup",dragStop);
