const express =require('express')
const app=express()
const port=3001;
const routes= require('./api/endPoints')
const cors= require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: "*",
    
  };
app.use(cors(corsOptions));
app.use('/', routes);
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})