(function() {
    $(document).ready(function(){
        var $slider = $('.slider');
        var $left = $slider.find('.arrow.left');
        var $right = $slider.find('.arrow.right');
        var index = 0;

        function incrementIndex(newVal) {
            var maxVal = $slider.find('.slide').length - 1;
            if (newVal < 0) {
                return maxVal;
            }
            if (newVal > maxVal) {
                return 0
            }
            return newVal;
        }

        $left.click(function() {
            index = incrementIndex(--index);
            $slider.find('.slide').removeClass('active');
            $($slider.find('.slide')[index]).addClass('active');
        });
        $right.click(function() {
            index = incrementIndex(++index);
            $slider.find('.slide').removeClass('active');
            $($slider.find('.slide')[index]).addClass('active');
        });
    })
})();