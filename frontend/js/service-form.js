var Inputmask = require('inputmask');
(function() {
    $(document).ready(function(){
        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        var selector = document.getElementById("service-phone");
        var im = new Inputmask("+7 (999) 999-99-99");
        im.mask(selector);

        // checkbox
        $('#service-accept').click(function(e) {
            $submit.attr('disabled', !document.getElementById('service-accept').checked);
        });

        var $modal = $('#service-modal');
        var $submit = $modal.find('.btn.red');
        $submit.click(function() {
            var $name = $modal.find('#service-name');
            var $phone = $modal.find('#service-phone');
            var $email = $modal.find('#service-mail');
            var nameLength = $name.val().length;
            var phoneLength = $phone.val().replace(/\D/g, '').length;
            var emailValid = validateEmail($email.val());

            if (nameLength === 0 || phoneLength != 11 || !emailValid) {
                $name.addClass(nameLength === 0 ? 'error' : '');
                $phone.addClass(phoneLength < 6 ? 'error' : '');
                $email.addClass(!emailValid ? 'error' : '');
            } else {
                $name.removeClass('error');
                $phone.removeClass('error');
                $email.removeClass('error');

                $modal.addClass('hide');
                var $newModal = $('#conversion-modal');
                $newModal.removeClass('hide');
                $newModal.find('.close').click(function() {
                    $newModal.addClass('hide');
                });
                $newModal.find('.cb-modal-layer').click(function() {
                    $newModal.addClass('hide');
                });

                Submit.submit($name.val(), $phone.val(), $email.val(), 'Отправка главной формы снизу, бюджет: ' + $range.val());
            }
        });
    })
})();