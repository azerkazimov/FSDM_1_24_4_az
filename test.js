

/*
### Tapşırıq 2: Məhsul Kataloqu Filteri

Məhsullar massivi verilmişdir. Müxtəlif filtrlər tətbiq edin:

jsconst məhsullar = [
  { ad: "Laptop", qiymət: 1200, kateqoriya: "elektronika", mövcuddur: true },
  { ad: "Telefon", qiymət: 800, kateqoriya: "elektronika", mövcuddur: false },
  { ad: "Masa", qiymət: 300, kateqoriya: "mebel", mövcuddur: true },
  { ad: "Kitab", qiymət: 25, kateqoriya: "təhsil", mövcuddur: true },
  { ad: "Kompüter", qiymət: 1500, kateqoriya: "elektronika", mövcuddur: true }
];

*** Tapşırıqlar: ***

1. Yalnız mövcud məhsulları göstər
2. Qiyməti 500-dən az olan məhsulları tap
3. "elektronika" kateqoriyasındakı məhsulları tap
4. Ən bahalı məhsulu tap
5. Kateqoriya üzrə məhsul sayını hesabla (obyekt şəklində)
*/

const məhsullar = [
    { ad: "Laptop", qiymət: 1200, kateqoriya: "elektronika", mövcuddur: true },
    { ad: "Telefon", qiymət: 800, kateqoriya: "elektronika", mövcuddur: false },
    { ad: "Masa", qiymət: 300, kateqoriya: "mebel", mövcuddur: true },
    { ad: "Kitab", qiymət: 25, kateqoriya: "təhsil", mövcuddur: true },
    { ad: "Kompüter", qiymət: 1500, kateqoriya: "elektronika", mövcuddur: true }
    ];

//1
const movcudMehsullar = mehsullar.filter(m => m.mövcuddur);
console.log("Mövcud məhsullar:", movcudMehsullar);
//2

const PriceMin = mehsullar.filter(m => m.qiymət < 500);
console.log("Qiyməti 500-dən az olan məhsullar:", PriceMin);

//3 
const elektron = mehsullar.filter(m => m.kateqoriya === "elektronika");

//4 
const expensive = mehsullar.reduce((max, m) => {
    return m.qiymət > max.qiymət ? m : max;
}, məhsullar[0]);

console.log("Ən bahalı məhsul:", expensive);
//5
const kateqoriyaSay = məhsullar.reduce((acc, m) => {
    acc[m.kateqoriya] = (acc[m.kateqoriya] || 0) + 1;
    return acc;
}, {});
console.log("Kateqoriya üzrə məhsul sayı:", kateqoriyaSay);



/*
### 🎯 Tapşırıq 3: Bank Hesabı Simulyatoru

Bank hesabı obyekti yaradın:

*** Tələblər: ***

hesab_nömrəsi, sahib_ad, balans xüsusiyyətləri
əmanət(məbləğ) metodu - balansa əlavə edir
çıxarış(məbləğ) metodu - balansdan çıxır (kifayət qədər pul varsa)
transfer(digər_hesab, məbləğ) metodu - başqa hesaba pul köçürür
əməliyyat_tarixi məlumatlarını saxlayın
Getter metodla hesab_məlumatı qaytarın
*/

const hesab1 = {
  hesab_nömrəsi: "AZ123456",
  sahib_ad: "Murad Məmmədov",
  balans: 0,
  əməliyyat_tarixi: [],
  əmanət(məbləğ) {
    if (məbləğ > 0) {
      this.balans += məbləğ;
      this.əməliyyat_tarixi.push({ növ: "Əmanət", məbləğ, tarix: new Date() });
    }
  },
  çıxarış(məbləğ) {
    if (məbləğ > 0 && this.balans >= məbləğ) {
      this.balans -= məbləğ;
      this.əməliyyat_tarixi.push({ növ: "Çıxarış", məbləğ, tarix: new Date() });
    }
  },
  transfer(digər_hesab, məbləğ) {
    if (məbləğ > 0 && this.balans >= məbləğ) {
      this.balans -= məbləğ;
      digər_hesab.balans += məbləğ;
      this.əməliyyat_tarixi.push({ növ: "Transfer çıxış", məbləğ, tarix: new Date(), hara: digər_hesab.hesab_nömrəsi });
      digər_hesab.əməliyyat_tarixi.push({ növ: "Transfer giriş", məbləğ, tarix: new Date(), kimdən: this.hesab_nömrəsi });
    }
  },
  get hesab_məlumatı() {
    return {
      hesab_nömrəsi: this.hesab_nömrəsi,
      sahib_ad: this.sahib_ad,
      balans: this.balans,
      əməliyyat_tarixi: this.əməliyyat_tarixi
    };
  }
};

