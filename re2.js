var xhr = require('xhr')
var newPage = require('./views/res2bundle.hbs')

var data = {
  url: 'https://api.wheretheiss.at/v1/satellites/25544'
}

document.getElementById('clicky').addEventListener('click', myFunction)

// console.log(endpoint)
function myFunction(){
  xhr(data, function (err, data) {
    if (err) {
      console.error(err)
    }

    // In case you're curious
    console.log(JSON.parse(data.body)) // FYI: data.body is a string
    data = JSON.parse(data.body)
    // Replace 'Space' below with the response
    
    document.querySelector("main").innerHTML = newPage(data)
  })
}
