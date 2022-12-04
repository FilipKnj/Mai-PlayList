let c = console.log.bind(document);
const img = document.querySelector('img');
const name = document.querySelector('.name-div h2');
const artist = document.querySelector('.name-div p');
const lyrics = document.querySelector('.lyrics-div p span');
const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');
const txtEl = document.querySelectorAll('.txt');
const audio = document.querySelector('audio');

let counter = 0;

const songs = [
    {
        name : 'Sebi me privuci',
        artist : 'Surreal',
        lyrics : `Hoću da znam da l' me stvarno voliš.
        I da me nema da l' ćeš brzo da preboliš.
        Ja te volim jer si prelepa, kaže mi da 'oće moja tri deteta.
        Ne znam je l' može da se pretera
        Al' deset dana nismo izašli iz kreveta.`,
        img : 'https://images.genius.com/5cb1c79d161c477f487018567efb3f41.300x300x1.jpg',
        song : 'songs/Privuci.wav'
    },
    {
        name : 'Better',
        artist : 'Khalid',
        lyrics : `Love to see you shine in the night like the diamond you are.`,
        img : 'https://assets.audiomack.com/jesuszavala1921/09c0aa51acd1e9f39b18b361c1d3ba96a4ee482a990b21c18b32c336bb9c258f.jpeg?width=1000&height=1000&max=true',
        song : 'songs/Better.wav'
    },
    {
        name : 'Just The Two Of Us',
        artist : 'Grover Washington Jr.',
        lyrics : `To make those rainbows in my mind
                   When I think of you sometime
                   And I wanna spend some time with you.`,
        img : 'https://i.scdn.co/image/ab67616d00001e02472fbc1d5743c7d3c75b9ec0',
        song : 'songs/Two.wav'
    },
    {
        name : 'Lovefool',
        artist : 'Twocolors',
        lyrics : `Love me, love me
                  Say that you love me`,
        img : 'https://images.genius.com/6cb8e4c4c756003af5bbd0a637b5178f.1000x1000x1.jpg',
        song : 'songs/Lovefool.wav'
    },
    {
        name : 'Marija',
        artist : 'Divlje Jagode',
        lyrics : `Trebam te, Marija
                   Od neba do neba
                   Povedi me, Marija
                   Moja Marija.`,
        img : 'https://i.ytimg.com/vi/4gSgIdJlfDQ/sddefault.jpg',
        song : 'songs/Marija.wav'
    },
    {
        name : 'Put Your Head on My Shoulder',
        artist : 'Paul Anka',
        lyrics : `Put your head on my shoulder
        Whisper in my ear, baby
        Words I want to hear, tell me
        Tell me that you love me too (tell me that you love me too).`,
        img : 'https://i.ytimg.com/vi/kvazBqAlx58/maxresdefault.jpg',
        song : 'songs/Shoulder.wav'
    },
    {
        name : 'Stand by Me',
        artist : 'Ben E. King',
        lyrics : `So darlin', darlin', stand by me
        Oh, stand by me
        Oh, stand
        Stand by me, stand by me`,
        img : 'https://i.scdn.co/image/ab67616d0000b273183e806643d90f9279e83a74',
        song : 'songs/Stand.wav'
    },
    {
        name : 'Stolen Dance',
        artist : 'Milky Chance',
        lyrics : `I want you by my side
        So that I never feel alone again`,
        img : 'https://upload.wikimedia.org/wikipedia/en/e/e7/Milky_Chance_-_Stolen_Dance.jpg',
        song : 'songs/Stolen.wav'
    },
    {
        name : 'Summer Love',
        artist : 'Polar Notes',
        lyrics : `And you will never have to feel alone
                   Summer love
                   I can't get enough
                   You keep spinning round in my head
                   My summer love`,
        img : 'https://geo-media.beatsource.com/image_size/500x500/c/2/f/c2f97d56-095f-4282-a2ec-a41c4394d3ec.jpg',
        song : 'songs/Summer.wav'
    },
    {
        name : 'All I Want For Christmas Is You',
        artist : 'Mariah Carey',
        lyrics : `I don't want a lot for Christmas
                   There is just one thing I need
                   I don't care about the presents underneath the Christmas tree
                   I just want you for my own
                   More than you could ever know
                   Make my wish come true
                   All I want for Christmas is you
                   Yeah`,
        img : 'https://m.media-amazon.com/images/I/81U6o32LuUL._SL1500_.jpg',
        song : 'songs/Christmas.wav'
    }
]
const colors = [
    {
        bck : '#3c181c',
        txt : '#b9405b'
    },
    {
        bck : '#213586',
        txt : '#7086db'
    },
    {
        bck : '#9e619e',
        txt : '#d8bfd8'
    },
    {
        bck : '#b64262',
        txt : '#c96984',
    },
    {
        bck : '#633663',
        txt : '#b77bb7'
    },
    {
        bck : '#6e6259',
        txt : '#a4988e',
    },
    {
        bck : '#f3b4a5',
        txt : '#fad9d1'
    },
    {
        bck : '#b68a99',
        txt : '#ceb1ba'
    },
    {
        bck : '#381f1a',
        txt : '#7a4338'
    },
    {
        bck : '#546a2f',
        txt : '#98b95f'
    }
]

rightArrow.addEventListener('click',() => {
    counter++;
    if(counter === songs.length){
        counter = 0;
    }

    setSong();
    playSong();
    colorChange();
    c(counter)
});

leftArrow.addEventListener('click',() => {
    counter--;
    if(counter === 0){
        counter = songs.length - 1;
    }
    setSong();
    playSong();
    colorChange();
});

const setSong = () => {
    c(counter)
    img.setAttribute('src',`${songs[counter].img}`);
    name.innerText = `${songs[counter].name}`;
    artist.innerText = `${songs[counter].artist}`;
    lyrics.innerText = `${songs[counter].lyrics}`;
    audio.setAttribute('src',`${songs[counter].song}`);
}

const playSong = () => {
    audio.currentTime = 0;
    audio.play();
}

const colorChange = () => {
    txtEl.forEach(el => {
        el.style.color = `${colors[counter].txt}`
    });
    document.querySelector('body').style.background = `${colors[counter].bck}`;
    document.querySelector('.playlist-div').style.boxShadow = `0px 0px 16px 6px ${colors[counter].txt}`;
}