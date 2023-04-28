let btn = document.querySelector(".btn")
let slide = document.querySelector(".slide")

btn.addEventListener("click", () => {
slide.classList.toggle("active")
btn.classList.toggle("active")
})

let scrollWidth = document.querySelector(".scroll-width")
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(scrollWidth)
console.log(document.documentElement.scrollHeight)
console.log(document.documentElement.clientHeight)
console.log(height)

window.addEventListener("scroll",()=>{
    let scrollTop = document.documentElement.scrollTop;
    scrollWidth.style.width = `${(scrollTop / height) * 100}%`
})