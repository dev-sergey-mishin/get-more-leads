var Inputmask = require('inputmask');
var Submit = require('./submit');

(function() {
    $(document).ready(function(){
        var selector = document.getElementById("form-phone");
        var im = new Inputmask("+7 (999) 999-99-99");
        im.mask(selector);

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


        // range -------------------------------

        function setRangeProgress(that) {
            var val = ($(that).val() - $(that).attr('min')) / ($(that).attr('max') - $(that).attr('min'));
            $(that).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #4185fb), '
                + 'color-stop(' + val + ', rgb(192, 192, 192)) '
                + ')'
            );
        }

        $range.on('change', function(e) {
            var price = e.target.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            $budget.text(price + ' ₽');
            setRangeProgress(this);
        });
        $range.mousedown(function(e) {
            $range.mousemove(function(e) {
                var price = e.target.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
                $budget.text(price + ' ₽');
                setRangeProgress(this);
            });
        });
        $range.on("touchstart",function(e){
            $range.on('touchmove', function(e) {
                var price = e.target.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
                $budget.text(price + ' ₽');
                setRangeProgress(this);
            });
        });

        // checkbox
        $('#accept').click(function(e) {
            $submit.attr('disabled', !document.getElementById('accept').checked);
        });


        $submit.click(function() {

            var $name = $('#form-name');
            var $phone = $('#form-phone');
            var $email = $('#form-mail');

            var phoneVal = $phone.val().replace(/\D/g, '');

            function validateEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }

            if ($name.val().length > 0 && phoneVal.length === 11 && validateEmail($email.val())) {
                $name.removeClass('error');
                $phone.removeClass('error');
                $email.removeClass('error');

                Submit.submit($name.val(), $phone.val(), $email.val(), 'Отправка главной формы снизу, бюджет: ' + $range.val());
            } else {

                var destination = $('#form').offset().top;
                $("html:not(:animated),body:not(:animated)").animate({
                    scrollTop: destination
                }, 0);


                if ($name.val().length === 0) {
                    $name.addClass('error');
                } else {
                    $name.removeClass('error');
                }
                if (phoneVal.length != 11) {
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