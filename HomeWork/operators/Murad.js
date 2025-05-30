// 1) Tapsirig


// ---

// ## 🧮 JavaScript-də Operatorlar. 🧠 Tipin 🌀 İmplicit (Avtomatik) Dəyişməsi

// ### 📋 **Şərt**

// Başlanğıc kod **start** qovluğundadır. Müxtəlif operatorların nəticələrini konsola çıxarın.

// ### ✅ **Tapşırıq:**

// * 🖨️ Hər bir operatorun nəticəsini aşağıdakı formatda konsola çıxarın:
//   **`[ifadə] : [ifadənin dəyəri]`**
//   *(nümunə: `console.log("undefined + '5': ", undefined + '5');`)*

// * ✍️ Sətirlərdə **fərqli dırnaq işarələrinin** istifadəsini və simvolları `\` ilə **qaçırmağı** unutmayın.
// * ❌ **Təyinat (assignment)** ifadələrini çıxarmağa ehtiyac yoxdur.
// * 🔁 Hər operator **yalnız bir dəfə** istifadə olunmalıdır.
// * 🔍 Bütün ifadələri diqqətlə yoxlayın və bu operatorların iş prinsipi sizə tam **aydın** olsun — **heç bir "sehr" qalmasın!** ✨

// ---

// ### 📚 **Faydalı materiallar:**

// * [MDN: İfadələr və Operatorlar](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators)
// * [MDN: Operatorların Prioriteti](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)


console.log("undefined + '5': ", undefined + '5'); // undefined5
console.log("null + 5: ", null + 5); // 5
console.log("true + 1 : ", true + 1); // 2
console.log("false + 1 : ", false + 1); // 1
console.log("false + 'false' : ", false + 'false'); // falsefalse
console.log("'5' * 3 : ", '5' * 3); // 15
console.log("'5' + 3 : ", '5' + 3); // 53
console.log("'12' - 3 : ", '12' - 3); // 9
console.log("'12' / 5 : ", '12' / 5); // 2.4
console.log("null == undefined : ", null == undefined); // true
console.log("null === undefined : ", null === undefined);  // false

// ---




// 2) Tapsirig



// ---

// ## 🧾 Aydın (Yəni **Explicit**) Tip Dəyişməsi JavaScript-də

// ### 📋 **Şərt**

// Tipi açıq şəkildə dəyişərək bir verilən tipini digərinə çevirin.

// ### ✅ **Tapşırıq:**

// ---

// ### 🔤 **Aşağıdakı dəyərləri mətnə (string) çevirin və nəticəni bu formatda konsola çıxarın:**

// **`[dəyər] to string is [çevrilmiş nəticə]`**
// (nümunə: `console.log('-17.17 to string is ' + String(-17.17));`)

// Dəyərlər:

// * `17`
// * `-17.17`
// * `false`
// * `null`
// * `undefined`
// * `0`

// ---
console.log('17 to string is ' + String(17)); 
console.log('-17.17 to string is ' + String(-17.17));
console.log('false to string is ' + String(false));
console.log('null to string is ' + String(null));
console.log('undefined to string is ' + String(undefined));
console.log('0 to string is ' + String(0));





// ### 🔢 **Aşağıdakı dəyərləri ədədə (number) çevirin və nəticəni bu formatda konsola çıxarın:**

// **`[dəyər] to number is [çevrilmiş nəticə]`**
// (nümunə: `console.log("'   17d   ' to number is " + Number('   17d   '));`)

// Dəyərlər:

// * `'17'`
// * `true`
// * `false`
// * `null`
// * `undefined`
// * `'   20   '` (əvvəl və sonra 3 boşluq)
// * `'      '` (cəmi 6 boşluq)
// * `'   30d   '` (əvvəl və sonra 3 boşluq)

// ---

console.log("'17' to number is " + Number('17'));
console.log("true to number is " + Number(true));
console.log("false to number is " + Number(false));
console.log("null to number is " + Number(null));
console.log("undefined to number is " + Number(undefined));
console.log("'   20   ' to number is " + Number('   20   '));
console.log("'      ' to number is " + Number('      '));
console.log("'   30d   ' to number is " + Number('   30d   '));

// ### 🔁 **Aşağıdakı dəyərləri məntiqi (boolean) tipə çevirin və nəticəni bu formatda konsola çıxarın:**

// **`[dəyər] to boolean is [çevrilmiş nəticə]`**
// (nümunə: `console.log('\'Hello\' to boolean is ' + Boolean('Hello'));`)

// Dəyərlər:

// * `null`
// * `undefined`
// * `0`
// * `-0`
// * `NaN`
// * `''` (boş sətir)
// * `' '` (bir boşluqdan ibarət sətir)
// * `17`
// * `'Hello'`

// ---

console.log("null to boolean is " + Boolean(null));
console.log("undefined to boolean is " + Boolean(undefined));
console.log("0 to boolean is " + Boolean(0));
console.log("-0 to boolean is " + Boolean(-0));
console.log("NaN to boolean is " + Boolean(NaN));
console.log("'' to boolean is " + Boolean(''));
console.log("' ' to boolean is " + Boolean(' '));
console.log("17 to boolean is " + Boolean(17));
console.log("'Hello' to boolean is " + Boolean('Hello'));




