const allImages = document.getElementsByClassName("item")
const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")


let currentIndex = 0

nextBtn.addEventListener("click", function (){
    currentIndex = currentIndex+1
    if(currentIndex >= allImages.length){
        currentIndex = 0
    }
    moveToNext(currentIndex)
})

prevBtn.addEventListener("click", function (){
    currentIndex = currentIndex - 1
    if(currentIndex < 0){
        currentIndex = allImages.length - 1
    }
   moveToNext(currentIndex)
})

function moveToNext(item){
    for(let index = 0; index<allImages.length; index++){
        if(allImages[index].classList.contains("active")){
            allImages[index].classList.remove("active")
        }
    }
    allImages[item].classList.add("active")
}

// make the slider go to next image automatically -- setInterval


// Build a mobile nav menu 