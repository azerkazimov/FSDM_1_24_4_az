// Task-2
console.log('17 to string is ' + String(17));
console.log('-17.17 to string is ' + String(-17.17));
console.log('false to string is ' + String(false));
console.log('null to string is ' + String(null));
console.log('undefined to string is ' + String(undefined));
console.log('0 to string is ' + String(0));

console.log("'17' to number is " + Number('17'));
console.log("true to number is " + Number(true));
console.log("false to number is " + Number(false));
console.log("null to number is " + Number(null));
console.log("undefined to number is " + Number(undefined));
console.log("'   20   ' to number is " + Number('   20   '));
console.log("'      ' to number is " + Number('      '));
console.log("'   30d   ' to number is " + Number('   30d   '));

console.log('null to boolean is ' + Boolean(null));
console.log('undefined to boolean is ' + Boolean(undefined));
console.log('0 to boolean is ' + Boolean(0));
console.log('-0 to boolean is ' + Boolean(-0));
console.log('NaN to boolean is ' + Boolean(NaN));
console.log("'' to boolean is " + Boolean(''));
console.log("' ' to boolean is " + Boolean(' '));
console.log('17 to boolean is ' + Boolean(17));
console.log("'Hello' to boolean is " + Boolean('Hello'));

// Task-3

/* ədədlərin müqayisəsi */
const a = 17;
const b = 5;

console.log("a > b:", a > b);
console.log("a <= b:", a <= b);
console.log("a == b:", a == b);
console.log("a != b:", a != b);

/* sətirlərin müqayisəsi */
console.log("'a' < 'b':", 'a' < 'b');
console.log("'ab' > 'a':", 'ab' > 'a');

/* sərt (strict) müqayisə */
console.log("17 === 1:", 17 === 1);
console.log("17 === 17:", 17 === 17);
console.log("17 === '17':", 17 === '17');
console.log("17 === true:", 17 === true);
console.log("'0' === '':", '0' === '');
console.log("true === false:", true === false);
console.log("true === true:", true === true);
console.log("null === undefined:", null === undefined);
console.log("false === 0:", false === 0);

/* qeyri-sərt (non-strict) müqayisə */
console.log("17 == '17':", 17 == '17');
console.log("'0' == '':", '0' == '');
console.log("0 == '':", 0 == '');
console.log("null == undefined:", null == undefined);
console.log("false == 0:", false == 0);

/* diqqətli olun: null və undefined ilə işləyərkən */
console.log("undefined == null:", undefined == null);
console.log("undefined == 0:", undefined == 0);
console.log("null == 0:", null == 0);
console.log("undefined < 0:", undefined < 0);
console.log("undefined > 0:", undefined > 0);

// Task-4

/* || (VƏ YA) operatoru */
console.log("false || true:", false || true);
console.log("false || true || false:", false || true || false);
console.log("false || false || false:", false || false || false);

/* && (VƏ) operatoru */
console.log("false && true:", false && true);
console.log("false && true && false:", false && true && false);
console.log("true && true && true:", true && true && true);

/* || birinci doğru (true) dəyəri tapır */
console.log("'text' || false:", 'text' || false);
console.log("true || 'text':", true || 'text');
console.log("undefined || null || 0 || '' || null:", undefined || null || 0 || '' || null);

/* amount hesablaması */
const customAmount = null;
const defaultAmount = 17;
const amount1 = customAmount || defaultAmount;
console.log("amount:", amount);

/* && birinci yalan (false) dəyəri tapır */
console.log("'text' && false:", 'text' && false);
console.log("true && 'text':", true && 'text');
console.log("undefined && null && 0 && '' && null:", undefined && null && 0 && '' && null);

/* İnkar operatoru (!) */
console.log("!true:", !true);
console.log("!false:", !false);
console.log("!'text':", !'text');
console.log("!!'text':", !!'text');

// Task-5

if (true) console.log('I\'m in');

if (false) {
    console.log('I\'m not in');
}

if ('text') {
    console.log('Yes');
}

if (null) {
    console.log('Yes');
} else {
    console.log('Else');
}

const age = 30;
const amount = 10;

if (age < 16) {
    console.log('Too young');
} else if (age >= 16 && age < 18) {
    console.log('Almost ready');
} else if (age >= 18 && age < 65) {
    console.log('Ready');
} else {
    console.log('Else');
}

const result = amount > 17 ? 'full' : 'empty';
console.log("result:", result);
