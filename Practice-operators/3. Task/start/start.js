/* ədədlərin müqayisəsi */

const a = 17;
const b = 5;
a > b;
a <= b;
a == b;
a != b;

/* sətirlərin müqayisəsi */

'a' < 'b';
'ab' > 'a';

/* sərt (strict) müqayisə */

17 === 1;
17 === 17;
17 === '17';
17 === true;
'0' === '';
true === false;
true === true;
null === undefined;
false === 0

/* qeyri-sərt (non-strict) müqayisə */

17 == '17';
'0' == '';
0 == '';
null == undefined;
false == 0;

/* diqqətli olun: null və undefined ilə işləyərkən */

undefined == null;
undefined == 0;
null == 0;
undefined < 0;
undefined > 0;
