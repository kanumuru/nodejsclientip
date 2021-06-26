const express = require('express')
const app = express()
    // Sample web module 
    // var getIP = require('ipware')().get_ip;

const DeviceDetector = require('node-device-detector');
const detector = new DeviceDetector;
var device = require('express-device');


const port = 3000

app.get('/ip', (req, res) => {

    res.send(req.ip)
})


app.get('/deviceinfo', (req, res) => {
    var temp = req.headers['user-agent']
    res.send(temp)
})
app.get('/', (req, res) => {
    console.log(req.device)
    res.send("Hi to " + req.device + " User");
})



app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)
})
app.use(device.capture());