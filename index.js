const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const app = express();

// اتصال بقاعدة البيانات
mongoose.connect('mongodb+srv://akram:akramakr@cluster0.hwa3hi8.mongodb.net/')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// إعداد EJS كـ view engine
app.set('view engine', 'ejs');

// إعداد body-parser
app.use(express.urlencoded({ extended: true }));

// إعداد الملفات الثابتة
app.use(express.static('public'));

// مسارات التطبيق
const postRoutes = require('./config/routes');
//app.use('/', postRoutes);
app.use( postRoutes);
// بدء الخادم
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// const express= require('express')
// const mongoose=require('mongoose')
// const bodyParser = require('body-parser');
// const routes=require('./config/routes')
// const app=express()
// //const dbURI= 'mongodb+srv://akramakr:akramakr@cluster0.kcezgrk.mongodb.net/'
// const dbURI='mongodb+srv://akram:akramakr@cluster0.hwa3hi8.mongodb.net/'

 
// mongoose.connect(dbURI, {

//   connectTimeoutMS: 30000,  // زيادة المهلة الزمنية إلى 30 ثانية
//   socketTimeoutMS: 45000,   // زيادة المهلة الزمنية للتوصيل إلى 45 ثانية
// })
//   .then(() => console.log('Database connected successfully'))
//   .catch((err) => console.log('Database connection error:', err));

//   app.use(bodyParser.urlencoded({ extended: true }));

// //app.use("/public", express.static("public"))
// app.set("view engine", "ejs")
// app.use(routes);



//     app.listen(1000,()=>{
//       console.log("halooo  1000")
  
//   })