const hesab2 = {
  hesab_nömrəsi: "AZ654321",
  sahib_ad: "Aygün Əliyeva",
  balans: 0,
  əməliyyat_tarixi: [],
  əmanət(məbləğ) {
    if (məbləğ > 0) {
      this.balans += məbləğ;
      this.əməliyyat_tarixi.push({ növ: "Əmanət", məbləğ, tarix: new Date() });
    }
  },
  çıxarış(məbləğ) {
    if (məbləğ > 0 && this.balans >= məbləğ) {
      this.balans -= məbləğ;
      this.əməliyyat_tarixi.push({ növ: "Çıxarış", məbləğ, tarix: new Date() });
    }
  },
  transfer(digər_hesab, məbləğ) {
    if (məbləğ > 0 && this.balans >= məbləğ) {
      this.balans -= məbləğ;
      digər_hesab.balans += məbləğ;
      this.əməliyyat_tarixi.push({ növ: "Transfer çıxış", məbləğ, tarix: new Date(), hara: digər_hesab.hesab_nömrəsi });
      digər_hesab.əməliyyat_tarixi.push({ növ: "Transfer giriş", məbləğ, tarix: new Date(), kimdən: this.hesab_nömrəsi });
    }
  },
  get hesab_məlumatı() {
    return {
      hesab_nömrəsi: this.hesab_nömrəsi,
      sahib_ad: this.sahib_ad,
      balans: this.balans,
      əməliyyat_tarixi: this.əməliyyat_tarixi
    };
  }
};

hesab1.əmanət(1000);
hesab1.çıxarış(200);
hesab1.transfer(hesab2, 300);
console.log(hesab1.hesab_məlumatı);






/*

### 🎯 Tapşırıq 4: Kitab Kitabxanası

Kitabxana idarəetmə sistemi yaradın:

jsconst kitabxana = {
  kitablar: [],
  
  // Bu metodları tamamlayın:
  kitab_əlavə_et(başlıq, müəllif, il, isbn) {
    // Kitab obyekti yaradıb kitablar massivə əlavə et
  },
  
  kitab_axtar(sorğu) {
    // Başlıq və ya müəllif adına görə axtarış
  },
  
  müəllif_üzrə_filter(müəllif) {
    // Müəyyən müəllifin kitablarını tap
  },
  
  il_aralığı_filter(min_il, max_il) {
    // Müəyyən il aralığındakı kitablar
  },
  
  statistika() {
    // Ümumi kitab sayı, ən köhnə və ən yeni kitab ili
  }
};

***Test məlumatları:***

1. "1984", "George Orwell", 1949
2. "Koroğlu", "Xalq yaradıcılığı", 1800
3. "Arşın Mal Alan", "Üzeyir Hacıbəyli", 1913

*/


const kitabxana = {
  kitablar: [],
  
  kitab_əlavə_et(başlıq, müəllif, il, isbn) {
    const yeniKitab = {başlıq, müəllif, il , isbn};
    this.kitablar.push(yeniKitab)
  },
  
  kitab_axtar(sorğu) {
    const lower = sorğu.toLowerCase();
    return this.kitablar.filter(k=>k.başlıq.toLowerCase().includes(lower) || 
  k.müəllif.toLowerCase().includes(lower));
  },
  
  müəllif_üzrə_filter(müəllif) {
    return this.kitablar.filter(k=>k.müəllif === müəllif);
  },
  
  il_aralığı_filter(min_il, max_il) {
    return this.kitablar.filter(k=> k.il>=min_il && k.il<=max_il);
  },
  
  statistika() {
    if(this.kitablar.length===0)return null;
    const iller = this.kitablar.map(k=>k.il);
    return{
      ümumi_say: this.kitablar.length,
      ən_köhnə: Math.min(...illər),
      ən_yeni: Math.max(...illər)
    };
  }
};
kitabxana.kitab_əlavə_et("1984", "George Orwell", 1949, "123456");
kitabxana.kitab_əlavə_et("Koroğlu", "Xalq yaradıcılığı", 1800, "654321");
kitabxana.kitab_əlavə_et("Arşın Mal Alan", "Üzeyir Hacıbəyli", 1913, "789012");

