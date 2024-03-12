function leftMenu(){
     let menu = document.getElementById("navbar");
     
     if(menu.style.right=="-50vw")
            menu.style.right="0vw";  
      
     else {
            menu.style.right="-50vw";
      }
      let imageIcon = document.getElementById("menuIcon")
        if(menu.style.right=="0vw") 
            imageIcon.src="images/twitter.png";
        else
            imageIcon.src="images/home.png";
}