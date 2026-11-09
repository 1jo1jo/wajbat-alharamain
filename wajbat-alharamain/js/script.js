/* وجبة الحرمين - السكربت المشترك لكل الصفحات */
const SPRITE="<svg width=\"0\" height=\"0\" style=\"position:absolute\"><defs>\n<symbol id=\"menu\" viewBox=\"0 0 24 24\"><path d=\"M4 6h16M4 12h16M4 18h16\"/></symbol>\n<symbol id=\"bell\" viewBox=\"0 0 24 24\"><path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0\"/></symbol>\n<symbol id=\"bell-off\" viewBox=\"0 0 24 24\"><path d=\"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5M17 17H3s3-2 3-9a4.7 4.7 0 0 1 .3-1.7M10.3 21a1.94 1.94 0 0 0 3.4 0M2 2l20 20\"/></symbol>\n<symbol id=\"home\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M3 11.2 12 3l9 8.2V20a1.5 1.5 0 0 1-1.5 1.5H15V15H9v6.5H4.5A1.5 1.5 0 0 1 3 20z\"/></symbol>\n<symbol id=\"donate\" viewBox=\"0 0 24 24\"><path d=\"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16M7 20l1.6 1.4c.3.4.8.6 1.4.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.6a2 2 0 0 0-2.8-2.8l-3.9 3.9M2 15l6 6\"/><path fill=\"currentColor\" d=\"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12z\"/></symbol>\n<symbol id=\"bag\" viewBox=\"0 0 24 24\"><path d=\"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0\"/></symbol>\n<symbol id=\"user\" viewBox=\"0 0 24 24\"><path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/></symbol>\n<symbol id=\"user-f\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" stroke=\"none\" d=\"M20 21v-2a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v2z\"/><circle fill=\"currentColor\" stroke=\"none\" cx=\"12\" cy=\"7\" r=\"4.5\"/></symbol>\n<symbol id=\"pin\" viewBox=\"0 0 24 24\"><path d=\"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/></symbol>\n<symbol id=\"pin-f\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" stroke=\"none\" d=\"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z\"/><circle cx=\"12\" cy=\"10\" r=\"3\" fill=\"#f6ebd1\" stroke=\"none\"/></symbol>\n<symbol id=\"bulb\" viewBox=\"0 0 24 24\"><path d=\"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4\"/></symbol>\n<symbol id=\"wallet\" viewBox=\"0 0 24 24\"><path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"/></symbol>\n<symbol id=\"heart\" viewBox=\"0 0 24 24\"><path d=\"M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z\"/></symbol>\n<symbol id=\"heart-f\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z\"/></symbol>\n<symbol id=\"calendar\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M16 2v4M8 2v4M3 10h18\"/></symbol>\n<symbol id=\"card\" viewBox=\"0 0 24 24\"><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M2 10h20\"/></symbol>\n<symbol id=\"card-f\" viewBox=\"0 0 24 24\"><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2.5\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M2 10h20\" stroke=\"#fff\" stroke-width=\"2.5\"/></symbol>\n<symbol id=\"utensils\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" stroke=\"none\" d=\"M4 2h2v7h1V2h2v7h1V2h2v8a3 3 0 0 1-2.5 3H8.9V22H7v-9.1A3 3 0 0 1 4 10zM17 2c2 0 3.5 2.5 3.5 6 0 2-.6 3.3-1.5 4v10h-2z\"/></symbol>\n<symbol id=\"box\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" stroke=\"none\" d=\"M5 3h14a2 2 0 0 1 2 2v3H3V5a2 2 0 0 1 2-2zM4 10h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/><rect x=\"9.5\" y=\"12.5\" width=\"5\" height=\"5\" rx=\"1\" fill=\"#fff\" stroke=\"none\"/></symbol>\n<symbol id=\"drop\" viewBox=\"0 0 24 24\"><path d=\"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z\"/><path d=\"M9 16a3 3 0 0 0 3 3\" /></symbol>\n<symbol id=\"globe\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"currentColor\" stroke=\"none\"/><path stroke=\"#fff\" d=\"M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"/></symbol>\n<symbol id=\"arrow-l\" viewBox=\"0 0 24 24\"><path d=\"M19 12H5M12 19l-7-7 7-7\"/></symbol>\n<symbol id=\"arrow-r\" viewBox=\"0 0 24 24\"><path d=\"M5 12h14M12 5l7 7-7 7\"/></symbol>\n<symbol id=\"chev-r\" viewBox=\"0 0 24 24\"><path d=\"m9 18 6-6-6-6\"/></symbol>\n<symbol id=\"mail\" viewBox=\"0 0 24 24\"><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/><path d=\"m22 7-10 6L2 7\"/></symbol>\n<symbol id=\"lock\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></symbol>\n<symbol id=\"eye-off\" viewBox=\"0 0 24 24\"><path d=\"M9.9 9.9a3 3 0 1 0 4.2 4.2M10.7 5.1A10.4 10.4 0 0 1 12 5c7 0 10 7 10 7a13 13 0 0 1-1.7 2.7M6.6 6.6A13.5 13.5 0 0 0 2 12s3 7 10 7a9.7 9.7 0 0 0 5.4-1.6M2 2l20 20\"/></symbol>\n<symbol id=\"logout\" viewBox=\"0 0 24 24\"><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9\"/></symbol>\n<symbol id=\"alert\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 8v4M12 16h.01\"/></symbol>\n<symbol id=\"info\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 16v-4M12 8h.01\"/></symbol>\n<symbol id=\"apple\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" stroke=\"none\" d=\"M12.15 6.9c-.95 0-2.4-1.08-3.96-1.04-2.04.03-3.91 1.18-4.96 3.01-2.12 3.68-.55 9.1 1.52 12.09 1.01 1.45 2.2 3.09 3.79 3.04 1.52-.07 2.09-.99 3.94-.99 1.83 0 2.35.99 3.96.95 1.64-.03 2.68-1.48 3.68-2.95 1.16-1.69 1.64-3.33 1.66-3.42-.04-.01-3.18-1.22-3.22-4.86-.03-3.04 2.48-4.49 2.6-4.56-1.43-2.09-3.62-2.32-4.39-2.38-2-.16-3.68 1.09-4.61 1.09zM15.53 3.83c.84-1.01 1.4-2.43 1.25-3.83-1.21.05-2.66.8-3.53 1.82-.78.9-1.45 2.34-1.27 3.71 1.34.1 2.72-.69 3.55-1.7z\"/></symbol>\n<symbol id=\"fb\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" stroke=\"none\" d=\"M12 2a10 10 0 0 0-1.6 19.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.800l-.4 2.900h-2.400v7A10 10 0 0 0 12 2z\"/></symbol>\n<symbol id=\"case\" viewBox=\"0 0 24 24\"><rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M16 7V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3M2 13h20\"/><rect x=\"10.5\" y=\"11.5\" width=\"3\" height=\"3\" fill=\"#e8e8e8\" stroke=\"none\"/></symbol>\n<symbol id=\"camera\" viewBox=\"0 0 24 24\"><path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z\"/><circle cx=\"12\" cy=\"13\" r=\"3.5\"/></symbol>\n<symbol id=\"building\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"1.500\" fill=\"currentColor\" stroke=\"none\"/><path style=\"stroke:var(--bw,#e8f2ee)\" stroke-width=\"1.800\" d=\"M7 8h2M11 8h2M15 8h2M7 12h2M11 12h2M15 12h2M7 16h2M11 16h2M15 16h2\"/></symbol>\n<symbol id=\"clock\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/></symbol>\n<symbol id=\"target\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"7\"/><circle cx=\"12\" cy=\"12\" r=\"2.500\" fill=\"currentColor\"/><path d=\"M12 1v4M12 19v4M1 12h4M19 12h4\"/></symbol>\n<symbol id=\"handshake\" viewBox=\"0 0 24 24\"><path d=\"m11 17 2 2a1 1 0 1 0 3-3M14 14l2.500 2.500a1 1 0 1 0 3-3l-3.880-3.880a3 3 0 0 0-4.240 0l-.88.88a1 1 0 1 1-3-3l2.810-2.810a5.790 5.790 0 0 1 7.060-.87l.47.28a2 2 0 0 0 1.420.25L21 4M21 3l1 11h-2M3 3 2 14l6.500 6.500a1 1 0 1 0 3-3M3 4h8\"/></symbol>\n<symbol id=\"verified\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" stroke=\"none\" d=\"M3.850 8.620a4 4 0 0 1 4.780-4.770 4 4 0 0 1 6.740 0 4 4 0 0 1 4.780 4.780 4 4 0 0 1 0 6.740 4 4 0 0 1-4.770 4.780 4 4 0 0 1-6.750 0 4 4 0 0 1-4.780-4.770 4 4 0 0 1 0-6.760z\"/><path stroke=\"#fff\" stroke-width=\"2.400\" d=\"m9 12 2 2 4-4\"/></symbol>\n</defs></svg>\n";
const NAV="<nav id=\"nav\">\n  <button data-t=\"home\" class=\"on\" onclick=\"go('home')\"><i><svg class=\"i \"><use href=\"#home\"/></svg></i>الرئيسية</button>\n  <button data-t=\"donate\" onclick=\"go('donate')\"><i><svg class=\"i \"><use href=\"#donate\"/></svg></i>تبرع</button>\n  <button data-t=\"orders\" onclick=\"go('orders')\"><i><svg class=\"i \"><use href=\"#bag\"/></svg></i>طلباتي</button>\n  <button data-t=\"account\" onclick=\"go('account')\"><i><svg class=\"i \"><use href=\"#user\"/></svg></i>حسابي</button>\n</nav>";
const SHELL="<div id=\"shade\" onclick=\"closeAll()\"></div><div id=\"toast\"></div><!-- نافذة الطلب -->\n<div class=\"sheet\" id=\"s-order\">\n  <h3 id=\"oName\"></h3><p class=\"m\" id=\"oDesc\"></p><p id=\"oBase\"></p>\n  <div class=\"qty\"><button onclick=\"q(1)\">+</button><b id=\"oQ\">1</b><button onclick=\"q(-1)\">−</button></div>\n  <div class=\"tot\"><b>الإجمالي</b><span id=\"oTot\"></span></div>\n  <button class=\"btn-green\" onclick=\"sheet('loc')\">أضف إلى الطلبات</button>\n</div>\n<!-- نافذة الموقع -->\n<div class=\"sheet\" id=\"s-loc\">\n  <h3 class=\"g\">اختر موقع الاستلام</h3><p class=\"m\">حدد المكان الأنسب لك لاستلام طلبك</p>\n  <div id=\"locPick\"></div>\n  <button class=\"btn-green\" id=\"confirm\" disabled onclick=\"confirmOrder()\" style=\"margin-top:14px\">تأكيد الطلب</button>\n  <button class=\"back\" onclick=\"sheet('order')\">رجوع</button>\n</div>\n<!-- نافذة البلد -->\n<div class=\"sheet\" id=\"s-country\" style=\"background:#eff5f1\"><div id=\"ctryList\"></div></div>\n\n<aside id=\"drawer\">\n  <div class=\"dh\"><div class=\"logo\"><img src=\"images/logo.png\" alt=\"\" onerror=\"this.remove()\"></div><h2>وجبة الحرمين</h2><p>— معك في كل خطوة</p></div>\n  <div class=\"dl\">\n    <button onclick=\"go('home')\"><i><svg class=\"i \"><use href=\"#home\"/></svg></i>الرئيسية</button>\n    <button onclick=\"go('donate')\"><i><svg class=\"i \"><use href=\"#donate\"/></svg></i>تبرع</button>\n    <button onclick=\"go('orders')\"><i><svg class=\"i \"><use href=\"#bag\"/></svg></i>طلباتي</button>\n    <button onclick=\"go('account')\"><i><svg class=\"i \"><use href=\"#user\"/></svg></i>حسابي</button>\n    <button onclick=\"go('locations')\"><i><svg class=\"i \"><use href=\"#pin\"/></svg></i>مواقع التوزيع</button>\n    <button onclick=\"go('notif')\"><i><svg class=\"i \"><use href=\"#bell\"/></svg></i>الإشعارات</button>\n    <button onclick=\"go('report')\"><i><svg class=\"i \"><use href=\"#alert\"/></svg></i>الإبلاغ عن مشكلة</button>\n    <button onclick=\"go('partners')\"><i><svg class=\"i \"><use href=\"#building\"/></svg></i>الجهات المشاركة</button>\n    <button onclick=\"go('about')\"><i><svg class=\"i \"><use href=\"#info\"/></svg></i>عن التطبيق</button>\n  </div>\n  <button class=\"out\" onclick=\"logout()\"><svg class=\"i \"><use href=\"#logout\"/></svg> تسجيل الخروج</button>\n</aside>";


