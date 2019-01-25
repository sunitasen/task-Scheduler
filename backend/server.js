const express = require('express')
const app = express()
var cors = require('cors')
var bodyparser = require('body-parser')

app.use(cors());
app.use(bodyparser.json());

const database = {
    users: [{
        created:new Date(),
        topic: "",
        type: "",
        done:0
    }]
}

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./company"
    }
  });

app.get('/' , (req,res) => {
    res.send('Hello babes');
})

app.post('/add' , (req,res) => {
    knex('users').insert({
        created: req.body.created,
        topic: req.body.topic,
        type: req.body.typed,
        done: req.body.done     
    }).then((result)=>{
        res.send(result);

    })

})

app.get('/show' , (req,res)=>{
    knex.select('*').from('users')
    .then((result)=>{
        res.send(result);
        //res.json({data: result})
    })    
    // knex('users').where({
    //                 type: "professional"
    //             }).select('topic','done')
    // .then((error,result,fields)=>{
    //     if(error) throw error;
    //     res.send(JSON.stringify(result));
    //     console.log(JSON.stringify(result))
    // })
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))
