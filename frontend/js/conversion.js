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

        modalHandler($('#service-modal'), $('.feedback-container .link'));
        modalHandler($('#callback-modal'), $('.call-back'));

        $('.feedback-container .link').click(function() {
            var text = 'Узнать подробнее об услуге  «' + $(this).data('val') + '»';
            $('#service-modal').find('.title').text(text);
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