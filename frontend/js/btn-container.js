(function() {
    $(document).ready(function(){
        $('.btn-container .btn.red').click(function() {
            var $container = $(this).closest('.btn-container');
            if ($container.find('.btn-block-phone').val().length < 6) {
                $container.find('.btn-block-phone').addClass('error');
            } else {
                $container.find('.btn-block-phone').removeClass('error');
                var $modal = $('#conversion-modal');
                $modal.removeClass('hide');
                $modal.find('.cb-modal-layer').click(function() {
                    $modal.addClass('hide');
                });
                $modal.find('.close').click(function() {
                    $modal.addClass('hide');
                });
            }
        });

    })
})();