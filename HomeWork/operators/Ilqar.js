console.log("undefined + '5': ", undefined + '5');
console.log("null + 5: ", null + 5);
console.log("true + 1: ", true + 1);
console.log("false + 1: ", false + 1);
console.log("'5' - 2: ", '5' - 2);
console.log("'5' * '2': ", '5' * '2');
console.log("'5' / '2': ", '5' / '2');
console.log("'5' % '2': ", '5' % '2');
console.log("'5' + 2: ", '5' + 2);
console.log("5 + '2': ", 5 + '2');
console.log("5 + undefined: ", 5 + undefined);
console.log("5 * undefined: ", 5 * undefined);
console.log("5 * null: ", 5 * null);
console.log("true + false: ", true + false);

/////////////////////

console.log("17 to string is " + String(17));
console.log("-17.17 to string is " + String(-17.17));
console.log("false to string is " + String(false));
console.log("null to string is " + String(null));
console.log("undefined to string is " + String(undefined));
console.log("0 to string is " + String(0));

//////////////////////

console.log("'17' to number is " + Number('17'));
console.log("true to number is " + Number(true));
console.log("false to number is " + Number(false));
console.log("null to number is " + Number(null));
console.log("undefined to number is " + Number(undefined));
console.log("'   20   ' to number is " + Number('   20   '));
console.log("'      ' to number is " + Number('      '));
console.log("'   30d   ' to number is " + Number('   30d   '));

/////////////////////

console.log("null to boolean is " + Boolean(null));
console.log("undefined to boolean is " + Boolean(undefined));
console.log("0 to boolean is " + Boolean(0));
console.log("-0 to boolean is " + Boolean(-0));
console.log("NaN to boolean is " + Boolean(NaN));
console.log("'' to boolean is " + Boolean(''));
console.log("' ' to boolean is " + Boolean(' '));
console.log("17 to boolean is " + Boolean(17));
console.log("'Hello' to boolean is " + Boolean('Hello'));

//////////////////////

console.log("5 == '5': ", 5 == '5');
console.log("5 === '5': ", 5 === '5');
console.log("null == undefined: ", null == undefined);
console.log("null === undefined: ", null === undefined);
console.log("NaN == NaN: ", NaN == NaN);
console.log("'a' < 'b': ", 'a' < 'b');
console.log("'abc' < 'abd': ", 'abc' < 'abd');
console.log("false == 0: ", false == 0);
console.log("false === 0: ", false === 0);
console.log("true != 1: ", true != 1);
console.log("true !== 1: ", true !== 1);

//////////////////////////

console.log("undefined || null || 0 || '' || null: ", undefined || null || 0 || '' || null);
console.log("true && 'Hello': ", true && 'Hello');
console.log("false && 'Hello': ", false && 'Hello');
console.log("null && 'World': ", null && 'World');
console.log("'Text' || 0: ", 'Text' || 0);
console.log("'' || 'Default': ", '' || 'Default');
console.log("1 && 0: ", 1 && 0);
console.log("0 || 1: ", 0 || 1);
console.log("!null: ", !null);
console.log("!'': ", !'');
console.log("!true: ", !true);

//////////////////////////////

let age = 20;
if (age >= 18) {
    console.log('Ready');
}

let amount = 0;
let result = amount > 0 ? 'full' : 'empty';
console.log(result);