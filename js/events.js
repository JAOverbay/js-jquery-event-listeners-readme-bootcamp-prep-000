function getIt() {
  $('p').on("click", function() {
    alert("Hey");
    return;
  });
}

function frameIt() {
  $('img').on("load", function() {
   $('img').addClass('tasty');
  });
  return;
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}

function pressIt() {
  
}

$(document).ready(function(){



});
