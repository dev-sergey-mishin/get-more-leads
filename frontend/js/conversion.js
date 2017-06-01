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
        modalHandler($('#policy-modal'), $('.policy-link'));


        $('.feedback-container .link').click(function() {
            var text = 'Узнать подробнее об услуге  «' + $(this).data('val') + '»';
            $('#service-modal').find('.title').text(text);
        });

    })
})();