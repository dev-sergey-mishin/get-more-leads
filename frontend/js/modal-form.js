var Inputmask = require('inputmask');
var Submit = require('./submit');

function phoneMask(phoneId) {
    var selector = document.getElementById(phoneId);
    var im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function submit($modal, $submit, formName) {
    var $name = $modal.find('#modal-name');
    var $phone = $modal.find('#modal-phone');
    var $email = $modal.find('#modal-mail');
    var nameLength = $name.val().length;
    var phoneLength = $phone.val().replace(/\D/g, '').length;

    if (nameLength === 0 || phoneLength != 11 || !validateEmail($email.val())) {
        $name.addClass(nameLength === 0 ? 'error' : '');
        $phone.addClass(phoneLength < 6 ? 'error' : '');
        $email.addClass(!validateEmail($email.val()) ? 'error' : '');
    } else {
        $name.removeClass('error');
        $phone.removeClass('error');
        $email.removeClass('error');
        Submit.submit($submit, $name.val(), $phone.val(), $email.val(), { form: formName });
    }
}

function openModal(options) {
    var $modal = $('#modal-form');
    var $title = $modal.find('.title');
    var $submit = $modal.find('#modal-submit');
    var $checkbox = $modal.find('#modal-accept');

    $title.text(options.title);
    $submit.text(options.btnText);

    phoneMask('modal-phone');

    $submit.click(function() {
        submit($modal, $submit, options.formName);
    });
    $checkbox.click(function(e) {
        $submit.attr('disabled', !document.getElementById('modal-accept').checked);
    });

    $modal.removeClass('hide');
}
function closeModal() {
    var $modal = $('#modal-form');
    $modal.addClass('hide');
}

window.openModal = openModal;
window.closeModal = closeModal;