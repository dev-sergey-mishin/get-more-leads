var Inputmask = require('inputmask');

(function() {
    $(document).ready(function(){
        var selector = document.getElementById("call-back-phone");
        var im = new Inputmask("+7 (999) 999 99-99");
        im.mask(selector);

        var $modal = $('#callback-modal');
        var $submit = $modal.find('.btn.red');
        $submit.click(function() {
            var $name = $modal.find('#call-back-name');
            var $phone = $modal.find('#call-back-phone');
            var nameLength = $name.val().length;
            var phoneLength = $phone.val().replace(/\D/g, '').length;

            if (nameLength === 0 || phoneLength != 11) {
                $name.addClass(nameLength === 0 ? 'error' : '');
                $phone.addClass(phoneLength < 6 ? 'error' : '');
            } else {
                $name.removeClass('error');
                $phone.removeClass('error');

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