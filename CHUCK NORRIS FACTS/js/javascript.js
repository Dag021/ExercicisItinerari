$(document).ready(function () {
    $('#leerGetSON').click(function (e) { 
        e.preventDefault();
        $.getJSON("http://api.icndb.com/jokes/random.json",function(data){
            //console.log(data.value);
            $('#chuckFact').html(`${data.value.joke}`);
        });
    });
});