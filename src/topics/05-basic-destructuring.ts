interface DetailSong {
    author: string,
    year: number    
}

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: DetailSong;
}


const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheran',
        year: 2015
    }
}

// DESTRUCTURACION (AudioPlayer)
const {song, songDuration, details} = audioPlayer;

// DESTRUCTURACION (DetailSong)
const {author} = details;

//console.log('Song: ', audioPlayer.song);
console.log('Song: ', song)

console.log('Duration: ', songDuration);
console.log('Author: ', author);



export {};