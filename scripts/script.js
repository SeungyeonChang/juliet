$(function () {
    console.log("ready!");
  
    // $("#tv-list").append("<li>New list item</li>");
  
    $.each(myTV, function (index, value) {
      $("#tv-list").append("<li>" + value + "</li>");
    });
  });
  
  //  $("#tv-list").append('<li><a href="#">New list item</a></li>');
  
//   let myTV = ["Python", "Java", "Basic HTML", "C++"];