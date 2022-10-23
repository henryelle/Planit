function createPlanit() {
    let div = document.getElementById("rSide");
    let planet = document.getElementById("select-planit").value
    let imgPath = "../images/planets/" + planet.toLowerCase() + ".svg";
    // $('#rSide').append('<div class="col"><img class="planit col" src = '+ imgPath +' /></div>');
    var name = document.getElementById("nameInput").value
    $('#rSide').append('<a href="#" title="'+name+'"><img class="planit" src = '+ imgPath +' /></a>');
}

// TODO add call to php file that adds planit to database
// TODO add call to load user's planits on page load