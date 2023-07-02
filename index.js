import express from "express";
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
  res.render('index')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The server is Running on Port ${PORT} 🚀`);
});