const SPRITE_X='<svg width="0" height="0" style="position:absolute"><defs>'+
'<symbol id="phone" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></symbol>'+
'<symbol id="shield" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path stroke="#fff" stroke-width="2.4" d="m9 12 2 2 4-4"/></symbol>'+
'<symbol id="close" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></symbol>'+
'<symbol id="plus-c" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></symbol>'+
'<symbol id="minus-c" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></symbol>'+
'<symbol id="eye" viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></symbol>'+
'<symbol id="touch" viewBox="0 0 24 24"><path d="M22 14a8 8 0 0 1-8 8M18 11v-1a2 2 0 0 0-2-2 2 2 0 0 0-2 2M14 10V9a2 2 0 0 0-2-2 2 2 0 0 0-2 2v1M10 9.5V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v10M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></symbol>'+
'<symbol id="cash" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="2.5" fill="#fff" stroke="none"/><path stroke="#fff" d="M6 12h.01M18 12h.01"/></symbol>'+
'<symbol id="check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></symbol>'+
'<symbol id="pin-w" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3" fill="#fff" stroke="none"/></symbol>'+
'<symbol id="calendar-g" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></symbol>'+
'<symbol id="drop-f" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/><path stroke="#e8f2ee" stroke-width="2" d="M9 16a3 3 0 0 0 3 3"/></symbol></defs></svg>';

