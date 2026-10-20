let musicas = [
    {   id: 1, 
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEELIbwsOW5lfsizHlwwmKxPawgcyc6SsOyWB4Yedgg&s=10',
        genero: 'Blues',
        ano: '1956',
        banda: 'Ray Charles',
        nome: 'I Belive to My Soul'
    },
    {   id: 2, 
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4Ny241jDxdDZPNImqceJUtBzv6wBsNpYSQND-chWxg&s=10',
        genero: 'Rock Alternativo',
        ano: '1989',
        banda: 'Chris Isaak',
        nome: 'Wicked Game'
    },
    {   id: 3, 
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVCHQqpcF48sffq1DBop4FDxHywCOPQHwSrATNUDo9A&s=10',
        genero: 'Pop Rock',
        ano: '2002',
        banda: 'Los Enanitos Verdes',
        nome: 'Francés Limón'
    },
    {   id: 4, 
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEba3il-T2nnWxOvB1_w9hJ0uh8hD1P2vFzM67eeKqA&s=10',
        genero: 'Salsa',
        ano: '1995',
        banda: 'Adalberto Santiago',
        nome: 'La Noche más Linda'
    },
    {   id: 5, 
        url: 'https://m.media-amazon.com/images/I/A1ISz0EW26L._AC_UF1000,1000_QL80_.jpg',
        genero: 'Pop',
        ano: '1957',
        banda: 'Paul Anka',
        nome: 'You Are My Destiny'
    }
]
const playlistHTML = 
    document.getElementById("playlist");

musicas.forEach((musica)=>{
    playlistHTML.innerHTML += `
    <img src = "${musica.url}" width = "60" height = "60"
    <div>
        <div>${musica.nome}</div>
        <div>${musica.banda}</div>
    </div>
    `
} ) 