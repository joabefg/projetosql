
const musicas = [
    {
        id: 1,
        nome: "Call It Fate, Call It Karma",
        banda: "The Strokes",
        genero: "Alternativo",
        ano: 2013,
        capa: "https://media.pitchfork.com/photos/5929ba209d034d5c69bf53ad/master/pass/5b47b0b4.jpg",
        link: "https://open.spotify.com/",
        audio: ""
    },
    {
        id: 2,
        nome: "Smells Like Teen Spirit",
        banda: "Nirvana",
        genero: "Grunge",
        ano: 1991,
        capa: "https://upload.wikimedia.org/wikipedia/pt/b/b7/NirvanaNevermindalbumcover.jpg",
        link: "https://open.spotify.com/",
        audio: ""
    },
    {
        id: 3,
        nome: "Black",
        banda: "Pearl Jam",
        genero: "Grunge",
        ano: 1991,
        capa: "https://upload.wikimedia.org/wikipedia/pt/d/da/Pearl_Jam_-_Ten.jpg",
        link: "https://open.spotify.com/",
        audio: ""
    },
    {
        id: 4,
        nome: "Black Hole Sun",
        banda: "Soundgarden",
        genero: "Alternativo",
        ano: 1994,
        capa: "https://upload.wikimedia.org/wikipedia/en/3/3b/Soundgarden-Superunknown.png",
        link: "https://open.spotify.com/",
        audio: ""
    },
    {
        id: 5,
        nome: "Interstate Love Song",
        banda: "Stone Temple Pilots",
        genero: "Alternativo",
        ano: 1994,
        capa: "https://upload.wikimedia.org/wikipedia/en/3/36/Stonetemplepilotspurple.jpeg",
        link: "https://open.spotify.com/",
        audio: ""
    }
];

const playlist = document.getElementById("playlist");
const pesquisa = document.getElementById("pesquisa");
const audioPlayer = document.getElementById("audioPlayer");
const playerCapa = document.getElementById("playerCapa");
const playerNome = document.getElementById("playerNome");
const playerBanda = document.getElementById("playerBanda");
const btnPlay = document.getElementById("btnPlay");

let musicaAtual = null;

function renderizarMusicas(lista) {
    playlist.innerHTML = "";

    lista.forEach(musica => {
        const item = document.createElement("div");
        item.className = "musica";

        item.innerHTML = `
            <img src="${musica.capa}" alt="Capa do álbum"
                 onerror="this.style.visibility='hidden'">

            <div class="info-musica">
                <strong>${musica.nome}</strong>
                <span>${musica.banda}</span>
                <small>${musica.genero} • ${musica.ano}</small>
            </div>

            <button class="btn-musica" aria-label="Reproduzir">
                ▶
            </button>
        `;

        item.querySelector("button").addEventListener("click", () => {
            selecionarMusica(musica);
        });

        item.querySelector(".info-musica").addEventListener("click", () => {
            selecionarMusica(musica);
        });

        playlist.appendChild(item);
    });

    if (lista.length === 0) {
        playlist.innerHTML = "<p>Nenhuma música encontrada.</p>";
    }
}

function selecionarMusica(musica) {
    musicaAtual = musica;

    playerCapa.src = musica.capa;
    playerNome.textContent = musica.nome;
    playerBanda.textContent = musica.banda;

    if (musica.audio) {
        audioPlayer.src = musica.audio;
        audioPlayer.play()
            .then(() => btnPlay.textContent = "❚❚")
            .catch(() => {
                btnPlay.textContent = "▶";
                alert("Não foi possível reproduzir o áudio.");
            });
    } else {
        audioPlayer.pause();
        audioPlayer.removeAttribute("src");
        audioPlayer.load();
        btnPlay.textContent = "▶";

        if (musica.link) {
            window.open(musica.link, "_blank", "noopener,noreferrer");
        } else {
            alert("Adicione um link para esta música.");
        }
    }
}

btnPlay.addEventListener("click", () => {
    if (!musicaAtual) {
        alert("Escolha uma música primeiro!");
        return;
    }

    if (!musicaAtual.audio) {
        if (musicaAtual.link) {
            window.open(
                musicaAtual.link,
                "_blank",
                "noopener,noreferrer"
            );
        }
        return;
    }

    if (audioPlayer.paused) {
        audioPlayer.play()
            .then(() => btnPlay.textContent = "❚❚")
            .catch(() => alert("Não foi possível reproduzir o áudio."));
    } else {
        audioPlayer.pause();
        btnPlay.textContent = "▶";
    }
});

audioPlayer.addEventListener("ended", () => {
    btnPlay.textContent = "▶";
});

pesquisa.addEventListener("input", () => {
    const termo = pesquisa.value.toLowerCase();

    const filtradas = musicas.filter(musica =>
        musica.nome.toLowerCase().includes(termo) ||
        musica.banda.toLowerCase().includes(termo) ||
        musica.genero.toLowerCase().includes(termo)
    );

    renderizarMusicas(filtradas);
});

renderizarMusicas(musicas);
