function getDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById('today').innerHTML = "CURRENT DATE: " + today + " " + time;  
}

setInterval(function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById('today').innerHTML = "CURRENT DATE: " + today + " " + time;
}, 1000);