const $=s=>document.querySelector(s);
const I=(n,c='')=>`<svg class="i ${c}"><use href="#${n}"/></svg>`;
const PAGES={
home:'index.html',
meals:'meals.html',
donate:'donate.html',
orders:'orders.html',
account:'account.html',
cards:'cards.html',
notif:'notifications.html',
locations:'locations.html',
partners:'partners.html',
report:'report.html',
about:'about.html',
login:'login.html',
register:'register.html',
forgot:'forgot.html',

restaurant:'restaurant.html',
courier:'courier.html',
admin:'admin.html'
};
const store={get(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};

/* ===== البيانات ===== */
let meals=[
 {id:1,name:'وجبة يومية',d:'غداء متكامل',desc:'أرز بسمتي مع لحم أو دجاج، سلطة، خبز، وعصير طازج',price:15,img:'images/meal.jpg'},
 {id:2,name:'سلة إفطار',d:'خفيفة ومغذية',desc:'تمر، فواكه، مكسرات، لبن، وماء',price:25,img:'images/basket.jpg'}
];
const places=['المسجد الحرام - باب الملك فهد','مخيم منى - المنطقة 3','مخيم عرفات - الجبل','منطقة العزيزية','منطقة الششة'];
const countries=['السعودية 🇸🇦','الإمارات 🇦🇪','مصر 🇪🇬','الأردن 🇯🇴','الكويت 🇰🇼'];
const zones=[[
 ['المسجد الحرام - باب الملك فهد','مكة المكرمة - الحرم المكي','6:00 ص - 10:00 م',1],
 ['مخيم منى - المنطقة 3','منى - قرب جسر الجمرات','7:00 ص - 6:00 م',0],
 ['مخيم عرفات - الجبل','عرفات - قرب جبل الرحمة','8:00 ص - 4:00 م',1],
 ['منطقة العزيزية','مكة - شارع العزيزية العام','5:00 ص - 11:00 م',1],
 ['منطقة الششة','مكة - حي الششة','6:00 ص - 9:00 م',0]],[
 ['المسجد النبوي - باب السلام','المدينة المنورة - الحرم النبوي','5:30 ص - 11:00 م',1],
 ['منطقة قباء','المدينة - قرب مسجد قباء','6:00 ص - 9:00 م',1],
 ['منطقة العوالي','المدينة - حي العوالي','7:00 ص - 8:00 م',1],
 ['منطقة قربان','المدينة - حي قربان','6:00 ص - 10:00 م',0]]];
const partners=[['جمعية إحسان','خدمة ضيوف الرحمن وتوفير الوجبات'],['جمعية البر بمكة','دعم الحجاج وتوفير سلال الإفطار'],['مؤسسة الحرمين الخيرية','رعاية شؤون الحرمين والزوار'],['جمعية الرحمة','تقديم خدمات طبية وإنسانية للحجاج'],['جمعية كسوة','توفير احتياجات الحجاج الأساسية']];

/* ===== التنقل بين الصفحات ===== */
function go(v,msg){if(msg)try{sessionStorage.setItem('toast',msg)}catch(e){}location.href=PAGES[v]||'index.html'}
function back(){history.length>1?history.back():(location.href='index.html')}

/* ===== واجهة مشتركة ===== */
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('on'),2600)}
function drawer(o){$('#drawer').classList.toggle('on',!!o);$('#shade').classList.toggle('on',!!o)}
function sheet(n){document.querySelectorAll('.sheet').forEach(s=>s.classList.remove('on'));$('#s-'+n).classList.add('on');$('#shade').classList.add('on');
 if(n==='country')document.querySelectorAll('.ctry').forEach((c,i)=>c.classList.toggle('sel',i===store.get('country',0)))}
