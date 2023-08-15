/* const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected Successfully");
  });
};

module.exports = connectToMongo;
 */


const mongoose=require('mongoose');
const mongoURI="mongodb+srv://rajeshpareekdevo:ZtFXTVFswLyOCwxn@cluster0.olrsf8b.mongodb.net/inotebook";


const connectToMongo=()=>{
    mongoose.connect(mongoURI,{useNewUrlparser:true},{bufferTimeoutMS: 30000}).then((res)=>{
        console.log('Connected to MongoDB');
    }).catch((err)=>{
        console.log(err);
    });

}

module.exports=connectToMongo;