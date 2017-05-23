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

        var $callBackModal = $('#callback-modal');
        $('.call-back').click(function() {
            $callBackModal.removeClass('hide');
        });
        $callBackModal.find('.cb-modal-layer').click(function() {
            $callBackModal.addClass('hide');
        });
        $callBackModal.find('.btn.red').click(function() {
            $(this).removeClass('red').addClass('close').text('Закрыть');
            $callBackModal.find('.info').html('<p>Спасибо за заявку! <br />Наш менеджер свяжется с вами<br /> в ближайшее время.</p>')
            $callBackModal.find('.close').click(function() {
                $callBackModal.addClass('hide');
            });

        });
        $callBackModal.find('.close').click(function() {
            $callBackModal.addClass('hide');
        });


        $('.tariff-container').find('.btn').click(function() {
            var price = $(this).data('val');
            var $range = $('#range');
            $range.val(price);
            $range.trigger('change');
            var destination = $('#form').offset().top;
            $("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            return false;
        });
    })
})();