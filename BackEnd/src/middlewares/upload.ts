// import multer, { FileFilterCallback } from "multer";
// import path from "path";
// // import { Request } from "express";

// // Configurar almacenamiento con Multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// export const upload = multer({ storage });

//Almacenamiento de archivos
// const storage = multer.diskStorage({
//   destination: (
//     req: Request,
//     file: Express.Multer.File,
//     cb: (error: Error | null, destination: string) => void
//   ) => {
//     cb(null, path.join(__dirname, "../../uploads"));
//   },
//   filename: (
//     req: Request,
//     file: Express.Multer.File,
//     cb: (error: Error | null, filename: string) => void
//   ) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const fileFilter = (
//   req: Request,
//   file: Express.Multer.File,
//   cb: FileFilterCallback
// ) => {
//   if (file.mimetype === "application/pdf") {
//     cb(null, true);
//   } else {
//     cb(new Error("Solo se permiten archivos PDF"));
//   }
// };

// const upload = multer({ storage, fileFilter });

// export default upload;
