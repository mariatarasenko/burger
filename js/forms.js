var submitForm = function(e) {
    e.preventDefault();

    var form = $(e.target),
        data = form.serialize(),
        url = form.attr('action');  //файл пхп к которому мы обращаемся

    var request = $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

    request.done(function(msg){
        var mes = msg.mes,
            status = msg.status;
    if (status === 'OK') {
        form.append('<p class="success">' + mes + '</p>');
    } else{
        form.append('<p class="error">' + mes + '</p>');
    }
    });

    request.fail(function(jqXHR, textStatus){
        alert('Request failed :'+ textStatus);
    });
};

$('#order_form').on('submit', submitForm); //вызываем функцию на нажатие сабмит
