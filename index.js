$(document).ready(function() {
    $('#theme-toggler').click(function() {
      $('#staticBackdrop').toggleClass('light-theme');
      $("#staticBackdropLabel").toggleClass("light-theme");
      $('#modal-content-full').toggleClass('light-theme');
    });
  });
  