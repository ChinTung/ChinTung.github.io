console.log("in");
    
var locInfo,photoInfo,photoLoc,contInfo,msgThrd,healthInfo,medInfo,purchRec,socialMedia,calendar = false;



function loc() {
    
    if(locInfo) {
        locInfo = false;
        document.getElementById("b1").style.color = "black";
        document.getElementById("b1").style.backgroundColor = "white";
        
    }else{
        locInfo=true;
        document.getElementById("b1").style.color = "white";
        document.getElementById("b1").style.backgroundColor = "#555555";
    }
    console.log(locInfo);
    update();
}


function photo(){
    if(photoInfo) {
        photoInfo = false;
        document.getElementById("b2").style.color = "black";
        document.getElementById("b2").style.backgroundColor = "white";
    }else{
        photoInfo=true;
        document.getElementById("b2").style.color = "white";
        document.getElementById("b2").style.backgroundColor = "#555555";
    }
    console.log(photoInfo);
    update();

}

function photoloc(){
    if(photoLoc) {
        photoLoc = false;
        document.getElementById("b3").style.color = "black";
        document.getElementById("b3").style.backgroundColor = "white";
 
    }else{
        photoLoc=true;
        document.getElementById("b3").style.color = "white";
        document.getElementById("b3").style.backgroundColor = "#555555";
    }
    console.log(photoLoc);
    update();

}
function con(){
    if(contInfo) {
        contInfo = false;
        document.getElementById("b4").style.color = "black";
        document.getElementById("b4").style.backgroundColor = "white";
  
    }else{
        contInfo=true;
        document.getElementById("b4").style.color = "white";
        document.getElementById("b4").style.backgroundColor = "#555555";
    }
    console.log(contInfo);
    update();

}
function msg(){
    if(msgThrd) {
        msgThrd = false;
        document.getElementById("b5").style.color = "black";
        document.getElementById("b5").style.backgroundColor = "white";
  
    }else{
        msgThrd=true;
        document.getElementById("b5").style.color = "white";
        document.getElementById("b5").style.backgroundColor = "#555555";
    }
    console.log(msgThrd);
    update();
}
function health(){
    if(healthInfo) {
        healthInfo = false;
        document.getElementById("b6").style.color = "black";
        document.getElementById("b6").style.backgroundColor = "white";
      
    }else{
        healthInfo=true;
        document.getElementById("b6").style.color = "white";
        document.getElementById("b6").style.backgroundColor = "#555555";
    }
    console.log(healthInfo);
    update();
}
function med(){
    if(medInfo) {
        medInfo = false;
        document.getElementById("b7").style.color = "black";
        document.getElementById("b7").style.backgroundColor = "white";
      
    }else{
        medInfo=true;
        document.getElementById("b7").style.color = "white";
        document.getElementById("b7").style.backgroundColor = "#555555";
    }
    console.log(medInfo);
    update();
}
function purchase(){
    if(purchRec) {
        purchRec = false;
        document.getElementById("b8").style.color = "black";
        document.getElementById("b8").style.backgroundColor = "white";
     
    }else{
        purchRec=true;
        document.getElementById("b8").style.color = "white";
        document.getElementById("b8").style.backgroundColor = "#555555";
    }
    console.log(purchRec);
    update();
}
function social(){
    if(socialMedia) {
        socialMedia = false;
        document.getElementById("b9").style.color = "black";
        document.getElementById("b9").style.backgroundColor = "white";
    
    }else{
        socialMedia=true;
        document.getElementById("b9").style.color = "white";
        document.getElementById("b9").style.backgroundColor = "#555555";
    }
    console.log(socialMedia);
    update();
}

function calend(){
    if(calendar) {
        calendar = false;
        document.getElementById("b10").style.color = "black";
        document.getElementById("b10").style.backgroundColor = "white";
    
    }else{
        calendar=true;
        document.getElementById("b10").style.color = "white";
        document.getElementById("b10").style.backgroundColor = "#555555";
    }
    console.log(calendar);
    update();
}

function update() {
    var ap1 = document.getElementById("ap1");
    var ap2 = document.getElementById("ap2");
    var ap3 = document.getElementById("ap3");
    var ap4 = document.getElementById("ap4");
    var ap5 = document.getElementById("ap5");
    var ap6 = document.getElementById("ap6");
    var ap7 = document.getElementById("ap7");
    var ap8 = document.getElementById("ap8");
    var ap9 = document.getElementById("ap9");
    var ap10 = document.getElementById("ap10");
  
    if (locInfo) {
    ap1.style.display = "block";
  } else {
    ap1.style.display = "none";
  }

  if (photoInfo) {
    ap2.style.display = "block";
  } else {
    ap2.style.display = "none";
  }

  if (photoLoc) {
    ap3.style.display = "block";
  } else {
    ap3.style.display = "none";
  }

  if (contInfo) {
    ap4.style.display = "block";
  } else {
    ap4.style.display = "none";
  }

  if (msgThrd) {
    ap5.style.display = "block";
  } else {
    ap5.style.display = "none";
  }

  if (healthInfo) {
    ap6.style.display = "block";
  } else {
    ap6.style.display = "none";
  }

  if (medInfo) {
    ap7.style.display = "block";
  } else {
    ap7.style.display = "none";
  }

  if (purchRec) {
    ap8.style.display = "block";
  } else {
    ap8.style.display = "none";
  }

  if (socialMedia) {
    ap9.style.display = "block";
  } else {
    ap9.style.display = "none";
  }

  if (calendar) {
    ap10.style.display = "block";
  } else {
    ap10.style.display = "none";
  }


}