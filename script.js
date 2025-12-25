function toggleMode(){
 document.body.classList.toggle("light")
 localStorage.theme = document.body.className
}

if(localStorage.theme){
 document.body.className = localStorage.theme
}
