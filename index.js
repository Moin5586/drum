var drum=document.querySelectorAll(".drum").length;
var aud=new Audio('tom-1.mp3');
for(var i=0;i<drum;i++)
{document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML =this.innerHTML;
    makesound(buttonInnerHTML);  
  });
}
document.addEventListener("keypress",function(event){

  makesound(event.key); 
  
});
function makesound(key){
  switch(key)
    {
      case "w":
         var crash=new Audio("sounds/crash.mp3");
         crash.play();
         break;
      case 'a':
         var kb=new Audio("sounds/kick-bass.mp3");
         kb.play();
         break;
         
      case 's':
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case 'd':
         var tom1=new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;
      case 'j':
         var tom2=new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;
      case 'k':
         var tom3=new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;     
      case 'l':
         var tom4=new Audio("sounds/tom-4.mp3");
         tom4.play();
         break; 
            
      default:
        console.log(key);
    }  

}
