module.exports.submit = function (button, name, phone, email, data){
    let text = 'обработка запроса';
    let point = '.  ';
    button.text(text + point).prop('disabled', true);
    setInterval(function() {
        if (point.indexOf(' ') === -1) {
            point = '   ';
        }
        point = point.replace(' ', '.');
        button.text(text + point).prop('disabled', true).addClass('progress');
    }, 500);


    let options = {
        name: name,
        phone: phone,
        email: email ? email : '',
        form: data.form,
        brand: data.brand,
        site: data.site,
        region: data.region,
        budget: data.budget,
        urlParams: window.location.search,
        landing: window.location.pathname === '/' ? 'Главный' : window.location.pathname.replace('/', '').replace('/', '')
    };
    let formData = new FormData();

    Object.keys(options).map((optionName) => {
        formData.append(optionName, options[optionName]);
    });

    fetch('/send.php', {
        method: 'post',
        credentials: 'include',
        body: formData
    }).then(
        function (res) {
            yaCounter36370080.reachGoal('SEND_MAIL', options);
            window.location.pathname = '/thankyoupage'
        }
    );
};