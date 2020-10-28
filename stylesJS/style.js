//By KHALKI Elmehdi.
//MMPG Softwares Test Round 1.
//Style by Javascript.

//Loader
document.getElementById("loader").style.position = "absolute";
document.getElementById("loader").style.width = " 100%";
document.getElementById("loader").style.height = "100vh";
document.getElementById("loader").style.overflow = "visible";
document.getElementById("loader").style.background = "#fff url('images/loader.gif') no-repeat center center";
 
//Header
document.getElementById("hp").style.backgroundColor = "#f1f1f1";
document.getElementById("hp").style.width = "99%";
document.getElementById("hp").style.height = "50%";
document.getElementById("hp").style.overflow = "hidden";
document.getElementById("hp").style.padding = "20px 10px"; 
document.getElementById("hp").style.marginTop = "0"; 
document.getElementById("hp").style.boxShadow = "8px 8px 12px #aaa"; 

//Header items
for(var i=0;i<3 ;i++)
{
    document.getElementsByName("ha")[i].style.float = "left";
    document.getElementsByName("ha")[i].style.color = "black";
    document.getElementsByName("ha")[i].style.textAlign = "center";
    document.getElementsByName("ha")[i].style.padding = "7px";
    document.getElementsByName("ha")[i].style.textDecoration  = "none";
    document.getElementsByName("ha")[i].style.font = "italic bold 20px arial,serif";
    document.getElementsByName("ha")[i].style.height = " 15px";
    document.getElementsByName("ha")[i].style.borderRadius = "4px";
}

document.getElementById("ba").style.position = "absolute";
document.getElementById("ba").style.right = "30px";
document.getElementById("ba").style.top = "25px";
document.getElementById("ba").style.fontSize = "18px"; 

//body.div
document.getElementById("dinfo").style.width = "70%"; 
document.getElementById("dinfo").style.opacity = "0"; 
document.getElementById("dinfo").style.height = "70%";  
document.getElementById("dinfo").style.background = "#D3D3D3"; 
document.getElementById("dinfo").style.boxShadow = "8px 8px 12px #aaa"; 
document.getElementById("dinfo").style.textAlign = "center"; 
document.getElementById("dinfo").style.borderRadius = "8px"; 
document.getElementById("dinfo").style.marginLeft = "auto"; 
document.getElementById("dinfo").style.marginRight = "auto"; 
document.getElementById("dinfo").style.position = "relative";  
document.getElementById("dinfo").style.marginLeft = "70px";  

//body.dinfo.img
//backgroud image
document.getElementById("image").style.width = "100%";  
document.getElementById("image").style.height = "absolute";  
document.getElementById("image").style.opacity = "0.5";  

//body.dinfo.div
//City informations plateform
document.getElementById("containt").style.position = "absolute"; 
document.getElementById("containt").style.top = "20%";  
document.getElementById("containt").style.left = "50%";  
document.getElementById("containt").style.fontSize = "50px";  
document.getElementById("containt").style.fontFamily = "cursive";   
document.getElementById("containt").style.transform = "translate(-50%, -50%)";   

//body.dinfo.containt.p
document.getElementById("titre").style.textAlign = "center";  
document.getElementById("titre").style.border = "double";
document.getElementById("titre").style.width = "500px";  

//body.div.div
//City informations plateform
document.getElementById("divinfo").style.margin = "5%"; 
document.getElementById("divinfo").style.paddingBottom = "5%"; 

//body.dinfo.divinfo.h2
document.getElementById("sousTitre").style.paddingBottom = "1%"; 

//footer
document.getElementById("footer").style.backgroundColor = "#f1f1f1";
document.getElementById("footer").style.textAlign = "center"; 
document.getElementById("footer").style.opacity = "0.5";



    