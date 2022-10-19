function createPlanit() {
    let div = document.getElementById("rSide");
    // TODO APPEND THE IMGPATH WITH USER SELECTED PLANET
    let imgPath = "'../images/planet.svg'";
    // $('#rSide').append('<div class="col"><img class="planit col" src = '+ imgPath +' /></div>');
    var name = $('#nameInput').val();
    $('#rSide').append('<img class="planit" src = '+ imgPath +' /><p>' + name + '</p>');
}