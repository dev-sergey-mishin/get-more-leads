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
        function changePrice(e, that) {
            var priceVal = (Math.round(+e.target.value / 10000) * 10000) + '';
            var price = priceVal.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            $budget.text(price + ' ₽');
            setRangeProgress(that);
        }

        $range.on('change', function(e) {
            changePrice(e, this);
        });
        $range.mousedown(function(e) {
            $range.mousemove(function(e) {
                changePrice(e, this);
            });
        });
        $range.on("touchstart",function(e){
            $range.on('touchmove', function(e) {
                changePrice(e, this);
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

                Submit.submit($submit, $name.val(), $phone.val(), $email.val(), {
                        form: 'Заполните форму и получите коммерческое предложение в течение 3-х дней',
                        brand: $('#form-brand').val(),
                        site: $('#form-site').val(),
                        region: $('#form-region').val(),
                        budget: Math.round(+$range.val() / 1000) * 1000
                    }
                );
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