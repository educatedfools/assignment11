$(document).ready(function () {
    $.ajax({
        type: 'get',
        url: 'json.js',
        timeout: 10000,
        beforeSend: function () {
            $('#result').html('Loading...');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.alert(textStatus, errorThrown);
        },
        dataType: 'json',
        success: function (response) {
            debugger;
            $('#result').html('');
            $(response).find('teammembers').children().each(function () {
                $("#result").append(
                    $(this).find("name").text() + "<br>" +
                        $(this).find("title").text() + "<br>" +
                        $(this).find("bio").text() + "<br><br>"
		        );
            });
        }
    });
});