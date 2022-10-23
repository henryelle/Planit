function createPlanit() {
    let div = document.getElementById("rSide");
    let planet = document.getElementById("select-planit").value
    let imgPath = "../images/planets/" + planet.toLowerCase() + ".svg";
    // $('#rSide').append('<div class="col"><img class="planit col" src = '+ imgPath +' /></div>');
    var name = $('#nameInput').val();
    $('#rSide').append('<img class="planit" src = '+ imgPath +' /><p>' + name + '</p>');
}