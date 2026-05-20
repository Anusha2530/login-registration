<?php

$username = $_GET['username'];

if($username == "admin"){

    echo "Username already exists";

}

else{

    echo "Username available";

}

?>