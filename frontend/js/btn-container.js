var Inputmask = require('inputmask');
var Submit = require('./submit');

(function() {
    $(document).ready(function(){
        var selector = document.getElementsByClassName("btn-block-phone");
        var im = new Inputmask("+7 (999) 999-99-99");
        im.mask(selector);

        $('.btn-container .btn.red').click(function() {
            var $that = $(this);
            var $container = $that.closest('.btn-container');
            var phoneVal = $container.find('.btn-block-phone').val().replace(/\D/g, '');

            if (phoneVal.length != 11) {
                $container.find('.btn-block-phone').addClass('error');
            } else {
                $container.find('.btn-block-phone').removeClass('error');
                Submit.submit($that, '', phoneVal, '', { form: $that.data('form') });
            }
        });
    })
})();