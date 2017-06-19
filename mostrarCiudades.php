<?php
$data = file_get_contents("data-1.json");
$inmuebles = json_decode($data);


foreach($inmuebles as $inmueble){
        $ciudad[] = $inmueble->Ciudad;
                
} 

echo implode('<option>', array_unique($ciudad));

   


?>


