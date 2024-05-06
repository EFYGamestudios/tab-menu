const tabMenu=document.getElementsByClassName('tab');
const tabDeg=document.getElementsByClassName("Tab");
const hack=document.getElementById("hack");
hack.style.borderTopLeftRadius="5px";
tabMenu[0].addEventListener("click",function(){
    hack.style.transform = "translateX(0)";
    tabDeg[0].style.display="block";
    tabDeg[1].style.display="none";
    tabDeg[2].style.display="none";
    tabDeg[3].style.display="none";
    hack.style.borderTopRightRadius="0px";
    hack.style.borderTopLeftRadius="5px";
    tabDeg[4].style.display="none";
});
tabMenu[1].addEventListener("click",function(){
    hack.style.transform = "translateX(120px)";
    tabDeg[0].style.display="none";
    tabDeg[1].style.display="block";
    tabDeg[2].style.display="none";
    tabDeg[3].style.display="none";
    hack.style.borderTopLeftRadius="0px";
    hack.style.borderTopRightRadius="0px";
    tabDeg[4].style.display="none";
});
tabMenu[2].addEventListener("click",function(){
    hack.style.borderTopLeftRadius="0px";
    hack.style.transform = "translateX(235px)";
    tabDeg[0].style.display="none";
    tabDeg[1].style.display="none";
    tabDeg[2].style.display="block";
    tabDeg[3].style.display="none";
    hack.style.borderTopRightRadius="0px";
    tabDeg[4].style.display="none";
});
tabMenu[3].addEventListener("click",function(){
    hack.style.borderTopLeftRadius="0px";
    hack.style.transform = "translateX(360px)";
    tabDeg[0].style.display="none";
    tabDeg[1].style.display="none";
    tabDeg[2].style.display="none";
    tabDeg[3].style.display="block";
    hack.style.borderTopRightRadius="0px";
    tabDeg[4].style.display="none";
});
tabMenu[4].addEventListener("click",function(){
    hack.style.borderTopLeftRadius="0px";
    hack.style.transform = "translateX(480px)";
    hack.style.borderTopRightRadius="5px";
    tabDeg[0].style.display="none";
    tabDeg[1].style.display="none";
    tabDeg[2].style.display="none";
    tabDeg[3].style.display="none";
    tabDeg[4].style.display="block";
});

