var Inputmask = require('inputmask');
var Submit = require('./submit');

(function() {
    $(document).ready(function(){
        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        var selector = document.getElementById("call-back-phone");
        var im = new Inputmask("+7 (999) 999-99-99");
        im.mask(selector);

        var $modal = $('#callback-modal');
        var $submit = $modal.find('#call-back-submit');
        // checkbox
        $('#call-back-accept').click(function(e) {
            $submit.attr('disabled', !document.getElementById('call-back-accept').checked);
        });
        $submit.click(function() {
            var $name = $modal.find('#call-back-name');
            var $phone = $modal.find('#call-back-phone');
            var $email = $modal.find('#call-back-mail');
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
                $(this).text('обработка запроса...').prop('disabled', true);
                Submit.submit($name.val(), $phone.val(), $email.val(), 'Заказ обратного звонка');
            }
        });
    })
})();