function closeAll(){document.querySelectorAll('.sheet').forEach(s=>s.classList.remove('on'));$('#drawer').classList.remove('on');$('#shade').classList.remove('on')}

/* ===== الطلبات ===== */
let cur=null,qty=1,pick=null;
const card=(m,full)=>`<div class="meal"><div class="img"><img src="${m.img}" alt="${m.name}" onerror="this.remove()"><span class="badge">متاح للطلب</span></div>
 <div class="info"><h4>${m.name}</h4><div class="d">${m.d}</div>${full?`<div class="desc">${m.desc}</div><div class="stars">★★★★★ <small style="color:var(--mut)">(5.0)</small></div>`:''}
 <div class="row"><span class="price">${m.price} رس</span><button class="btn-gold" onclick="openOrder(${m.id})">${full?'اطلب الآن':'اطلب'}</button></div></div></div>`;
function openOrder(id){cur=meals.find(m=>m.id===id);qty=1;pick=null;$('#confirm').disabled=true;document.querySelectorAll('.loc').forEach(l=>l.classList.remove('sel'));
 $('#oName').textContent=cur.name;$('#oDesc').textContent=cur.d;$('#oBase').textContent='السعر الأساسي: '+cur.price+' ر.س';upd();sheet('order')}
function q(n){qty=Math.max(1,qty+n);upd()}
function upd(){$('#oQ').textContent=qty;$('#oTot').textContent=cur.price*qty+' ر.س'}
function setLoc(i){pick=i;document.querySelectorAll('.loc').forEach((l,j)=>l.classList.toggle('sel',i===j));$('#confirm').disabled=false}

