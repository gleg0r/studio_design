function initSlider() {
    let sliderImage = document.querySelector(".block-slider-img")
    let sliderDots = document.querySelector(".block-slider-text-dots")
    let sliderLinks = document.querySelector(".block-slider-img-text")
    let sliderBtns = document.querySelector(".block-slider-img")

    initArrows()
    initDots()
    initLinks()
    initBtns()

    function initArrows() {
        sliderDots.querySelectorAll(".slider__arrow").forEach(arrow => {
            arrow.addEventListener("click", function() {
                let curNum = +sliderImage.querySelector(".active").dataset.index
                let nextNum
                if(arrow.classList.contains("left")) {
                    nextNum = curNum === 1? 3 : curNum - 1
                } else {
                    nextNum = curNum === 3? 1 : curNum + 1
                }
                moveSlider(nextNum)
            })
        })
    }

    function initDots() {
        sliderDots.querySelectorAll(".slider__dot").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index)
            })
        })
    }

    function initLinks() {
        sliderLinks.querySelectorAll(".block-slider-img-text__link").forEach(link => {
            link.addEventListener("click", function() {
                moveSlider(this.dataset.index)
            })
        })
    }
    
    function initBtns() {
        sliderBtns.querySelectorAll(".block-slider-img-btn__btn").forEach(btn => {
            btn.addEventListener("click", function(){
                let curNum = +sliderImage.querySelector(".active").dataset.index
                let nextNum
                if(btn.classList.contains("left")) {
                    nextNum = curNum === 1? 3 : curNum - 1
                } else {
                    nextNum = curNum === 3? 1 : curNum + 1
                }
                moveSlider(nextNum)
            })
        })
    }

    function moveSlider(num) {
        sliderImage.querySelector(".active").classList.remove("active")
        sliderImage.querySelector(".n" + num).classList.add("active")
        sliderDots.querySelector(".active").classList.remove("active")
        sliderDots.querySelector(".n" + num).classList.add("active")
        document.querySelector(".block-slider-text-dots__dot" + ".active").style = "opacity: 0.3;"
        document.querySelector(".block-slider-text-dots__dot" + ".active").classList.remove("active")
        document.querySelector(".block-slider-text-dots__dot" + ".n" + num).style = "opacity: 1;"
        document.querySelector(".block-slider-text-dots__dot" + ".n" + num).classList.add("active")
        sliderLinks.querySelector(".act").classList.remove("act")
        sliderLinks.querySelector(".num" + num).classList.add("act")
        changeText(num)
    }
}

    function changeText(num) {
        switch (num) {
            case 1:
                document.getElementById("slider__city").innerHTML = "Rostov-on-Don LCD admiral"
                document.getElementById("slider__area").innerHTML = "81 m2"
                document.getElementById("slider__time").innerHTML = "3.5 months"
                break;
            case 2:
                document.getElementById("slider__city").innerHTML = "Sochi Thieves"
                document.getElementById("slider__area").innerHTML = "105 m2"
                document.getElementById("slider__time").innerHTML = "4 months"
                break;
            case 3:
                document.getElementById("slider__city").innerHTML = "Rostov-on-Don Patriotic"
                document.getElementById("slider__area").innerHTML = "93 m2"
                document.getElementById("slider__time").innerHTML = "3 months"
                break;
            default:
                break;
        }
    }

document.addEventListener("DOMContentLoaded", function() {
    initSlider()
})