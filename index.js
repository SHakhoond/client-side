var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites/25544', function(err, data) {
  if (err) console.log(err) // do something

  data = JSON.parse(data.body)
  console.log(data.velocity)
  document.body.innerHTML = greeting({ name: data.velocity });
})