/* ===== التبرع ===== */
const st={amt:null,type:null,freq:0,pay:null};
function sel(b,k,v){b.parentNode.querySelectorAll('.opt').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');st[k]=v;if(k==='amt')$('#custom').value=''}

/* ===== الحساب والبلد ===== */
function setCountry(i){store.set('country',i);const t=$('#ctag');if(t)t.textContent=countries[i];closeAll()}
function rep(){if(!$('#rep').value.trim())return toast('يرجى وصف المشكلة');$('#rep').value='';toast('تم إرسال البلاغ، شكراً لك')}

/* ===== مواقع التوزيع ===== */
function tab(i){document.querySelectorAll('.tabs button').forEach((b,j)=>b.classList.toggle('on',i===j));
 $('#locList').innerHTML=zones[i].map(z=>`<div class="lc"><span class="ico-sq">${I('pin-f')}</span><div class="tx"><b>${z[0]}</b><small>${z[1]}</small><span class="hr">${I('clock')}${z[2]}</span></div><span class="st ${z[3]?'ok':'bz'}">${z[3]?'متاح':'مزدحم'}</span></div>`).join('')}
function locate(){toast('جارٍ تحديد موقعك...');if(navigator.geolocation)navigator.geolocation.getCurrentPosition(()=>toast('تم تحديد موقعك'),()=>toast('تعذر تحديد الموقع، فعّل صلاحية الموقع'))}


/* ===== الحسابات (نسخة تجريبية: تُحفظ في المتصفح فقط، بلا خادم) ===== */
const users=()=>store.get('users',[]);
const me=()=>{const e=store.get('session',null);return users().find(u=>u.email===e)||null};
const okMail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
function toggleEye(b){const inp=b.parentNode.querySelector('input');const show=inp.type==='password';inp.type=show?'text':'password';b.innerHTML=I(show?'eye':'eye-off')}
async function login(){

    const email = $('#em').value.trim();
    const password = $('#pw').value;

    if(!email || !password){
        return toast('يرجى إدخال البريد الإلكتروني وكلمة المرور');
    }

    try{

        const response = await fetch(
            'https://haramain-backend.onrender.com/auth/login',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    identifier:email,
                    password:password
                })
            }
        );

        const data = await response.json();

        if(!response.ok){
            return toast(data.message || 'تعذر تسجيل الدخول');
        }

        if(!data.userId || !data.role || !data.token){
            return toast('بيانات تسجيل الدخول المستلمة غير مكتملة');
        }

        // حفظ بيانات الحساب الحالي
        store.set('loggedInUser',data);
        store.set('session',data.email.toLowerCase());
        store.set('authToken',data.token);

        // تحديد الصفحة حسب نوع الحساب
        const role = data.role.trim().toLowerCase();

        const destinations = {
            user:'home',
            restaurant:'restaurant',
            courier:'courier',
            admin:'admin'
        };

        const destination = destinations[role];

        if(!destination){
            return toast('نوع الحساب غير معروف: ' + role);
        }

        go(
            destination,
            'أهلاً بك ' + (data.fullName || data.username || '')
        );

    }catch(error){

        console.error('Login error:',error);
        toast('تعذر الاتصال بالخادم، حاول مرة أخرى');

    }
}
function register(){
 const n=$('#rn').value.trim(),e=$('#re').value.trim().toLowerCase(),ph=$('#rp').value.trim(),p1=$('#r1').value,p2=$('#r2').value;
 if(n.length<3)return toast('يرجى إدخال الاسم الكامل');
 if(!okMail(e))return toast('صيغة البريد الإلكتروني غير صحيحة');
 if(!/^05\d{8}$/.test(ph))return toast('رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام');
 if(p1.length<6)return toast('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
 if(p1!==p2)return toast('كلمتا المرور غير متطابقتين');
 if(!$('#terms').checked)return toast('يرجى الموافقة على الشروط والأحكام');
 const l=users();if(l.some(u=>u.email===e))return toast('هذا البريد مسجّل مسبقاً، سجّل الدخول');
 l.push({name:n,email:e,phone:ph,pass:p1});store.set('users',l);store.set('session',e);
 go('home','تم إنشاء حسابك بنجاح، أهلاً '+n);
}
let fMail=null;
function forgotStep1(){
 const e=$('#fe').value.trim().toLowerCase();
 if(!okMail(e))return toast('يرجى إدخال بريد إلكتروني صحيح');
 if(!users().some(u=>u.email===e))return toast('لا يوجد حساب مسجّل بهذا البريد');
 fMail=e;$('#fStep1').style.display='none';$('#fStep2').style.display='block';
 $('#fSub').textContent='تم التحقق من حسابك، اختر كلمة مرور جديدة';
}
function forgotStep2(){
 const a=$('#f1').value,b=$('#f2').value;
 if(a.length<6)return toast('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
 if(a!==b)return toast('كلمتا المرور غير متطابقتين');
 const l=users();l.find(u=>u.email===fMail).pass=a;store.set('users',l);
 go('login','تم تغيير كلمة المرور، سجّل الدخول');
}
function logout(){

    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('session');
    localStorage.removeItem('authToken');

    go('login','تم تسجيل الخروج');
}
function accountInit() {
    const backendUser = store.get('loggedInUser', null);
    const localUser = me();

    const u = backendUser || localUser;

    if (!u) return;

    const name = u.fullName || u.username || u.name || 'مستخدم';
    const email = u.email || '';

    $('.hello b').textContent = 'مرحباً ' + name;
    $('.hello small').textContent = email;

    const button = $('.hello button');
    button.textContent = 'تسجيل الخروج';
    button.onclick = logout;
}

/* ===== Apple Pay (واجهة تجريبية) ===== */
let apCb=null;
function applePay(amount,cb){
 apCb=cb;
 if(!$('#apSheet')){document.body.insertAdjacentHTML('beforeend',`<div id="apShade" onclick="apClose()"></div>
 <div id="apSheet" dir="ltr">
  <div class="ap-h"><span class="ap-logo">${I('apple')} Pay</span><button class="ap-x" onclick="apClose()">${I('close')}</button></div>
  <div class="ap-card"><span class="mada">mada</span><div><b>Classic Debit Card (mada)</b><small>•••• 1234</small></div><span class="ap-chk">${I('check')}</span></div>
  <button class="ap-row" onclick="toast('Demo only')">Change Payment Method <span>${I('chev-r')}</span></button>
  <div class="ap-amt"><small id="apPay"></small><b id="apBig"></b></div>
  <div class="ap-ring" id="apRing">${I('touch')}</div><div class="ap-stat" id="apStat">Processing</div>
  <button class="ap-confirm" id="apBtn" onclick="apConfirm()">${I('touch')} Confirm with Face ID</button>
  <div class="ap-foot">Apple Pay • Secure</div></div>`)}
 $('#apPay').textContent='Pay '+amount+' SAR';$('#apBig').textContent='SAR '+Number(amount).toFixed(2);
 $('#apRing').className='ap-ring';$('#apRing').innerHTML=I('touch');$('#apStat').textContent='Processing';$('#apBtn').disabled=false;
 requestAnimationFrame(()=>{$('#apShade').classList.add('on');$('#apSheet').classList.add('on')});
}
function apClose(){$('#apShade').classList.remove('on');$('#apSheet').classList.remove('on')}
function apConfirm(){
 $('#apBtn').disabled=true;$('#apStat').textContent='Verifying...';
 setTimeout(()=>{$('#apRing').className='ap-ring ok';$('#apRing').innerHTML=I('check');$('#apStat').textContent='Payment Successful';
  setTimeout(()=>{apClose();if(apCb)apCb()},1000)},900);
}

/* ===== التبرع ===== */
function donate(){
 if(!st.amt)return toast('يرجى اختيار مبلغ التبرع');
 if(!st.type)return toast('يرجى اختيار نوع التبرع');
 if(!st.pay)return toast('يرجى اختيار طريقة الدفع');
 const done=()=>toast('جزاك الله خيراً، تم تسجيل تبرعك بمبلغ '+st.amt+' ر.س');
 st.pay==='أبل بي'?applePay(st.amt,done):done();
}

/* ===== السلة وإتمام الطلب ===== */
let disc=0,payM='card';
const cartGet=()=>store.get('cart',[]);
function confirmOrder(){
 const c=cartGet(),k=c.find(x=>x.id===cur.id&&x.loc===places[pick]);
 if(k)k.q+=qty;else c.push({id:cur.id,n:cur.name,p:cur.price,q:qty,img:cur.img,loc:places[pick]});
store.set('cart',c);
closeAll();
toast('تمت إضافة الوجبة إلى السلة');}
function cartSum(){return cartGet().reduce((a,x)=>a+x.p*x.q,0)}
function renderCart(){
 const c=cartGet();
 $('#cartItems').innerHTML=c.length?c.map((x,i)=>`<div class="ci"><img src="${x.img}" alt=""><div class="in"><b>${x.n}</b><div class="stp"><button onclick="chQty(${i},-1)" class="${x.q<=1?'dis':''}">${I('minus-c')}</button><span>${x.q}</span><button onclick="chQty(${i},1)">${I('plus-c')}</button></div>${x.loc?`<small>الاستلام: ${x.loc}</small>`:''}</div><span class="pr">${x.p*x.q} ر.س</span><button class="rm" onclick="rmItem(${i})">${I('close')}</button></div>`).join(''):
  `<div class="empty" style="padding:70px 20px 30px"><div class="big">${I('bag')}</div><h3>سلتك فارغة</h3><p>أضف وجبة من الصفحة الرئيسية لتبدأ طلبك</p><button class="btn-gold" style="margin-top:14px" onclick="go('home')">تصفح الوجبات</button></div>`;
 $('#checkout').style.display=c.length?'':'none';
 const sum=cartSum(),tot=Math.round(sum*(1-disc)*100)/100;
 $('#sumV').textContent=sum+' ر.س';$('#totV').textContent=tot+' ر.س';
 $('#discR').style.display=disc?'flex':'none';$('#discV').textContent='- '+Math.round(sum*disc*100)/100+' ر.س';
}
function chQty(i,d){const c=cartGet();c[i].q=Math.max(1,c[i].q+d);store.set('cart',c);renderCart()}
function rmItem(i){const c=cartGet();c.splice(i,1);store.set('cart',c);renderCart()}
function applyCode(){
 const v=$('#code').value.trim().toUpperCase();if(!v)return toast('أدخل كود الخصم');
 if(v==='HARAMAIN10'){disc=.1;toast('تم تطبيق خصم 10%')}else{disc=0;toast('كود الخصم غير صحيح')}renderCart();
}
function setPay(k){payM=k;document.querySelectorAll('.pm').forEach(b=>b.classList.toggle('sel',b.dataset.k===k));
 $('#cardBox').style.display=(k==='card'||k==='mada')?'':'none'}
function fmtCard(el){el.value=el.value.replace(/\D/g,'').slice(0,16).replace(/(.{4})/g,'$1 ').trim();$('#cnC').textContent=el.value.length+'/19'}
function fmtExp(el){let v=el.value.replace(/\D/g,'').slice(0,4);if(v.length>2)v=v.slice(0,2)+'/'+v.slice(2);el.value=v}
function fmtCvv(el){el.value=el.value.replace(/\D/g,'').slice(0,4);$('#cvC').textContent=el.value.length+'/4'}
function payNow(){
 const c=cartGet();if(!c.length)return toast('سلتك فارغة');
 const tot=Math.round(cartSum()*(1-disc)*100)/100;
 const finish=()=>{const h=store.get('history',[]);h.unshift({date:new Date().toISOString(),items:c.map(x=>x.n+' × '+x.q).join('، '),total:tot,pay:payM});store.set('history',h.slice(0,20));store.set('cart',[]);disc=0;renderCart();renderHist();toast('تم إتمام طلبك بنجاح، شكراً لك')};
 if(payM==='card'||payM==='mada'){
  const n=$('#cn').value.replace(/\s/g,''),e=$('#ce').value,v=$('#cv').value,h=$('#ch').value.trim();
  if(n.length!==16)return toast('رقم البطاقة يجب أن يتكون من 16 رقماً');
  const m=+e.slice(0,2),y=+e.slice(3,5),now=new Date();
  if(e.length!==5||m<1||m>12||(2000+y)*12+m<now.getFullYear()*12+now.getMonth()+1)return toast('تاريخ الانتهاء غير صحيح أو منتهي');
  if(v.length<3)return toast('رمز CVV غير صحيح');
  if(h.length<3)return toast('يرجى إدخال اسم حامل البطاقة');
  finish();
 }else if(payM==='apple')applePay(tot,finish);else finish();
}
function renderHist(){const h=store.get('history',[]);
 $('#hist').innerHTML=h.length?'<h3 class="lbl2">الطلبات السابقة</h3><div class="hl">'+h.map(x=>`<div class="hi"><div><b>${x.items}</b><small>${new Date(x.date).toLocaleDateString('ar-EG',{day:'numeric',month:'long',year:'numeric'})}</small></div><span>${x.total} ر.س</span></div>`).join('')+'</div>':''}
function cartInit(){
 $('#dlv').textContent='اليوم، '+new Date().toLocaleDateString('ar-EG',{day:'numeric',month:'long',year:'numeric'});
 renderCart();renderHist();setPay('card');
}

/* ===== تشغيل كل صفحة ===== */
const init={
async home() {
    const container = $('#homeMeals');
    container.innerHTML = '<p style="text-align:center">جاري تحميل الوجبات...</p>';

    try {
        const response = await fetch('https://haramain-backend.onrender.com/meals');

        if (!response.ok) {
            throw new Error('HTTP ' + response.status);
        }

        const data = await response.json();

        meals = data.map(m => ({
            id: m.mealID,
            name: m.mealName,
            d: m.description || '',
            desc: m.description || '',
            price: m.price,
            img: m.image || 'images/meal.jpg',
            city: m.city,
            restaurant: m.organisationName
        }));

        container.innerHTML = meals.slice(0, 4).map(m => card(m)).join('');

    } catch (error) {
        console.error('Home meals error:', error);
        container.innerHTML = '<p style="text-align:center">تعذر تحميل الوجبات.</p>';
    }
},
async meals() {
    const container = $('#allMeals');
    container.innerHTML = '<p style="text-align:center">جاري تحميل الوجبات...</p>';

    try {
        const response = await fetch('https://haramain-backend.onrender.com/meals');

        if (!response.ok) {
            throw new Error('HTTP ' + response.status);
        }

        const data = await response.json();

        meals = data.map(m => ({
            id: m.mealID,
            name: m.mealName,
            d: m.description || '',
            desc: m.description || '',
            price: m.price,
            img: m.image || 'images/meal.jpg',
            city: m.city,
            restaurant: m.organisationName
        }));

        const cities = ['مكة المكرمة', 'المدينة المنورة'];

        container.innerHTML = cities.map(city => {
            const cityMeals = meals.filter(m => m.city === city);

            if (!cityMeals.length) return '';

            const restaurants = [...new Set(cityMeals.map(m => m.restaurant))];

            return `
                <h3 style="margin:20px 0 12px">${city}</h3>
                ${restaurants.map(restaurant => `
                    <h4 style="margin:15px 0 10px">${restaurant}</h4>
                    ${cityMeals
                        .filter(m => m.restaurant === restaurant)
                        .map(m => card(m, 1))
                        .join('')}
                `).join('')}
            `;
               }).join('');
    } catch (error) {
        console.error('Meals error:', error);
        container.innerHTML = '<p style="text-align:center">تعذر تحميل الوجبات.</p>';
    }
},

donate(){
  $('#amts').innerHTML=[10,25,50,100].map(a=>`<button class="opt amt" onclick="sel(this,'amt',${a})">${a}<small>ر.س</small></button>`).join('');
  $('#types').innerHTML=[['utensils','وجبات للحجاج'],['box','سلال إفطار'],['drop','ماء'],['donate','صدقة عامة']].map(t=>`<button class="opt" onclick="sel(this,'type','${t[1]}')">${I(t[0])}${t[1]}</button>`).join('');
  $('#freq').innerHTML=['مرة واحدة','شهرياً'].map((f,i)=>`<button class="opt pill ${i?'':'sel'}" onclick="sel(this,'freq',${i})">${f}</button>`).join('');
  const mada='<svg viewBox="0 0 40 24" width="36" height="22" style="display:block;margin:0 auto 2px"><rect x="4" y="2" width="32" height="5" rx="2.5" fill="#259bd6"/><rect x="4" y="9.5" width="32" height="5" rx="2.5" fill="#259bd6"/><rect x="4" y="17" width="32" height="5" rx="2.5" fill="#84bde8"/></svg>';
  $('#pays').innerHTML=[[mada,'مدى'],['<b style="font-style:italic;color:#1a1f71;font-size:19px">VISA</b>','فيزا'],[I('apple')+'<small>Pay</small>','أبل بي'],['<span class="tg" style="background:#e3f1ea;color:#0b3d2e">tabby</span>','تابي'],['<span class="tg" style="background:#f3dcf0;color:#7a2e6e">تمارا</span>','تمارا']].map(p=>`<button class="opt pay" onclick="sel(this,'pay','${p[1]}')"><div>${p[0]}</div>${p[1]}</button>`).join('');
  $('#custom').oninput=e=>{document.querySelectorAll('.amt').forEach(b=>b.classList.remove('sel'));st.amt=+e.target.value||null};
 },
 orders(){cartInit()},
 account(){$('#ctag').textContent=countries[store.get('country',0)];accountInit()},
 about(){},
 locations(){tab(0)},
 partners(){$('#pList').innerHTML=partners.map(x=>`<button class="pc" onclick="toast('${x[0]}')"><span class="ico-sq">${I('building')}</span><div class="tx"><b>${x[0]}</b><small>${x[1]}</small><span class="vf">${I('verified')}موثقة</span></div><span class="chev">${I('chev-r')}</span></button>`).join('')}
};

function boot(){
 const pg=document.body.dataset.page;
 document.body.insertAdjacentHTML('afterbegin',SPRITE+SPRITE_X);
 document.body.insertAdjacentHTML('beforeend',SHELL);
 if(document.body.dataset.nav==='1'){document.body.insertAdjacentHTML('beforeend',NAV);
  document.querySelectorAll('#nav button').forEach(b=>b.classList.toggle('on',b.dataset.t===pg))}
 $('#locPick').innerHTML=places.map((p,i)=>`<button class="loc" onclick="setLoc(${i})"><i>${I('pin-f').replace('#f6ebd1','#fff')}</i>${p}</button>`).join('');
 $('#ctryList').innerHTML=countries.map((c,i)=>`<button class="ctry" onclick="setCountry(${i})">${c}</button>`).join('');
 if(init[pg])init[pg]();
 try{const m=sessionStorage.getItem('toast');if(m){sessionStorage.removeItem('toast');toast(m)}}catch(e){}
}
boot();
