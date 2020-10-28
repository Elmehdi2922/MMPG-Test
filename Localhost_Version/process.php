<?php




 
function introduction() 
{
    require 'config.php';
    $city = isset($_GET['city']) ? $_GET['city'] : '';
    $sql = "SELECT * from city where name='".$city."'";
    $result = $conn->query($sql); 
    while(($row = $result->fetch_assoc()) !== null){
        echo  $row["introduction"];
    }
    mysqli_free_result($result);
    mysqli_close($conn);
}

function body()
{
    require 'config.php';
    $city = isset($_GET['city']) ? $_GET['city'] : '';
    $sql = "SELECT * from city where name='".$city."'";
    $result = $conn->query($sql);
    while(($row = $result->fetch_assoc()) !== null){
        echo  $row["details"];
    }
    mysqli_free_result($result);
    mysqli_close($conn);
}


function nbrvisite()
{
    require 'config.php';
    $city = isset($_GET['city']) ? $_GET['city'] : '';
    $sql = "SELECT * from city where name='".$city."'";
    $result = $conn->query($sql);
    while(($row = $result->fetch_assoc()) !== null){
        echo  $row["nombre_visite"];
    }
    mysqli_free_result($result);
    mysqli_close($conn);
}

function visiteIncrementation()
{
    require 'config.php';
    $city = isset($_GET['city']) ? $_GET['city'] : '';
    if($city != '')
    {
        $sql = "UPDATE city set nombre_visite = nombre_visite+1 where name='".$city."'";
        $conn->query($sql); 
        mysqli_close($conn);
    }    
}

?>