console.log("Axtarış (orwell):", kitabxana.kitab_axtar("orwell"));
console.log("Müəllif üzrə filter:", kitabxana.müəllif_üzrə_filter("George Orwell"));
console.log("İl aralığı filter (1900-1950):", kitabxana.il_aralığı_filter(1900, 1950));
console.log("Statistika:", kitabxana.statistika());




/*
🎯 Tapşırıq 5: Səbət Hesablayıcısı
*** E-commerce səbəti üçün hesablama sistemi: ***

jsconst alış_səbəti = { məhsullar: [ { ad: "Apple iPhone", qiymət: 1000, miqdar: 1, vergi_faizi: 18 }, { ad: "Samsung TV", qiymət: 800, miqdar: 2, vergi_faizi: 18 }, { ad: "Kitab", qiymət: 20, miqdar: 3, vergi_faizi: 0 } ],

// Bu metodları yazın: cəm_qiymət_hesabla() { // Vergisiz ümumi qiymət },

vergi_hesabla() { // Ümumi vergi məbləği },

ümumi_qiymət() { // Vergi daxil ümumi qiymət },

məhsul_əlavə_et(məhsul) { // Yeni məhsul əlavə et və ya mövcudun miqdarını artır },

məhsul_sil(məhsul_adı) { // Məhsulu səbətdən çıxar },

səbət_təmizlə() { // Bütün məhsulları sil } };

*/


const alış_səbəti = { 
  məhsullar: [ 
    { ad: "Apple iPhone", qiymət: 1000, miqdar: 1, vergi_faizi: 18 }, 
    { ad: "Samsung TV", qiymət: 800, miqdar: 2, vergi_faizi: 18 }, 
    { ad: "Kitab", qiymət: 20, miqdar: 3, vergi_faizi: 0 } 
  ],

cəm_qiymət_hesabla() { 
  return this.məhsullar.reduce((cəm,m)=> cəm + m.qiymət * m.miqdar,0);
 },
vergi_hesabla(){
    return this.məhsullar.reduce((cəm,m)=>cəm + (m.qiymət * m.miqdar * m.vergi_faizi) / 100,0);

},
ümumi_qiymət() { 
  return this.cəm_qiymət_hesabla() + this.vergi_hesabla();

 },
məhsul_əlavə_et(məhsul) { 
    const mövcud = this.məhsullar.find(m => m.ad === məhsul.ad);
    if (mövcud) {
      mövcud.miqdar += məhsul.miqdar;
    } else {
      this.məhsullar.push(məhsul);
    }
  },
məhsul_sil(məhsul_adı) { 
    this.məhsullar = this.məhsullar.filter(m => m.ad !== məhsul_adı);
},
səbət_təmizlə() { 
    this.məhsullar = [];
  }

}

console.log("Vergisiz cəm:", alış_səbəti.cəm_qiymət_hesabla());
console.log("Ümumi vergi:", alış_səbəti.vergi_hesabla());
console.log("Ümumi qiymət:", alış_səbəti.ümumi_qiymət());
alış_səbəti.məhsul_əlavə_et({ ad: "Qulaqlıq", qiymət: 50, miqdar: 2, vergi_faizi: 18 });
console.log("Yeni məhsul əlavə olunduqda:", alış_səbəti.məhsullar);
alış_səbəti.məhsul_sil("Kitab");
console.log("Kitab silindikdən sonra:", alış_səbəti.məhsullar);
alış_səbəti.səbət_təmizlə();
console.log("Səbət təmizləndikdən sonra:", alış_səbəti.məhsullar);

/*

### 🎯 Tapşırıq 6: Obyekt Çevirmə və Dəyişdirmə

Verilmiş obyektlərlə müxtəlif əməliyyatlar aparın:

jsconst istifadəçilər = {
  "user1": { ad: "Əli", yaş: 25, şəhər: "Bakı", maaş: 1500 },
  "user2": { ad: "Leyla", yaş: 30, şəhər: "Gəncə", maaş: 1800 },
  "user3": { ad: "Rəşad", yaş: 28, şəhər: "Bakı", maaş: 2000 },
  "user4": { ad: "Nigar", yaş: 35, şəhər: "Sumqayıt", maaş: 2200 }
};


***Tapşırıqlar:***

1. Bütün istifadəçiləri massiv şəklinə çevir
2. Şəhər üzrə qruplaşdır
3. rta maaşı hesabla
4. Ən yüksək maaşlı istifadəçini tap
5. 30 yaşdan kiçik olanları filter et
6. Maaşı 1800-dən çox olanların adlarını array şəklində al
 */

