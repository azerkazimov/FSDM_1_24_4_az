// const avtomobilPrototipi = {
//   işə_sal: function () {
//     return `${this.marka} - ${this.model} işə salındı`;
//   },
// };

// const avtomobil = Object.create(avtomobilPrototipi);
// avtomobil.marka = "BMW";
// avtomobil.model = "X5";
// avtomobil.model = "X6";

// console.log(avtomobil.işə_sal());

// function Avtomobil(marka, model, il) {
//   this.marka = marka;
//   this.model = model;
//   this.il = il;
//   this.işə_sal = function () {
//     return `${this.marka} ${this.model} işə salındı`;
//   };
// }

// const avtomobil = new Avtomobil("BMW", "X6", 2023);
// console.log(avtomobil);

// class Avtomobil {
//   constructor(marka, model, il) {
//     this.marka = marka;
//     this.model = model;
//     this.il = il;
//   }

//   işə_sal() {
//     return `${this.marka} ${this.model} işə salındı`;
//   }
// }

// const avtomobil = new Avtomobil("BMW", "X6", 2023);
// console.log(avtomobil);

// class User {
//   constructor(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }

//   say_hi() {
//     return `Welcome ${this.name} ${this.surname}, to our application`;
//   }
// }

// const user1 = new User("Anar", "Aliyev", 33);
// console.log(user1.say_hi());

const hesabat = {
  ad: "İllik Hesabat",
  tarix: "2024",

  // Method sintaksisi (ES6)
  məlumat_al() {
    return `${this.ad} - ${this.tarix}`;
  },

  // Ənənəvi method sintaksisi
  çap_et: function () {
    console.log(this.məlumat_al());
    console.log(this.ad);
  },

  // Arrow function (this context problemi var!)
  səhv_metod: () => {
    // const ad = "Veli" // hec bunuda gormur
    // this.ad = "Veli" //  bunu gorur => "Veli qaytaracag"
    // this burada window/undefined olacaq
    console.log(this.ad); // undefined
  },
};

// hesabat.çap_et();

class UserInfo {
  constructor(ad, tarix) {
    this.ad = ad;
    this.tarix = tarix;
  }

  məlumat_al() {
    return `${this.ad} - ${this.tarix}`;
  }

  // Ənənəvi method sintaksisi
  çap_et() {
    console.log(this.məlumat_al());
  }

  // Arrow function (this context problemi var!)
  səhv_metod() {
    // this burada window/undefined olacaq
    console.log(this.ad); // undefined
  }
}

const user2 = new UserInfo("Anar", 2023);
// user2.səhv_metod();

const istifadəçi = {
  _ad: "",
  _yas: 0,

  // Getter
  get ad() {
    return this._ad.toUpperCase();
  },

  // Setter
  set ad(dəyər) {
    if (dəyər.length < 2) {
      throw new Error("Ad ən azı 2 hərf olmalıdır");
    }
    this._ad = dəyər;
  },

  get yaş() {
    return this.yaş;
  },

  set yaş(dəyər) {
    if (dəyər < 0 || dəyər > 150) {
      throw new Error("Yaş 0-150 arasında olmalıdır");
    }
    this._yas = dəyər;
  },
};

istifadəçi.ad = "Rəşad";
istifadəçi.yaş = 25;
// console.log(`Istifadeci ${istifadəçi.ad}, ${istifadəçi._yas} yasi var`);

const mehsul = {
  ad: "Laptop",
  qiymət: 1500,
  marka: "HP",
  sayHi: "hello",
};

mehsul.yeni = "new one";
mehsul.ad = "pavilion";
delete mehsul.sayHi;
// console.log(mehsul);

// for (let key in mehsul) {
//   console.log(`${key}: ${mehsul[key]}`);
// }

//  Keys
const keys = Object.keys(mehsul);
// console.log(keys);

// keys.map((element) => console.log(`${element}: ${mehsul[element]}`));

// Values
const values = Object.values(mehsul);
// console.log(values);

// values.map((element) => console.log(`${element}`));

// Entries

const entries = Object.entries(mehsul);
// console.log(entries);
// entries.map(([key, value]) => console.log(`${key} - ${value}`));

const obyekt1 = { a: 1, b: 2 };
const obyekt2 = { b: 3, c: 4 };
const obyekt3 = { c: 5, d: 6 };

