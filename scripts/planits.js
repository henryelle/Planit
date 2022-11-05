var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

var recordedDays = {};

function createPlanit() {
    document.getElementById("select-planit").style.border = "none"
    document.getElementById("nameInput").style.border = "none"
    let div = document.getElementById("rSide");
    let planet = document.getElementById("select-planit").value
    var name = document.getElementById("nameInput").value
    if(planet.includes("Select")) {
        document.getElementById("select-planit").style.border = "2px solid #DB5D48"
        return;
    }
    if(name.length == 0) {
      document.getElementById("nameInput").style.border = "2px solid #DB5D48"
      return;
    }
    let imgPath = "../images/planets/" + planet.toLowerCase() + ".svg";
    // $('#rSide').append('<div class="col"><img class="planit col" src = '+ imgPath +' /></div>');
    $('#rSide').append('<a href="#" title="'+name+'"><img class="planit" src = '+ imgPath +' /></a>');

    document.getElementById("nameInput").value = '';
}

// TODO add call to php file that adds planit to database
// TODO add call to load user's planits on page load

/* 
HANDLES CALENDAR
*/
// https://w3schoolweb.com/how-to-create-a-calendar-in-html-and-css/
// base code ^
var curDate = new Date().getDate();
var curMonth = new Date().getMonth();
var curYear = new Date().getFullYear();
var startDay = new Date(curYear, curMonth, 1).getDay();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var noofdays = [
  "31",
  "28",
  "31",
  "30",
  "31",
  "30",
  "31",
  "31",
  "30",
  "31",
  "30",
  "31"
];
var prevMonth = noofdays[curMonth - 1];
if (curMonth == 11) {
  prevMonth = noofdays[0];
} else if (curMonth == 0) {
  prevMonth = noofdays[11];
}
var totalDays = noofdays[curMonth];
var counter = 0;
var precounter = prevMonth - (startDay - 1);
var rightbox = 6;
var flag = true;
 
jQuery(".curr-month b").text(months[curMonth]);
for (var i = 0; i < 42; i++) {
  if (i >= startDay) {
    counter++;
    if (counter > totalDays) {
      counter = 1;
      flag = false;
    }
    if (flag == true) {
      jQuery(".all-date ul").append(
        '<li class="monthdate">' + counter + "</li>"
      );
    } else {
      jQuery(".all-date ul").append(
        '<li style="opacity:.8">' + counter + "</li>"
      );
    }
  } else {
    jQuery(".all-date ul").append(
      '<li style="opacity:.8">' + precounter + "</li>"
    );
    precounter++;
  }
 
  if (i == rightbox) {
    jQuery(jQuery(".all-date ul li")[rightbox]).addClass("b-right");
    rightbox = rightbox + 7;
  }
 
  if (i > 34) {
    jQuery(jQuery(".all-date ul li")[i]).addClass("b-bottom");
  }
 
  if (
    jQuery(jQuery(".all-date ul li")[i]).text() == curDate &&
    jQuery(jQuery(".all-date ul li")[i]).css("opacity") == 1
  ) {
    // jQuery(jQuery(".all-date ul li")[i]).css({
    //   "background-color": "#AE7CFA",
    //   color: "#fff"
    // });
  }
}

function pageMonth(direction) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var currentMonth = document.getElementById("month-box").innerHTML;
  var curDate = new Date().getDate();
  var curYear = new Date().getFullYear();

  if(direction == "left") {
    var curMonth = months.indexOf(currentMonth) - 1;
  }

  if(direction == "right") {
    var curMonth = months.indexOf(currentMonth) + 1;
  }

  var startDay = new Date(curYear, curMonth, 1).getDay();


  var noofdays = [
    "31",
    "28",
    "31",
    "30",
    "31",
    "30",
    "31",
    "31",
    "30",
    "31",
    "30",
    "31"
  ];
  var prevMonth = noofdays[curMonth - 1];
  if (curMonth == 11) {
    prevMonth = noofdays[0];
  } else if (curMonth == 0) {
    prevMonth = noofdays[11];
  }
  var totalDays = noofdays[curMonth];
  var counter = 0;
  var precounter = prevMonth - (startDay - 1);
  var rightbox = 6;
  var flag = true;
   
  jQuery(".all-date ul").children().remove();

  jQuery(".curr-month b").text(months[curMonth]);
  for (var i = 0; i < 42; i++) {
    if (i >= startDay) {
      counter++;
      if (counter > totalDays) {
        counter = 1;
        flag = false;
      }
      if (flag == true) {
        jQuery(".all-date ul").append(
          '<li class="monthdate">' + counter + "</li>"
        );
      } else {
        jQuery(".all-date ul").append(
          '<li style="opacity:.8">' + counter + "</li>"
        );
      }
    } else {
      jQuery(".all-date ul").append(
        '<li style="opacity:.8">' + precounter + "</li>"
      );
      precounter++;
    }
   
    if (i == rightbox) {
      jQuery(jQuery(".all-date ul li")[rightbox]).addClass("b-right");
      rightbox = rightbox + 7;
    }
   
    if (i > 34) {
      jQuery(jQuery(".all-date ul li")[i]).addClass("b-bottom");
    }
   
    if (
      jQuery(jQuery(".all-date ul li")[i]).text() == curDate &&
      jQuery(jQuery(".all-date ul li")[i]).css("opacity") == 1
    ) {
      // jQuery(jQuery(".all-date ul li")[i]).css({
      //   "background-color": "#AE7CFA",
      //   color: "#fff"
      // });
    }
  }
}
/*
HANDLES CALENDAR
*/

// https://stackoverflow.com/questions/55622502/change-li-background-color-when-clicked
//TODO RECORD THE DAY IN PHP SEND TO DATABASE APPEND TO DATES LIST
// added 10/25
$(document).ready(function(){
  $('.all-date ul li').click(function(e){
  $(e.target).css('backgroundColor', '#AE7CFA');
  $(e.target).css('color','white');
  let day = $(e.target).text();
  let month = months.indexOf($("#month-box").text());
  // maybe call PHP here and send row insert
   });
});

// HOOO BOY HERE WE GO


// document.querySelectorAll('.planit')
//   .forEach((planit) => {
    
//   });
$(document).ready(function(){
  $("a").click(function() {
    console.log("hi");
});
});

$( "body" ).click(function( event ) {
  $( ".planit" ).html( "Clicked a  " + event.target.attr("title") );
});

$('#rSide').on('click', 'a', function() {
  var planit = ($(this).attr('title'));
  console.log(planit)
});

// var planit = document.getElementsByTagName("a")
// console.log(planit)

// planit.forEach(element => {
//   element.onclick = function () {
//     console.log(planit.getAttribute('title'))
//   }
// });

// function recordDays() {
  

// }
