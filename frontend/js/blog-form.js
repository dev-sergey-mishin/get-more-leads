var Submit = require('./submit');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function submit($form, $submit, formName) {
    var $email = $form.find('#blog-form-mail');

    if (!validateEmail($email.val())) {
        $email.addClass('error');
    } else {
        $email.removeClass('error');
        Submit.submit($submit, '', '', $email.val(), { form: formName });
    }
}


var $submit = $('#blog-form-submit');
var $checkbox = $('#blog-form-accept');

$checkbox.click(function() {
    $submit.attr('disabled', !document.getElementById('blog-form-accept').checked);
});
$submit.click(function() {
    submit($('.blog-form'), $(this), 'Подписка с блога');
});

//scroll
$(document).ready(function() {
    var navbar =  $('.left-container');
    var wrapper = $('.blog');

    $(window).scroll(function(){
        var nsc = $(document).scrollTop();
        var bp1 = wrapper.offset().top;
        var bp2 = bp1 + wrapper.outerHeight()-$(window).height();

        if (nsc>bp1) {  navbar.css('position','fixed'); }
        else { navbar.css('position','absolute'); }
        if (nsc>bp2) { navbar.css('top', bp2-nsc); }
        else { navbar.css('top', '0'); }
    });
});