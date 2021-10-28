import track from "../Assets/track.wav"

// POP IMG
import pop1 from '../Assets/music/pop/cover_01.jpg'
import pop2 from '../Assets/music/pop/cover_02.jpg'
import pop3 from '../Assets/music/pop/cover_03.jpg'
import pop4 from '../Assets/music/pop/cover_04.jpg'

// POP MUSIC
import pop1_mus from '../Assets/music/pop/pop1.mp3'
import pop2_mus from '../Assets/music/pop/pop2.mp3'
import pop3_mus from '../Assets/music/pop/pop3.mp3'
import pop4_mus from '../Assets/music/pop/pop4.mp3'

// POP IMG
import pop1_electro from '../Assets/music/electropop/cover_01.jpg'
import pop2_electro from '../Assets/music/electropop/cover_02.jpg'
import pop3_electro from '../Assets/music/electropop/cover_03.jpg'
import pop4_electro from '../Assets/music/electropop/cover_04.jpg'

// POP MUSIC
import pop1_mus_electro from '../Assets/music/electropop/pop1.mp3'
import pop2_mus_electro from '../Assets/music/electropop/pop2.mp3'
import pop3_mus_electro from '../Assets/music/electropop/pop3.mp3'
import pop4_mus_electro from '../Assets/music/electropop/pop4.mp3'

// POP IMG
import pop1_rock from '../Assets/music/poprock/cover_01.jpg'
import pop2_rock from '../Assets/music/poprock/cover_02.jpg'
import pop3_rock from '../Assets/music/poprock/cover_03.jpg'
import pop4_rock from '../Assets/music/poprock/cover_04.jpg'

// POP MUSIC
import pop1_mus_rock from '../Assets/music/poprock/1.mp3'
import pop2_mus_rock from '../Assets/music/poprock/2.mp3'
import pop3_mus_rock from '../Assets/music/poprock/3.mp3'
import pop4_mus_rock from '../Assets/music/poprock/4.mp3'

// POP IMG
import alternative1 from '../Assets/music/alternative/cover_01.jpg'
import alternative3 from '../Assets/music/alternative/cover_03.jpg'

// POP MUSIC
import alternative1_mus from '../Assets/music/alternative/1.mp3'
import alternative2_mus from '../Assets/music/alternative/2.mp3'
import alternative3_mus from '../Assets/music/alternative/3.mp3'
import alternative4_mus from '../Assets/music/alternative/4.mp3'

import hiphop1 from '../Assets/music/hiphop/cover_01.jpg'
import hiphop2 from '../Assets/music/hiphop/cover_02.jpg'
import hiphop3 from '../Assets/music/hiphop/cover_03.jpg'
import hiphop4 from '../Assets/music/hiphop/cover_04.jpg'

// POP MUSIC
import hiphop1_mus from '../Assets/music/hiphop/1.mp3'
import hiphop2_mus from '../Assets/music/hiphop/2.mp3'
import hiphop3_mus from '../Assets/music/hiphop/3.mp3'
import hiphop4_mus from '../Assets/music/hiphop/4.mp3'


// POP IMG
import dance1 from '../Assets/music/dance/cover_01.jpg'
import dance2 from '../Assets/music/dance/cover_02.jpg'
import dance3 from '../Assets/music/dance/cover_03.jpg'
import dance4 from '../Assets/music/dance/cover_04.jpg'

// POP MUSIC
import dance1_mus from '../Assets/music/dance/1.mp3'
import dance2_mus from '../Assets/music/dance/2.mp3'
import dance3_mus from '../Assets/music/dance/3.mp3'
import dance4_mus from '../Assets/music/dance/4.mp3'


// POP IMG
import jazz1 from '../Assets/music/jazz/cover_01.jpg'
import jazz4 from '../Assets/music/jazz/cover_04.jpg'

// POP MUSIC
import jazz1_mus from '../Assets/music/jazz/1.mp3'
import jazz2_mus from '../Assets/music/jazz/2.mp3'
import jazz3_mus from '../Assets/music/jazz/3.mp3'
import jazz4_mus from '../Assets/music/jazz/4.mp3'


// POP IMG
import acoustic1 from '../Assets/music/acoustic/cover_01.jpg'
import acoustic2 from '../Assets/music/acoustic/cover_02.jpg'
import acoustic3 from '../Assets/music/acoustic/cover_03.jpg'
import acoustic4 from '../Assets/music/acoustic/cover_04.jpg'

