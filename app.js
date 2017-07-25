const express =  require('express');
const mustacheExpress =require('mustache-express')
const data = require ('./data.js');
const app =  express();
app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function(request, response){
  response.render('robots', data)
});

app.get('/:username', function(request, response){
  let robot = data.users.find(function(member){
    return member.username.toLowerCase() === request.params.username.toLowerCase();
  })
  response.render('roboProfile', robot)});




app.listen(3000, function(){
  console.log('Example app listening on port 3000!')
});
