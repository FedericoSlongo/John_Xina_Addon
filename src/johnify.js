const INTERVAL_KEY = "INTERVAL_KEY";
// default to 1s refresh window
const DEFAULT_INTERVAL = "1000";

const Johns = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.FJvFL_ORQufuN0OP4GqgmAAAAA%26pid%3DApi&f=1&ipt=04c155a593b7b8ea1c6cdd08ff1c7c2607913fb5847b98b58a7dcc897561804f&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.pIBi5Ypyo1AILSfghcOw9QHaEK%26pid%3DApi&f=1&ipt=6fb630c2824e398c3250476ec54a493973c42e9c61e5ee2a021db115fead13ef&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.mOPkOWoyiuLk6dtiiqOaegHaHa%26pid%3DApi&f=1&ipt=e1b053d9bb4c65d5761b5727b6a80feeea6044473918ad0714d23198d8f0c6d0&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.rJMgoIQDDSAYBRU7Kfd6LAHaEK%26pid%3DApi&f=1&ipt=14c520e965725878bc2cf3998753df5d6511f4dcb5b9cedd39fceabbc948ff7c&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ctirR2R6HDQMnXmV3dxFNAHaHa%26pid%3DApi&f=1&ipt=f2ca6df7cd49f0493a4d3c7a580a44efc917577d023dc69d78b5a42c75f4571d&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.UgeR9TwkoxoePAxDjLNuLQHaHa%26pid%3DApi&f=1&ipt=141f8d6003a31d43751693058089da76179c350faed2e289f83238a7fbb3d028&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6pwnCIxCnwDqKW_NgCtn2QHaEK%26pid%3DApi&f=1&ipt=50ac0a8b34b259579951c07eb4d846707659dd2e583bfeb51ce4a66ee46cde2e&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.4aSTcg5ZhsRem-msjTzcJAHaHa%26pid%3DApi&f=1&ipt=73466e463f769e86f031ade908137528b9db40d173a6c799d39fbc545b2ae6c7&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.EXR4tWYkGvG-WO0Nsc9hzgHaGF%26pid%3DApi&f=1&ipt=3d2682eef0b8b081e388ec1a26d370453011df4b5f6c5cfe466e4e17fe052a88&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5lCjA1ZC5zD2d2dI0kAfSwHaD4%26pid%3DApi&f=1&ipt=11bf819505bf010346479743739ae0aa6836cfa51ffd9ae00aef7b3b704bf81c&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.RIzxQUJ-zZTYQLlgEEtMawHaGS%26pid%3DApi&f=1&ipt=76ae69e07eeccaa8d675665a64c7eaa60fd38494bb1bf3dbb2dd0962b40928ef&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F002%2F219%2F148%2Fac8.png&f=1&nofb=1&ipt=e37a052f0c70314057b09aae717af9579b569b47c35cf110a9200630dbe8fb2e&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.aaF4pvABG71VpRQDul1rGQHaJP%26pid%3DApi&f=1&ipt=24e1d6bf173129d460aa942d8bb67ca35f83f764934773cf63a9128b0b41b0d5&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.KAfHm6zH_IAQ1baaC8UM9gHaHa%26pid%3DApi&f=1&ipt=e6bb30cfeda27eb515de1bbd674eb0afdb4ab4f7fe75c30dafa3b6c8ad9a62b7&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2XMAHwD9hSJQW76gyu29qQHaLD%26pid%3DApi&f=1&ipt=f9bb02f11d93af6b76de3fefe05d62eef00116446a1924ba62324ccdd7f9bd2a&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ny1FQGxkl7PuCeKScsdvjwHaEK%26pid%3DApi&f=1&ipt=a8e5450845ab335a26c4f2ea5907ae7fc0cf3efcf6c16cb60057b25a677ac90e&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.h2qpbq2TdfwXca4qbPNzzAHaEK%26pid%3DApi&f=1&ipt=7efb7636a23e50541c30a7afb2ca24434f5d8c3862497ec62bd3b250ee596120&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kqD8eYjZXREIf9--BqDi-AAAAA%26pid%3DApi&f=1&ipt=2cc6d8ccd7efa55c06e3218102c1fbfb326c2c822f5a7bbf7da6cd8832656736&ipo=images",
    "https://i.etsystatic.com/14951240/r/il/6b7a35/3536263578/il_794xN.3536263578_8ry6.jpg",
    "https://i.seadn.io/gae/6s2_DP28MQuoFsI_fuq6s8rTF7T5uxJ22sO7gG-2dUMJtx-BMDZT5XnQC7OY_rG98CBrfszJ9YkSv6H2zRidm2PmoUAk7PllqLoL3g",
    "https://i.seadn.io/gae/fNWA4hKm_UeeKWGFz2nBw1tVahbLNvr3BKKbP7bIzAwMfvSGsd0-pZ3xc0P3gAgwfEaX0Xe9O-R7G3XxP80rexIirMMRmhvlc5xjfA",
    "https://media.tenor.com/pTjE0eLJmEYAAAAd/john-xina.gif",
    "https://media.tenor.com/-olKpbFHbNEAAAAd/cena.gif",
    "https://i.kym-cdn.com/entries/icons/mobile/000/038/514/johnxinaheader.jpg"
]

function getJohn() {
    let johnsNum = Math.floor(Math.random()*Johns.length);
    return Johns[johnsNum];
}

function replaceImages() {
    for(let i = 0; i < document.images.length; ++i) {
        let img = document.images[i];

        if(img.classList.contains('Johns')){
            continue;
        }
        img.classList.add('Johns');

        // attempt to retain the original dimensions
        img.style.width = img.width + 'px';
        img.style.height = img.height + 'px';

        // john-em
        let loc = getJohn()
        img.src = loc;
        if(img.srcset){
            img.srcset = loc;
        }
    };
}

// setup defaults
function get_interval_or_default(item) {
    if (!item || item === {} || !(INTERVAL_KEY in item)) {
        browser.storage.local.set({
            INTERVAL_KEY: DEFAULT_INTERVAL
        });
        return DEFAULT_INTERVAL;
    } else {
        return item[INTERVAL_KEY];
    }
}

// start up the extension
browser.storage.local.get().then(
    (item) => {
        let interval = get_interval_or_default(item);
        window.setInterval(replaceImages, interval);
    },
    (_) => {
        window.setInterval(replaceImages, DEFAULT_INTERVAL);
    }
);