const istifadəçilər = {
  "user1": { ad: "Əli", yaş: 25, şəhər: "Bakı", maaş: 1500 },
  "user2": { ad: "Leyla", yaş: 30, şəhər: "Gəncə", maaş: 1800 },
  "user3": { ad: "Rəşad", yaş: 28, şəhər: "Bakı", maaş: 2000 },
  "user4": { ad: "Nigar", yaş: 35, şəhər: "Sumqayıt", maaş: 2200 }
};

// 1
const istifadəçiMassivi = Object.values(istifadəçilər);
console.log("İstifadəçi massivi:", istifadəçiMassivi);

// 2
const seherQrupla = istifadeciMassiv.reduce((acc, user) => {
  if (!acc[user.şəhər]) acc[user.şəhər] = [];
  acc[user.şəhər].push(user);
  return acc;
}, {});
console.log("Şəhər üzrə qruplaşdır:", seherQrupla);

//3

const ortaMaaş = istifadəçiMassivi.reduce((cəm, user) => cəm + user.maaş, 0) / istifadəçiMassivi.length;
console.log("Orta maaş:", ortaMaaş);

//4
const maxMaaşUser = istifadeciMassiv.reduce((max, user) => user.maaş > max.maaş ? user : max, istifadeciMassiv[0]);
console.log("Ən yüksək maaşlı istifadəçi:", maxMaaşUser);

//5
const otuzdanKicik = istifadeciMassiv.filter(user => user.yaş < 30);
console.log("5. 30 yaşdan kiçik:", otuzdanKicik);

//6
const maaşı1800plusAdlar = istifadeciMassiv.filter(user => user.maaş > 1800).map(user => user.ad);
console.log("6. Maaşı 1800-dən çox olanlar:", maaşı1800plusAdlar);

/*

### 🎯 Tapşırıq 7: Konfiqurasiya İdarəçisi

*** Tətbiq konfiqurasiyası üçün obyekt yaradın: ***

jsconst konfiqurasiya = {
  // Default qiymətlər
  default_settings: {
    dil: "az",
    mövzu: "açıq",
    bildirişlər: true,
    avtomatik_saxlama: 10, // dəqiqə
    font_ölçüsü: 14
  },
  
  user_settings: {},
  
  // Bu metodları tamamlayın:
  ayar_dəyiş(açar, dəyər) {
    // İstifadəçi ayarını dəyiş
  },
  
  ayar_əldə_et(açar) {
    // İstifadəçi ayarı varsa onu, yoxsa default-u qaytar
  },
  
  ayarları_sıfırla() {
    // İstifadəçi ayarlarını təmizlə
  },
  
  bütün_ayarlar() {
    // Default və user ayarlarını birləşdir
  },
  
  ayar_eksport_et() {
    // JSON string şəklində ayarları qaytar
  },
  
  ayar_import_et(json_string) {
    // JSON-dan ayarları yüklə
  }
};
*/

const konfiqurasiya = {
  default_settings: {
    dil: "az",
    mövzu: "açıq",
    bildirişlər: true,
    avtomatik_saxlama: 10, 
    font_ölçüsü: 14
  },
  
  user_settings: {},
  
  ayar_dəyiş(açar, dəyər) {
    this.user_settings[açar] = dəyər;
  },
  
   ayar_əldə_et(açar) {
    return this.user_settings.hasOwnProperty(açar)? this.user_settings[açar]: this.default_settings[açar];
  },
  
  ayarları_sıfırla() {
    this.user_settings = {};
    },
  
  bütün_ayarlar() {
    return { ...this.default_settings, ...this.user_settings };
  },
  
  ayar_eksport_et() {
    return JSON.stringify(this.bütün_ayarlar());
    },
  
  ayar_import_et(json_string) {
    try {
      const obj = JSON.parse(json_string);
      this.user_settings = {};
      for (let açar in obj) {
        if (this.default_settings.hasOwnProperty(açar)) {
          this.user_settings[açar] = obj[açar];
        }
      }
    } catch (e) {
      console.error("JSON formatı səhvdir!");
    }
  
  }
};


