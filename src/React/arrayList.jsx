//! andle menuButton to go back to previous menu(musicMenu/gameMenu/settingMenu)
import song1 from "../Audio/jaiShreeRam.mp3"
import song3 from "../Audio/dilTodKe.mp3"
import song4 from "../Audio/Naah.mp3"
import song2 from "../Audio/Kordhell.mp3"

export const ArrayList = {
    Menu: [
        {
            parentIndex: 0,
            name: "Cover Flow",
            icon: "https://cdn-icons-png.flaticon.com/512/1544/1544767.png"
        },
        {
            parentIndex: 1,
            name: "Music",
            icon: "https://cdn-icons-png.flaticon.com/512/5907/5907562.png"
        },
        {
            parentIndex: 2,
            name: "Games",
            icon: "https://cdn-icons-png.flaticon.com/512/1068/1068778.png"
        },
        {
            parentIndex: 3,
            name: "Setting",
            icon: "https://cdn-icons-png.flaticon.com/512/747/747914.png"
        },
    ],
    Music: [
        {
            parentIndex: 4,
            name: "Songs",
            icon: "https://cdn-icons-png.flaticon.com/512/5907/5907562.png"
        },
        {
            parentIndex: 5,
            name: "Albums",
            icon: "https://cdn-icons-png.flaticon.com/512/2284/2284824.png"
        },
        {
            parentIndex: 6,
            name: "Artists",
            icon: "https://cdn-icons-png.flaticon.com/512/3604/3604722.png"
        },
        {
            parentIndex: 7,
            name: "Playlists",
            icon: "https://cdn-icons-png.flaticon.com/512/2284/2284784.png "
        }
    ],
    Games: [
        {
            parentIndex: 2,
            name: "SnakeGame",
            icon: "https://cdn-icons-png.flaticon.com/512/7863/7863115.png",
        },
        {
            parentIndex: 2,
            name: "Ping Pong",
            icon: "https://cdn-icons-png.flaticon.com/512/1545/1545719.png"
        },
        {
            parentIndex: 2,
            name: "Car Racing",
            icon: " https://cdn-icons-png.flaticon.com/512/9045/9045643.png"
        },
        {
            parentIndex: 2,
            name: "SkyCombat",
            icon: "https://cdn-icons-png.flaticon.com/512/6728/6728652.png"
        }
    ],
    Setting: [
        {
            parentIndex: 3,
            name: "Wallpaper",
            icon: "https://cdn-icons-png.flaticon.com/512/8979/8979955.png"
        },
        {
            parentIndex: 3,
            name: "Theme",
            icon: "https://cdn-icons-png.flaticon.com/512/3876/3876200.png"
        },
        {
            parentIndex: 3,
            name: "Date Time",
            icon: "https://cdn-icons-png.flaticon.com/512/1388/1388629.png"
        },
        {
            parentIndex: 3,
            name: "Language",
            icon: "https://cdn-icons-png.flaticon.com/512/5739/5739233.png"
        }
    ],
    Songs: [
        {
            parentIndex: 4,
            name: "Jai Shree Ram",
            source: song1,
            duration: 28,
            icon: "https://a10.gaanacdn.com/gn_img/albums/7rVW1aRWk5/VW1aNYVBWk/size_l.webp",
        },
        {
            parentIndex: 4,
            name: "Kordhell",
            source: song2,
            duration: 31,
            icon: "https://i1.sndcdn.com/artworks-iXfwM6UF1SG3qugF-771jaA-t500x500.jpg"
        },
        {
            parentIndex: 4,
            name: "Dil Tod ke",
            source: song3,
            duration: 30,
            icon: "https://c.saavncdn.com/997/Dil-Tod-Ke-Hindi-2020-20200714234001-500x500.jpg"
        },
        {
            parentIndex: 4,
            name: "Naah",
            source: song4,
            duration: 30,
            icon: "https://upload.wikimedia.org/wikipedia/en/8/8a/Naah_Cover_Art.jpeg"
        },
    ],
    Album: [
        {
            parentIndex: 5,
            name: "Hustle 2.0",
            icon: "https://a10.gaanacdn.com/gn_img/albums/0wrb4N3Lg7/rb4qEwXMKL/size_l.jpg"
        },
        {
            parentIndex: 5,
            name: "Filhall",
            icon: "https://m.media-amazon.com/images/M/MV5BZjRmNGYzMjEtMTJmYS00NTA1LWJjODEtYmI0NmQ0ZjRlNWUyXkEyXkFqcGdeQXVyMTI0NzQ5OTky._V1_QL75_UX190_CR0,24,190,190_.jpg"
        },
        {
            parentIndex: 5,
            name: "Rustom",
            icon: "https://i.pinimg.com/236x/f9/1d/7c/f91d7c8fbb86deb944e63459a0d0f23b--bollywood-news-bollywood-actors.jpg"
        },
        {
            parentIndex: 5,
            name: "Naah",
            icon: "https://upload.wikimedia.org/wikipedia/en/8/8a/Naah_Cover_Art.jpeg"
        }
    ],
    Artists: [
        {
            parentIndex: 6,
            name: "Arijit Singh",
            icon: "https://c.saavncdn.com/artists/Arijit_Singh_002_20230323062147_500x500.jpg"
        },
        {
            parentIndex: 6,
            name: "Honey Singh",
            icon: "https://c.saavncdn.com/artists/Yo_Yo_Honey_Singh_002_20221216102650_500x500.jpg"
        },
        {
            parentIndex: 6,
            name: "Badshah",
            icon: "https://c.saavncdn.com/artists/Badshah_005_20230608084021_500x500.jpg"
        },
        {
            parentIndex: 6,
            name: "Diljit Dosanjh",
            icon: "https://c.saavncdn.com/artists/Diljit_Dosanjh_004_20221006184535_500x500.jpg"
        }
    ],
    Playlists: [
        {
            parentIndex: 7,
            name: "Hustle 2.0",
            icon: "https://a10.gaanacdn.com/gn_img/albums/0wrb4N3Lg7/rb4qEwXMKL/size_l.jpg"
        },
        {
            parentIndex: 7,
            name: "Filhall",
            icon: "https://m.media-amazon.com/images/M/MV5BZjRmNGYzMjEtMTJmYS00NTA1LWJjODEtYmI0NmQ0ZjRlNWUyXkEyXkFqcGdeQXVyMTI0NzQ5OTky._V1_QL75_UX190_CR0,24,190,190_.jpg"
        },
        {
            parentIndex: 7,
            name: "Rustom",
            icon: "https://i.pinimg.com/236x/f9/1d/7c/f91d7c8fbb86deb944e63459a0d0f23b--bollywood-news-bollywood-actors.jpg"
        },
        {
            parentIndex: 7,
            name: "Naah",
            icon: "https://upload.wikimedia.org/wikipedia/en/8/8a/Naah_Cover_Art.jpeg"
        }
    ],
}
