import fetch from 'node-fetch'
import { Client } from 'discord.js-selfbot-v13'
function makeid(length) {
    var result           = '';
    var characters       = '1234567890';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
setInterval(e=>{
fetch("https://discord.com/api/v9/interactions", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "MTAwOTg1MjA0MDIwNzQxNzQyNA.GQ03Ig.7IpJ3TAKeR_SS6W0Mqx_bGh7XtHZrLWYV5bciA",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryJpDckw6CKRR69A14",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"104\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-debug-options": "bugReporterEnabled",
    "x-discord-locale": "en-US",
    "x-super-properties": "eyJvcyI6IkxpbnV4IiwiYnJvd3NlciI6IkNocm9tZSIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1VUyIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwNC4wLjUxMTIuNzkgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjEwNC4wLjUxMTIuNzkiLCJvc192ZXJzaW9uIjoiIiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjE0Mjc1MSwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0="
  },
  "referrer": "https://discord.com/channels/939983774488330272/987040493315702794",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "------WebKitFormBoundaryJpDckw6CKRR69A14\r\nContent-Disposition: form-data; name=\"payload_json\"\r\n\r\n{\"type\":2,\"application_id\":\"982441355924095016\",\"guild_id\":\"939983774488330272\",\"channel_id\":\"987040493315702794\",\"session_id\":\"899695a15cb002a6739f77730ed9227f\",\"data\":{\"version\":\"987045344850350107\",\"id\":\"987045344850350103\",\"guild_id\":\"939983774488330272\",\"name\":\"verify\",\"type\":1,\"options\":[{\"type\":3,\"name\":\"nickroblox\",\"value\":\"sekrez12\"}],\"application_command\":{\"id\":\"987045344850350103\",\"application_id\":\"982441355924095016\",\"version\":\"987045344850350107\",\"default_permission\":true,\"default_member_permissions\":null,\"type\":1,\"name\":\"verify\",\"description\":\"verify\",\"guild_id\":\"939983774488330272\",\"options\":[{\"type\":3,\"name\":\"nickroblox\",\"description\":\"Jaki nick roblox wariacie?\",\"required\":true}]},\"attachments\":[]},\"nonce\":\""+makeid(20)"\"}\r\n------WebKitFormBoundaryJpDckw6CKRR69A14--\r\n",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
}, 1500)
client.login('MTAwOTg1MjA0MDIwNzQxNzQyNA.GQ03Ig.7IpJ3TAKeR_SS6W0Mqx_bGh7XtHZrLWYV5bciA');