konfiqurasiya.ayar_dəyiş("mövzu", "qara");
konfiqurasiya.ayar_dəyiş("font_ölçüsü", 16);
console.log("Mövzu:", konfiqurasiya.ayar_əldə_et("mövzu")); // "qara"
console.log("Bütün ayarlar:", konfiqurasiya.bütün_ayarlar());
const exported = konfiqurasiya.ayar_eksport_et();
console.log("Export:", exported);
konfiqurasiya.ayarları_sıfırla();
console.log("Sıfırlandıqdan sonra:", konfiqurasiya.bütün_ayarlar());
konfiqurasiya.ayar_import_et(exported);
console.log("Importdan sonra:", konfiqurasiya.bütün_ayarlar());


/*
### 🎯 Tapşırıq 8: Mətn Analizi

*** Mətn analiz obyekti yaradın: ***

jsconst mətn_analizçi = {
  mətn: "",
  
  mətn_dəyiş(yeni_mətn) {
    this.mətn = yeni_mətn;
    return this;
  },
  
  // Bu metodları yazın:
  hərf_sayı() {
    // Boşluqsuz hərf sayı
  },
  
  söz_sayı() {
    // Sözlərin sayı
  },
  
  cümlə_sayı() {
    // Cümlələrin sayı (. ! ? ilə bitən)
  },
  
  ən_uzun_söz() {
    // Ən uzun sözü tap
  },
  
  söz_tezliyi() {
    // Hər sözün neçə dəfə təkrarlandığını obyekt şəklində qaytar
  },
  
  ən_çox_istifadə_olunan() {
    // Ən çox istifadə olunan sözü tap
  },
  
  orta_söz_uzunluğu() {
    // Sözlərin orta uzunluğu
  },
  
  statistika() {
    // Bütün nəticələri bir obyektdə təqdim et
  }
};

*** // Test: ***
mətn_analizçi.mətn_dəyiş("Bu mətn analiz ediləcək. Çox maraqlı bir mətndir!")
  .statistika();
*/

const mətn_analizçi = {
  mətn: "",
  
  mətn_dəyiş(yeni_mətn) {
    this.mətn = yeni_mətn;
    return this;
  },
  
  hərf_sayı() {
    return this.mətn.replace(/\s/g, "").length;

    },
  
  söz_sayı() {
    const sözlər = this.mətn.trim().split(/\s+/).filter(Boolean);
    return sözlər.length;

    },
  
  cümlə_sayı() {
    const cümlələr = this.mətn.match(/[^.!?]+[.!?]+/g);
    return cümlələr ? cümlələr.length : 0;    
  },
  
  ən_uzun_söz() {
    // Ən uzun sözü tap
    const sözlər = this.mətn.match(/\b\w+\b/g);
    if (!sözlər || sözlər.length === 0) return null;
    return sözlər.reduce((ənUzun, söz) => söz.length > ənUzun.length ? söz : ənUzun, "");


  },
  
  söz_tezliyi() {
    const sözlər = this.mətn.match(/\b\w+\b/g);
    if (!sözlər) return {};
    return sözlər.reduce((tezlik, söz) => {
      söz = söz.toLowerCase();
      tezlik[söz] = (tezlik[söz] || 0) + 1;
      return tezlik;
    }, {});
    },
  
  ən_çox_istifadə_olunan() {
    const tezlik = this.söz_tezliyi();
    let ənÇox = null;
    for (let söz in tezlik) {
      if (!ənÇox || tezlik[söz] > tezlik[ənÇox]) {
        ənÇox = söz;
      }
    }
    return ənÇox;
    },
  
  orta_söz_uzunluğu() {
    const sözlər = this.mətn.match(/\b\w+\b/g);
    if (!sözlər || sözlər.length === 0) return 0;
    const cəmUzunluq = sözlər.reduce((cəm, söz) => cəm + söz.length, 0);
    return cəmUzunluq / sözlər.length;

    },
  
  statistika() {
    return {
      hərf_sayı: this.hərf_sayı(),
      söz_sayı: this.söz_sayı(),
      cümlə_sayı: this.cümlə_sayı(),
      ən_uzun_söz: this.ən_uzun_söz(),
      söz_tezliyi: this.söz_tezliyi(),
      ən_çox_istifadə_olunan: this.ən_çox_istifadə_olunan(),
      orta_söz_uzunluğu: this.orta_söz_uzunluğu()
    };
  }
};
console.log(mətn_analizçi.mətn_dəyiş("Bu mətn analiz ediləcək. Çox maraqlı bir mətndir!").statistika());