const birləşmiş = Object.assign({}, obyekt1, obyekt2, obyekt3);

// Freeze
const sabit_obyekt = Object.freeze({
  ad: "JavaScript",
  tip: "Proqramlaşdırma dili",
});

sabit_obyekt.ad = "Python"; // İşləməyəcək
delete sabit_obyekt.ad; // İşləməyəcək
// console.log(sabit_obyekt);

// Mohurleme
const möhürlənmiş = Object.seal({
  ad: "React",
  versiya: "18.0",
});

möhürlənmiş.ad = "Vue"; // İşləyəcək
möhürlənmiş.yeni_sahə = "test"; // İşləməyəcək
delete möhürlənmiş.versiya;

// console.log(möhürlənmiş);

// hasOwnProperty

const obyekt = {
  öz_xüsusiyyət: "dəyər",
};

console.log(obyekt.hasOwnProperty("öz_xüsusiyyət")); // true
console.log("öz_xüsusiyyət" in obyekt); // true
console.log("toString" in obyekt); // true (prototipindən)
console.log(obyekt.hasOwnProperty("toString"));

// Copy object
const orijinal = {
  ad: "Kənan",
  yaş: 35,
  hobbilar: ["oxumaq", "idman"],
};

// Object.assign() ilə
const kopya1 = Object.assign({}, orijinal);

// Spread operator ilə
const kopya2 = { ...orijinal };

// Problem: nested obyektlər hələ də referans paylaşır
kopya1.hobbilar.push("musiqi");
kopya1.email = "mail@mail.com";
// console.log(orijinal);
// console.log(kopya2);
// console.log(kopya1);

//  ==== Derin kopiya =====
const dərin_kopya1 = JSON.parse(JSON.stringify(orijinal));

// Recursive funksiya ilə
function dərinKopya(obyekt) {
  if (obyekt === null || typeof obyekt !== "object") {
    return obyekt;
  }

  if (obyekt instanceof Date) {
    return new Date(obyekt.getTime());
  }

  if (obyekt instanceof Array) {
    return obyekt.map((element) => dərinKopya(element));
  }

  const kopya = {};
  for (let açar in obyekt) {
    if (obyekt.hasOwnProperty(açar)) {
      kopya[açar] = dərinKopya(obyekt[açar]);
    }
  }

  return kopya;
}

const derin_kopya2 = dərinKopya(orijinal);
console.log(derin_kopya2);

// Destrukturizasiya
const istifadəci = {
  ad: "Səbinə",
  yas: 28,
  email: "sebine@gmail.com",
  seher: "Gəncə",
};

const { ad, yas, email, seher, sebnem = "Tovuzlu" } = istifadəci;

console.log(istifadəci);
console.log(ad);
console.log(yas);
console.log(sebnem); // undefined

// Nested Destructure

const şirkət = {
  name: "TechAZ",
  ünvan: {
    şəhər: "Bakı",
    rayon: "Yasamal",
    poçt_kodu: "AZ1000",
  },
  əməkdaşlar: 250,
};

const {
  name,
  ünvan: { şəhər, rayon },
  əməkdaşlar,
} = şirkət;

console.log(name); // TechAZ
console.log(şəhər); // Bakı
console.log(rayon); // Yasamal

// Prototi ve miras

const heyvan = {
  növ: "Məməli",
  səs_çıxar(prop) {
    console.log(prop);
  },
};

const it = Object.create(heyvan);
it.cins = "Golden Retriever";
it.səs_çıxar("hav hav");

console.log(it.növ);

// ===== // ====
function Heyvan(ad) {
  this.ad = ad;
}

Heyvan.prototype.səs_çıxar = function () {
  console.log(`${this.ad} səs çıxarır`);
};

Heyvan.prototype.info = function () {
  return console.log(`Bu ${this.ad} adlı heyvandır`);
};

const pişik = new Heyvan("Mırnav");
// pişik.info();

// Konstruktor funksiyalar

function Şəxs(ad, yaş, peşə) {
  (this.ad = ad), (this.yaş = yaş), (this.peşə = peşə);

  // Metod (hər instance üçün yeni yaradılır - səmərəsiz)
  this.məlumat_ver = () => {
    return console.log(`${this.ad}, ${this.yaş} yaşında, ${this.peşə}`);
  };
}

const sexs1 = new Şəxs("Elnur", 32, "Developer");

console.log(sexs1.məlumat_ver());
