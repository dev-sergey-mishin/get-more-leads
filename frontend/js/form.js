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
    })
})();