/*

### 🎯 Tapşırıq 9: Qiymət Hesablayıcısı

Müxtəlif məhsul növləri üçün qiymət hesablama sistemi:
jsconst qiymət_hesablayıcı = {
  vergi_dərəcələri: {
    əsas: 18,
    qida: 0,
    lüks: 25
  },
  
  endirim_kodları: {
    "STUDENT": 10,
    "VIP": 15,
    "FIRST": 20
  },
  
  çatdırılma_qiymətləri: {
    "Bakı": 5,
    "digər_şəhər": 10,
    "kənd": 15
  },
  
  // Bu metodları yazın:
  məhsul_qiyməti_hesabla(əsas_qiymət, kateqoriya) {
    // Vergi daxil qiymət
  },
  
  endirim_tətbiq_et(qiymət, endirim_kodu) {
    // Endirim kodunu tətbiq et
  },
  
  çatdırılma_hesabla(məkan, sifarişin_dəyəri) {
    // 100 AZN-dən çox sifarişdə çatdırılma pulsuz
  },
  
  ümumi_hesablama(məhsullar_siyahısı, endirim_kodu, çatdırılma_ünvanı) {
    // Tam hesablama: məhsullar + vergi + endirim + çatdırılma
  },
  
  fatura_yarat(müştəri_məlumatı, sifarişin_təfərrüatı) {
    // Ətraflı fatura obyekti yarat
  }
};

*** // Test məlumatları: ***
const sifarişin_məhsulları = [
  { ad: "Laptop", əsas_qiymət: 1000, kateqoriya: "əsas" },
  { ad: "Çörək", əsas_qiymət: 2, kateqoriya: "qida" },
  { ad: "Qızıl saat", əsas_qiymət: 5000, kateqoriya: "lüks" }
];
*/

const qiymət_hesablayıcı = {
  vergi_dərəcələri: {
    əsas: 18,
    qida: 0,
    lüks: 25
  },

  endirim_kodları: {
    "STUDENT": 10,
    "VIP": 15,
    "FIRST": 20
  },

  çatdırılma_qiymətləri: {
    "Bakı": 5,
    "digər_şəhər": 10,
    "kənd": 15
  },

  məhsul_qiyməti_hesabla(əsas_qiymət, kateqoriya) {
    const vergi = this.vergi_dərəcələri[kateqoriya] || 0;
    return əsas_qiymət + (əsas_qiymət * vergi) / 100;
  },

  endirim_tətbiq_et(qiymət, endirim_kodu) {
    const faiz = this.endirim_kodları[endirim_kodu] || 0;
    return qiymət - (qiymət * faiz) / 100;
  },

  çatdırılma_hesabla(məkan, sifarişin_dəyəri) {
    if (sifarişin_dəyəri > 100) return 0;
    return this.çatdırılma_qiymətləri[məkan] || 0;
  },

  ümumi_hesablama(məhsullar_siyahısı, endirim_kodu, çatdırılma_ünvanı) {
    const məhsul_total = məhsullar_siyahısı.reduce((cəm, m) => {
      return cəm + this.məhsul_qiyməti_hesabla(m.əsas_qiymət, m.kateqoriya);
    }, 0);
    const endirimli = this.endirim_tətbiq_et(məhsul_total, endirim_kodu);
    const çatdırılma = this.çatdırılma_hesabla(çatdırılma_ünvanı, endirimli);
    return {
      məhsul_total,
      endirimli,
      çatdırılma,
      yekun: endirimli + çatdırılma
    };
  },

  fatura_yarat(müştəri_məlumatı, sifarişin_təfərrüatı) {
    return {
      tarix: new Date().toLocaleString(),
      müştəri: müştəri_məlumatı,
      sifariş: sifarişin_təfərrüatı
    };
  }
};

const sifarişin_məhsulları = [
  { ad: "Laptop", əsas_qiymət: 1000, kateqoriya: "əsas" },
  { ad: "Çörək", əsas_qiymət: 2, kateqoriya: "qida" },
  { ad: "Qızıl saat", əsas_qiymət: 5000, kateqoriya: "lüks" }
];

const yekun = qiymət_hesablayıcı.ümumi_hesablama(sifarişin_məhsulları, "VIP", "Bakı");
console.log("Ümumi hesab:", yekun);

const fatura = qiymət_hesablayıcı.fatura_yarat(
  { ad: "Aygün Əliyeva", ünvan: "Bakı" },
  {
    məhsullar: sifarişin_məhsulları,
    hesab: yekun
  }
);
console.log("Fatura:", fatura);