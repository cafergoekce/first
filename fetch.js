const axios = require("axios");


axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res=>{console.log("Axios >>>",res.data)})
    .catch(err=>{ console.log(err.data)})

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log("Fetch >>>",json))
