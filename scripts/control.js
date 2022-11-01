function toggleAddMenu() {
    var form = document.getElementById("task-form");
    console.log(form.style.display)
    if(form.style.display == "" || form.style.display == "none") {
      form.style.display = "block";
      return;
    }
    if(form.style.display == "block") {
      form.style.display = "none";
      return;
    }
  }

$(document).ready(function(){
  $('.all-date ul li').click(function(e){
  $('.all-date ul li').css('backgroundColor', '#050113');
  $(e.target).css('backgroundColor', '#AE7CFA');
  $(e.target).css('color','white');
  let day = $(e.target).text();
  let month = months.indexOf($("#month-box").text());
   });
});
