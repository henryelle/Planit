<?php
    session_start():

    if(session_destroy()){
        header(login.php);
    }
    exit;
?>