// POP MUSIC
import acoustic1_mus from '../Assets/music/acoustic/1.mp3'
import acoustic2_mus from '../Assets/music/acoustic/2.mp3'
import acoustic3_mus from '../Assets/music/acoustic/3.mp3'
import acoustic4_mus from '../Assets/music/acoustic/4.mp3'

export const useMusic = () => {
    const music = [
        {
            id: "1",
            title: "Поп",
            music: [
                { 
                    _id: "vcb",
                    image: pop1,
                    name: "Hollywood Story",
                    artist: "MARI MAX",
                    genre: "pop",
                    year_of_release: 2020,
                    src: pop1_mus
                },
                { 
                    _id: "vdfscb",
                    image: pop2,
                    name: "Королева",
                    artist: "LUNCHEE",
                    genre: "pop",
                    year_of_release: 2020,
                    src: pop2_mus
                },
                { 
                    _id: "vfghfcb",
                    image: pop3,
                    name: "I Hate The Moment",
                    artist: "Stefano Cece",
                    genre: "Pop",
                    year_of_release: 2021,
                    src: pop3_mus
                },
                { 
                    _id: "vfghfdfsdfsdfcb",
                    image: pop4,
                    name: "Тай-Дай",
                    artist: "LUNCHEE",
                    genre: "Rock",
                    year_of_release: 2020,
                    src: pop4_mus
                },
            ]
        },
        {
            id: "2",
            title: "Електропоп",
            music: [
                { 
                    _id: "vcb",
                    image: pop1_electro,
                    name: "Зіграй зі мною в любов",
                    artist: "VIDVERTO",
                    genre: "electropop",
                    year_of_release: 2019,
                    src: pop1_mus_electro
                },
                { 
                    _id: "vdfscb",
                    image: pop2_electro,
                    name: "Мені тебе подарували",
                    artist: "KATESELV",
                    genre: "electropop",
                    year_of_release: 2020,
                    src: pop2_mus_electro
                },
                { 
                    _id: "vfghfcb",
                    image: pop3_electro,
                    name: "Серпнева ніч",
                    artist: "VIDVERTO",
                    genre: "Rock",
                    year_of_release: 2019,
                    src: pop3_mus_electro
                },
                { 
                    _id: "vfghfcsdfsdfb",
                    image: pop4_electro,
                    name: "Make Them Feel Love",
                    artist: "KATESELV",
                    genre: "Rock",
                    year_of_release: 2021,
                    src: pop4_mus_electro
                },
            ]
        },
        {
            id: "3",
            title: "Попрок",
            music: [
                { 
                    _id: "vcb",
                    image: pop1_rock,
                    name: "Навколо світу",
                    artist: "VIDVERTO",
                    genre: "poprock",
                    year_of_release: 2019,
                    src: pop1_mus_rock
                },
                { 
                    _id: "vdfscb",
                    image: pop2_rock,
                    name: "Третій день",
                    artist: "Фranko'",
                    genre: "poprock",
                    year_of_release: 2021,
                    src: pop2_mus_rock
                },
                { 
                    _id: "vfghfcb",
                    image: pop3_rock,
                    name: "Лола",
                    artist: "VIDVERTO",
                    genre: "poprock",
                    year_of_release: 2019,
                    src: pop3_mus_rock
                },
                { 
                    _id: "vfghffghdfgjcb",
                    image: pop4_rock,
                    name: "Мані",
                    artist: "Universe 21",
                    genre: "poprock",
                    year_of_release: 2021,
                    src: pop4_mus_rock
                },
            ]
        },
        {
            id: "4",
            title: "Рок/альтернатива",
            music: [
                { 
                    _id: "vcb",
                    image: alternative1,
                    name: "Стрибай у вир до мене",
                    artist: "VIDLIK",
                    genre: "Rock-Alternative",
                    year_of_release: 2020,
                    src: alternative1_mus
                },
                { 
                    _id: "vdfscb",
                    image: alternative1,
                    name: "Відриваюсь від Землі",
                    artist: "VIDLIK",
                    genre: "Rock-Alternative",
                    year_of_release: 2020,
                    src: alternative2_mus
                },
                { 
                    _id: "vfghfcb",
                    image: alternative3,
                    name: "Cruise Cntrl",
                    artist: "SQ.well",
                    genre: "Rock-Alternative",
                    year_of_release: 2021,
                    src: alternative3_mus
                },
                { 
                    _id: "vfdfgdfgghfcb",
                    image: alternative1,
                    name: "Ми тримаємось разом",
                    artist: "VIDLIK",
                    genre: "Rock-Alternative",
                    year_of_release: 2019,
                    src: alternative4_mus
                },
            ]
        },
        {
            id: "5",
            title: "Хіп-хоп/реп",
            music: [
                { 
                    _id: "vcb",
                    image: hiphop1,
                    name: "IN MY CAR",
                    artist: "DANIM",
                    genre: "Hip-Hop & Rap",
                    year_of_release: 2020,
                    src: hiphop1_mus
                },
                { 
                    _id: "vdfscb",
                    image: hiphop2,
                    name: "Sehnsuht",
                    artist: "Rammstein",
                    genre: "Hip-Hop & Rap",
                    year_of_release: 2020,
                    src: hiphop2_mus
                },
                { 
                    _id: "vfghfcb",
                    image: hiphop3,
                    name: "Sehnsuht",
                    artist: "Rammstein",
                    genre: "Hip-Hop & Rap",
                    year_of_release: 2021,
                    src: hiphop3_mus
                },
                { 
                    _id: "vfghfdgdfhfcb",
                    image: hiphop4,
                    name: "Sehnsuht",
                    artist: "VIDLIK",
                    genre: "Hip-Hop & Rap",
                    year_of_release: 2019,
                    src: hiphop4_mus
                },
            ]
        },
        {
            id: "6",
            title: "Денс",
            music: [
                { 
                    _id: "vcb",
                    image: dance1,
                    name: "Siren Song (Headliners Remix)",
                    artist: "Maruv",
                    genre: "Dance",
                    year_of_release: 2019,
                    src: dance1_mus
                },
                { 
                    _id: "vdfscb",
                    image: dance2,
                    name: "Sexy Back (Headliners Reboot)",
                    artist: "Justin Timberlake",
                    genre: "Dance",
                    year_of_release: 2018,
                    src: dance2_mus
                },
                { 
                    _id: "vfghfcb",
                    image: dance3,
                    name: "#pap (Headliners Remix)",
                    artist: "U_C (UCRAY)",
                    genre: "Dance",
                    year_of_release: 2018,
                    src: dance3_mus
                },
                { 
                    _id: "vfghsdfafgfcb",
                    image: dance4,
                    name: "The Sax",
                    artist: "Billy Garai",
                    genre: "Dance",
                    year_of_release: 2020,
                    src: dance4_mus
                },
            ]
        },
        {
            id: "7",
            title: "Етно та джаз",
            music: [
                { 
                    _id: "vcb",
                    image: jazz1,
                    name: "Песни для нежных рыб",
                    artist: "Немного Нервно",
                    genre: "Jazz & Ethno",
                    year_of_release: 2021,
                    src: jazz1_mus
                },
                { 
                    _id: "vdfscb",
                    image: jazz1,
                    name: "Рагнарек",
                    artist: "Немного Нервно",
                    genre: "Jazz & Ethno",
                    year_of_release: 2021,
                    src: jazz2_mus
                },
                { 
                    _id: "vfghfcb",
                    image: jazz1,
                    name: "Веретено",
                    artist: "Немного Нервно",
                    genre: "Jazz & Ethno",
                    year_of_release: 2021,
                    src: jazz3_mus
                },
                { 
                    _id: "vfghdfgadfgfcb",
                    image: jazz4,
                    name: "Светлей",
                    artist: "Немного Нервно",
                    genre: "Jazz & Ethno",
                    year_of_release: 2019,
                    src: jazz4_mus
                },
            ]
        },
        {
            id: "8",
            title: "Акустика",
            music: [
                { 
                    _id: "vcb",
                    image: acoustic1,
                    name: "Last Goodbye",
                    artist: "Stefano Cece",
                    genre: "Acoustic",
                    year_of_release: 2020,
                    src: acoustic1_mus
                },
                { 
                    _id: "vdfscb",
                    image: acoustic2,
                    name: "Колыбельная для пацифиста",
                    artist: "Немного Нервно",
                    genre: "Acoustic",
                    year_of_release: 2019,
                    src: acoustic2_mus
                },
                { 
                    _id: "vfghfcb",
                    image: acoustic3,
                    name: "Me and My Broken Heart",
                    artist: "OlegAlice",
                    genre: "Acoustic",
                    year_of_release: 2018,
                    src: acoustic3_mus
                },
                { 
                    _id: "vfgdfgdfghfcb",
                    image: acoustic4,
                    name: "Нет ничего, кроме любви",
                    artist: "Немного Нервно",
                    genre: "Acoustic",
                    year_of_release: 2018,
                    src: acoustic4_mus
                },
            ]
        }
    ]
    return music
}