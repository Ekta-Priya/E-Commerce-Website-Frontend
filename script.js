const imgs=document.querySelectorAll('.headers-slider ul img');
const prev_butn=document.querySelector('.control_prev');
const next_butn=document.querySelector('.control_next');
let n=0;
function changeSlide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';

}
changeSlide()

prev_butn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    changeSlide();
})

next_butn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    changeSlide();
})
const scrollContainer= document.querySelectorAll(`.products`);
for(const item of scrollContainer){
    item.addEventListener(`wheel`,(evt)=>{
        evt.preventDefault();
        item.scrollLeft+=evt.deltaY;
    })
}
var menuItems=document.getElementById("menuItems");
menuItems.style.maxHeight="0px"
function menutoggle(){
    if(menuItems.style.maxHeight=="0px"){
        menuItems.style.maxHeight="200px";
        menuItems.style.maxWidth="300px";
        menuItems.style.display="block";
    }
    else{
        menuItems.stylemaxHeight="0px";
        menuItems.style.display="none";
        // setTimeout(()=>{
        //     menuItems.style.display="none"
        // },500);
    }
}

