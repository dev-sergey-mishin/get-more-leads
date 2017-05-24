(function() {
    $(document).ready(function(){
        var $modal = $('#callback-modal');
        var $submit = $modal.find('.btn.red');
        $submit.click(function() {
            var $name = $modal.find('#call-back-name');
            var $phone = $modal.find('#call-back-phone');
            var nameLength = $name.val().length;
            var phoneLength = $phone.val().length;

            if (nameLength === 0 || phoneLength < 6) {
                $name.addClass(nameLength === 0 ? 'error' : '');
                $phone.addClass(phoneLength < 6 ? 'error' : '');
            } else {
                $name.removeClass('error');
                $phone.removeClass('error');
            }

        });
    })
})();