// 3) tapsirig

// ---

// ## ⚖️ Müqayisə Operatorları JavaScript-də

// ### 📋 **Şərt**

// Başlanğıc kod **start** qovluğundadır. Müxtəlif müqayisə operatorlarının işini konsolda yoxlayın və nəticəni çıxarın.

// ---

// ### ✅ **Tapşırıq:**

// * 🖨️ Hər müqayisə operatorunun nəticəsini bu formatda konsola çıxarın:
//   **`[ifadə] : [ifadənin dəyəri]`**
//   *(nümunə: `console.log("'a' < 'b': ", 'a' < 'b');`)*

// * ✍️ Sətirlərlə işləyərkən **fərqli dırnaq işarələrinin** istifadəsini və simvolları `\` ilə **qaçırmağı** (escape) unutmayın.

// * ❌ **Təyinat (assignment)** ifadələrini çıxarmağa ehtiyac yoxdur.

// * 🔍 Bütün ifadələri diqqətlə yoxlayın və müqayisə operatorlarının necə işlədiyi sizə **tam aydın** olsun — **heç bir "sehr" qalmasın!** ✨

// ---

// ### 💻 **Mütləq şəkildə nəticələri konsolda test edin!**

// ---
console.log("'a' < 'b': ", 'a' < 'b'); // true
console.log("10 === 10: ", 10 === 10); // true
console.log("10 == 10: ", 10 == 10); // true
console.log("10 === '10': ", 10=== '10'); // false
console.log("10 == '10': ",10 ==' 10'); // true 
console.log("10 !== '10': ", 10 !== '10'); // true
console.log("10 != '10': ", 10 != '10'); // false
console.log("10 > 5: ", 10 > 5); // true
console.log("10 < 5: ", 10 < 5); // false
console.log("10 >= 5: ", 10 >= 5);  // true
console.log("10 <= 5: ", 10 <= 5); // false
console.log("null < 0: ", null < 0); // false
console.log("null >= 0: ", null >= 0); // true
console.log("null == 0: ", null == 0); // false
console.log("undefined == null: ", undefined == null); // true
console.log("undefined > 0: ", undefined > 0); // false
console.log("null >= 0: ", null >= 0); // true
console.log("NaN == NaN: ", NaN == NaN); // false
console.log("NaN !== NaN: ", NaN != NaN); // true




// 4) Tapsirig

// ---

// ## 🔀 Məntiqi Operatorlar JavaScript-də

// ### 📋 **Şərt**

// Başlanğıc kod **start** qovluğundadır. Fərqli məntiqi operatorların iş prinsipini konsolda yoxlayın və nəticəni çıxarın.

// ---

// ### ✅ **Tapşırıq:**

// * 🖨️ Hər bir məntiqi operatorun nəticəsini bu formatda konsola çıxarın:
//   **`[ifadə] : [ifadənin dəyəri]`**
//   *(nümunə: `console.log("undefined || null || 0 || '' || null: ", undefined || null || 0 || '' || null);`)*

// * ✍️ Sətir dəyərləri ilə işləyərkən **fərqli dırnaq növlərinin** birləşməsi və `\` işarəsi ilə **simvolların qaçırılması** barədə unutmayın.

// * ❌ **Təyinetmə (assignment)** ifadələrini çıxarmağa ehtiyac yoxdur.

// * 🧠 Bütün ifadələri diqqətlə yoxlayın və məntiqi operatorların necə işlədiyini **tam başa düşün** — **heç bir "sehr" qalmasın!** ✨

// ---

// ### 💻 **Mütləq şəkildə nəticələri konsolda test edin!**

// ---



console.log("undefined || null || 0 || '' || null: ", undefined || null || 0 || '' || null); // undefined
console.log("true && 'Hello' && 1: ", true && 'Hello' && 1); // true
console.log("false && 'Hello': ", false && 'Hello'); // false
console.log("null && 5: ", null && 5); // null
console.log("0 || 'default': ", 0 || 'default'); // default
console.log("'' && 'text': ", '' && 'text'); // ''
console.log("true || false: ", true || false); // true
console.log("false || true: ", false || true);  // true





// 5) Tapsirig

// ---

// ## 🔁 Şərti operatorlar

// ### 📋 **Şərt**

// Başlanğıc kod **start** qovluğundadır. Lazımi nəticəni əldə etmək üçün dəyişənləri düzgün dəyərlərlə təyin edin.

// ---

// ### ✅ **Tapşırıq:**

// * 🧍 `age` adlı dəyişəni elə bir dəyərlə təyin edin ki, konsola **`'Ready'`** sətiri çıxarılsın.
// * 💰 `amount` adlı dəyişəni elə bir dəyərlə təyin edin ki, `result` adlı dəyişənin dəyəri **`'empty'`** olsun.


// ---

// ### 💻 Mütləq şəkildə nəticəni konsolda test edin!

// ---

let age =23;
if(age >= 18) {
    console.log('Ready'); 
}
else {
    console.log('Not ready');
}


let amount = 0;
let result = amount ? 'full' : 'empty';
console.log(result); // empty