function api(){
    const perso = document.getElementById('perso').value 
    fetch('https://api.disneyapi.dev/characters/' + perso)
        .then(response => response.json())
        .then(data =>  imagem(data));
    }
        function imagem(data){
            document.getElementById('img').src = data.imageUrl
            console.log(data.imageUrl)
    }