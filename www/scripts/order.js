$(document).ready(function() {

    $('#contactForm').submit(function() {
        var action = 'http://u018.firststart.ru/sendreq.json';
        $("#formSuccessMessageWrap").slideUp(750, function() {
            $('#formSuccessMessageWrap').hide();
            $('#contactSubmitButton').attr('disabled', 'disabled');
            $.post(action, {
                med_name: $('#contactNameField').val(),
                med_tel: $('#contactEmailField').val()
            }, function(data) {
                document.getElementById('formSuccessMessageWrap').innerHTML = data;
                $('#formSuccessMessageWrap').slideDown('slow');
                $('#contactSubmitButton').removeAttr('disabled');
                if (data.match('успешно') != null)
                    $('#contactForm').slideUp('slow');
            });
        });
        return false;
    });
});