import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(express.json());


dotenv.config();

async function connectMongoDB() {
  const conn = await mongoose.connect(process.env.MONGODB_URL);
  if (conn) {
    console.log("Connected to MongoDB");
  }
}
connectMongoDB();

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
  res.render('index')
})

app.post('/shortUrls',(req,res)=>{

})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The server is Running on Port ${PORT} 🚀`);
});