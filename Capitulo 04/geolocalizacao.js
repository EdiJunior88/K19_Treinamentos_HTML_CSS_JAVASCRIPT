//Geolocalização

/* Se o usuário permitir, podemos obter a localização dele através da API de Geolocalização do
HTML5. Essa localização pode ser utilizada para diversos propósitos. Por exemplo, podemos exibir
publicidade relacionada à região onde o usuário está.

O primeiro passo para utilizar essa API, é definir uma função JavaScript para receber a localização
quando ela for obtida. */
function positionCallBack(position){
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude " + position.coords.longitude);
}

//Depois, devemos utilizar a função getCurrentPosition para solicitar a localização do usuário.
navigator.geolocation.getCurrentPosition(positionCallBack);