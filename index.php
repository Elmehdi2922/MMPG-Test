<?php  
     
     include 'process.php' ;
     visiteIncrementation();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!--Loading animation-->
    <div id="loader"></div>
    <!--Header-->
    <p id="hp">
      <a name="ha" id="casa" href="https://mmpgproject.ew.r.appspot.com/index?city=Casablanca">  Casablanca  </a> 
      <a name="ha" id="rabat" href="https://mmpgproject.ew.r.appspot.com/index?city=Rabat">  Rabat  </a> 
      <a name="ha" id="fes" href="https://mmpgproject.ew.r.appspot.com/index?city=Fes">  Fès  </a>
      <button id="ba" onclick="getLocation()">
        <img src="images/localis.png" >
         Géolocalisation
      </button>
    </p> 

    <!--Body-->
    <div id ="dinfo">
      
      <img id="image"></img>
      <div id="containt">
        <p id="titre"> </p> 
        <img id="separateur" src="images/separ.png" > </img>
      </div>
      <div id="divinfo">
        <h2 id="sousTitre">Introduction</h2><img src="images/SeparateurSousTitre.png" />
        <h4 id="h4intro" ><?php introduction(); ?>
        <h2 id="sousTitre">Detail</h2><img src="images/SeparateurSousTitre.png" />
        <h4 id="h4deta"><?php body(); ?></h4><br>
        <h2 id="nbrvisite1">Nombre de visite</h2><img id="nbrvisite2" src="images/SeparateurSousTitre.png" />
        <h3 id="nbrvisite3"><?php nbrvisite(); ?> Visite(s). </h3>
      </div>
    </div>

    <!--Footer-->
    <footer id="footer">
      This web application released by <a name="ha" href="https://www.linkedin.com/in/elmehdi-khalki-49ab76193/">  KHALKI Elmehdi  </a> .
    </footer>
  </body>
  
  <!-- Script JS --> 
  <script type="text/javascript" src="js/script.js"></script>
  <!-- Style JS --> 
  <script type="text/javascript" src="stylesJS/style.js"></script>
  <!-- Animation JS --> 
  <script type="text/javascript" src="stylesJS/animation.js"></script>

</html>
 