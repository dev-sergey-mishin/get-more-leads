(function() {
    $(document).ready(function(){
        var $conversionModal = $('#conversion-modal');
        $('.conversion').click(function() {
            $conversionModal.removeClass('hide');
        });
        $conversionModal.find('.cb-modal-layer').click(function() {
            $conversionModal.addClass('hide');
        });
        $conversionModal.find('.close').click(function() {
            $conversionModal.addClass('hide');
        });


        $('.tariff-container').find('.btn').click(function() {
            var destination = $('#form').offset().top;
            $("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            return false;
        });
    })
})();