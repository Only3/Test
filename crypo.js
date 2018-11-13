
// RC4

function Rc4(a, b){ var x,y,t; var s=[]; for (var i = 0; i < 256; i++) { s[i] = i } y=0; for (x = 0; x < 256; x++) { y = (b.charCodeAt(x%b.length) +s[x] + y) % 256; t = s[x]; s[x] = s[y]; s[y] = t } x = 0; y = 0; var z = ""; for (x = 0; x < a.length; x++) { var x2 = x % 256; y = (s[x2] + y) % 256; t = s[x2]; s[x2] = s[y]; s[y] = t; z += String.fromCharCode((a.charCodeAt(x) ^ s[(s[x2] + s[y]) % 256])) } return z; }

// BASE-64

var ABC="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function BASE64_encode(a){return _BE(a,ABC)}

function BASE64_decode(a){return _BD(a,ABC)}

function _BE(a,x){var r='';var b,c2,c3,e1,e2,e3,e4;var i=0;a=_UE(a);k=x;while(i<a.length){b=a.charCodeAt(i++);c2=a.charCodeAt(i++);c3=a.charCodeAt(i++);e1=b>>2;e2=((b&3)<<4)|(c2>>4);e3=((c2&15)<<2)|(c3>>6);e4=c3&63;if(isNaN(c2)){e3=e4=64}else if(isNaN(c3)){e4=64}r=r+this.k.charAt(e1)+this.k.charAt(e2)+this.k.charAt(e3)+this.k.charAt(e4)}return r}function _BD(a,x){var r='';var b,c2,c3;var c,e2,e3,e4;var i=0;k=x;a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");a=a.replace(/^\s+|\s/g,'');while(i<a.length){c=this.k.indexOf(a.charAt(i++));e2=this.k.indexOf(a.charAt(i++));e3=this.k.indexOf(a.charAt(i++));e4=this.k.indexOf(a.charAt(i++));b=(c<<2)|(e2>>4);c2=((e2&15)<<4)|(e3>>2);c3=((e3&3)<<6)|e4;r=r+String.fromCharCode(b);if(e3!=64){r=r+String.fromCharCode(c2)}if(e4!=64){r=r+String.fromCharCode(c3)}}r=_UD(r);u=r.match(/%/);if(u){return unescape(r)}else{return r}}function _UE(a){var r='';a=a.replace(/\r\n/g,"\n");for(var n=0;n<a.length;n++){var c=a.charCodeAt(n);if(c<128){r+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){r+=String.fromCharCode((c>>6)|192);r+=String.fromCharCode((c&63)|128)}else{r+=String.fromCharCode((c>>12)|224);r+=String.fromCharCode(((c>>6)&63)|128);r+=String.fromCharCode((c&63)|128)}}return r}function _UD(a){var r='';var i=0;var c=c1=c2=0;while(i<a.length){c=a.charCodeAt(i);if(c<128){r+=String.fromCharCode(c);i++}else if((c>191)&&(c<224)){c2=a.charCodeAt(i+1);r+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2}else{c2=a.charCodeAt(i+1);c3=a.charCodeAt(i+2);r+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3}}return r}function _RC(a,o,x){if(a==''){return a}var b='';var c=a;for(i=0;i<c['length'];i++){var e=0;var d=c['charAt'](i);for(;(e<x['length'])&&(d!=x['charAt'](e));e++){};if(e<x['length']){b+=o['charAt'](e)}else{b+=d}}return b}

// ATOM-128

function ATOM128_encode(a){var KEY="/128GhIoPQROSTeUbADfgHijKLM+n0pFWXY456xyzB7=39VaqrstJklmNuZvwcdEC";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function ATOM128_decode(a){var KEY="/128GhIoPQROSTeUbADfgHijKLM+n0pFWXY456xyzB7=39VaqrstJklmNuZvwcdEC";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// AER-256

function _comesc(e){for(var r=new Array,n=new Array,a=0;a<e.length;a++)r[a]=e.charAt(a);n.a="61",n.b="62",n.c="63",n.d="64",n.e="65",n.f="66",n.g="67",n.h="68",n.i="69",n.j="6A",n.k="6B",n.l="6C",n.m="6D",n.n="6E",n.o="6F",n.p="70",n.q="71",n.r="72",n.s="73",n.t="74",n.u="75",n.v="76",n.w="77",n.x="78",n.y="79",n.z="7A",n.A="41",n.B="42",n.C="43",n.D="44",n.E="45",n.F="46",n.G="47",n.H="48",n.I="49",n.J="4A",n.K="4B",n.L="4C",n.M="4D",n.N="4E",n.O="4F",n.P="50",n.Q="51",n.R="52",n.S="53",n.T="54",n.U="55",n.V="56",n.W="57",n.X="58",n.Y="59",n.Z="5A",n[0]="30",n[1]="31",n[2]="32",n[3]="33",n[4]="34",n[5]="35",n[6]="36",n[7]="37",n[8]="38",n[9]="39",n["*"]="2A",n["/"]="2F",n._="5F",n["+"]="2B",n["-"]="2D",n["@"]="40",n["."]="2E";for(a=0;a<r.length;a++)r[a]=r[a]==escape(r[a])?n[r[a]]:escape(r[a]).replace(/%/,"");return r.join("")}function _dechex(e){for(var r=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"),n="",a=e;a>0;a=(a-a%16)/16)n=r[a%16]+""+n;return n.length%2&&(n="0"+n),n}

function AER256_encode(a,p){if(p.length<3)return window.alert("The key must be at least 3 characters long"),a;for(var n=new Array,r="",o=new Array("+=","/=","-=","*= 0.02 *"),x=0;x<p.length;x++)n[x]=parseInt("0x"+_comesc(p.charAt(x)));for(var x=0,y="";x<a.length;x+=Math.round(p.length/2),y=","){var e=parseInt("0x"+_comesc(a.substr(x,Math.round(p.length/2))));if(isNaN(e))return window.alert("Encryption Failed!"),a;for(var z=0;z<p.length;z++)eval("e "+o[z%3]+" "+n[z]+";");r+=y+e}return r}

function AER256_decode(a,p){if(p.length<3)return window.alert("The key must be at least 3 characters long"),a;for(var e=new Array,j=a.split(","),r="",o=new Array("-=","*=","+=","/= 0.02 *"),x=0;x<p.length;x++)e[x]=parseInt("0x"+_comesc(p.charAt(x)));for(var x=0;x<j.length;x++){j[x]=parseFloat(j[x]);for(var z=p.length-1;z>=0;z--)eval("j[x] "+o[z%3]+" "+e[z]+";");j[x]=_dechex(Math.round(j[x]))}for(j=j.join(""),x=0;x<j.length;x+=2)r+=unescape("%"+j.substr(x,2));return r}

// ELION-8F

function ELION8F_encode(a){var KEY="ELiON+8F/Cu6cQgUa3qs1wVfBhPjA97RkSe5Hb0G4yJpYvdzTWIr2tKnZoMXlxmD=";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function ELION8F_decode(a){var KEY="ELiON+8F/Cu6cQgUa3qs1wVfBhPjA97RkSe5Hb0G4yJpYvdzTWIr2tKnZoMXlxmD=";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// ENTOF-5Z

function ENTOF5Z_encode(a){var KEY=
"WiLsMeI3fUlBr6xSb2a8dDyCzVtGmX0vKp4JnQk7q1g9uRoHhAcPwYj+ENTOF/5Z=";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function ENTOF5Z_decode(a){var KEY=
"WiLsMeI3fUlBr6xSb2a8dDyCzVtGmX0vKp4JnQk7q1g9uRoHhAcPwYj+ENTOF/5Z=";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// ESAB-46

function ESAB46_encode(a){var KEY="ABCDqrs456tuvNOPwxyz012KLM3789=+QRSTUVWXYZabcdefghijklmnopEFGHIJ/";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function ESAB46_decode(a){var KEY="ABCDqrs456tuvNOPwxyz012KLM3789=+QRSTUVWXYZabcdefghijklmnopEFGHIJ/";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// EZIP-64

function EZIP64_encode(a,p){if(p.length<3)return window.alert("The key must be at least 3 characters long"),a;for(var n=new Array,r="",o=new Array('+=','/=','-=','*= 0.02 *'),x=0;x<p.length;x++)n[x]=parseInt("0x"+_comesc(p.charAt(x)));for(var x=0,y="";x<a.length;x+=Math.round(p.length/3),y="/"){var e=parseInt("0x"+_comesc(a.substr(x,Math.round(p.length/3))));if(isNaN(e))return window.alert("Encryption Failed!"),a;for(var z=0;z<p.length;z++)eval("e "+o[z%4]+" "+n[z]+";");r+=y+e}return r}

function EZIP64_decode(a,p){if(p.length<3)return window.alert("The key must be at least 3 characters long"),a;for(var e=new Array,j=a.split("/"),r="",o=new Array('-=','*=','+=','/= 0.02 *'),x=0;x<p.length;x++)e[x]=parseInt("0x"+_comesc(p.charAt(x)));for(var x=0;x<j.length;x++){j[x]=parseFloat(j[x]);for(var z=p.length-1;z>=0;z--)eval("j[x] "+o[z%4]+" "+e[z]+";");j[x]=_dechex(Math.round(j[x]))}for(j=j.join(""),x=0;x<j.length;x+=2)r+=unescape("%"+j.substr(x,2));return r}

// FERON-74

function FERON74_encode(a){var KEY="75XYTabcS/UVWdefADqr6RuvN8PBCsQtwx2KLyz+OM3Hk9ghi01ZFlmnjopE=GIJ4";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function FERON74_decode(a){var KEY="75XYTabcS/UVWdefADqr6RuvN8PBCsQtwx2KLyz+OM3Hk9ghi01ZFlmnjopE=GIJ4";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// GILA-7

function GILA7_encode(a){var KEY="7ZSTJK+W=cVtBCasyf0gzA8uvwDEq3XH/1RMNOILPQU4klm65YbdeFrx2hij9nopG";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function GILA7_decode(a){var KEY="7ZSTJK+W=cVtBCasyf0gzA8uvwDEq3XH/1RMNOILPQU4klm65YbdeFrx2hij9nopG";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// HAZZ-15

var KEY="HNO4klm6ij9n+J2hyf0gzA8uvwDEq3X1Q7ZKeFrWcVTts/MRGYbdxSo=ILaUpPBC5";

function HAZZ15_encode(a){a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function HAZZ15_decode(a){a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// MEGAN-35

function MEGAN35_encode(a){var KEY="3GHIJKLMNOPQRSTUb=cdefghijklmnopWXYZ/12+406789VaqrstuvwxyzABCDEF5";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function MEGAN35_decode(a){var KEY="3GHIJKLMNOPQRSTUb=cdefghijklmnopWXYZ/12+406789VaqrstuvwxyzABCDEF5";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// NOBYZ-5T

function NOBYZ5T_encode(a){var KEY="NOBYZ+5T/4n2jAkCiL3Rq1lfKdcFowIeEzSmPvuUpQxVhJXG8abyt0r9WH6sgD7M=";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function NOBYZ5T_decode(a){var KEY="NOBYZ+5T/4n2jAkCiL3Rq1lfKdcFowIeEzSmPvuUpQxVhJXG8abyt0r9WH6sgD7M=";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// OKTO-3

function OKTO3_encode(a,p){if(p.length<3)return window.alert("The key must be at least 3 characters long"),a;for(var n=new Array,r="",o=new Array('+=','/=','-=','*= 500.005 *'),x=0;x<p.length;x++)n[x]=parseInt("0x"+_comesc(p.charAt(x)));for(var x=0,y="";x<a.length;x+=Math.round(p.length/6),y="\n"){var e=parseInt("0x"+_comesc(a.substr(x,Math.round(p.length/6))));if(isNaN(e))return window.alert("Encryption Failed!"),a;for(var z=0;z<p.length;z++)eval("e "+o[z%4]+" "+n[z]+";");r+=y+e}return r}

function OKTO3_decode(a,p){if(p.length<3)return window.alert("The key must be at least 3 characters long"),a;for(var e=new Array,j=a.split("\n"),r="",o=new Array('-=','*=','+=','/= 500.005 *'),x=0;x<p.length;x++)e[x]=parseInt("0x"+_comesc(p.charAt(x)));for(var x=0;x<j.length;x++){j[x]=parseFloat(j[x]);for(var z=p.length-1;z>=0;z--)eval("j[x] "+o[z%4]+" "+e[z]+";");j[x]=_dechex(Math.round(j[x]))}for(j=j.join(""),x=0;x<j.length;x+=2)r+=unescape("%"+j.substr(x,2));return r}

// OMEGA-3Y 

function OMEGA3Y_encode(a){var KEY="OMEGA+3Y/eNx8HIcT4W1y50SLolZBhtUqaPrCkzdjs67gDwFRipunbXK2mVvfQ9J=";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function OMEGA3Y_decode(a){var KEY="OMEGA+3Y/eNx8HIcT4W1y50SLolZBhtUqaPrCkzdjs67gDwFRipunbXK2mVvfQ9J=";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// TIGO-3FX

function TIGO3FX_encode(a){var KEY="FrsxyzA8VtuvwDEqWZ/1+4klm67=cBCa5Ybdef0g2hij9nopMNO3GHIRSTJKLPQUX";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function TIGO3FX_decode(a){var KEY="FrsxyzA8VtuvwDEqWZ/1+4klm67=cBCa5Ybdef0g2hij9nopMNO3GHIRSTJKLPQUX";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// TRIPO-5

function TRIPO5_encode(a){var KEY="ghijopE+G78lmnIJQRXY=abcS/UVWdefABCs456tDqruvNOPwx2KLyz01M3Hk9ZFT";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function TRIPO5_decode(a){var KEY="ghijopE+G78lmnIJQRXY=abcS/UVWdefABCs456tDqruvNOPwx2KLyz01M3Hk9ZFT";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// TYGER-2X

function TYGER2X_encode(a){var KEY="TYGER+2X/MBqHg4OfFl6pu5zU19P0aZhVmS8vLrxjNIkbwWi7dJn3oyCQKtecDAs=";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function TYGER2X_decode(a){var KEY="TYGER+2X/MBqHg4OfFl6pu5zU19P0aZhVmS8vLrxjNIkbwWi7dJn3oyCQKtecDAs=";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// UTEGO-5A

function UTEGO5A_encode(a){var KEY="UTEGO+5A/YklBc3nXs2rHxj9KuMwS6vNeDqL1yQPfJhgCbZmaFiI4RdWtVp7zo08=";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function UTEGO5A_decode(a){var KEY="UTEGO+5A/YklBc3nXs2rHxj9KuMwS6vNeDqL1yQPfJhgCbZmaFiI4RdWtVp7zo08=";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// XYMAN-4F

function XYMAN4F_encode(a){var KEY="XYMAN+4F/uZiWs8JpVoUtSa9OnHlhEz5g6QxIqTf1BmDj3PyLe7c0v2rRkGdbKwC=";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function XYMAN4F_decode(a){var KEY="XYMAN+4F/uZiWs8JpVoUtSa9OnHlhEz5g6QxIqTf1BmDj3PyLe7c0v2rRkGdbKwC=";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}

// ZARA-128

function ZARA128_encode(a,p){if(p.length<3)return window.alert("The key must be at least 3 characters long"),a;for(var n=new Array,r="",o=new Array('+=','/=','-=','*= 0.01 *'),x=0;x<p.length;x++)n[x]=parseInt("0x"+_comesc(p.charAt(x)));for(var x=0,y="";x<a.length;x+=Math.round(p.length/5),y=" "){var e=parseInt("0x"+_comesc(a.substr(x,Math.round(p.length/5))));if(isNaN(e))return window.alert("Encryption Failed!"),a;for(var z=0;z<p.length;z++)eval("e "+o[z%1]+" "+n[z]+";");r+=y+e}return r}

function ZARA128_decode(a,p){if(p.length<3)return window.alert("The key must be at least 3 characters long"),a;for(var e=new Array,j=a.split(" "),r="",o=new Array('-=','*=','+=','/= 0.01 *'),x=0;x<p.length;x++)e[x]=parseInt("0x"+_comesc(p.charAt(x)));for(var x=0;x<j.length;x++){j[x]=parseFloat(j[x]);for(var z=p.length-1;z>=0;z--)eval("j[x] "+o[z%1]+" "+e[z]+";");j[x]=_dechex(Math.round(j[x]))}for(j=j.join(""),x=0;x<j.length;x+=2)r+=unescape("%"+j.substr(x,2));return r}

// ZONG-22

function ZONG22_encode(a){var KEY="ZKj9n+yf0wDVX1s/5YbdxSo=ILaUpPBCHg8uvNO4klm6iJGhQ7eFrWczAMEq3RTt2";a=_BE(a,ABC);a=_RC(a,KEY,ABC);return a}

function ZONG22_decode(a){var KEY="ZKj9n+yf0wDVX1s/5YbdxSo=ILaUpPBCHg8uvNO4klm6iJGhQ7eFrWczAMEq3RTt2";a=_RC(a,ABC,KEY);a=_BD(a,ABC);return a}
