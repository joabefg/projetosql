let musicas = [
    {   id: 1, 
        url: 'https://i.scdn.co/image/ab67616d0000b27363c7f6e727b12ac8e7ce2bfb',
        genero: 'Trap',
        ano: '2025',
        artista: 'Veigh',
        nome: 'Mônaco freestyle'
    },
    {   id: 2, 
        url: 'https://i.scdn.co/image/ab67616d0000b2733e6bce714609d16a8ef308cd',
        genero: 'Trap',
        ano: '2023',
        artista: 'Veigh',
        nome: 'Opções'
    },
    {   id: 3, 
        url: 'https://i.scdn.co/image/ab67616d0000b27385889b9e026c0c175d73c381',
        genero: 'Rap',
        ano: '2025',
        artista: 'Veigh',
        nome: 'Artista Genérico'
    },
    {   id: 4, 
        url: 'https://thumb.wikimedia.org/wikipedia/en/thumb/3/3a/Superunknown.jpg/250px-Superunknown.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
        genero: 'Progressivo',
        ano: '1995',
        artista: 'Soundgarden',
        nome: 'Black Hole Sun'
    },
    {   id: 5, 
        url: 'https://upload.wikimedia.org/wikipedia/en/3/36/Stonetemplepilotspurple.jpeg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
        genero: 'Alternativo',
        ano: '1993',
        artista: 'Stone Temple Pilots',
        nome: 'Interstate Love Song'
    }
]

// MAP: mapeia os gêneros das músicas para uma lista
generos = musicas.map( musica => musica.genero)
// DOM: obtém um pedaço do HTML usando o ID
const playlistHTML = 
        document.getElementById("playlist");
mostrarPlaylist(musicas)
// Pesquisar
const inputHTML = document.getElementById("pesquisa")
inputHTML.addEventListener("input", () => {
    playlistHTML.innerHTML = "";
    const texto = inputHTML.value.toLowerCase();
    busca = musicas.filter(musica => 
        musica.nome.toLowerCase().includes(texto)
    )
    mostrarPlaylist(busca)
})

function mostrarPlaylist(musicas) {
    // FOREACH: faz algo para cada item de uma lista
    musicas.forEach((musica)=>{
        playlistHTML.innerHTML += `
        <div class="list-group-item list-group-item-action d-flex" onclick="tocarMusica(
                '${musica.nome}',
                '${musica.artista}',
                '${musica.url}'
            )">
            <img src="${musica.url}" class="me-3 rounded" width="60" height="60" />
            <div>
                <div class="fw-bold">${musica.nome}</div>
                <div class="text-muted">${musica.artista}</div>
            </div>
        </div>
        `
    } ) 
}
img_pause = "https://static.vecteezy.com/system/resources/previews/007/126/491/non_2x/music-play-button-icon-vector.jpg"
img_play = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCnKp_mvhAoiXS6HuNT5-HBoYwoKDTzdr7opH5Z7loSaJdPy7TQAEVGmhi&s=10"

function tocarMusica(titulo, artista,link) {
    const playyerHTML = document.getElementById("player")
    playyerHTML.innerHTML = `
    <div class="d-flex align-items-center"> <img id="play" 
            src="${img_pause}"
            width="50" height="50" onclick="play()">
        <img src="${link}" class="me-3 rounded"
        width="55" height="55">
            <div> 
                <div class="fw-bold">${titulo}</div>
                <div class="text-muted">${artista}</div> 
    </div>`
}

function play() {
    is_playing = true;
    if (is_playing == true) {
        img_play = document.getElementById("play")
        img_play.src = img_play;
        is_playing = false;
    }
}