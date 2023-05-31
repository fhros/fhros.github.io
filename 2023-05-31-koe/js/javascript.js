var title = document.getElementById("title")
var field = document.getElementById("field")


document.getElementById("showfieldbtn").addEventListener("click", function(){
    field.style.display = "block"
})

field.addEventListener("keyup", function toimi(event) {
    title.innerText = event.target.value
})
