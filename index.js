
import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hi', function (req, res) {
  console.log("hi");
  res.send("hi")
})


const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`app is upon running ${port}`);
})

var names = ["mala", "gowsi", "sachin", "bala", "sugan","manisha","abs"]
console.log(`length ${names.length}`);
// ex output 
// employee name are mala, gowsi, sachin, bala and sugan
var template = "employee name are "

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    
    if (i == names.length-1) {
        template = template + " and "+element
    }
    else{
       if(i==0)
       {
        template = template +element
       }
       else{
        template = template + " , "+element
       }
    }
}
console.log(template);

