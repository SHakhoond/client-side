var xhr = require('xhr')
var newPage = require('./views/res2bundle.hbs')

var data = {
  url: '192.168.1.246:3000/v1/teams',
  useXDR: true,
  method: 'GET'
}
// console.log(endpoint)

xhr(data, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  console.log(data) // FYI: data.body is a string

  // Replace 'Space' below with the response
  
  document.body.innerHTML = newPage({teams: 'data'})
})
