const menuButton=document.getElementById('menuButton');
window.addEventListener('resize',event=>{
    if(window.innerWidth>=768)
        menuButton.style.display='none'
    else if(window.innerWidth<768)
        menuButton.style.display='inline-flex'
})
menuButton.addEventListener('click',event=>{
    console.clear()
    console.log(event,innerWidth)
})