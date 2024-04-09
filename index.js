$(document).ready(function() {
    $('#btn-modal').on('click', function() {
        $('.container').addClass('blur');
    });

    $('.btn-close, .btn-secondary').on('click', function() {
        $('.container').removeClass('blur');
    });
});
