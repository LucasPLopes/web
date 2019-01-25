cidade = 'Brasilia'

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+cidade+"&lang=pt&units=metric&APPID=b032a8a220dfe524322ad21cd83540c4",function(data){

    console.log(data);
    var icone = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
    console.log(icone);
    $('.icone').attr('src',icone);

    var temperatura = Math.floor(data.main.temp )+ '°C';
    var clima = data.weather[0].main;
    clima = traduz(clima);

    $('.clima').append(clima);
    $('.temperatura').append(temperatura);


});

traduz = (clima)=>{
    var estado;
    switch(clima){
        
        case 'Clouds':
            estado ="Nublado";
            break;
        case 'Clear':
            estado ='Ensolarado';
            break;
        case 'Atmosphere':
            estado ='Atmosférico';
            break;
        case 'Snow':
            estado ='Neve';
            break;
        case 'Rain':
            estado ='Chuva';
            break;
        case 'Drizzle':
            estado ='Chuvisco';
            break;
        case 'Thunderstorm':
            estado ='Tempestade';
            break;
        default: estado= 'indefinido';
    }

    return estado;
}
