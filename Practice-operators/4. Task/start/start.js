/* || (VƏ YA) operatoru */
false || true;
false || true || false;
false || false || false;

/* && (VƏ) operatoru */
false && true;
false && true && false;
true && true && true;

/* Məntiqi operatorlar istənilən tipdə verilənlərə tətbiq oluna bilər */

/* || birinci doğru (true) dəyəri tapır */
'text' || false;
true || 'text';
undefined || null || 0 || '' || null;

const customAmount = null; // çıxarılmır
const defaultAmount = 17; // çıxarılmır
const amount = customAmount || defaultAmount; // amount dəyişəninin dəyəri bu formatda çıxarılır: console.log('amount: ', amount);

/* && birinci yalan (false) dəyəri tapır */
'text' && false;
true && 'text';
undefined && null && 0 && '' && null;

/* İnkar operatoru (!) */
!true;
!false;
!'text';
!!'text';
