function api(){
fetch('https://api.disneyapi.dev/characters')
    .then(response => response.json())
    .then(data =>  imagem(data));
}
    function imagem(data){
        console.log(data)
}