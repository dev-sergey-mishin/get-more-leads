(function() {
    $(document).ready(function(){
        function modalHandler($container, $actor) {
            $actor.click(function() {
                $container.removeClass('hide');
            });
            $container.find('.cb-modal-layer').click(function() {
                $container.addClass('hide');
            });
            $container.find('.close').click(function() {
                $container.addClass('hide');
            });
        }

        modalHandler($('#conversion-modal'), $('.conversion'));
        modalHandler($('#conversion-modal'), $('.btn-container .btn.red'));
        modalHandler($('#service-modal'), $('.feedback-container .link'));
        modalHandler($('#callback-modal'), $('.call-back'));

        $('.feedback-container .link').click(function() {
            var text = 'Узнать подробнее об услуге  «' + $(this).data('val') + '»';
            $('#service-modal').find('.title').text(text);
        });

        var $callBackModal = $('#callback-modal');
        $callBackModal.find('.btn.red').click(function() {
            $(this).removeClass('red').addClass('close').text('Закрыть');
            $callBackModal.find('.info').html('<p>Спасибо за заявку! <br />Наш менеджер свяжется с вами<br /> в ближайшее время.</p>')
            $callBackModal.find('.close').click(function() {
                $callBackModal.addClass('hide');
            });
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