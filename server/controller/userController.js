






const multer= require('multer');
const multerConfig = multer.diskStorage ({
    destination: (req, file, cb)=>{
        cb(null,'public/');
       },
    filename: (req, file, cb) =>{
        const ext = file.mimetype.split('/')[1];
    cb(null, `image-${Date.now()}.${ext}`)    }
});
 const isImage= (req, file, cb) =>{
    if(file.mimetype.startsWith('image')){
        cb(null, true);
    }
    else{
        cb(new Error("only Image is allowed"));
    }
 }
const upload= multer({
    storage: multerConfig,
    fileFilter: isImage
});
exports.uploadImage = upload.single('imagePath');

exports.upload = (req, res) =>{
    console.log(req.file);
    res.status(200).json({
     sucess: "Sucess",
    })
}