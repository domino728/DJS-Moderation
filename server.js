const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`<title>Status-checker Bot</title><b><size=50><i>by Domino#1111</i></size></b><br><br><i><color=green>Server.js is ready!</color></i><br><br>Click on the button below to join the support server<br><a type="button" href="https://discord.gg/hpX3k2XYGg"><button>Support</button></a><footer><br><b>Do not remove the credits or the developer name on this! If you do please credit me</b></footer>`)
})
 
function host() {
  server.listen(3000, () => { 
    console.log('Server loading...')
  ;});
}
 
module.exports = host;