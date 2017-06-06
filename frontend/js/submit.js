module.exports.submit = function (button, name, phone, email, data){
    var text = 'обработка запроса';
    var point = '.  ';
    button.text(text + point).prop('disabled', true);
    setInterval(function() {
        if (point.indexOf(' ') === -1) {
            point = '   ';
        }
        point = point.replace(' ', '.');
        button.text(text + point).prop('disabled', true).addClass('progress');
    }, 500);

    emailjs.init("user_XhnfRmcG2yfBxRi6TzVYx");
    emailjs.send("gmail","getmoreleads",{
            name: name,
            phone: phone,
            email: email,

            form: data.form,
            brand: data.brand,
            site: data.site,
            region: data.region,
            budget: data.budget,

            urlParams: window.location.search
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                window.location.pathname = '/thankyoupage.html'
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
};