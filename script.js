
//settingsmenu

var settingsmenu = document.querySelector(".settings-menu");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

//coment
var comment = document.querySelector(".comment-menu");

function commentMenuToggle(){
    comment.classList.toggle("comment-menu-height");
}

//button togle

var darkBtn = document.getElementById("dark-btn");

darkBtn.onclick = function(){

    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    
    }
    
    else{
        localStorage.setItem("theme", "light");
    }

    
}




if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}

else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}

else{
    localStorage.setItem("theme", "light");
}

localStorage.setItem("theme", "dark");
localStorage.getItem("theme");




//Like btn

const img = document.getElementById('images');

let toggle = true;
      var v = 20;
      document.getElementById("myText").innerHTML = v;  
      
img.addEventListener('click',function(){

    toggle = !toggle;

    if(toggle){
        img.src = 'images//like.png';
        document.getElementById("myText").innerHTML = v;
    }

else{

    img.src = 'images//like-blue.png';
    
      document.getElementById("myText").innerHTML = v+1;


}
})














/*
if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark");

}

else{
    localStorage.setItem("theme", "light");
}

*/



