module.exports.submit = function (name, phone, email, data){
    emailjs.init("user_XhnfRmcG2yfBxRi6TzVYx");
    emailjs.send("gmail","getmoreleads",{
            name: name,
            phone: phone,
            email: email,
            data: data
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                window.location.pathname = '/thankyou.html'
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
};