$(document).ready(function() {
    $('#theme-toggler').click(function() {
      $('#staticBackdrop').toggleClass('light-theme');
      $("#staticBackdropLabel").toggleClass("light-theme");
      $('#modal-content-full').toggleClass('light-theme');
    });
  
    $('#load-repos').click(function() {
        $('#repos-list').css('display', 'block');
      $.ajax({
        url: 'https://api.github.com/users/ClaudiaRojasSoto/repos',
        success: function(repos) {
            let reposList = $('#repos-list');
            reposList.empty();
            repos.forEach(function(repo) {
              reposList.append('<p><a href="' + repo.html_url + '" target="_blank" data-bs-toggle="tooltip" title="¡Clíckame!">' + repo.name + '</a></p>');
            });
            $('[data-bs-toggle="tooltip"]').tooltip();
          },
        error: function() {
          $('#repos-list').append('<p>Se produjo un error al cargar los repositorios.</p>');
        }
      });
    });
  });
  