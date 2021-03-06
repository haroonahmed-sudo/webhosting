const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const port = process.env.PORT || 5000
const {MONGOURI} = require('./keys')
require('./models/user')

app.use(express.json())
app.use(cors())
app.use(require("./routes/saveUser"))

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Connected')
}).catch(err =>{
    console.log(err)
})


app.listen(port, () => {
    console.log('listening on port ' + port)
})
