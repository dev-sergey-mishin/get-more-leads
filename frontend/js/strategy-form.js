var Inputmask = require('inputmask');
var Submit = require('./submit');

(function() {
    var strategyName = '';
    $(document).ready(function(){
        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        function modalHandler($container, $actor) {
            $actor.click(function() {
                $container.removeClass('hide');
                $('#strategyName').text($(this).data('name'));
                strategyName = $(this).data('name');
            });
            $container.find('.cb-modal-layer').click(function() {
                $container.addClass('hide');
            });
            $container.find('.close').click(function() {
                $container.addClass('hide');
            });
        }

        modalHandler($('#strategy-modal'), $('.tariff-container').find('.btn'));

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

                Submit.submit($submit, $name.val(), $phone.val(), $email.val(), { form: 'Заказ стратегии ' + strategyName });
            }
        });
    })
})();