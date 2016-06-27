var xhr = require('xhr')
var newPage = require('./views/greeting.hbs')

var api = 'https://api.wheretheiss.at/v1/satellites/25544/tles'
// console.log(endpoint)

xhr.get(api, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  console.log(JSON.parse(data.body)) // FYI: data.body is a string

  // Replace 'Space' below with the response
  
  document.body.innerHTML = newPage({name: 'Space'})
})
