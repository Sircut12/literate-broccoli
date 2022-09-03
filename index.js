async function r(){
    await fetch("https://theddosgame.com/captcha.php", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:103.0) Gecko/20100101 Firefox/103.0",
            "Accept": "image/avif,image/webp,*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "Alt-Used": "theddosgame.com",
            "Sec-Fetch-Dest": "image",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Site": "same-origin",
            "cookie": 'PHPSESSID=5e28325a8a7af29d478add3df13f8154'
        },
        "referrer": "https://theddosgame.com/attack.php",
        "method": "GET",
        "mode": "cors"
    });
    fetch("https://theddosgame.com/launchattack.php", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:103.0) Gecko/20100101 Firefox/103.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Content-Type": "application/x-www-form-urlencoded",
            "Alt-Used": "theddosgame.com",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-User": "?1",
            "cookie": 'PHPSESSID=5e28325a8a7af29d478add3df13f8154'
        },
        "referrer": "https://theddosgame.com/attack.php",
        "body": "vicip=64.32.54.38&port=433&time=30&captcha_challenge=RPU&launchattack=",
        "method": "POST",
        "mode": "cors"
    }).then(e=>{
        r()
    })
    }
    r()
