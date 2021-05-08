const express = require("express");
const app = express();
const multer = require("multer");

const vision = require("@google-cloud/vision");
// create ulpoad storage
var label = [];
var text = [];
var logoName = [];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("labels-detection");
const uploadImg = multer({ storage: storage }).single("img-to-text");
const uploadLogo = multer({ storage: storage }).single("find-logo");
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("index", { labels: [], text: [], logoName: [] });
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (req.file === undefined) {
      res.send("error");
      //document.getElementsByName('imgtotext').style.backgroundColor ='red';
      // res.redirect('/');
    } else {
      // fs.readFile(`./uploads/${req.file.originalname}`, (err, data) => {
      //     if (err) return console.log('this is you error', err);

      //     worker
      //         .recognize(data, "hin", { tessjs_create_pdf: '1' })
      //         .progress(progress => {
      //             console.log(progress);
      //         })
      //         .then(result => {
      //             // res.send(result.text);
      //             res.redirect('/download');
      //         })
      //         .finally(() => worker.terminate());
      // });
      const client = new vision.ImageAnnotatorClient({
        keyFilename: "./ApiKey.json",
      });

      client
        .labelDetection(`./uploads/${req.file.originalname}`)
        .then((results) => {
          const labels = results[0].labelAnnotations;

          label = labels.map((labels) => labels.description);
          // console.log(label);
          res.render("index", {
            labels: label,
            text: text,
            logoName: logoName,
          });
        })
        .catch((err) => {
          console.error("ERROR:", err);
        });
    }
  });
});

app.post("/converted", (req, res) => {
  uploadImg(req, res, (err) => {
    if (req.file === undefined) {
      res.send("error");
      //document.getElementsByName('imgtotext').style.backgroundColor ='red';
      // res.redirect('/');
    } else {
      // fs.readFile(`./uploads/${req.file.originalname}`, (err, data) => {
      //     if (err) return console.log('this is you error', err);

      //     worker
      //         .recognize(data, "hin", { tessjs_create_pdf: '1' })
      //         .progress(progress => {
      //             console.log(progress);
      //         })
      //         .then(result => {
      //             // res.send(result.text);
      //             res.redirect('/download');
      //         })
      //         .finally(() => worker.terminate());
      // });
      const client = new vision.ImageAnnotatorClient({
        keyFilename: "ApiKey.json",
      });

      client
        .textDetection(`./uploads/${req.file.originalname}`)
        .then((results) => {
          const texts = results[0].textAnnotations;

          if (texts.length > 0) {
            text = texts[0].description;
          } else {
            text = [];
          }

          res.render("index", {
            labels: label,
            text: text,
            logoName: logoName,
          });
        })
        .catch((err) => {
          console.error("ERROR:", err);
        });
    }
  });
});
app.post("/logo-detection", (req, res) => {
  uploadLogo(req, res, (err) => {
    if (req.file === undefined) {
      res.send("error");
      //document.getElementsByName('imgtotext').style.backgroundColor ='red';
      // res.redirect('/');
    } else {
      // fs.readFile(`./uploads/${req.file.originalname}`, (err, data) => {
      //     if (err) return console.log('this is you error', err);

      //     worker
      //         .recognize(data, "hin", { tessjs_create_pdf: '1' })
      //         .progress(progress => {
      //             console.log(progress);
      //         })
      //         .then(result => {
      //             // res.send(result.text);
      //             res.redirect('/download');
      //         })
      //         .finally(() => worker.terminate());
      // });
      const client = new vision.ImageAnnotatorClient({
        keyFilename: "ApiKey.json",
      });

      client
        .logoDetection(`./uploads/${req.file.originalname}`)
        .then((results) => {
          const logos = results[0].logoAnnotations;
          // console.log(logos);
          if (logos.length > 0) {
            logoName = logos[0].description;
            logoName = logos.map((logos) => logos.description);
          } else {
            logoName = [];
          }

          res.render("index", {
            labels: label,
            text: text,
            logoName: logoName,
          });
        })
        .catch((err) => {
          console.error("ERROR:", err);
        });
    }
  });
});

app.get("/download", (req, res) => {
  res.render("index", { labels: label, text: text, logoName: logoName });
});
// create port

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`server runnig on port ${PORT}`));
