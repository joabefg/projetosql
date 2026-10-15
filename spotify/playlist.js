const musicas = [
    {id: 1,
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kaVQ9nTGp0E8qWLMfwF39ntAteQw-xd9K5B4BirVIw&s=10',
        banda: 'Brandão',
        nome:'isso é trapp'

    },
    {id: 2,
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSifFgyi5LyWvaUDq4_m2rITGimwdyMarD-2qeSxmOsvA&s=10',
        banda: 'Veigh',
        nome:'Dos Prédios'
    },
    {id: 3,
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGEt1SMNh1mhnb1BRbs0Cff5NvEst5opGDc0RFY9v2Q&s',
        banda: 'Matue',
        nome:'333'
    },
    {id: 4,
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8tsrTuNB84FeBPJGz3Nljtar4ecYV6W6UbTdf2FSOA&s=10',
        banda: 'Alee',
        nome:'CAOS'
    },
    {id: 5,
        url:'https://i.scdn.co/image/ab67616d00001e0295e3393f90c41627a54a567a',
        banda: 'LPT Zlatan',
        nome:'Meu Dinheiro Minhas Regras'
    },
]
const listaMusica =
     document.getElementById('listaMusicas');
musicas.forEach((musica) => {
    const item = document.createElement('button')
    item.className =' list-group-item list-group-item-action d-flex'
    item.innerHTML = `
    <img src="${musica.url}" width="60" height="60"
    class="rounded me-3">
    <div>
        <div class="fw-bold">${musica.nome}</div>
        <div class="text-muted">${musica.banda}</div>
    </div>
    `
    item.addEventListener('click', () => {
        const params = new URLSearchParams({
            url: musica.url,
            banda: musica.banda,
            nome: musica.nome
        });
        window.location.href =
            'index.html?' + params.toString();
    })
    listaMusica.appendChild(item)
})

