const INTERVAL_KEY = "INTERVAL_KEY";
// default to 1s refresh window
const DEFAULT_INTERVAL = "1000";

const Johns = [
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/1637787044_qhpmai_600-1831834756.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/5q5z11-296865547.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/6s2_DP28MQuoFsI_fuq6s8rTF7T5uxJ22sO7gG-2dUMJtx-BMDZT5XnQC7OY_rG98CBrfszJ9YkSv6H2zRidm2PmoUAk7PllqLoL3g.png",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/786437-1197785535.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/ac8-4262919060.png",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/b7ca68ededf42aa7bcb931c5e31c5d60655d0692/images/cena.gif",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/fNWA4hKm_UeeKWGFz2nBw1tVahbLNvr3BKKbP7bIzAwMfvSGsd0-pZ3xc0P3gAgwfEaX0Xe9O-R7G3XxP80rexIirMMRmhvlc5xjfA.png",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/il_794xN.3536263578_8ry6.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/john-xina.gif",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/johnxinaheader.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/maxresdefault-2751980365.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/poster-ee2182e4-3304774835.png",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/th-1984221860.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/th-2458389780.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/th-277741290.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/th-2822789502.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/th-3210009190.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/th-3619740318.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/th-368119660.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/th-3875883494.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/th-3924859826.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/th-416944820.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/th-778043028.jpg",
    "https://raw.githubusercontent.com/FedericoSlongo/John_Xina_Addon/refs/heads/master/images/th-994733204.jpg"
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
