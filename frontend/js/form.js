(function() {
    $(document).ready(function(){
        var $detail = $('.detail');
        var $short = $detail.find('.short');
        var $long = $detail.find('.long');
        var $detailInner = $('.detail-inner');
        var $pup = $('.pup');
        var $range = $('#range');
        var $budget = $('#budget');
        var $switcher = $('.detail-switcher');
        var $submit = $('#form').find('.btn.red');

        function setShort() {
            $long.removeClass('active');
            $short.addClass('active');
            $detailInner.hide();
            $pup.addClass('left');
            $pup.removeClass('right');
        }
        function setLong() {
            $short.removeClass('active');
            $long.addClass('active');
            $detailInner.show();
            $pup.removeClass('left');
            $pup.addClass('right');
        }

        $short.click(function () {
            setShort();
        });
        $long.click(function () {
            setLong();
        });
        $switcher.click(function () {
            if ($short.hasClass('active')) {
                setLong();
            } else {
                setShort();
            }
        });

        $range.on('change', function(e) {
            var price = e.target.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            $budget.text(price + ' ₽');
        });
        $range.mousedown(function(e) {
            $range.mousemove(function(e) {
                var price = e.target.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
                $budget.text(price + ' ₽');
            });
        });

        $submit.click(function() {
            var $modal = $('#conversion-modal');
            var $name = $('#form-name');
            var $phone = $('#form-phone');
            var $email = $('#form-mail');

            function validateEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
            
            if ($name.val().length > 0 && $phone.val().length >= 6 && validateEmail($email.val())) {
                $modal.removeClass('hide');
                $modal.find('.cb-modal-layer').click(function() {
                    $modal.addClass('hide');
                });
                $modal.find('.close').click(function() {
                    $modal.addClass('hide');
                });
                $name.removeClass('error');
                $phone.removeClass('error');
                $email.removeClass('error');
            } else {
                if ($name.val().length === 0) {
                    $name.addClass('error');
                } else {
                    $name.removeClass('error');
                }
                if ($phone.val().length < 6) {
                    $phone.addClass('error');
                } else {
                    $phone.removeClass('error');
                }
                if (!validateEmail($email.val())) {
                    $email.addClass('error');
                } else {
                    $email.removeClass('error');
                }
            }



        });
    })
})();