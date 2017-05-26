var Inputmask = require('inputmask');

(function() {
    $(document).ready(function(){
        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        var selector = document.getElementById("strategy-phone");
        var im = new Inputmask("+7 (999) 999-99-99");
        im.mask(selector);

        var $modal = $('#strategy-modal');
        var $submit = $modal.find('#strategy-submit');
        // checkbox
        $('#strategy-accept').click(function(e) {
            $submit.attr('disabled', !document.getElementById('strategy-accept').checked);
        });

        $submit.click(function() {
            var $name = $modal.find('#strategy-name');
            var $phone = $modal.find('#strategy-phone');
            var $email = $modal.find('#strategy-mail');
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

                $modal.addClass('hide');
                var $newModal = $('#conversion-modal');
                $newModal.removeClass('hide');
                $newModal.find('.close').click(function() {
                    $newModal.addClass('hide');
                });
                $newModal.find('.cb-modal-layer').click(function() {
                    $newModal.addClass('hide');
                });
            }
        });
    })
})();