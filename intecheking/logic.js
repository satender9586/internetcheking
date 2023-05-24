var isonline = true;
var invlidId;
var timer = 10;
var popup = document.querySelector(".popup")
var chekConnection = async ()=>{
    try {
        var response = await fetch("https://jsonplaceholder.typicode.com/posts");
        
         isonline = response.status >= 200 && response.status <300;
        
    } catch (error) {
        isonline = false;
    }
    timer = 10 ;
    clearInterval(invlidId)
    handlepopu(isonline)

}

const handlepopu = (status)=>{
   if(status){
    
    return setTimeout(()=>{popup.classList.remove("show")},1000)
   }
   else{
   popup.classList.add("show")
   }
   invlidId = setInterval(()=>{
    timer -- ;
    if(timer === 0) chekConnection()
    popup.querySelector(".des b").innerHTML = timer;
   },1000)
}

setInterval(()=> isonline && chekConnection(), 3000)