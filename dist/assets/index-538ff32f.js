(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eu="148",fm=0,Uu=1,dm=2,rd=1,pm=2,oo=3,tr=0,Yn=1,ll=2,Zo=3,Zi=0,gs=1,Bu=2,Vu=3,Gu=4,mm=5,cs=100,gm=101,_m=102,Hu=103,Wu=104,xm=200,vm=201,ym=202,Mm=203,sd=204,od=205,bm=206,Sm=207,wm=208,Tm=209,Em=210,Am=0,Cm=1,Lm=2,xc=3,Rm=4,Pm=5,Dm=6,Im=7,ad=0,Nm=1,Om=2,Li=0,Fm=1,km=2,zm=3,Um=4,Bm=5,ld=300,Ts=301,Es=302,vc=303,yc=304,cl=306,As=1e3,Gn=1001,ja=1002,Ut=1003,Mc=1004,Oa=1005,mn=1006,cd=1007,Ir=1008,Nr=1009,Vm=1010,Gm=1011,ud=1012,Hm=1013,xr=1014,Xi=1015,Ro=1016,Wm=1017,Xm=1018,_s=1020,qm=1021,Ym=1022,Hn=1023,jm=1024,Km=1025,Sr=1026,Cs=1027,$m=1028,Zm=1029,Jm=1030,Qm=1031,eg=1033,yl=33776,Ml=33777,bl=33778,Sl=33779,Xu=35840,qu=35841,Yu=35842,ju=35843,tg=36196,Ku=37492,$u=37496,Zu=37808,Ju=37809,Qu=37810,eh=37811,th=37812,nh=37813,ih=37814,rh=37815,sh=37816,oh=37817,ah=37818,lh=37819,ch=37820,uh=37821,hh=36492,Po=2300,Ls=2301,wl=2302,fh=2400,dh=2401,ph=2402,ng=2500,ig=1,hd=2,Or=3e3,ot=3001,rg=3200,sg=3201,fd=0,og=1,ii="srgb",Do="srgb-linear",Tl=7680,ag=519,bc=35044,mh="300 es",Sc=1035;class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gh=1234567;const go=Math.PI/180,Io=180/Math.PI;function ti(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[a&255]+qt[a>>8&255]+qt[a>>16&255]+qt[a>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function an(a,e,t){return Math.max(e,Math.min(t,a))}function tu(a,e){return(a%e+e)%e}function lg(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function cg(a,e,t){return a!==e?(t-a)/(e-a):0}function _o(a,e,t){return(1-t)*a+t*e}function ug(a,e,t,n){return _o(a,e,1-Math.exp(-t*n))}function hg(a,e=1){return e-Math.abs(tu(a,e*2)-e)}function fg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function dg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function pg(a,e){return a+Math.floor(Math.random()*(e-a+1))}function mg(a,e){return a+Math.random()*(e-a)}function gg(a){return a*(.5-Math.random())}function _g(a){a!==void 0&&(gh=a);let e=gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xg(a){return a*go}function vg(a){return a*Io}function wc(a){return(a&a-1)===0&&a!==0}function dd(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Ka(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function yg(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),f=s((e-n)/2),d=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*f,o*c);break;case"YZY":a.set(l*f,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*f,o*u,o*c);break;case"XZX":a.set(o*u,l*g,l*d,o*c);break;case"YXY":a.set(l*d,o*u,l*g,o*c);break;case"ZYZ":a.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ai(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ut(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var Mg=Object.freeze({__proto__:null,DEG2RAD:go,RAD2DEG:Io,generateUUID:ti,clamp:an,euclideanModulo:tu,mapLinear:lg,inverseLerp:cg,lerp:_o,damp:ug,pingpong:hg,smoothstep:fg,smootherstep:dg,randInt:pg,randFloat:mg,randFloatSpread:gg,seededRandom:_g,degToRad:xg,radToDeg:vg,isPowerOfTwo:wc,ceilPowerOfTwo:dd,floorPowerOfTwo:Ka,setQuaternionFromProperEuler:yg,normalize:ut,denormalize:Ai});class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dn{constructor(){Dn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],p=i[0],m=i[3],_=i[6],b=i[1],v=i[4],y=i[7],M=i[2],E=i[5],A=i[8];return r[0]=s*p+o*b+l*M,r[3]=s*m+o*v+l*E,r[6]=s*_+o*y+l*A,r[1]=c*p+u*b+h*M,r[4]=c*m+u*v+h*E,r[7]=c*_+u*y+h*A,r[2]=f*p+d*b+g*M,r[5]=f*m+d*v+g*E,r[8]=f*_+d*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*r*u+n*o*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,f=o*l-u*r,d=c*r-s*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(o*n-i*s)*p,e[3]=f*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-o*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(s*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(El.makeScale(e,t)),this}rotate(e){return this.premultiply(El.makeRotation(-e)),this}translate(e,t){return this.premultiply(El.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const El=new Dn;function pd(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function No(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function wr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Fa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Al={[ii]:{[Do]:wr},[Do]:{[ii]:Fa}},Jt={legacyMode:!0,get workingColorSpace(){return Do},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Al[e]&&Al[e][t]!==void 0){const n=Al[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rt={r:0,g:0,b:0},$n={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Cl(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function Qo(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Jt.workingColorSpace){if(e=tu(e,1),t=an(t,0,1),n=an(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Cl(s,r,e+1/3),this.g=Cl(s,r,e),this.b=Cl(s,r,e-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(e,t=ii){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Jt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Jt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Jt.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Jt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ii){const n=md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Jt.fromWorkingColorSpace(Qo(this,Rt),e),an(Rt.r*255,0,255)<<16^an(Rt.g*255,0,255)<<8^an(Rt.b*255,0,255)<<0}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Qo(this,Rt),t);const n=Rt.r,i=Rt.g,r=Rt.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Qo(this,Rt),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=ii){return Jt.fromWorkingColorSpace(Qo(this,Rt),e),e!==ii?`color(${e} ${Rt.r} ${Rt.g} ${Rt.b})`:`rgb(${Rt.r*255|0},${Rt.g*255|0},${Rt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL($n),$n.h+=e,$n.s+=t,$n.l+=n,this.setHSL($n.h,$n.s,$n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Jo);const n=_o($n.h,Jo.h,t),i=_o($n.s,Jo.s,t),r=_o($n.l,Jo.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ve.NAMES=md;let qr;class gd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qr===void 0&&(qr=No("canvas")),qr.width=e.width,qr.height=e.height;const n=qr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=No("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=wr(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wr(t[n]/255)*255):t[n]=wr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class _d{constructor(e=null){this.isSource=!0,this.uuid=ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Ll(i[s].image)):r.push(Ll(i[s]))}else r=Ll(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ll(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?gd.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bg=0;class Wt extends zs{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Gn,i=Gn,r=mn,s=Ir,o=Hn,l=Nr,c=Wt.DEFAULT_ANISOTROPY,u=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=ti(),this.name="",this.source=new _d(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case As:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case As:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=ld;Wt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(d+1)/2,M=(_+1)/2,E=(u+f)/4,A=(h+p)/4,x=(g+m)/4;return v>y&&v>M?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=A/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=x/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=A/r,i=x/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-p)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fr extends zs{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _d(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xd extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sg extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[s+0],d=r[s+1],g=r[s+2],p=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==f||c!==d||u!==g){let m=1-o;const _=l*f+c*d+u*g+h*p,b=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const M=Math.sqrt(v),E=Math.atan2(M,_*b);m=Math.sin(m*E)/M,o=Math.sin(o*E)/M}const y=o*b;if(l=l*m+f*y,c=c*m+d*y,u=u*m+g*y,h=h*m+p*y,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],f=r[s+1],d=r[s+2],g=r[s+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(s-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-r*l,this._y=i*u+s*l+r*o-n*c,this._z=r*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_h.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-s*t,f=-r*t-s*n-o*i;return this.x=c*l+f*-r+u*-o-h*-s,this.y=u*l+f*-s+h*-r-c*-o,this.z=h*l+f*-o+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rl=new F,_h=new sr;class Us{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let s=0,o=r.count;s<o;s++)ar.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(ar)}else n.boundingBox===null&&n.computeBoundingBox(),Pl.copy(n.boundingBox),Pl.applyMatrix4(e.matrixWorld),this.union(Pl);const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ar),ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),ea.subVectors(this.max,Ws),Yr.subVectors(e.a,Ws),jr.subVectors(e.b,Ws),Kr.subVectors(e.c,Ws),ki.subVectors(jr,Yr),zi.subVectors(Kr,jr),lr.subVectors(Yr,Kr);let t=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-lr.z,lr.y,ki.z,0,-ki.x,zi.z,0,-zi.x,lr.z,0,-lr.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-lr.y,lr.x,0];return!Dl(t,Yr,jr,Kr,ea)||(t=[1,0,0,0,1,0,0,0,1],!Dl(t,Yr,jr,Kr,ea))?!1:(ta.crossVectors(ki,zi),t=[ta.x,ta.y,ta.z],Dl(t,Yr,jr,Kr,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ar.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ar).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new F,new F,new F,new F,new F,new F,new F,new F],ar=new F,Pl=new Us,Yr=new F,jr=new F,Kr=new F,ki=new F,zi=new F,lr=new F,Ws=new F,ea=new F,ta=new F,cr=new F;function Dl(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){cr.fromArray(a,r);const o=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),l=e.dot(cr),c=t.dot(cr),u=n.dot(cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const wg=new Us,Xs=new F,Il=new F;class Bs{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Il)),this.expandByPoint(Xs.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new F,Nl=new F,na=new F,Ui=new F,Ol=new F,ia=new F,Fl=new F;class nu{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.direction).multiplyScalar(t).add(this.origin),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Nl.copy(e).add(t).multiplyScalar(.5),na.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Nl);const r=e.distanceTo(t)*.5,s=-this.direction.dot(na),o=Ui.dot(this.direction),l=-Ui.dot(na),c=Ui.lengthSq(),u=Math.abs(1-s*s);let h,f,d,g;if(u>0)if(h=s*l-o,f=s*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,d=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(na).multiplyScalar(f).add(Nl),d}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const n=xi.dot(this.direction),i=xi.dot(xi)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,i,r){Ol.subVectors(t,e),ia.subVectors(n,e),Fl.crossVectors(Ol,ia);let s=this.direction.dot(Fl),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ui.subVectors(this.origin,e);const l=o*this.direction.dot(ia.crossVectors(Ui,ia));if(l<0)return null;const c=o*this.direction.dot(Ol.cross(Ui));if(c<0||l+c>s)return null;const u=-o*Ui.dot(Fl);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,o,l,c,u,h,f,d,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=s,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$r.setFromMatrixColumn(e,0).length(),r=1/$r.setFromMatrixColumn(e,1).length(),s=1/$r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=s*u,d=s*h,g=o*u,p=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-p*c,t[9]=-o*l,t[2]=p-f*c,t[6]=g+d*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f+p*o,t[4]=g*o-d,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=d*o-g,t[6]=p+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f-p*o,t[4]=-s*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=s*u,t[9]=p-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,d=s*h,g=o*u,p=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,d=s*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-f*h,t[8]=g*h+d,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=s*l,d=s*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=s*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tg,e,Eg)}lookAt(e,t,n){const i=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Bi.crossVectors(n,wn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Bi.crossVectors(n,wn)),Bi.normalize(),ra.crossVectors(wn,Bi),i[0]=Bi.x,i[4]=ra.x,i[8]=wn.x,i[1]=Bi.y,i[5]=ra.y,i[9]=wn.y,i[2]=Bi.z,i[6]=ra.z,i[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],p=n[6],m=n[10],_=n[14],b=n[3],v=n[7],y=n[11],M=n[15],E=i[0],A=i[4],x=i[8],w=i[12],R=i[1],z=i[5],k=i[9],I=i[13],D=i[2],U=i[6],K=i[10],X=i[14],V=i[3],J=i[7],C=i[11],B=i[15];return r[0]=s*E+o*R+l*D+c*V,r[4]=s*A+o*z+l*U+c*J,r[8]=s*x+o*k+l*K+c*C,r[12]=s*w+o*I+l*X+c*B,r[1]=u*E+h*R+f*D+d*V,r[5]=u*A+h*z+f*U+d*J,r[9]=u*x+h*k+f*K+d*C,r[13]=u*w+h*I+f*X+d*B,r[2]=g*E+p*R+m*D+_*V,r[6]=g*A+p*z+m*U+_*J,r[10]=g*x+p*k+m*K+_*C,r[14]=g*w+p*I+m*X+_*B,r[3]=b*E+v*R+y*D+M*V,r[7]=b*A+v*z+y*U+M*J,r[11]=b*x+v*k+y*K+M*C,r[15]=b*w+v*I+y*X+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*d-n*l*d)+p*(+t*l*d-t*c*f+r*s*f-i*s*d+i*c*u-r*l*u)+m*(+t*c*h-t*o*d-r*s*h+n*s*d+r*o*u-n*c*u)+_*(-i*o*u-t*l*h+t*o*f+i*s*h-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],p=e[13],m=e[14],_=e[15],b=h*m*c-p*f*c+p*l*d-o*m*d-h*l*_+o*f*_,v=g*f*c-u*m*c-g*l*d+s*m*d+u*l*_-s*f*_,y=u*p*c-g*h*c+g*o*d-s*p*d-u*o*_+s*h*_,M=g*h*l-u*p*l-g*o*f+s*p*f+u*o*m-s*h*m,E=t*b+n*v+i*y+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=b*A,e[1]=(p*f*r-h*m*r-p*i*d+n*m*d+h*i*_-n*f*_)*A,e[2]=(o*m*r-p*l*r+p*i*c-n*m*c-o*i*_+n*l*_)*A,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*A,e[4]=v*A,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*_+t*f*_)*A,e[6]=(g*l*r-s*m*r-g*i*c+t*m*c+s*i*_-t*l*_)*A,e[7]=(s*f*r-u*l*r+u*i*c-t*f*c-s*i*d+t*l*d)*A,e[8]=y*A,e[9]=(g*h*r-u*p*r-g*n*d+t*p*d+u*n*_-t*h*_)*A,e[10]=(s*p*r-g*o*r+g*n*c-t*p*c-s*n*_+t*o*_)*A,e[11]=(u*o*r-s*h*r-u*n*c+t*h*c+s*n*d-t*o*d)*A,e[12]=M*A,e[13]=(u*p*i-g*h*i+g*n*f-t*p*f-u*n*m+t*h*m)*A,e[14]=(g*o*i-s*p*i-g*n*l+t*p*l+s*n*m-t*o*m)*A,e[15]=(s*h*i-u*o*i+u*n*l-t*h*l-s*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,h=o+o,f=r*c,d=r*u,g=r*h,p=s*u,m=s*h,_=o*h,b=l*c,v=l*u,y=l*h,M=n.x,E=n.y,A=n.z;return i[0]=(1-(p+_))*M,i[1]=(d+y)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(f+_))*E,i[6]=(m+b)*E,i[7]=0,i[8]=(g+v)*A,i[9]=(m-b)*A,i[10]=(1-(f+p))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=$r.set(i[0],i[1],i[2]).length();const s=$r.set(i[4],i[5],i[6]).length(),o=$r.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Zn.copy(this);const c=1/r,u=1/s,h=1/o;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,t.setFromRotationMatrix(Zn),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(s+r)/(s-r),d=-2*s*r/(s-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,s){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,f=(n+i)*c,d=(s+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $r=new F,Zn=new Ke,Tg=new F(0,0,0),Eg=new F(1,1,1),Bi=new F,ra=new F,wn=new F,xh=new Ke,vh=new sr;class qo{constructor(e=0,t=0,n=0,i=qo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-an(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}qo.DefaultOrder="XYZ";qo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ag=0;const yh=new F,Zr=new sr,vi=new Ke,sa=new F,qs=new F,Cg=new F,Lg=new sr,Mh=new F(1,0,0),bh=new F(0,1,0),Sh=new F(0,0,1),Rg={type:"added"},wh={type:"removed"};class Mt extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DefaultUp.clone();const e=new F,t=new qo,n=new sr,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Dn}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Mt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Mt.DefaultMatrixWorldAutoUpdate,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Mh,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return yh.copy(e).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mh,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sa.copy(e):sa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(qs,sa,this.up):vi.lookAt(sa,qs,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),Zr.setFromRotationMatrix(vi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(wh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,Cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),d=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DefaultUp=new F(0,1,0);Mt.DefaultMatrixAutoUpdate=!0;Mt.DefaultMatrixWorldAutoUpdate=!0;const Jn=new F,yi=new F,kl=new F,Mi=new F,Jr=new F,Qr=new F,Th=new F,zl=new F,Ul=new F,Bl=new F;class Ti{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jn.subVectors(e,t),i.cross(Jn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Jn.subVectors(i,t),yi.subVectors(n,t),kl.subVectors(e,t);const s=Jn.dot(Jn),o=Jn.dot(yi),l=Jn.dot(kl),c=yi.dot(yi),u=yi.dot(kl),h=s*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,g=(s*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mi),Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,Mi),l.set(0,0),l.addScaledVector(r,Mi.x),l.addScaledVector(s,Mi.y),l.addScaledVector(o,Mi.z),l}static isFrontFacing(e,t,n,i){return Jn.subVectors(n,t),yi.subVectors(e,t),Jn.cross(yi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Jn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ti.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;Jr.subVectors(i,n),Qr.subVectors(r,n),zl.subVectors(e,n);const l=Jr.dot(zl),c=Qr.dot(zl);if(l<=0&&c<=0)return t.copy(n);Ul.subVectors(e,i);const u=Jr.dot(Ul),h=Qr.dot(Ul);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Jr,s);Bl.subVectors(e,r);const d=Jr.dot(Bl),g=Qr.dot(Bl);if(g>=0&&d<=g)return t.copy(r);const p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Qr,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Th.subVectors(r,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Th,o);const _=1/(m+p+f);return s=p*_,o=f*_,t.copy(n).addScaledVector(Jr,s).addScaledVector(Qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Pg=0;class ui extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=gs,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=sd,this.blendDst=od,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tl,this.stencilZFail=Tl,this.stencilZPass=Tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==tr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vr extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new F,oa=new nt;class fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class yd extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Md extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ri extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dg=0;const kn=new Ke,Vl=new Mt,es=new F,Tn=new Us,Ys=new Us,Ft=new F;class pi extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pd(e)?Md:yd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Dn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ri(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(Tn.min,Ys.min),Tn.expandByPoint(Ft),Ft.addVectors(Tn.max,Ys.max),Tn.expandByPoint(Ft)):(Tn.expandByPoint(Ys.min),Tn.expandByPoint(Ys.max))}Tn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),Ft.add(es)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new F,u[R]=new F;const h=new F,f=new F,d=new F,g=new nt,p=new nt,m=new nt,_=new F,b=new F;function v(R,z,k){h.fromArray(i,R*3),f.fromArray(i,z*3),d.fromArray(i,k*3),g.fromArray(s,R*2),p.fromArray(s,z*2),m.fromArray(s,k*2),f.sub(h),d.sub(h),p.sub(g),m.sub(g);const I=1/(p.x*m.y-m.x*p.y);isFinite(I)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(I),b.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(I),c[R].add(_),c[z].add(_),c[k].add(_),u[R].add(b),u[z].add(b),u[k].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let R=0,z=y.length;R<z;++R){const k=y[R],I=k.start,D=k.count;for(let U=I,K=I+D;U<K;U+=3)v(n[U+0],n[U+1],n[U+2])}const M=new F,E=new F,A=new F,x=new F;function w(R){A.fromArray(r,R*3),x.copy(A);const z=c[R];M.copy(z),M.sub(A.multiplyScalar(A.dot(z))).normalize(),E.crossVectors(x,z);const I=E.dot(u[R])<0?-1:1;l[R*4]=M.x,l[R*4+1]=M.y,l[R*4+2]=M.z,l[R*4+3]=I}for(let R=0,z=y.length;R<z;++R){const k=y[R],I=k.start,D=k.count;for(let U=I,K=I+D;U<K;U+=3)w(n[U+0]),w(n[U+1]),w(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,s=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),p=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let p=0,m=l.length;p<m;p++){o.isInterleavedBufferAttribute?d=l[p]*o.data.stride+o.offset:d=l[p]*u;for(let _=0;_<u;_++)f[g++]=c[d++]}return new fn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eh=new Ke,ts=new nu,Gl=new Bs,js=new F,Ks=new F,$s=new F,Hl=new F,aa=new F,la=new nt,ca=new nt,ua=new nt,Wl=new F,ha=new F;class Wn extends Mt{constructor(e=new pi,t=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Hl.fromBufferAttribute(h,e),s?aa.addScaledVector(Hl,u):aa.addScaledVector(Hl.sub(t),u))}t.add(aa)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Gl.copy(n.boundingSphere),Gl.applyMatrix4(r),e.ray.intersectsSphere(Gl)===!1)||(Eh.copy(r).invert(),ts.copy(e.ray).applyMatrix4(Eh),n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1))return;let s;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=i[p.materialIndex],_=Math.max(p.start,f.start),b=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,y=b;v<y;v+=3){const M=o.getX(v),E=o.getX(v+1),A=o.getX(v+2);s=fa(this,m,e,ts,c,u,M,E,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const d=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const _=o.getX(p),b=o.getX(p+1),v=o.getX(p+2);s=fa(this,i,e,ts,c,u,_,b,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=i[p.materialIndex],_=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,y=b;v<y;v+=3){const M=v,E=v+1,A=v+2;s=fa(this,m,e,ts,c,u,M,E,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const d=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const _=p,b=p+1,v=p+2;s=fa(this,i,e,ts,c,u,_,b,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Ig(a,e,t,n,i,r,s,o){let l;if(e.side===Yn?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===tr,o),l===null)return null;ha.copy(o),ha.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(ha);return c<t.near||c>t.far?null:{distance:c,point:ha.clone(),object:a}}function fa(a,e,t,n,i,r,s,o,l){a.getVertexPosition(s,js),a.getVertexPosition(o,Ks),a.getVertexPosition(l,$s);const c=Ig(a,e,t,n,js,Ks,$s,Wl);if(c){i&&(la.fromBufferAttribute(i,s),ca.fromBufferAttribute(i,o),ua.fromBufferAttribute(i,l),c.uv=Ti.getUV(Wl,js,Ks,$s,la,ca,ua,new nt)),r&&(la.fromBufferAttribute(r,s),ca.fromBufferAttribute(r,o),ua.fromBufferAttribute(r,l),c.uv2=Ti.getUV(Wl,js,Ks,$s,la,ca,ua,new nt));const u={a:s,b:o,c:l,normal:new F,materialIndex:0};Ti.getNormal(js,Ks,$s,u.normal),c.face=u}return c}class Yo extends pi{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ri(c,3)),this.setAttribute("normal",new Ri(u,3)),this.setAttribute("uv",new Ri(h,2));function g(p,m,_,b,v,y,M,E,A,x,w){const R=y/A,z=M/x,k=y/2,I=M/2,D=E/2,U=A+1,K=x+1;let X=0,V=0;const J=new F;for(let C=0;C<K;C++){const B=C*z-I;for(let q=0;q<U;q++){const ne=q*R-k;J[p]=ne*b,J[m]=B*v,J[_]=D,c.push(J.x,J.y,J.z),J[p]=0,J[m]=0,J[_]=E>0?1:-1,u.push(J.x,J.y,J.z),h.push(q/A),h.push(1-C/x),X+=1}}for(let C=0;C<x;C++)for(let B=0;B<A;B++){const q=f+B+U*C,ne=f+B+U*(C+1),ee=f+(B+1)+U*(C+1),se=f+(B+1)+U*C;l.push(q,ne,se),l.push(ne,ee,se),V+=6}o.addGroup(d,V,w),d+=V,f+=X}}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function nn(a){const e={};for(let t=0;t<a.length;t++){const n=Rs(a[t]);for(const i in n)e[i]=n[i]}return e}function Ng(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function bd(a){return a.getRenderTarget()===null&&a.outputEncoding===ot?ii:Do}const Og={clone:Rs,merge:nn};var Fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fg,this.fragmentShader=kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sd extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ln extends Sd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(go*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class zg extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new ln(ns,is,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new ln(ns,is,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new ln(ns,is,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const o=new ln(ns,is,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new ln(ns,is,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new ln(ns,is,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Li,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class wd extends Wt{constructor(e,t,n,i,r,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ts,super(e,t,n,i,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ug extends Fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Yo(5,5,5),r=new kr({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yn,blending:Zi});r.uniforms.tEquirect.value=t;const s=new Wn(i,r),o=t.minFilter;return t.minFilter===Ir&&(t.minFilter=mn),new zg(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const Xl=new F,Bg=new F,Vg=new Dn;class fr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xl.subVectors(n,t).cross(Bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Xl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vg.getNormalMatrix(e),i=this.coplanarPoint(Xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Bs,da=new F;class iu{constructor(e=new fr,t=new fr,n=new fr,i=new fr,r=new fr,s=new fr){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],p=n[11],m=n[12],_=n[13],b=n[14],v=n[15];return t[0].setComponents(o-i,h-l,p-f,v-m).normalize(),t[1].setComponents(o+i,h+l,p+f,v+m).normalize(),t[2].setComponents(o+r,h+c,p+d,v+_).normalize(),t[3].setComponents(o-r,h-c,p-d,v-_).normalize(),t[4].setComponents(o-s,h-u,p-g,v-b).normalize(),t[5].setComponents(o+s,h+u,p+g,v+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSprite(e){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(da.x=i.normal.x>0?e.max.x:e.min.x,da.y=i.normal.y>0?e.max.y:e.min.y,da.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Td(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Gg(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=a.createBuffer();a.bindBuffer(u,d),a.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;a.bindBuffer(h,c),d.count===-1?a.bufferSubData(h,0,f):(t?a.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):a.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}class ru extends pi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],p=[],m=[];for(let _=0;_<u;_++){const b=_*f-s;for(let v=0;v<c;v++){const y=v*h-r;g.push(y,-b,0),p.push(0,0,1),m.push(v/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<o;b++){const v=b+c*_,y=b+c*(_+1),M=b+1+c*(_+1),E=b+1+c*_;d.push(v,y,E),d.push(y,M,E)}this.setIndex(d),this.setAttribute("position",new Ri(g,3)),this.setAttribute("normal",new Ri(p,3)),this.setAttribute("uv",new Ri(m,2))}static fromJSON(e){return new ru(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Wg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kg="vec3 transformed = vec3( position );",$g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Jg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,l_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,c_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m_="gl_FragColor = linearToOutputTexel( gl_FragColor );",g_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,__=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,b_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,C_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,D_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,I_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,z_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,G_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,X_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,e0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,t0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,i0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,l0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,c0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,u0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,p0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b0=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,S0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,E0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,D0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,I0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,N0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,O0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,F0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,k0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,z0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,U0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Y0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,K0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ox=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Be={alphamap_fragment:Hg,alphamap_pars_fragment:Wg,alphatest_fragment:Xg,alphatest_pars_fragment:qg,aomap_fragment:Yg,aomap_pars_fragment:jg,begin_vertex:Kg,beginnormal_vertex:$g,bsdfs:Zg,iridescence_fragment:Jg,bumpmap_pars_fragment:Qg,clipping_planes_fragment:e_,clipping_planes_pars_fragment:t_,clipping_planes_pars_vertex:n_,clipping_planes_vertex:i_,color_fragment:r_,color_pars_fragment:s_,color_pars_vertex:o_,color_vertex:a_,common:l_,cube_uv_reflection_fragment:c_,defaultnormal_vertex:u_,displacementmap_pars_vertex:h_,displacementmap_vertex:f_,emissivemap_fragment:d_,emissivemap_pars_fragment:p_,encodings_fragment:m_,encodings_pars_fragment:g_,envmap_fragment:__,envmap_common_pars_fragment:x_,envmap_pars_fragment:v_,envmap_pars_vertex:y_,envmap_physical_pars_fragment:D_,envmap_vertex:M_,fog_vertex:b_,fog_pars_vertex:S_,fog_fragment:w_,fog_pars_fragment:T_,gradientmap_pars_fragment:E_,lightmap_fragment:A_,lightmap_pars_fragment:C_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:R_,lights_pars_begin:P_,lights_toon_fragment:I_,lights_toon_pars_fragment:N_,lights_phong_fragment:O_,lights_phong_pars_fragment:F_,lights_physical_fragment:k_,lights_physical_pars_fragment:z_,lights_fragment_begin:U_,lights_fragment_maps:B_,lights_fragment_end:V_,logdepthbuf_fragment:G_,logdepthbuf_pars_fragment:H_,logdepthbuf_pars_vertex:W_,logdepthbuf_vertex:X_,map_fragment:q_,map_pars_fragment:Y_,map_particle_fragment:j_,map_particle_pars_fragment:K_,metalnessmap_fragment:$_,metalnessmap_pars_fragment:Z_,morphcolor_vertex:J_,morphnormal_vertex:Q_,morphtarget_pars_vertex:e0,morphtarget_vertex:t0,normal_fragment_begin:n0,normal_fragment_maps:i0,normal_pars_fragment:r0,normal_pars_vertex:s0,normal_vertex:o0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:l0,clearcoat_normal_fragment_maps:c0,clearcoat_pars_fragment:u0,iridescence_pars_fragment:h0,output_fragment:f0,packing:d0,premultiplied_alpha_fragment:p0,project_vertex:m0,dithering_fragment:g0,dithering_pars_fragment:_0,roughnessmap_fragment:x0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:M0,shadowmap_vertex:b0,shadowmask_pars_fragment:S0,skinbase_vertex:w0,skinning_pars_vertex:T0,skinning_vertex:E0,skinnormal_vertex:A0,specularmap_fragment:C0,specularmap_pars_fragment:L0,tonemapping_fragment:R0,tonemapping_pars_fragment:P0,transmission_fragment:D0,transmission_pars_fragment:I0,uv_pars_fragment:N0,uv_pars_vertex:O0,uv_vertex:F0,uv2_pars_fragment:k0,uv2_pars_vertex:z0,uv2_vertex:U0,worldpos_vertex:B0,background_vert:V0,background_frag:G0,backgroundCube_vert:H0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:q0,depth_vert:Y0,depth_frag:j0,distanceRGBA_vert:K0,distanceRGBA_frag:$0,equirect_vert:Z0,equirect_frag:J0,linedashed_vert:Q0,linedashed_frag:ex,meshbasic_vert:tx,meshbasic_frag:nx,meshlambert_vert:ix,meshlambert_frag:rx,meshmatcap_vert:sx,meshmatcap_frag:ox,meshnormal_vert:ax,meshnormal_frag:lx,meshphong_vert:cx,meshphong_frag:ux,meshphysical_vert:hx,meshphysical_frag:fx,meshtoon_vert:dx,meshtoon_frag:px,points_vert:mx,points_frag:gx,shadow_vert:_x,shadow_frag:xx,sprite_vert:vx,sprite_frag:yx},ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dn},uv2Transform:{value:new Dn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dn}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dn}}},oi={basic:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:nn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:nn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:nn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:nn([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:nn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:nn([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:nn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:nn([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Dn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:nn([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:nn([ce.lights,ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};oi.physical={uniforms:nn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new nt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const pa={r:0,b:0,g:0};function Mx(a,e,t,n,i,r,s){const o=new Ve(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(m,_){let b=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const y=a.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?p(o,l):v&&v.isColor&&(p(v,1),b=!0),(a.autoClear||b)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),v&&(v.isCubeTexture||v.mapping===cl)?(u===void 0&&(u=new Wn(new Yo(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:Rs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==ot,(h!==v||f!==v.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Wn(new ru(2,2),new kr({name:"BackgroundMaterial",uniforms:Rs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(pa,bd(a)),n.buffers.color.setClear(pa.r,pa.g,pa.b,_,s)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(o,l)},render:g}}function bx(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(D,U,K,X,V){let J=!1;if(s){const C=p(X,K,U);c!==C&&(c=C,d(c.object)),J=_(D,X,K,V),J&&b(D,X,K,V)}else{const C=U.wireframe===!0;(c.geometry!==X.id||c.program!==K.id||c.wireframe!==C)&&(c.geometry=X.id,c.program=K.id,c.wireframe=C,J=!0)}V!==null&&t.update(V,34963),(J||u)&&(u=!1,x(D,U,K,X),V!==null&&a.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function d(D){return n.isWebGL2?a.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?a.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function p(D,U,K){const X=K.wireframe===!0;let V=o[D.id];V===void 0&&(V={},o[D.id]=V);let J=V[U.id];J===void 0&&(J={},V[U.id]=J);let C=J[X];return C===void 0&&(C=m(f()),J[X]=C),C}function m(D){const U=[],K=[],X=[];for(let V=0;V<i;V++)U[V]=0,K[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:K,attributeDivisors:X,object:D,attributes:{},index:null}}function _(D,U,K,X){const V=c.attributes,J=U.attributes;let C=0;const B=K.getAttributes();for(const q in B)if(B[q].location>=0){const ee=V[q];let se=J[q];if(se===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),ee===void 0||ee.attribute!==se||se&&ee.data!==se.data)return!0;C++}return c.attributesNum!==C||c.index!==X}function b(D,U,K,X){const V={},J=U.attributes;let C=0;const B=K.getAttributes();for(const q in B)if(B[q].location>=0){let ee=J[q];ee===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const se={};se.attribute=ee,ee&&ee.data&&(se.data=ee.data),V[q]=se,C++}c.attributes=V,c.attributesNum=C,c.index=X}function v(){const D=c.newAttributes;for(let U=0,K=D.length;U<K;U++)D[U]=0}function y(D){M(D,0)}function M(D,U){const K=c.newAttributes,X=c.enabledAttributes,V=c.attributeDivisors;K[D]=1,X[D]===0&&(a.enableVertexAttribArray(D),X[D]=1),V[D]!==U&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),V[D]=U)}function E(){const D=c.newAttributes,U=c.enabledAttributes;for(let K=0,X=U.length;K<X;K++)U[K]!==D[K]&&(a.disableVertexAttribArray(K),U[K]=0)}function A(D,U,K,X,V,J){n.isWebGL2===!0&&(K===5124||K===5125)?a.vertexAttribIPointer(D,U,K,V,J):a.vertexAttribPointer(D,U,K,X,V,J)}function x(D,U,K,X){if(n.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=X.attributes,J=K.getAttributes(),C=U.defaultAttributeValues;for(const B in J){const q=J[B];if(q.location>=0){let ne=V[B];if(ne===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){const ee=ne.normalized,se=ne.itemSize,Y=t.get(ne);if(Y===void 0)continue;const Ae=Y.buffer,fe=Y.type,ye=Y.bytesPerElement;if(ne.isInterleavedBufferAttribute){const pe=ne.data,Fe=pe.stride,Pe=ne.offset;if(pe.isInstancedInterleavedBuffer){for(let ae=0;ae<q.locationSize;ae++)M(q.location+ae,pe.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ae=0;ae<q.locationSize;ae++)y(q.location+ae);a.bindBuffer(34962,Ae);for(let ae=0;ae<q.locationSize;ae++)A(q.location+ae,se/q.locationSize,fe,ee,Fe*ye,(Pe+se/q.locationSize*ae)*ye)}else{if(ne.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)M(q.location+pe,ne.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let pe=0;pe<q.locationSize;pe++)y(q.location+pe);a.bindBuffer(34962,Ae);for(let pe=0;pe<q.locationSize;pe++)A(q.location+pe,se/q.locationSize,fe,ee,se*ye,se/q.locationSize*pe*ye)}}else if(C!==void 0){const ee=C[B];if(ee!==void 0)switch(ee.length){case 2:a.vertexAttrib2fv(q.location,ee);break;case 3:a.vertexAttrib3fv(q.location,ee);break;case 4:a.vertexAttrib4fv(q.location,ee);break;default:a.vertexAttrib1fv(q.location,ee)}}}}E()}function w(){k();for(const D in o){const U=o[D];for(const K in U){const X=U[K];for(const V in X)g(X[V].object),delete X[V];delete U[K]}delete o[D]}}function R(D){if(o[D.id]===void 0)return;const U=o[D.id];for(const K in U){const X=U[K];for(const V in X)g(X[V].object),delete X[V];delete U[K]}delete o[D.id]}function z(D){for(const U in o){const K=o[U];if(K[D.id]===void 0)continue;const X=K[D.id];for(const V in X)g(X[V].object),delete X[V];delete K[D.id]}}function k(){I(),u=!0,c!==l&&(c=l,d(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:y,disableUnusedAttributes:E}}function Sx(a,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function o(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=a,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=o,this.renderInstances=l}function wx(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),d=a.getParameter(3379),g=a.getParameter(34076),p=a.getParameter(34921),m=a.getParameter(36347),_=a.getParameter(36348),b=a.getParameter(36349),v=f>0,y=s||e.has("OES_texture_float"),M=v&&y,E=s?a.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:E}}function Tx(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new fr,o=new Dn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,d,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,_=a.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:n,v=b*4;let y=_.clippingState||null;l.value=y,y=u(g,f,v,d);for(let M=0;M!==v;++M)y[M]=t[M];_.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=d+p*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,y=d;v!==p;++v,y+=4)s.copy(h[v]).applyMatrix4(b,o),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function Ex(a){let e=new WeakMap;function t(s,o){return o===vc?s.mapping=Ts:o===yc&&(s.mapping=Es),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===vc||o===yc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Ug(l.height/2);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class su extends Sd{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fs=4,Ah=[.125,.215,.35,.446,.526,.582],_r=20,ql=new su,Ch=new Ve;let Yl=null;const dr=(1+Math.sqrt(5))/2,ss=1/dr,Lh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,dr,ss),new F(0,dr,-ss),new F(ss,0,dr),new F(-ss,0,dr),new F(dr,ss,0),new F(-dr,ss,0)];class Rh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Yl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl),e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Ro,format:Hn,encoding:Or,depthBuffer:!1},i=Ph(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ax(r)),this._blurMaterial=Cx(r,e,t)}return i}_compileMaterial(e){const t=new Wn(this._lodPlanes[0],e);this._renderer.compile(t,ql)}_sceneToCubeUV(e,t,n,i){const o=new ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ch),u.toneMapping=Li,u.autoClear=!1;const d=new vr({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),g=new Wn(new Yo,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(Ch),p=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):b===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const v=this._cubeSize;ma(i,b*v,_>2?v:0,v,v),u.setRenderTarget(i),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ts||e.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Wn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ma(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,ql)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Lh[(i-1)%Lh.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Wn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*_r-1),p=r/g,m=isFinite(r)?1+Math.floor(u*p):_r;m>_r&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const _=[];let b=0;for(let A=0;A<_r;++A){const x=A/p,w=Math.exp(-x*x/2);_.push(w),A===0?b+=w:A<m&&(b+=2*w)}for(let A=0;A<_.length;A++)_[A]=_[A]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const y=this._sizeLods[i],M=3*y*(i>v-fs?i-v+fs:0),E=4*(this._cubeSize-y);ma(t,M,E,3*y,2*y),l.setRenderTarget(t),l.render(h,ql)}}function Ax(a){const e=[],t=[],n=[];let i=a;const r=a-fs+1+Ah.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>a-fs?l=Ah[s-a+fs-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,p=3,m=2,_=1,b=new Float32Array(p*g*d),v=new Float32Array(m*g*d),y=new Float32Array(_*g*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,x=E>2?0:-1,w=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];b.set(w,p*g*E),v.set(f,m*g*E);const R=[E,E,E,E,E,E];y.set(R,_*g*E)}const M=new pi;M.setAttribute("position",new fn(b,p)),M.setAttribute("uv",new fn(v,m)),M.setAttribute("faceIndex",new fn(y,_)),e.push(M),i>fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ph(a,e,t){const n=new Fr(a,e,t);return n.texture.mapping=cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Cx(a,e,t){const n=new Float32Array(_r),i=new F(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Dh(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Ih(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ou(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lx(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===vc||l===yc,u=l===Ts||l===Es;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Rh(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Rh(a));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Rx(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Px(a,e,t,n){const i={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const p=d[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let p=0;if(d!==null){const b=d.array;p=d.version;for(let v=0,y=b.length;v<y;v+=3){const M=b[v+0],E=b[v+1],A=b[v+2];f.push(M,E,E,A,A,M)}}else{const b=g.array;p=g.version;for(let v=0,y=b.length/3-1;v<y;v+=3){const M=v+0,E=v+1,A=v+2;f.push(M,E,E,A,A,M)}}const m=new(pd(f)?Md:yd)(f,1);m.version=p;const _=r.get(h);_&&e.remove(_),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Dx(a,e,t,n){const i=n.isWebGL2;let r;function s(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){a.drawElements(r,d,o,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let p,m;if(i)p=a,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,d,o,f*l,g),t.update(d,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function Ix(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Nx(a,e){return a[0]-e[0]}function Ox(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Fx(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new ht,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==m){let K=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",K)};var g=K;_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let R=0;y===!0&&(R=1),M===!0&&(R=2),E===!0&&(R=3);let z=u.attributes.position.count*R,k=1;z>e.maxTextureSize&&(k=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*k*4*m),D=new xd(I,z,k,m);D.type=Xi,D.needsUpdate=!0;const U=R*4;for(let X=0;X<m;X++){const V=A[X],J=x[X],C=w[X],B=z*k*4*X;for(let q=0;q<V.count;q++){const ne=q*U;y===!0&&(s.fromBufferAttribute(V,q),I[B+ne+0]=s.x,I[B+ne+1]=s.y,I[B+ne+2]=s.z,I[B+ne+3]=0),M===!0&&(s.fromBufferAttribute(J,q),I[B+ne+4]=s.x,I[B+ne+5]=s.y,I[B+ne+6]=s.z,I[B+ne+7]=0),E===!0&&(s.fromBufferAttribute(C,q),I[B+ne+8]=s.x,I[B+ne+9]=s.y,I[B+ne+10]=s.z,I[B+ne+11]=C.itemSize===4?s.w:1)}}_={count:m,texture:D,size:new nt(z,k)},r.set(u,_),u.addEventListener("dispose",K)}let b=0;for(let y=0;y<d.length;y++)b+=d[y];const v=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(a,"morphTargetBaseInfluence",v),f.getUniforms().setValue(a,"morphTargetInfluences",d),f.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==p){m=[];for(let M=0;M<p;M++)m[M]=[M,0];n[u.id]=m}for(let M=0;M<p;M++){const E=m[M];E[0]=M,E[1]=d[M]}m.sort(Ox);for(let M=0;M<8;M++)M<p&&m[M][1]?(o[M][0]=m[M][0],o[M][1]=m[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Nx);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const E=o[M],A=E[0],x=E[1];A!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+M)!==_[A]&&u.setAttribute("morphTarget"+M,_[A]),b&&u.getAttribute("morphNormal"+M)!==b[A]&&u.setAttribute("morphNormal"+M,b[A]),i[M]=x,v+=x):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),b&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const y=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(a,"morphTargetBaseInfluence",y),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function kx(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const Ed=new Wt,Ad=new xd,Cd=new Sg,Ld=new wd,Nh=[],Oh=[],Fh=new Float32Array(16),kh=new Float32Array(9),zh=new Float32Array(4);function Vs(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Nh[i];if(r===void 0&&(r=new Float32Array(i),Nh[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function It(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Nt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function ul(a,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function zx(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Ux(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;a.uniform2fv(this.addr,e),Nt(t,e)}}function Bx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;a.uniform3fv(this.addr,e),Nt(t,e)}}function Vx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;a.uniform4fv(this.addr,e),Nt(t,e)}}function Gx(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;zh.set(n),a.uniformMatrix2fv(this.addr,!1,zh),Nt(t,n)}}function Hx(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;kh.set(n),a.uniformMatrix3fv(this.addr,!1,kh),Nt(t,n)}}function Wx(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Fh.set(n),a.uniformMatrix4fv(this.addr,!1,Fh),Nt(t,n)}}function Xx(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function qx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;a.uniform2iv(this.addr,e),Nt(t,e)}}function Yx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;a.uniform3iv(this.addr,e),Nt(t,e)}}function jx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;a.uniform4iv(this.addr,e),Nt(t,e)}}function Kx(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function $x(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;a.uniform2uiv(this.addr,e),Nt(t,e)}}function Zx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;a.uniform3uiv(this.addr,e),Nt(t,e)}}function Jx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;a.uniform4uiv(this.addr,e),Nt(t,e)}}function Qx(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ed,i)}function ev(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cd,i)}function tv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ld,i)}function nv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ad,i)}function iv(a){switch(a){case 5126:return zx;case 35664:return Ux;case 35665:return Bx;case 35666:return Vx;case 35674:return Gx;case 35675:return Hx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return qx;case 35668:case 35672:return Yx;case 35669:case 35673:return jx;case 5125:return Kx;case 36294:return $x;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return nv}}function rv(a,e){a.uniform1fv(this.addr,e)}function sv(a,e){const t=Vs(e,this.size,2);a.uniform2fv(this.addr,t)}function ov(a,e){const t=Vs(e,this.size,3);a.uniform3fv(this.addr,t)}function av(a,e){const t=Vs(e,this.size,4);a.uniform4fv(this.addr,t)}function lv(a,e){const t=Vs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function cv(a,e){const t=Vs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function uv(a,e){const t=Vs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function hv(a,e){a.uniform1iv(this.addr,e)}function fv(a,e){a.uniform2iv(this.addr,e)}function dv(a,e){a.uniform3iv(this.addr,e)}function pv(a,e){a.uniform4iv(this.addr,e)}function mv(a,e){a.uniform1uiv(this.addr,e)}function gv(a,e){a.uniform2uiv(this.addr,e)}function _v(a,e){a.uniform3uiv(this.addr,e)}function xv(a,e){a.uniform4uiv(this.addr,e)}function vv(a,e,t){const n=this.cache,i=e.length,r=ul(t,i);It(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Ed,r[s])}function yv(a,e,t){const n=this.cache,i=e.length,r=ul(t,i);It(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Cd,r[s])}function Mv(a,e,t){const n=this.cache,i=e.length,r=ul(t,i);It(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Ld,r[s])}function bv(a,e,t){const n=this.cache,i=e.length,r=ul(t,i);It(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Ad,r[s])}function Sv(a){switch(a){case 5126:return rv;case 35664:return sv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return fv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return _v;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return bv}}class wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=iv(t.type)}}class Tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Sv(t.type)}}class Ev{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function Uh(a,e){a.seq.push(e),a.map[e.id]=e}function Av(a,e,t){const n=a.name,i=n.length;for(jl.lastIndex=0;;){const r=jl.exec(n),s=jl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){Uh(t,c===void 0?new wv(o,a,e):new Tv(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new Ev(o),Uh(t,h)),t=h}}}class ka{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Av(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Bh(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Cv=0;function Lv(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function Rv(a){switch(a){case Or:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Vh(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Lv(a.getShaderSource(e),s)}else return i}function Pv(a,e){const t=Rv(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Dv(a,e){let t;switch(e){case Fm:t="Linear";break;case km:t="Reinhard";break;case zm:t="OptimizedCineon";break;case Um:t="ACESFilmic";break;case Bm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Iv(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ao).join(`
`)}function Nv(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ov(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function ao(a){return a!==""}function Gh(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(a){return a.replace(Fv,kv)}function kv(a,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Tc(t)}const zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(a){return a.replace(zv,Uv)}function Uv(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xh(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bv(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===rd?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===pm?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===oo&&(e="SHADOWMAP_TYPE_VSM"),e}function Vv(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ts:case Es:e="ENVMAP_TYPE_CUBE";break;case cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gv(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function Hv(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ad:e="ENVMAP_BLENDING_MULTIPLY";break;case Nm:e="ENVMAP_BLENDING_MIX";break;case Om:e="ENVMAP_BLENDING_ADD";break}return e}function Wv(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xv(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Bv(t),c=Vv(t),u=Gv(t),h=Hv(t),f=Wv(t),d=t.isWebGL2?"":Iv(t),g=Nv(r),p=i.createProgram();let m,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(ao).join(`
`),m.length>0&&(m+=`
`),_=[d,g].filter(ao).join(`
`),_.length>0&&(_+=`
`)):(m=[Xh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),_=[d,Xh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Be.tonemapping_pars_fragment:"",t.toneMapping!==Li?Dv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,Pv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),s=Tc(s),s=Gh(s,t),s=Hh(s,t),o=Tc(o),o=Gh(o,t),o=Hh(o,t),s=Wh(s),o=Wh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=b+m+s,y=b+_+o,M=Bh(i,35633,v),E=Bh(i,35632,y);if(i.attachShader(p,M),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){const w=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(M).trim(),z=i.getShaderInfoLog(E).trim();let k=!0,I=!0;if(i.getProgramParameter(p,35714)===!1){k=!1;const D=Vh(i,M,"vertex"),U=Vh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+w+`
`+D+`
`+U)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(R===""||z==="")&&(I=!1);I&&(this.diagnostics={runnable:k,programLog:w,vertexShader:{log:R,prefix:m},fragmentShader:{log:z,prefix:_}})}i.deleteShader(M),i.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new ka(i,p)),A};let x;return this.getAttributes=function(){return x===void 0&&(x=Ov(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Cv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}let qv=0;class Yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jv(e),t.set(e,n)),n}}class jv{constructor(e){this.id=qv++,this.code=e,this.usedTimes=0}}function Kv(a,e,t,n,i,r,s){const o=new vd,l=new Yv,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,w,R,z,k){const I=z.fog,D=k.geometry,U=x.isMeshStandardMaterial?z.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||U),X=K&&K.mapping===cl?K.image.height:null,V=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,C=J!==void 0?J.length:0;let B=0;D.morphAttributes.position!==void 0&&(B=1),D.morphAttributes.normal!==void 0&&(B=2),D.morphAttributes.color!==void 0&&(B=3);let q,ne,ee,se;if(V){const Fe=oi[V];q=Fe.vertexShader,ne=Fe.fragmentShader}else q=x.vertexShader,ne=x.fragmentShader,l.update(x),ee=l.getVertexShaderID(x),se=l.getFragmentShaderID(x);const Y=a.getRenderTarget(),Ae=x.alphaTest>0,fe=x.clearcoat>0,ye=x.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:x.type,vertexShader:q,fragmentShader:ne,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:k.isInstancedMesh===!0,instancingColor:k.isInstancedMesh===!0&&k.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Y===null?a.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Or,map:!!x.map,matcap:!!x.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:X,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===og,tangentSpaceNormalMap:x.normalMapType===fd,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===ot,clearcoat:fe,clearcoatMap:fe&&!!x.clearcoatMap,clearcoatRoughnessMap:fe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!x.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!x.iridescenceMap,iridescenceThicknessMap:ye&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===gs,alphaMap:!!x.alphaMap,alphaTest:Ae,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:B,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:x.toneMapped?a.toneMapping:Li,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ll,flipSided:x.side===Yn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(_(w,x),b(w,x),w.push(a.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function b(x,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.lightMap&&o.enable(7),w.aoMap&&o.enable(8),w.emissiveMap&&o.enable(9),w.bumpMap&&o.enable(10),w.normalMap&&o.enable(11),w.objectSpaceNormalMap&&o.enable(12),w.tangentSpaceNormalMap&&o.enable(13),w.clearcoat&&o.enable(14),w.clearcoatMap&&o.enable(15),w.clearcoatRoughnessMap&&o.enable(16),w.clearcoatNormalMap&&o.enable(17),w.iridescence&&o.enable(18),w.iridescenceMap&&o.enable(19),w.iridescenceThicknessMap&&o.enable(20),w.displacementMap&&o.enable(21),w.specularMap&&o.enable(22),w.roughnessMap&&o.enable(23),w.metalnessMap&&o.enable(24),w.gradientMap&&o.enable(25),w.alphaMap&&o.enable(26),w.alphaTest&&o.enable(27),w.vertexColors&&o.enable(28),w.vertexAlphas&&o.enable(29),w.vertexUvs&&o.enable(30),w.vertexTangents&&o.enable(31),w.uvsVertexOnly&&o.enable(32),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.physicallyCorrectLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.specularIntensityMap&&o.enable(15),w.specularColorMap&&o.enable(16),w.transmission&&o.enable(17),w.transmissionMap&&o.enable(18),w.thicknessMap&&o.enable(19),w.sheen&&o.enable(20),w.sheenColorMap&&o.enable(21),w.sheenRoughnessMap&&o.enable(22),w.decodeVideoTexture&&o.enable(23),w.opaque&&o.enable(24),x.push(o.mask)}function v(x){const w=g[x.type];let R;if(w){const z=oi[w];R=Og.clone(z.uniforms)}else R=x.uniforms;return R}function y(x,w){let R;for(let z=0,k=c.length;z<k;z++){const I=c[z];if(I.cacheKey===w){R=I,++R.usedTimes;break}}return R===void 0&&(R=new Xv(a,w,x,r),c.push(R)),R}function M(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:A}}function $v(){let a=new WeakMap;function e(r){let s=a.get(r);return s===void 0&&(s={},a.set(r,s)),s}function t(r){a.delete(r)}function n(r,s,o){a.get(r)[s]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Zv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function qh(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Yh(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,f,d,g,p,m){let _=a[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},a[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=m),e++,_}function o(h,f,d,g,p,m){const _=s(h,f,d,g,p,m);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):t.push(_)}function l(h,f,d,g,p,m){const _=s(h,f,d,g,p,m);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||Zv),n.length>1&&n.sort(f||qh),i.length>1&&i.sort(f||qh)}function u(){for(let h=e,f=a.length;h<f;h++){const d=a[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Jv(){let a=new WeakMap;function e(n,i){const r=a.get(n);let s;return r===void 0?(s=new Yh,a.set(n,[s])):i>=r.length?(s=new Yh,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Qv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ve};break;case"SpotLight":t={position:new F,direction:new F,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new F,halfWidth:new F,halfHeight:new F};break}return a[e.id]=t,t}}}function ey(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let ty=0;function ny(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function iy(a,e){const t=new Qv,n=ey(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new Ke,o=new Ke;function l(u,h){let f=0,d=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,m=0,_=0,b=0,v=0,y=0,M=0,E=0,A=0,x=0;u.sort(ny);const w=h!==!0?Math.PI:1;for(let z=0,k=u.length;z<k;z++){const I=u[z],D=I.color,U=I.intensity,K=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=D.r*U*w,d+=D.g*U*w,g+=D.b*U*w;else if(I.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],U);else if(I.isDirectionalLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const J=I.shadow,C=n.get(I);C.shadowBias=J.bias,C.shadowNormalBias=J.normalBias,C.shadowRadius=J.radius,C.shadowMapSize=J.mapSize,i.directionalShadow[p]=C,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=I.shadow.matrix,y++}i.directional[p]=V,p++}else if(I.isSpotLight){const V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(D).multiplyScalar(U*w),V.distance=K,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[_]=V;const J=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,J.updateMatrices(I),I.castShadow&&x++),i.spotLightMatrix[_]=J.matrix,I.castShadow){const C=n.get(I);C.shadowBias=J.bias,C.shadowNormalBias=J.normalBias,C.shadowRadius=J.radius,C.shadowMapSize=J.mapSize,i.spotShadow[_]=C,i.spotShadowMap[_]=X,E++}_++}else if(I.isRectAreaLight){const V=t.get(I);V.color.copy(D).multiplyScalar(U),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[b]=V,b++}else if(I.isPointLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*w),V.distance=I.distance,V.decay=I.decay,I.castShadow){const J=I.shadow,C=n.get(I);C.shadowBias=J.bias,C.shadowNormalBias=J.normalBias,C.shadowRadius=J.radius,C.shadowMapSize=J.mapSize,C.shadowCameraNear=J.camera.near,C.shadowCameraFar=J.camera.far,i.pointShadow[m]=C,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=I.shadow.matrix,M++}i.point[m]=V,m++}else if(I.isHemisphereLight){const V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(U*w),V.groundColor.copy(I.groundColor).multiplyScalar(U*w),i.hemi[v]=V,v++}}b>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==b||R.hemiLength!==v||R.numDirectionalShadows!==y||R.numPointShadows!==M||R.numSpotShadows!==E||R.numSpotMaps!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=b,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+A-x,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=x,R.directionalLength=p,R.pointLength=m,R.spotLength=_,R.rectAreaLength=b,R.hemiLength=v,R.numDirectionalShadows=y,R.numPointShadows=M,R.numSpotShadows=E,R.numSpotMaps=A,i.version=ty++)}function c(u,h){let f=0,d=0,g=0,p=0,m=0;const _=h.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const y=u[b];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),f++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),o.identity(),s.copy(y.matrixWorld),s.premultiply(_),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),d++}else if(y.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function jh(a,e){const t=new iy(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function ry(a,e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new jh(a,e),t.set(r,[l])):s>=o.length?(l=new jh(a,e),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class sy extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oy extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ly=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cy(a,e,t){let n=new iu;const i=new nt,r=new nt,s=new ht,o=new sy({depthPacking:sg}),l=new oy,c={},u=t.maxTextureSize,h={0:Yn,1:tr,2:ll},f=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:ay,fragmentShader:ly}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new pi;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Wn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rd,this.render=function(y,M,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const A=a.getRenderTarget(),x=a.getActiveCubeFace(),w=a.getActiveMipmapLevel(),R=a.state;R.setBlending(Zi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let z=0,k=y.length;z<k;z++){const I=y[z],D=I.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const U=D.getFrameExtents();if(i.multiply(U),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/U.x),i.x=r.x*U.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/U.y),i.y=r.y*U.y,D.mapSize.y=r.y)),D.map===null){const X=this.type!==oo?{minFilter:Ut,magFilter:Ut}:{};D.map=new Fr(i.x,i.y,X),D.map.texture.name=I.name+".shadowMap",D.camera.updateProjectionMatrix()}a.setRenderTarget(D.map),a.clear();const K=D.getViewportCount();for(let X=0;X<K;X++){const V=D.getViewport(X);s.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),R.viewport(s),D.updateMatrices(I,X),n=D.getFrustum(),v(M,E,D.camera,I,this.type)}D.isPointLightShadow!==!0&&this.type===oo&&_(D,E),D.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(A,x,w)};function _(y,M){const E=e.update(p);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Fr(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,a.setRenderTarget(y.mapPass),a.clear(),a.renderBufferDirect(M,null,E,f,p,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,a.setRenderTarget(y.map),a.clear(),a.renderBufferDirect(M,null,E,d,p,null)}function b(y,M,E,A,x,w){let R=null;const z=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(z!==void 0)R=z;else if(R=E.isPointLight===!0?l:o,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const k=R.uuid,I=M.uuid;let D=c[k];D===void 0&&(D={},c[k]=D);let U=D[I];U===void 0&&(U=R.clone(),D[I]=U),R=U}return R.visible=M.visible,R.wireframe=M.wireframe,w===oo?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:h[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaTest,R.map=M.map,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(E.matrixWorld),R.nearDistance=A,R.farDistance=x),R}function v(y,M,E,A,x){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===oo)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const z=e.update(y),k=y.material;if(Array.isArray(k)){const I=z.groups;for(let D=0,U=I.length;D<U;D++){const K=I[D],X=k[K.materialIndex];if(X&&X.visible){const V=b(y,X,A,E.near,E.far,x);a.renderBufferDirect(E,null,z,V,y,K)}}}else if(k.visible){const I=b(y,k,A,E.near,E.far,x);a.renderBufferDirect(E,null,z,I,y,null)}}const R=y.children;for(let z=0,k=R.length;z<k;z++)v(R[z],M,E,A,x)}}function uy(a,e,t){const n=t.isWebGL2;function i(){let P=!1;const j=new ht;let te=null;const le=new ht(0,0,0,0);return{setMask:function(ge){te!==ge&&!P&&(a.colorMask(ge,ge,ge,ge),te=ge)},setLocked:function(ge){P=ge},setClear:function(ge,Ge,mt,dt,Mn){Mn===!0&&(ge*=dt,Ge*=dt,mt*=dt),j.set(ge,Ge,mt,dt),le.equals(j)===!1&&(a.clearColor(ge,Ge,mt,dt),le.copy(j))},reset:function(){P=!1,te=null,le.set(-1,0,0,0)}}}function r(){let P=!1,j=null,te=null,le=null;return{setTest:function(ge){ge?Ae(2929):fe(2929)},setMask:function(ge){j!==ge&&!P&&(a.depthMask(ge),j=ge)},setFunc:function(ge){if(te!==ge){switch(ge){case Am:a.depthFunc(512);break;case Cm:a.depthFunc(519);break;case Lm:a.depthFunc(513);break;case xc:a.depthFunc(515);break;case Rm:a.depthFunc(514);break;case Pm:a.depthFunc(518);break;case Dm:a.depthFunc(516);break;case Im:a.depthFunc(517);break;default:a.depthFunc(515)}te=ge}},setLocked:function(ge){P=ge},setClear:function(ge){le!==ge&&(a.clearDepth(ge),le=ge)},reset:function(){P=!1,j=null,te=null,le=null}}}function s(){let P=!1,j=null,te=null,le=null,ge=null,Ge=null,mt=null,dt=null,Mn=null;return{setTest:function(_e){P||(_e?Ae(2960):fe(2960))},setMask:function(_e){j!==_e&&!P&&(a.stencilMask(_e),j=_e)},setFunc:function(_e,Se,ke){(te!==_e||le!==Se||ge!==ke)&&(a.stencilFunc(_e,Se,ke),te=_e,le=Se,ge=ke)},setOp:function(_e,Se,ke){(Ge!==_e||mt!==Se||dt!==ke)&&(a.stencilOp(_e,Se,ke),Ge=_e,mt=Se,dt=ke)},setLocked:function(_e){P=_e},setClear:function(_e){Mn!==_e&&(a.clearStencil(_e),Mn=_e)},reset:function(){P=!1,j=null,te=null,le=null,ge=null,Ge=null,mt=null,dt=null,Mn=null}}}const o=new i,l=new r,c=new s,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,p=[],m=null,_=!1,b=null,v=null,y=null,M=null,E=null,A=null,x=null,w=!1,R=null,z=null,k=null,I=null,D=null;const U=a.getParameter(35661);let K=!1,X=0;const V=a.getParameter(7938);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=X>=2);let J=null,C={};const B=a.getParameter(3088),q=a.getParameter(2978),ne=new ht().fromArray(B),ee=new ht().fromArray(q);function se(P,j,te){const le=new Uint8Array(4),ge=a.createTexture();a.bindTexture(P,ge),a.texParameteri(P,10241,9728),a.texParameteri(P,10240,9728);for(let Ge=0;Ge<te;Ge++)a.texImage2D(j+Ge,0,6408,1,1,0,6408,5121,le);return ge}const Y={};Y[3553]=se(3553,3553,1),Y[34067]=se(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(2929),l.setFunc(xc),at(!1),H(Uu),Ae(2884),Xe(Zi);function Ae(P){f[P]!==!0&&(a.enable(P),f[P]=!0)}function fe(P){f[P]!==!1&&(a.disable(P),f[P]=!1)}function ye(P,j){return d[P]!==j?(a.bindFramebuffer(P,j),d[P]=j,n&&(P===36009&&(d[36160]=j),P===36160&&(d[36009]=j)),!0):!1}function pe(P,j){let te=p,le=!1;if(P)if(te=g.get(j),te===void 0&&(te=[],g.set(j,te)),P.isWebGLMultipleRenderTargets){const ge=P.texture;if(te.length!==ge.length||te[0]!==36064){for(let Ge=0,mt=ge.length;Ge<mt;Ge++)te[Ge]=36064+Ge;te.length=ge.length,le=!0}}else te[0]!==36064&&(te[0]=36064,le=!0);else te[0]!==1029&&(te[0]=1029,le=!0);le&&(t.isWebGL2?a.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Fe(P){return m!==P?(a.useProgram(P),m=P,!0):!1}const Pe={[cs]:32774,[gm]:32778,[_m]:32779};if(n)Pe[Hu]=32775,Pe[Wu]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Pe[Hu]=P.MIN_EXT,Pe[Wu]=P.MAX_EXT)}const ae={[xm]:0,[vm]:1,[ym]:768,[sd]:770,[Em]:776,[wm]:774,[bm]:772,[Mm]:769,[od]:771,[Tm]:775,[Sm]:773};function Xe(P,j,te,le,ge,Ge,mt,dt){if(P===Zi){_===!0&&(fe(3042),_=!1);return}if(_===!1&&(Ae(3042),_=!0),P!==mm){if(P!==b||dt!==w){if((v!==cs||E!==cs)&&(a.blendEquation(32774),v=cs,E=cs),dt)switch(P){case gs:a.blendFuncSeparate(1,771,1,771);break;case Bu:a.blendFunc(1,1);break;case Vu:a.blendFuncSeparate(0,769,0,1);break;case Gu:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case gs:a.blendFuncSeparate(770,771,1,771);break;case Bu:a.blendFunc(770,1);break;case Vu:a.blendFuncSeparate(0,769,0,1);break;case Gu:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,M=null,A=null,x=null,b=P,w=dt}return}ge=ge||j,Ge=Ge||te,mt=mt||le,(j!==v||ge!==E)&&(a.blendEquationSeparate(Pe[j],Pe[ge]),v=j,E=ge),(te!==y||le!==M||Ge!==A||mt!==x)&&(a.blendFuncSeparate(ae[te],ae[le],ae[Ge],ae[mt]),y=te,M=le,A=Ge,x=mt),b=P,w=!1}function rt(P,j){P.side===ll?fe(2884):Ae(2884);let te=P.side===Yn;j&&(te=!te),at(te),P.blending===gs&&P.transparent===!1?Xe(Zi):Xe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const le=P.stencilWrite;c.setTest(le),le&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),qe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ae(32926):fe(32926)}function at(P){R!==P&&(P?a.frontFace(2304):a.frontFace(2305),R=P)}function H(P){P!==fm?(Ae(2884),P!==z&&(P===Uu?a.cullFace(1029):P===dm?a.cullFace(1028):a.cullFace(1032))):fe(2884),z=P}function Qe(P){P!==k&&(K&&a.lineWidth(P),k=P)}function qe(P,j,te){P?(Ae(32823),(I!==j||D!==te)&&(a.polygonOffset(j,te),I=j,D=te)):fe(32823)}function Ot(P){P?Ae(3089):fe(3089)}function it(P){P===void 0&&(P=33984+U-1),J!==P&&(a.activeTexture(P),J=P)}function L(P,j,te){te===void 0&&(J===null?te=33984+U-1:te=J);let le=C[te];le===void 0&&(le={type:void 0,texture:void 0},C[te]=le),(le.type!==P||le.texture!==j)&&(J!==te&&(a.activeTexture(te),J=te),a.bindTexture(P,j||Y[P]),le.type=P,le.texture=j)}function S(){const P=C[J];P!==void 0&&P.type!==void 0&&(a.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{a.compressedTexImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{a.compressedTexImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{a.texSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{a.texSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{a.texStorage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{a.texStorage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{a.texImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{a.texImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(P){ne.equals(P)===!1&&(a.scissor(P.x,P.y,P.z,P.w),ne.copy(P))}function be(P){ee.equals(P)===!1&&(a.viewport(P.x,P.y,P.z,P.w),ee.copy(P))}function Ue(P,j){let te=h.get(j);te===void 0&&(te=new WeakMap,h.set(j,te));let le=te.get(P);le===void 0&&(le=a.getUniformBlockIndex(j,P.name),te.set(P,le))}function et(P,j){const le=h.get(j).get(P);u.get(j)!==le&&(a.uniformBlockBinding(j,le,P.__bindingPointIndex),u.set(j,le))}function ft(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},J=null,C={},d={},g=new WeakMap,p=[],m=null,_=!1,b=null,v=null,y=null,M=null,E=null,A=null,x=null,w=!1,R=null,z=null,k=null,I=null,D=null,ne.set(0,0,a.canvas.width,a.canvas.height),ee.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ae,disable:fe,bindFramebuffer:ye,drawBuffers:pe,useProgram:Fe,setBlending:Xe,setMaterial:rt,setFlipSided:at,setCullFace:H,setLineWidth:Qe,setPolygonOffset:qe,setScissorTest:Ot,activeTexture:it,bindTexture:L,unbindTexture:S,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:me,texImage3D:ve,updateUBOMapping:Ue,uniformBlockBinding:et,texStorage2D:Z,texStorage3D:Ee,texSubImage2D:re,texSubImage3D:ie,compressedTexSubImage2D:Te,compressedTexSubImage3D:oe,scissor:we,viewport:be,reset:ft}}function hy(a,e,t,n,i,r,s){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,S){return _?new OffscreenCanvas(L,S):No("canvas")}function v(L,S,$,Q){let re=1;if((L.width>Q||L.height>Q)&&(re=Q/Math.max(L.width,L.height)),re<1||S===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ie=S?Ka:Math.floor,Te=ie(re*L.width),oe=ie(re*L.height);p===void 0&&(p=b(Te,oe));const Z=$?b(Te,oe):p;return Z.width=Te,Z.height=oe,Z.getContext("2d").drawImage(L,0,0,Te,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Te+"x"+oe+")."),Z}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return wc(L.width)&&wc(L.height)}function M(L){return o?!1:L.wrapS!==Gn||L.wrapT!==Gn||L.minFilter!==Ut&&L.minFilter!==mn}function E(L,S){return L.generateMipmaps&&S&&L.minFilter!==Ut&&L.minFilter!==mn}function A(L){a.generateMipmap(L)}function x(L,S,$,Q,re=!1){if(o===!1)return S;if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ie=S;return S===6403&&($===5126&&(ie=33326),$===5131&&(ie=33325),$===5121&&(ie=33321)),S===33319&&($===5126&&(ie=33328),$===5131&&(ie=33327),$===5121&&(ie=33323)),S===6408&&($===5126&&(ie=34836),$===5131&&(ie=34842),$===5121&&(ie=Q===ot&&re===!1?35907:32856),$===32819&&(ie=32854),$===32820&&(ie=32855)),(ie===33325||ie===33326||ie===33327||ie===33328||ie===34842||ie===34836)&&e.get("EXT_color_buffer_float"),ie}function w(L,S,$){return E(L,$)===!0||L.isFramebufferTexture&&L.minFilter!==Ut&&L.minFilter!==mn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function R(L){return L===Ut||L===Mc||L===Oa?9728:9729}function z(L){const S=L.target;S.removeEventListener("dispose",z),I(S),S.isVideoTexture&&g.delete(S)}function k(L){const S=L.target;S.removeEventListener("dispose",k),U(S)}function I(L){const S=n.get(L);if(S.__webglInit===void 0)return;const $=L.source,Q=m.get($);if(Q){const re=Q[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&D(L),Object.keys(Q).length===0&&m.delete($)}n.remove(L)}function D(L){const S=n.get(L);a.deleteTexture(S.__webglTexture);const $=L.source,Q=m.get($);delete Q[S.__cacheKey],s.memory.textures--}function U(L){const S=L.texture,$=n.get(L),Q=n.get(S);if(Q.__webglTexture!==void 0&&(a.deleteTexture(Q.__webglTexture),s.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)a.deleteFramebuffer($.__webglFramebuffer[re]),$.__webglDepthbuffer&&a.deleteRenderbuffer($.__webglDepthbuffer[re]);else{if(a.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&a.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&a.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let re=0;re<$.__webglColorRenderbuffer.length;re++)$.__webglColorRenderbuffer[re]&&a.deleteRenderbuffer($.__webglColorRenderbuffer[re]);$.__webglDepthRenderbuffer&&a.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let re=0,ie=S.length;re<ie;re++){const Te=n.get(S[re]);Te.__webglTexture&&(a.deleteTexture(Te.__webglTexture),s.memory.textures--),n.remove(S[re])}n.remove(S),n.remove(L)}let K=0;function X(){K=0}function V(){const L=K;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),K+=1,L}function J(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.encoding),S.join()}function C(L,S){const $=n.get(L);if(L.isVideoTexture&&Ot(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const Q=L.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe($,L,S);return}}t.bindTexture(3553,$.__webglTexture,33984+S)}function B(L,S){const $=n.get(L);if(L.version>0&&$.__version!==L.version){fe($,L,S);return}t.bindTexture(35866,$.__webglTexture,33984+S)}function q(L,S){const $=n.get(L);if(L.version>0&&$.__version!==L.version){fe($,L,S);return}t.bindTexture(32879,$.__webglTexture,33984+S)}function ne(L,S){const $=n.get(L);if(L.version>0&&$.__version!==L.version){ye($,L,S);return}t.bindTexture(34067,$.__webglTexture,33984+S)}const ee={[As]:10497,[Gn]:33071,[ja]:33648},se={[Ut]:9728,[Mc]:9984,[Oa]:9986,[mn]:9729,[cd]:9985,[Ir]:9987};function Y(L,S,$){if($?(a.texParameteri(L,10242,ee[S.wrapS]),a.texParameteri(L,10243,ee[S.wrapT]),(L===32879||L===35866)&&a.texParameteri(L,32882,ee[S.wrapR]),a.texParameteri(L,10240,se[S.magFilter]),a.texParameteri(L,10241,se[S.minFilter])):(a.texParameteri(L,10242,33071),a.texParameteri(L,10243,33071),(L===32879||L===35866)&&a.texParameteri(L,32882,33071),(S.wrapS!==Gn||S.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(L,10240,R(S.magFilter)),a.texParameteri(L,10241,R(S.minFilter)),S.minFilter!==Ut&&S.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ut||S.minFilter!==Oa&&S.minFilter!==Ir||S.type===Xi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Ro&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(a.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Ae(L,S){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",z));const Q=S.source;let re=m.get(Q);re===void 0&&(re={},m.set(Q,re));const ie=J(S);if(ie!==L.__cacheKey){re[ie]===void 0&&(re[ie]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,$=!0),re[ie].usedTimes++;const Te=re[L.__cacheKey];Te!==void 0&&(re[L.__cacheKey].usedTimes--,Te.usedTimes===0&&D(S)),L.__cacheKey=ie,L.__webglTexture=re[ie].texture}return $}function fe(L,S,$){let Q=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=35866),S.isData3DTexture&&(Q=32879);const re=Ae(L,S),ie=S.source;t.bindTexture(Q,L.__webglTexture,33984+$);const Te=n.get(ie);if(ie.version!==Te.__version||re===!0){t.activeTexture(33984+$),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const oe=M(S)&&y(S.image)===!1;let Z=v(S.image,oe,!1,u);Z=it(S,Z);const Ee=y(Z)||o,me=r.convert(S.format,S.encoding);let ve=r.convert(S.type),we=x(S.internalFormat,me,ve,S.encoding,S.isVideoTexture);Y(Q,S,Ee);let be;const Ue=S.mipmaps,et=o&&S.isVideoTexture!==!0,ft=Te.__version===void 0||re===!0,P=w(S,Z,Ee);if(S.isDepthTexture)we=6402,o?S.type===Xi?we=36012:S.type===xr?we=33190:S.type===_s?we=35056:we=33189:S.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Sr&&we===6402&&S.type!==ud&&S.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=xr,ve=r.convert(S.type)),S.format===Cs&&we===6402&&(we=34041,S.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=_s,ve=r.convert(S.type))),ft&&(et?t.texStorage2D(3553,1,we,Z.width,Z.height):t.texImage2D(3553,0,we,Z.width,Z.height,0,me,ve,null));else if(S.isDataTexture)if(Ue.length>0&&Ee){et&&ft&&t.texStorage2D(3553,P,we,Ue[0].width,Ue[0].height);for(let j=0,te=Ue.length;j<te;j++)be=Ue[j],et?t.texSubImage2D(3553,j,0,0,be.width,be.height,me,ve,be.data):t.texImage2D(3553,j,we,be.width,be.height,0,me,ve,be.data);S.generateMipmaps=!1}else et?(ft&&t.texStorage2D(3553,P,we,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,Z.width,Z.height,me,ve,Z.data)):t.texImage2D(3553,0,we,Z.width,Z.height,0,me,ve,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&ft&&t.texStorage3D(35866,P,we,Ue[0].width,Ue[0].height,Z.depth);for(let j=0,te=Ue.length;j<te;j++)be=Ue[j],S.format!==Hn?me!==null?et?t.compressedTexSubImage3D(35866,j,0,0,0,be.width,be.height,Z.depth,me,be.data,0,0):t.compressedTexImage3D(35866,j,we,be.width,be.height,Z.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(35866,j,0,0,0,be.width,be.height,Z.depth,me,ve,be.data):t.texImage3D(35866,j,we,be.width,be.height,Z.depth,0,me,ve,be.data)}else{et&&ft&&t.texStorage2D(3553,P,we,Ue[0].width,Ue[0].height);for(let j=0,te=Ue.length;j<te;j++)be=Ue[j],S.format!==Hn?me!==null?et?t.compressedTexSubImage2D(3553,j,0,0,be.width,be.height,me,be.data):t.compressedTexImage2D(3553,j,we,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(3553,j,0,0,be.width,be.height,me,ve,be.data):t.texImage2D(3553,j,we,be.width,be.height,0,me,ve,be.data)}else if(S.isDataArrayTexture)et?(ft&&t.texStorage3D(35866,P,we,Z.width,Z.height,Z.depth),t.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,me,ve,Z.data)):t.texImage3D(35866,0,we,Z.width,Z.height,Z.depth,0,me,ve,Z.data);else if(S.isData3DTexture)et?(ft&&t.texStorage3D(32879,P,we,Z.width,Z.height,Z.depth),t.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,me,ve,Z.data)):t.texImage3D(32879,0,we,Z.width,Z.height,Z.depth,0,me,ve,Z.data);else if(S.isFramebufferTexture){if(ft)if(et)t.texStorage2D(3553,P,we,Z.width,Z.height);else{let j=Z.width,te=Z.height;for(let le=0;le<P;le++)t.texImage2D(3553,le,we,j,te,0,me,ve,null),j>>=1,te>>=1}}else if(Ue.length>0&&Ee){et&&ft&&t.texStorage2D(3553,P,we,Ue[0].width,Ue[0].height);for(let j=0,te=Ue.length;j<te;j++)be=Ue[j],et?t.texSubImage2D(3553,j,0,0,me,ve,be):t.texImage2D(3553,j,we,me,ve,be);S.generateMipmaps=!1}else et?(ft&&t.texStorage2D(3553,P,we,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,me,ve,Z)):t.texImage2D(3553,0,we,me,ve,Z);E(S,Ee)&&A(Q),Te.__version=ie.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ye(L,S,$){if(S.image.length!==6)return;const Q=Ae(L,S),re=S.source;t.bindTexture(34067,L.__webglTexture,33984+$);const ie=n.get(re);if(re.version!==ie.__version||Q===!0){t.activeTexture(33984+$),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,Z=[];for(let j=0;j<6;j++)!Te&&!oe?Z[j]=v(S.image[j],!1,!0,c):Z[j]=oe?S.image[j].image:S.image[j],Z[j]=it(S,Z[j]);const Ee=Z[0],me=y(Ee)||o,ve=r.convert(S.format,S.encoding),we=r.convert(S.type),be=x(S.internalFormat,ve,we,S.encoding),Ue=o&&S.isVideoTexture!==!0,et=ie.__version===void 0||Q===!0;let ft=w(S,Ee,me);Y(34067,S,me);let P;if(Te){Ue&&et&&t.texStorage2D(34067,ft,be,Ee.width,Ee.height);for(let j=0;j<6;j++){P=Z[j].mipmaps;for(let te=0;te<P.length;te++){const le=P[te];S.format!==Hn?ve!==null?Ue?t.compressedTexSubImage2D(34069+j,te,0,0,le.width,le.height,ve,le.data):t.compressedTexImage2D(34069+j,te,be,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(34069+j,te,0,0,le.width,le.height,ve,we,le.data):t.texImage2D(34069+j,te,be,le.width,le.height,0,ve,we,le.data)}}}else{P=S.mipmaps,Ue&&et&&(P.length>0&&ft++,t.texStorage2D(34067,ft,be,Z[0].width,Z[0].height));for(let j=0;j<6;j++)if(oe){Ue?t.texSubImage2D(34069+j,0,0,0,Z[j].width,Z[j].height,ve,we,Z[j].data):t.texImage2D(34069+j,0,be,Z[j].width,Z[j].height,0,ve,we,Z[j].data);for(let te=0;te<P.length;te++){const ge=P[te].image[j].image;Ue?t.texSubImage2D(34069+j,te+1,0,0,ge.width,ge.height,ve,we,ge.data):t.texImage2D(34069+j,te+1,be,ge.width,ge.height,0,ve,we,ge.data)}}else{Ue?t.texSubImage2D(34069+j,0,0,0,ve,we,Z[j]):t.texImage2D(34069+j,0,be,ve,we,Z[j]);for(let te=0;te<P.length;te++){const le=P[te];Ue?t.texSubImage2D(34069+j,te+1,0,0,ve,we,le.image[j]):t.texImage2D(34069+j,te+1,be,ve,we,le.image[j])}}}E(S,me)&&A(34067),ie.__version=re.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function pe(L,S,$,Q,re){const ie=r.convert($.format,$.encoding),Te=r.convert($.type),oe=x($.internalFormat,ie,Te,$.encoding);n.get(S).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,oe,S.width,S.height,S.depth,0,ie,Te,null):t.texImage2D(re,0,oe,S.width,S.height,0,ie,Te,null)),t.bindFramebuffer(36160,L),qe(S)?f.framebufferTexture2DMultisampleEXT(36160,Q,re,n.get($).__webglTexture,0,Qe(S)):(re===3553||re>=34069&&re<=34074)&&a.framebufferTexture2D(36160,Q,re,n.get($).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(L,S,$){if(a.bindRenderbuffer(36161,L),S.depthBuffer&&!S.stencilBuffer){let Q=33189;if($||qe(S)){const re=S.depthTexture;re&&re.isDepthTexture&&(re.type===Xi?Q=36012:re.type===xr&&(Q=33190));const ie=Qe(S);qe(S)?f.renderbufferStorageMultisampleEXT(36161,ie,Q,S.width,S.height):a.renderbufferStorageMultisample(36161,ie,Q,S.width,S.height)}else a.renderbufferStorage(36161,Q,S.width,S.height);a.framebufferRenderbuffer(36160,36096,36161,L)}else if(S.depthBuffer&&S.stencilBuffer){const Q=Qe(S);$&&qe(S)===!1?a.renderbufferStorageMultisample(36161,Q,35056,S.width,S.height):qe(S)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,S.width,S.height):a.renderbufferStorage(36161,34041,S.width,S.height),a.framebufferRenderbuffer(36160,33306,36161,L)}else{const Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let re=0;re<Q.length;re++){const ie=Q[re],Te=r.convert(ie.format,ie.encoding),oe=r.convert(ie.type),Z=x(ie.internalFormat,Te,oe,ie.encoding),Ee=Qe(S);$&&qe(S)===!1?a.renderbufferStorageMultisample(36161,Ee,Z,S.width,S.height):qe(S)?f.renderbufferStorageMultisampleEXT(36161,Ee,Z,S.width,S.height):a.renderbufferStorage(36161,Z,S.width,S.height)}}a.bindRenderbuffer(36161,null)}function Pe(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),C(S.depthTexture,0);const Q=n.get(S.depthTexture).__webglTexture,re=Qe(S);if(S.depthTexture.format===Sr)qe(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,re):a.framebufferTexture2D(36160,36096,3553,Q,0);else if(S.depthTexture.format===Cs)qe(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,re):a.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function ae(L){const S=n.get(L),$=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Pe(S.__webglFramebuffer,L)}else if($){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=a.createRenderbuffer(),Fe(S.__webglDepthbuffer[Q],L,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=a.createRenderbuffer(),Fe(S.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function Xe(L,S,$){const Q=n.get(L);S!==void 0&&pe(Q.__webglFramebuffer,L,L.texture,36064,3553),$!==void 0&&ae(L)}function rt(L){const S=L.texture,$=n.get(L),Q=n.get(S);L.addEventListener("dispose",k),L.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=a.createTexture()),Q.__version=S.version,s.memory.textures++);const re=L.isWebGLCubeRenderTarget===!0,ie=L.isWebGLMultipleRenderTargets===!0,Te=y(L)||o;if(re){$.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)$.__webglFramebuffer[oe]=a.createFramebuffer()}else{if($.__webglFramebuffer=a.createFramebuffer(),ie)if(i.drawBuffers){const oe=L.texture;for(let Z=0,Ee=oe.length;Z<Ee;Z++){const me=n.get(oe[Z]);me.__webglTexture===void 0&&(me.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&qe(L)===!1){const oe=ie?S:[S];$.__webglMultisampledFramebuffer=a.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer);for(let Z=0;Z<oe.length;Z++){const Ee=oe[Z];$.__webglColorRenderbuffer[Z]=a.createRenderbuffer(),a.bindRenderbuffer(36161,$.__webglColorRenderbuffer[Z]);const me=r.convert(Ee.format,Ee.encoding),ve=r.convert(Ee.type),we=x(Ee.internalFormat,me,ve,Ee.encoding,L.isXRRenderTarget===!0),be=Qe(L);a.renderbufferStorageMultisample(36161,be,we,L.width,L.height),a.framebufferRenderbuffer(36160,36064+Z,36161,$.__webglColorRenderbuffer[Z])}a.bindRenderbuffer(36161,null),L.depthBuffer&&($.__webglDepthRenderbuffer=a.createRenderbuffer(),Fe($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,Q.__webglTexture),Y(34067,S,Te);for(let oe=0;oe<6;oe++)pe($.__webglFramebuffer[oe],L,S,36064,34069+oe);E(S,Te)&&A(34067),t.unbindTexture()}else if(ie){const oe=L.texture;for(let Z=0,Ee=oe.length;Z<Ee;Z++){const me=oe[Z],ve=n.get(me);t.bindTexture(3553,ve.__webglTexture),Y(3553,me,Te),pe($.__webglFramebuffer,L,me,36064+Z,3553),E(me,Te)&&A(3553)}t.unbindTexture()}else{let oe=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?oe=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,Q.__webglTexture),Y(oe,S,Te),pe($.__webglFramebuffer,L,S,36064,oe),E(S,Te)&&A(oe),t.unbindTexture()}L.depthBuffer&&ae(L)}function at(L){const S=y(L)||o,$=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let Q=0,re=$.length;Q<re;Q++){const ie=$[Q];if(E(ie,S)){const Te=L.isWebGLCubeRenderTarget?34067:3553,oe=n.get(ie).__webglTexture;t.bindTexture(Te,oe),A(Te),t.unbindTexture()}}}function H(L){if(o&&L.samples>0&&qe(L)===!1){const S=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],$=L.width,Q=L.height;let re=16384;const ie=[],Te=L.stencilBuffer?33306:36096,oe=n.get(L),Z=L.isWebGLMultipleRenderTargets===!0;if(Z)for(let Ee=0;Ee<S.length;Ee++)t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Ee,36161,null),t.bindFramebuffer(36160,oe.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Ee,3553,null,0);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer);for(let Ee=0;Ee<S.length;Ee++){ie.push(36064+Ee),L.depthBuffer&&ie.push(Te);const me=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(me===!1&&(L.depthBuffer&&(re|=256),L.stencilBuffer&&(re|=1024)),Z&&a.framebufferRenderbuffer(36008,36064,36161,oe.__webglColorRenderbuffer[Ee]),me===!0&&(a.invalidateFramebuffer(36008,[Te]),a.invalidateFramebuffer(36009,[Te])),Z){const ve=n.get(S[Ee]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,ve,0)}a.blitFramebuffer(0,0,$,Q,0,0,$,Q,re,9728),d&&a.invalidateFramebuffer(36008,ie)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let Ee=0;Ee<S.length;Ee++){t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Ee,36161,oe.__webglColorRenderbuffer[Ee]);const me=n.get(S[Ee]).__webglTexture;t.bindFramebuffer(36160,oe.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Ee,3553,me,0)}t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}}function Qe(L){return Math.min(h,L.samples)}function qe(L){const S=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ot(L){const S=s.render.frame;g.get(L)!==S&&(g.set(L,S),L.update())}function it(L,S){const $=L.encoding,Q=L.format,re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Sc||$!==Or&&($===ot?o===!1?e.has("EXT_sRGB")===!0&&Q===Hn?(L.format=Sc,L.minFilter=mn,L.generateMipmaps=!1):S=gd.sRGBToLinear(S):(Q!==Hn||re!==Nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),S}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.setTexture2D=C,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=ne,this.rebindTextures=Xe,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=qe}function fy(a,e,t){const n=t.isWebGL2;function i(r,s=null){let o;if(r===Nr)return 5121;if(r===Wm)return 32819;if(r===Xm)return 32820;if(r===Vm)return 5120;if(r===Gm)return 5122;if(r===ud)return 5123;if(r===Hm)return 5124;if(r===xr)return 5125;if(r===Xi)return 5126;if(r===Ro)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===qm)return 6406;if(r===Hn)return 6408;if(r===jm)return 6409;if(r===Km)return 6410;if(r===Sr)return 6402;if(r===Cs)return 34041;if(r===Ym)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Sc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===$m)return 6403;if(r===Zm)return 36244;if(r===Jm)return 33319;if(r===Qm)return 33320;if(r===eg)return 36249;if(r===yl||r===Ml||r===bl||r===Sl)if(s===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===yl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ml)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===yl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ml)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xu||r===qu||r===Yu||r===ju)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Xu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ju)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===tg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ku||r===$u)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ku)return s===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===$u)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zu||r===Ju||r===Qu||r===eh||r===th||r===nh||r===ih||r===rh||r===sh||r===oh||r===ah||r===lh||r===ch||r===uh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Zu)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ju)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qu)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===eh)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===th)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nh)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ih)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rh)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oh)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ah)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lh)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ch)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uh)return s===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===hh)return s===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===_s?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class dy extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yr extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const py={type:"move"};class Kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(py)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class my extends Wt{constructor(e,t,n,i,r,s,o,l,c,u){if(u=u!==void 0?u:Sr,u!==Sr&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Sr&&(n=xr),n===void 0&&u===Cs&&(n=_s),super(null,i,r,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1}}class gy extends zs{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,d=null;const g=t.getContextAttributes();let p=null,m=null;const _=[],b=[],v=new Set,y=new Map,M=new ln;M.layers.enable(1),M.viewport=new ht;const E=new ln;E.layers.enable(2),E.viewport=new ht;const A=[M,E],x=new dy;x.layers.enable(1),x.layers.enable(2);let w=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=_[B];return q===void 0&&(q=new Kl,_[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=_[B];return q===void 0&&(q=new Kl,_[B]=q),q.getGripSpace()},this.getHand=function(B){let q=_[B];return q===void 0&&(q=new Kl,_[B]=q),q.getHandSpace()};function z(B){const q=b.indexOf(B.inputSource);if(q===-1)return;const ne=_[q];ne!==void 0&&ne.dispatchEvent({type:B.type,data:B.inputSource})}function k(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",I);for(let B=0;B<_.length;B++){const q=b[B];q!==null&&(b[B]=null,_[B].disconnect(q))}w=null,R=null,e.setRenderTarget(p),f=null,h=null,u=null,i=null,m=null,C.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",k),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:f}),m=new Fr(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:Nr,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let q=null,ne=null,ee=null;g.depth&&(ee=g.stencil?35056:33190,q=g.stencil?Cs:Sr,ne=g.stencil?_s:xr);const se={colorFormat:32856,depthFormat:ee,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(se),i.updateRenderState({layers:[h]}),m=new Fr(h.textureWidth,h.textureHeight,{format:Hn,type:Nr,depthTexture:new my(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Y=e.properties.get(m);Y.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await i.requestReferenceSpace(o),C.setContext(i),C.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(B){for(let q=0;q<B.removed.length;q++){const ne=B.removed[q],ee=b.indexOf(ne);ee>=0&&(b[ee]=null,_[ee].disconnect(ne))}for(let q=0;q<B.added.length;q++){const ne=B.added[q];let ee=b.indexOf(ne);if(ee===-1){for(let Y=0;Y<_.length;Y++)if(Y>=b.length){b.push(ne),ee=Y;break}else if(b[Y]===null){b[Y]=ne,ee=Y;break}if(ee===-1)break}const se=_[ee];se&&se.connect(ne)}}const D=new F,U=new F;function K(B,q,ne){D.setFromMatrixPosition(q.matrixWorld),U.setFromMatrixPosition(ne.matrixWorld);const ee=D.distanceTo(U),se=q.projectionMatrix.elements,Y=ne.projectionMatrix.elements,Ae=se[14]/(se[10]-1),fe=se[14]/(se[10]+1),ye=(se[9]+1)/se[5],pe=(se[9]-1)/se[5],Fe=(se[8]-1)/se[0],Pe=(Y[8]+1)/Y[0],ae=Ae*Fe,Xe=Ae*Pe,rt=ee/(-Fe+Pe),at=rt*-Fe;q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(at),B.translateZ(rt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const H=Ae+rt,Qe=fe+rt,qe=ae-at,Ot=Xe+(ee-at),it=ye*fe/Qe*H,L=pe*fe/Qe*H;B.projectionMatrix.makePerspective(qe,Ot,it,L,H,Qe)}function X(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;x.near=E.near=M.near=B.near,x.far=E.far=M.far=B.far,(w!==x.near||R!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,R=x.far);const q=B.parent,ne=x.cameras;X(x,q);for(let se=0;se<ne.length;se++)X(ne[se],q);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),B.matrix.copy(x.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const ee=B.children;for(let se=0,Y=ee.length;se<Y;se++)ee[se].updateMatrixWorld(!0);ne.length===2?K(x,M,E):x.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(B){h!==null&&(h.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.getPlanes=function(){return v};let V=null;function J(B,q){if(c=q.getViewerPose(l||s),d=q,c!==null){const ne=c.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let ee=!1;ne.length!==x.cameras.length&&(x.cameras.length=0,ee=!0);for(let se=0;se<ne.length;se++){const Y=ne[se];let Ae=null;if(f!==null)Ae=f.getViewport(Y);else{const ye=u.getViewSubImage(h,Y);Ae=ye.viewport,se===0&&(e.setRenderTargetTextures(m,ye.colorTexture,h.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(m))}let fe=A[se];fe===void 0&&(fe=new ln,fe.layers.enable(se),fe.viewport=new ht,A[se]=fe),fe.matrix.fromArray(Y.transform.matrix),fe.projectionMatrix.fromArray(Y.projectionMatrix),fe.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),se===0&&x.matrix.copy(fe.matrix),ee===!0&&x.cameras.push(fe)}}for(let ne=0;ne<_.length;ne++){const ee=b[ne],se=_[ne];ee!==null&&se!==void 0&&se.update(ee,q,l||s)}if(V&&V(B,q),q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let ne=null;for(const ee of v)q.detectedPlanes.has(ee)||(ne===null&&(ne=[]),ne.push(ee));if(ne!==null)for(const ee of ne)v.delete(ee),y.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of q.detectedPlanes)if(!v.has(ee))v.add(ee),y.set(ee,q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const se=y.get(ee);ee.lastChangedTime>se&&(y.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}d=null}const C=new Td;C.setAnimationLoop(J),this.setAnimationLoop=function(B){V=B},this.dispose=function(){}}}function _y(a,e){function t(p,m){m.color.getRGB(p.fogColor.value,bd(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,b,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),u(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(i(p,m),d(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?o(p,m,_,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Yn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Yn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const y=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let v;m.aoMap?v=m.aoMap:m.lightMap&&(v=m.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function o(p,m,_,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=b*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Yn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function xy(a,e,t,n){let i={},r={},s=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(b,v){const y=v.program;n.uniformBlockBinding(b,y)}function c(b,v){let y=i[b.id];y===void 0&&(g(b),y=u(b),i[b.id]=y,b.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(b,M);const E=e.render.frame;r[b.id]!==E&&(f(b),r[b.id]=E)}function u(b){const v=h();b.__bindingPointIndex=v;const y=a.createBuffer(),M=b.__size,E=b.usage;return a.bindBuffer(35345,y),a.bufferData(35345,M,E),a.bindBuffer(35345,null),a.bindBufferBase(35345,v,y),y}function h(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=i[b.id],y=b.uniforms,M=b.__cache;a.bindBuffer(35345,v);for(let E=0,A=y.length;E<A;E++){const x=y[E];if(d(x,E,M)===!0){const w=x.__offset,R=Array.isArray(x.value)?x.value:[x.value];let z=0;for(let k=0;k<R.length;k++){const I=R[k],D=p(I);typeof I=="number"?(x.__data[0]=I,a.bufferSubData(35345,w+z,x.__data)):I.isMatrix3?(x.__data[0]=I.elements[0],x.__data[1]=I.elements[1],x.__data[2]=I.elements[2],x.__data[3]=I.elements[0],x.__data[4]=I.elements[3],x.__data[5]=I.elements[4],x.__data[6]=I.elements[5],x.__data[7]=I.elements[0],x.__data[8]=I.elements[6],x.__data[9]=I.elements[7],x.__data[10]=I.elements[8],x.__data[11]=I.elements[0]):(I.toArray(x.__data,z),z+=D.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,w,x.__data)}}a.bindBuffer(35345,null)}function d(b,v,y){const M=b.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const E=Array.isArray(M)?M:[M],A=[];for(let x=0;x<E.length;x++)A.push(E[x].clone());y[v]=A}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const E=Array.isArray(y[v])?y[v]:[y[v]],A=Array.isArray(M)?M:[M];for(let x=0;x<E.length;x++){const w=E[x];if(w.equals(A[x])===!1)return w.copy(A[x]),!0}}return!1}function g(b){const v=b.uniforms;let y=0;const M=16;let E=0;for(let A=0,x=v.length;A<x;A++){const w=v[A],R={boundary:0,storage:0},z=Array.isArray(w.value)?w.value:[w.value];for(let k=0,I=z.length;k<I;k++){const D=z[k],U=p(D);R.boundary+=U.boundary,R.storage+=U.storage}if(w.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,A>0){E=y%M;const k=M-E;E!==0&&k-R.boundary<0&&(y+=M-E,w.__offset=y)}y+=R.storage}return E=y%M,E>0&&(y+=M-E),b.__size=y,b.__cache={},this}function p(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const y=s.indexOf(v.__bindingPointIndex);s.splice(y,1),a.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function _(){for(const b in i)a.deleteBuffer(i[b]);s=[],i={},r={}}return{bind:l,update:c,dispose:_}}function vy(){const a=No("canvas");return a.style.display="block",a}function yy(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:vy(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,s=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Or,this.physicallyCorrectLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;const p=this;let m=!1,_=0,b=0,v=null,y=-1,M=null;const E=new ht,A=new ht;let x=null,w=e.width,R=e.height,z=1,k=null,I=null;const D=new ht(0,0,w,R),U=new ht(0,0,w,R);let K=!1;const X=new iu;let V=!1,J=!1,C=null;const B=new Ke,q=new nt,ne=new F,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return v===null?z:1}let Y=t;function Ae(T,N){for(let G=0;G<T.length;G++){const O=T[G],W=e.getContext(O,N);if(W!==null)return W}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${eu}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Ue,!1),Y===null){const N=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&N.shift(),Y=Ae(N,T),Y===null)throw Ae(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let fe,ye,pe,Fe,Pe,ae,Xe,rt,at,H,Qe,qe,Ot,it,L,S,$,Q,re,ie,Te,oe,Z,Ee;function me(){fe=new Rx(Y),ye=new wx(Y,fe,a),fe.init(ye),oe=new fy(Y,fe,ye),pe=new uy(Y,fe,ye),Fe=new Ix,Pe=new $v,ae=new hy(Y,fe,pe,Pe,ye,oe,Fe),Xe=new Ex(p),rt=new Lx(p),at=new Gg(Y,ye),Z=new bx(Y,fe,at,ye),H=new Px(Y,at,Fe,Z),Qe=new kx(Y,H,at,Fe),re=new Fx(Y,ye,ae),S=new Tx(Pe),qe=new Kv(p,Xe,rt,fe,ye,Z,S),Ot=new _y(p,Pe),it=new Jv,L=new ry(fe,ye),Q=new Mx(p,Xe,rt,pe,Qe,u,s),$=new cy(p,Qe,ye),Ee=new xy(Y,Fe,ye,pe),ie=new Sx(Y,fe,Fe,ye),Te=new Dx(Y,fe,Fe,ye),Fe.programs=qe.programs,p.capabilities=ye,p.extensions=fe,p.properties=Pe,p.renderLists=it,p.shadowMap=$,p.state=pe,p.info=Fe}me();const ve=new gy(p,Y);this.xr=ve,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const T=fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(w,R,!1))},this.getSize=function(T){return T.set(w,R)},this.setSize=function(T,N,G){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,R=N,e.width=Math.floor(T*z),e.height=Math.floor(N*z),G!==!1&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(w*z,R*z).floor()},this.setDrawingBufferSize=function(T,N,G){w=T,R=N,z=G,e.width=Math.floor(T*G),e.height=Math.floor(N*G),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,N,G,O){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,N,G,O),pe.viewport(E.copy(D).multiplyScalar(z).floor())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,N,G,O){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,N,G,O),pe.scissor(A.copy(U).multiplyScalar(z).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(T){pe.setScissorTest(K=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(T=!0,N=!0,G=!0){let O=0;T&&(O|=16384),N&&(O|=256),G&&(O|=1024),Y.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Ue,!1),it.dispose(),L.dispose(),Pe.dispose(),Xe.dispose(),rt.dispose(),Qe.dispose(),Z.dispose(),Ee.dispose(),qe.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",le),ve.removeEventListener("sessionend",ge),C&&(C.dispose(),C=null),Ge.stop()};function we(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const T=Fe.autoReset,N=$.enabled,G=$.autoUpdate,O=$.needsUpdate,W=$.type;me(),Fe.autoReset=T,$.enabled=N,$.autoUpdate=G,$.needsUpdate=O,$.type=W}function Ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function et(T){const N=T.target;N.removeEventListener("dispose",et),ft(N)}function ft(T){P(T),Pe.remove(T)}function P(T){const N=Pe.get(T).programs;N!==void 0&&(N.forEach(function(G){qe.releaseProgram(G)}),T.isShaderMaterial&&qe.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,G,O,W,he){N===null&&(N=ee);const de=W.isMesh&&W.matrixWorld.determinant()<0,De=ze(T,N,G,O,W);pe.setMaterial(O,de);let Me=G.index,Ie=1;O.wireframe===!0&&(Me=H.getWireframeAttribute(G),Ie=2);const Oe=G.drawRange,Re=G.attributes.position;let He=Oe.start*Ie,st=(Oe.start+Oe.count)*Ie;he!==null&&(He=Math.max(He,he.start*Ie),st=Math.min(st,(he.start+he.count)*Ie)),Me!==null?(He=Math.max(He,0),st=Math.min(st,Me.count)):Re!=null&&(He=Math.max(He,0),st=Math.min(st,Re.count));const Gt=st-He;if(Gt<0||Gt===1/0)return;Z.setup(W,O,De,G,Me);let Fn,Ye=ie;if(Me!==null&&(Fn=at.get(Me),Ye=Te,Ye.setIndex(Fn)),W.isMesh)O.wireframe===!0?(pe.setLineWidth(O.wireframeLinewidth*se()),Ye.setMode(1)):Ye.setMode(4);else if(W.isLine){let Ce=O.linewidth;Ce===void 0&&(Ce=1),pe.setLineWidth(Ce*se()),W.isLineSegments?Ye.setMode(1):W.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else W.isPoints?Ye.setMode(0):W.isSprite&&Ye.setMode(4);if(W.isInstancedMesh)Ye.renderInstances(He,Gt,W.count);else if(G.isInstancedBufferGeometry){const Ce=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,dn=Math.min(G.instanceCount,Ce);Ye.renderInstances(He,Gt,dn)}else Ye.render(He,Gt)},this.compile=function(T,N){function G(O,W,he){O.transparent===!0&&O.side===Zo?(O.side=Yn,O.needsUpdate=!0,ke(O,W,he),O.side=tr,O.needsUpdate=!0,ke(O,W,he),O.side=Zo):ke(O,W,he)}f=L.get(T),f.init(),g.push(f),T.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(p.physicallyCorrectLights),T.traverse(function(O){const W=O.material;if(W)if(Array.isArray(W))for(let he=0;he<W.length;he++){const de=W[he];G(de,T,O)}else G(W,T,O)}),g.pop(),f=null};let j=null;function te(T){j&&j(T)}function le(){Ge.stop()}function ge(){Ge.start()}const Ge=new Td;Ge.setAnimationLoop(te),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(T){j=T,ve.setAnimationLoop(T),T===null?Ge.stop():Ge.start()},ve.addEventListener("sessionstart",le),ve.addEventListener("sessionend",ge),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(N),N=ve.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,N,v),f=L.get(T,g.length),f.init(),g.push(f),B.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(B),J=this.localClippingEnabled,V=S.init(this.clippingPlanes,J,N),h=it.get(T,d.length),h.init(),d.push(h),mt(T,N,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(k,I),V===!0&&S.beginShadows();const G=f.state.shadowsArray;if($.render(G,T,N),V===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(h,T),f.setupLights(p.physicallyCorrectLights),N.isArrayCamera){const O=N.cameras;for(let W=0,he=O.length;W<he;W++){const de=O[W];dt(h,T,de,de.viewport)}}else dt(h,T,N);v!==null&&(ae.updateMultisampleRenderTarget(v),ae.updateRenderTargetMipmap(v)),T.isScene===!0&&T.onAfterRender(p,T,N),Z.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function mt(T,N,G,O){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){O&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);const de=Qe.update(T),De=T.material;De.visible&&h.push(T,de,De,G,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Fe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Fe.render.frame),!T.frustumCulled||X.intersectsObject(T))){O&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);const de=Qe.update(T),De=T.material;if(Array.isArray(De)){const Me=de.groups;for(let Ie=0,Oe=Me.length;Ie<Oe;Ie++){const Re=Me[Ie],He=De[Re.materialIndex];He&&He.visible&&h.push(T,de,He,G,ne.z,Re)}}else De.visible&&h.push(T,de,De,G,ne.z,null)}}const he=T.children;for(let de=0,De=he.length;de<De;de++)mt(he[de],N,G,O)}function dt(T,N,G,O){const W=T.opaque,he=T.transmissive,de=T.transparent;f.setupLightsView(G),he.length>0&&Mn(W,N,G),O&&pe.viewport(E.copy(O)),W.length>0&&_e(W,N,G),he.length>0&&_e(he,N,G),de.length>0&&_e(de,N,G),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Mn(T,N,G){const O=ye.isWebGL2;C===null&&(C=new Fr(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Ro:Nr,minFilter:Ir,samples:O&&r===!0?4:0})),p.getDrawingBufferSize(q),O?C.setSize(q.x,q.y):C.setSize(Ka(q.x),Ka(q.y));const W=p.getRenderTarget();p.setRenderTarget(C),p.clear();const he=p.toneMapping;p.toneMapping=Li,_e(T,N,G),p.toneMapping=he,ae.updateMultisampleRenderTarget(C),ae.updateRenderTargetMipmap(C),p.setRenderTarget(W)}function _e(T,N,G){const O=N.isScene===!0?N.overrideMaterial:null;for(let W=0,he=T.length;W<he;W++){const de=T[W],De=de.object,Me=de.geometry,Ie=O===null?de.material:O,Oe=de.group;De.layers.test(G.layers)&&Se(De,N,G,Me,Ie,Oe)}}function Se(T,N,G,O,W,he){T.onBeforeRender(p,N,G,O,W,he),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(p,N,G,O,T,he),W.transparent===!0&&W.side===Zo?(W.side=Yn,W.needsUpdate=!0,p.renderBufferDirect(G,N,O,W,T,he),W.side=tr,W.needsUpdate=!0,p.renderBufferDirect(G,N,O,W,T,he),W.side=Zo):p.renderBufferDirect(G,N,O,W,T,he),T.onAfterRender(p,N,G,O,W,he)}function ke(T,N,G){N.isScene!==!0&&(N=ee);const O=Pe.get(T),W=f.state.lights,he=f.state.shadowsArray,de=W.state.version,De=qe.getParameters(T,W.state,he,N,G),Me=qe.getProgramCacheKey(De);let Ie=O.programs;O.environment=T.isMeshStandardMaterial?N.environment:null,O.fog=N.fog,O.envMap=(T.isMeshStandardMaterial?rt:Xe).get(T.envMap||O.environment),Ie===void 0&&(T.addEventListener("dispose",et),Ie=new Map,O.programs=Ie);let Oe=Ie.get(Me);if(Oe!==void 0){if(O.currentProgram===Oe&&O.lightsStateVersion===de)return ue(T,De),Oe}else De.uniforms=qe.getUniforms(T),T.onBuild(G,De,p),T.onBeforeCompile(De,p),Oe=qe.acquireProgram(De,Me),Ie.set(Me,Oe),O.uniforms=De.uniforms;const Re=O.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=S.uniform),ue(T,De),O.needsLights=Ne(T),O.lightsStateVersion=de,O.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.directionalShadowMap.value=W.state.directionalShadowMap,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotShadowMap.value=W.state.spotShadowMap,Re.spotLightMatrix.value=W.state.spotLightMatrix,Re.spotLightMap.value=W.state.spotLightMap,Re.pointShadowMap.value=W.state.pointShadowMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix);const He=Oe.getUniforms(),st=ka.seqWithValue(He.seq,Re);return O.currentProgram=Oe,O.uniformsList=st,Oe}function ue(T,N){const G=Pe.get(T);G.outputEncoding=N.outputEncoding,G.instancing=N.instancing,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function ze(T,N,G,O,W){N.isScene!==!0&&(N=ee),ae.resetTextureUnits();const he=N.fog,de=O.isMeshStandardMaterial?N.environment:null,De=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:Or,Me=(O.isMeshStandardMaterial?rt:Xe).get(O.envMap||de),Ie=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!O.normalMap&&!!G.attributes.tangent,Re=!!G.morphAttributes.position,He=!!G.morphAttributes.normal,st=!!G.morphAttributes.color,Gt=O.toneMapped?p.toneMapping:Li,Fn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ye=Fn!==void 0?Fn.length:0,Ce=Pe.get(O),dn=f.state.lights;if(V===!0&&(J===!0||T!==M)){const Sn=T===M&&O.id===y;S.setState(O,T,Sn)}let bt=!1;O.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==dn.state.version||Ce.outputEncoding!==De||W.isInstancedMesh&&Ce.instancing===!1||!W.isInstancedMesh&&Ce.instancing===!0||W.isSkinnedMesh&&Ce.skinning===!1||!W.isSkinnedMesh&&Ce.skinning===!0||Ce.envMap!==Me||O.fog===!0&&Ce.fog!==he||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==S.numPlanes||Ce.numIntersection!==S.numIntersection)||Ce.vertexAlphas!==Ie||Ce.vertexTangents!==Oe||Ce.morphTargets!==Re||Ce.morphNormals!==He||Ce.morphColors!==st||Ce.toneMapping!==Gt||ye.isWebGL2===!0&&Ce.morphTargetsCount!==Ye)&&(bt=!0):(bt=!0,Ce.__version=O.version);let ni=Ce.currentProgram;bt===!0&&(ni=ke(O,N,W));let Fi=!1,Xt=!1,gi=!1;const Et=ni.getUniforms(),bn=Ce.uniforms;if(pe.useProgram(ni.program)&&(Fi=!0,Xt=!0,gi=!0),O.id!==y&&(y=O.id,Xt=!0),Fi||M!==T){if(Et.setValue(Y,"projectionMatrix",T.projectionMatrix),ye.logarithmicDepthBuffer&&Et.setValue(Y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Xt=!0,gi=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Sn=Et.map.cameraPosition;Sn!==void 0&&Sn.setValue(Y,ne.setFromMatrixPosition(T.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Et.setValue(Y,"isOrthographic",T.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||W.isSkinnedMesh)&&Et.setValue(Y,"viewMatrix",T.matrixWorldInverse)}if(W.isSkinnedMesh){Et.setOptional(Y,W,"bindMatrix"),Et.setOptional(Y,W,"bindMatrixInverse");const Sn=W.skeleton;Sn&&(ye.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),Et.setValue(Y,"boneTexture",Sn.boneTexture,ae),Et.setValue(Y,"boneTextureSize",Sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xl=G.morphAttributes;if((xl.position!==void 0||xl.normal!==void 0||xl.color!==void 0&&ye.isWebGL2===!0)&&re.update(W,G,O,ni),(Xt||Ce.receiveShadow!==W.receiveShadow)&&(Ce.receiveShadow=W.receiveShadow,Et.setValue(Y,"receiveShadow",W.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(bn.envMap.value=Me,bn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),Xt&&(Et.setValue(Y,"toneMappingExposure",p.toneMappingExposure),Ce.needsLights&&Le(bn,gi),he&&O.fog===!0&&Ot.refreshFogUniforms(bn,he),Ot.refreshMaterialUniforms(bn,O,z,R,C),ka.upload(Y,Ce.uniformsList,bn,ae)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ka.upload(Y,Ce.uniformsList,bn,ae),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Et.setValue(Y,"center",W.center),Et.setValue(Y,"modelViewMatrix",W.modelViewMatrix),Et.setValue(Y,"normalMatrix",W.normalMatrix),Et.setValue(Y,"modelMatrix",W.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Sn=O.uniformsGroups;for(let vl=0,hm=Sn.length;vl<hm;vl++)if(ye.isWebGL2){const zu=Sn[vl];Ee.update(zu,ni),Ee.bind(zu,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function Le(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Ne(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(T,N,G){Pe.get(T.texture).__webglTexture=N,Pe.get(T.depthTexture).__webglTexture=G;const O=Pe.get(T);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=G===void 0,O.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const G=Pe.get(T);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,G=0){v=T,_=N,b=G;let O=!0,W=null,he=!1,de=!1;if(T){const Me=Pe.get(T);Me.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),O=!1):Me.__webglFramebuffer===void 0?ae.setupRenderTarget(T):Me.__hasExternalTextures&&ae.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(de=!0);const Oe=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(W=Oe[N],he=!0):ye.isWebGL2&&T.samples>0&&ae.useMultisampledRTT(T)===!1?W=Pe.get(T).__webglMultisampledFramebuffer:W=Oe,E.copy(T.viewport),A.copy(T.scissor),x=T.scissorTest}else E.copy(D).multiplyScalar(z).floor(),A.copy(U).multiplyScalar(z).floor(),x=K;if(pe.bindFramebuffer(36160,W)&&ye.drawBuffers&&O&&pe.drawBuffers(T,W),pe.viewport(E),pe.scissor(A),pe.setScissorTest(x),he){const Me=Pe.get(T.texture);Y.framebufferTexture2D(36160,36064,34069+N,Me.__webglTexture,G)}else if(de){const Me=Pe.get(T.texture),Ie=N||0;Y.framebufferTextureLayer(36160,36064,Me.__webglTexture,G||0,Ie)}y=-1},this.readRenderTargetPixels=function(T,N,G,O,W,he,de){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&de!==void 0&&(De=De[de]),De){pe.bindFramebuffer(36160,De);try{const Me=T.texture,Ie=Me.format,Oe=Me.type;if(Ie!==Hn&&oe.convert(Ie)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Oe===Ro&&(fe.has("EXT_color_buffer_half_float")||ye.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Oe!==Nr&&oe.convert(Oe)!==Y.getParameter(35738)&&!(Oe===Xi&&(ye.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-O&&G>=0&&G<=T.height-W&&Y.readPixels(N,G,O,W,oe.convert(Ie),oe.convert(Oe),he)}finally{const Me=v!==null?Pe.get(v).__webglFramebuffer:null;pe.bindFramebuffer(36160,Me)}}},this.copyFramebufferToTexture=function(T,N,G=0){const O=Math.pow(2,-G),W=Math.floor(N.image.width*O),he=Math.floor(N.image.height*O);ae.setTexture2D(N,0),Y.copyTexSubImage2D(3553,G,0,0,T.x,T.y,W,he),pe.unbindTexture()},this.copyTextureToTexture=function(T,N,G,O=0){const W=N.image.width,he=N.image.height,de=oe.convert(G.format),De=oe.convert(G.type);ae.setTexture2D(G,0),Y.pixelStorei(37440,G.flipY),Y.pixelStorei(37441,G.premultiplyAlpha),Y.pixelStorei(3317,G.unpackAlignment),N.isDataTexture?Y.texSubImage2D(3553,O,T.x,T.y,W,he,de,De,N.image.data):N.isCompressedTexture?Y.compressedTexSubImage2D(3553,O,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,de,N.mipmaps[0].data):Y.texSubImage2D(3553,O,T.x,T.y,de,De,N.image),O===0&&G.generateMipmaps&&Y.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(T,N,G,O,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=T.max.x-T.min.x+1,de=T.max.y-T.min.y+1,De=T.max.z-T.min.z+1,Me=oe.convert(O.format),Ie=oe.convert(O.type);let Oe;if(O.isData3DTexture)ae.setTexture3D(O,0),Oe=32879;else if(O.isDataArrayTexture)ae.setTexture2DArray(O,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,O.flipY),Y.pixelStorei(37441,O.premultiplyAlpha),Y.pixelStorei(3317,O.unpackAlignment);const Re=Y.getParameter(3314),He=Y.getParameter(32878),st=Y.getParameter(3316),Gt=Y.getParameter(3315),Fn=Y.getParameter(32877),Ye=G.isCompressedTexture?G.mipmaps[0]:G.image;Y.pixelStorei(3314,Ye.width),Y.pixelStorei(32878,Ye.height),Y.pixelStorei(3316,T.min.x),Y.pixelStorei(3315,T.min.y),Y.pixelStorei(32877,T.min.z),G.isDataTexture||G.isData3DTexture?Y.texSubImage3D(Oe,W,N.x,N.y,N.z,he,de,De,Me,Ie,Ye.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Oe,W,N.x,N.y,N.z,he,de,De,Me,Ye.data)):Y.texSubImage3D(Oe,W,N.x,N.y,N.z,he,de,De,Me,Ie,Ye),Y.pixelStorei(3314,Re),Y.pixelStorei(32878,He),Y.pixelStorei(3316,st),Y.pixelStorei(3315,Gt),Y.pixelStorei(32877,Fn),W===0&&O.generateMipmaps&&Y.generateMipmap(Oe),pe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ae.setTextureCube(T,0):T.isData3DTexture?ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ae.setTexture2DArray(T,0):ae.setTexture2D(T,0),pe.unbindTexture()},this.resetState=function(){_=0,b=0,v=null,pe.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Rd extends yy{}Rd.prototype.isWebGL1Renderer=!0;class My extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class by{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new F;class au{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new au(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kh=new F,$h=new ht,Zh=new ht,Sy=new F,Jh=new Ke;class wy extends Wn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;$h.fromBufferAttribute(i.attributes.skinIndex,e),Zh.fromBufferAttribute(i.attributes.skinWeight,e),Kh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Zh.getComponent(r);if(s!==0){const o=$h.getComponent(r);Jh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Sy.copy(Kh).applyMatrix4(Jh),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Pd extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ty extends Wt{constructor(e=null,t=1,n=1,i,r,s,o,l,c=Ut,u=Ut,h,f){super(null,s,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qh=new Ke,Ey=new Ke;class lu{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:Ey;Qh.multiplyMatrices(o,t[r]),Qh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new lu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=dd(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ty(t,e,e,Hn,Xi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Pd),this.bones.push(s),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ef extends fn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const tf=new Ke,nf=new Ke,ga=[],Ay=new Ke,Zs=new Wn;class Cy extends Wn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ef(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Ay)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,tf),nf.multiplyMatrices(n,tf),Zs.matrixWorld=nf,Zs.raycast(e,ga);for(let s=0,o=ga.length;s<o;s++){const l=ga[s];l.instanceId=r,l.object=this,t.push(l)}ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ef(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Dd extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rf=new F,sf=new F,of=new Ke,$l=new nu,_a=new Bs;class cu extends Mt{constructor(e=new pi,t=new Dd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)rf.fromBufferAttribute(t,i-1),sf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=rf.distanceTo(sf);e.setAttribute("lineDistance",new Ri(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(i),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;of.copy(i).invert(),$l.copy(e.ray).applyMatrix4(of);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,u=new F,h=new F,f=new F,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,s.start),b=Math.min(g.count,s.start+s.count);for(let v=_,y=b-1;v<y;v+=d){const M=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,E),$l.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,s.start),b=Math.min(m.count,s.start+s.count);for(let v=_,y=b-1;v<y;v+=d){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),$l.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const af=new F,lf=new F;class Ly extends cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)af.fromBufferAttribute(t,i),lf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+af.distanceTo(lf);e.setAttribute("lineDistance",new Ri(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ry extends cu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Id extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cf=new Ke,Ec=new nu,xa=new Bs,va=new F;class Py extends Mt{constructor(e=new pi,t=new Id){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(i),xa.radius+=r,e.ray.intersectsSphere(xa)===!1)return;cf.copy(i).invert(),Ec.copy(e.ray).applyMatrix4(cf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let g=f,p=d;g<p;g++){const m=c.getX(g);va.fromBufferAttribute(h,m),uf(va,m,l,i,e,t,this)}}else{const f=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let g=f,p=d;g<p;g++)va.fromBufferAttribute(h,g),uf(va,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function uf(a,e,t,n,i,r,s){const o=Ec.distanceSqToPoint(a);if(o<t){const l=new F;Ec.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class uu extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fd,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wr extends uu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Vi(a,e,t){return Nd(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function ya(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Nd(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Dy(a){function e(i,r){return a[i]-a[r]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hf(a,e,t){const n=a.length,i=new a.constructor(n);for(let r=0,s=0;s!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[s++]=a[o+l]}return i}function Od(a,e,t,n){let i=1,r=a[0];for(;r!==void 0&&r[n]===void 0;)r=a[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=a[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=a[i++];while(r!==void 0)}class jo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Iy extends jo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case dh:r=e,o=2*t-n;break;case ph:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case dh:s=e,l=2*n-t;break;case ph:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,_=-f*m+2*f*p-f*g,b=(1+f)*m+(-1.5-2*f)*p+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*p+.5*g,y=d*m-d*p;for(let M=0;M!==o;++M)r[M]=_*s[u+M]+b*s[c+M]+v*s[l+M]+y*s[h+M];return r}}class Ny extends jo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=s[c+f]*h+s[l+f]*u;return r}}class Oy extends jo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class mi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ya(t,this.TimeBufferType),this.values=ya(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ya(e.times,Array),values:ya(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ny(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Iy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Po:t=this.InterpolantFactoryMethodDiscrete;break;case Ls:t=this.InterpolantFactoryMethodLinear;break;case wl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return Ls;case this.InterpolantFactoryMethodSmooth:return wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=Vi(n,r,s),this.values=Vi(this.values,r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&Nd(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Vi(this.times),t=Vi(this.values),n=this.getValueSize(),i=this.getInterpolation()===wl,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const p=t[h+g];if(p!==t[f+g]||p!==t[d+g]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const h=o*n,f=s*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=Vi(e,0,s),this.values=Vi(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=Vi(this.times,0),t=Vi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Ls;class Gs extends mi{}Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Po;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Fd extends mi{}Fd.prototype.ValueTypeName="color";class Oo extends mi{}Oo.prototype.ValueTypeName="number";class Fy extends jo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)sr.slerpFlat(r,0,s,c-o,s,c,l);return r}}class zr extends mi{InterpolantFactoryMethodLinear(e){return new Fy(this.times,this.values,this.getValueSize(),e)}}zr.prototype.ValueTypeName="quaternion";zr.prototype.DefaultInterpolation=Ls;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends mi{}Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Po;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Fo extends mi{}Fo.prototype.ValueTypeName="vector";class ky{constructor(e,t=-1,n,i=ng){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ti(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(Uy(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(mi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Dy(l);l=hf(l,1,u),c=hf(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new Oo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,p){if(d.length!==0){const m=[],_=[];Od(d,m,_,g),m.length!==0&&p.push(new h(f,m,_))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let p=0;p<f[g].morphTargets.length;p++)d[f[g].morphTargets[p]]=-1;for(const p in d){const m=[],_=[];for(let b=0;b!==f[g].morphTargets.length;++b){const v=f[g];m.push(v.time),_.push(v.morphTarget===p?1:0)}i.push(new Oo(".morphTargetInfluence["+p+"]",m,_))}l=d.length*s}else{const d=".bones["+t[h].name+"]";n(Fo,d+".position",f,"pos",i),n(zr,d+".quaternion",f,"rot",i),n(Fo,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zy(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oo;case"vector":case"vector2":case"vector3":case"vector4":return Fo;case"color":return Fd;case"quaternion":return zr;case"bool":case"boolean":return Gs;case"string":return Hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Uy(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zy(a.type);if(a.times===void 0){const t=[],n=[];Od(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Ps={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class By{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Vy=new By;class Ko{constructor(e){this.manager=e!==void 0?e:Vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const bi={};class Gy extends Error{constructor(e,t){super(e),this.response=t}}class kd extends Ko{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ps.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:i});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=bi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let p=0;const m=new ReadableStream({start(_){b();function b(){h.read().then(({done:v,value:y})=>{if(v)_.close();else{p+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:d});for(let E=0,A=u.length;E<A;E++){const x=u[E];x.onProgress&&x.onProgress(M)}_.enqueue(y),b()}})}}});return new Response(m)}else throw new Gy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ps.add(e,c);const u=bi[e];delete bi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete bi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Hy extends Ko{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Ps.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=No("img");function l(){u(),Ps.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Wy extends Ko{constructor(e){super(e)}load(e,t,n,i){const r=new Wt,s=new Hy(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class hl extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Zl=new Ke,ff=new F,df=new F;class hu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new iu,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(ff),df.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(df),t.updateMatrixWorld(),Zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xy extends hu{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Io*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class qy extends hl{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DefaultUp),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new Xy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pf=new Ke,Js=new F,Jl=new F;class Yy extends hu{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),n.position.copy(Js),Jl.copy(n.position),Jl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Jl),n.updateMatrixWorld(),i.makeTranslation(-Js.x,-Js.y,-Js.z),pf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pf)}}class jy extends hl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ky extends hu{constructor(){super(new su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $y extends hl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DefaultUp),this.updateMatrix(),this.target=new Mt,this.shadow=new Ky}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zy extends hl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Jy extends Ko{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Ps.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ps.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class Qy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=mf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function mf(){return(typeof performance>"u"?Date:performance).now()}const fu="\\[\\]\\.:\\/",eM=new RegExp("["+fu+"]","g"),du="[^"+fu+"]",tM="[^"+fu.replace("\\.","")+"]",nM=/((?:WC+[\/:])*)/.source.replace("WC",du),iM=/(WCOD+)?/.source.replace("WCOD",tM),rM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",du),sM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",du),oM=new RegExp("^"+nM+iM+rM+sM+"$"),aM=["material","materials","bones","map"];class lM{constructor(e,t,n){const i=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eM,"")}static parseTrackName(e){const t=oM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);aM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=lM;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eu);function Si(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function zd(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ds={duration:.5,overwrite:!1,delay:0},pu,$t,_t,Xn=1e8,pt=1/Xn,Ac=Math.PI*2,cM=Ac/4,uM=0,Ud=Math.sqrt,hM=Math.cos,fM=Math.sin,Vt=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},Ii=function(e){return typeof e=="number"},mu=function(e){return typeof e>"u"},di=function(e){return typeof e=="object"},gn=function(e){return e!==!1},gu=function(){return typeof window<"u"},Ma=function(e){return St(e)||Vt(e)},Bd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zt=Array.isArray,Cc=/(?:-?\.?\d|\.)+/gi,Vd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ds=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gd=/[+-]=-?[.\d]+/,Hd=/[^,'"\[\]\s]+/gi,dM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,vt,ri,Lc,_u,On={},$a={},Wd,Xd=function(e){return($a=Ur(e,On))&&yn},xu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ko=function(e,t){return!t&&console.warn(e)},qd=function(e,t){return e&&(On[e]=t)&&$a&&($a[e]=t)||On},zo=function(){return 0},pM={suppressEvents:!0,isStart:!0,kill:!1},za={suppressEvents:!0,kill:!1},mM={suppressEvents:!0},vu={},Ji=[],Rc={},Yd,Cn={},ec={},gf=30,Ua=[],yu="",Mu=function(e){var t=e[0],n,i;if(di(t)||St(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ua.length;i--&&!Ua[i].targetTest(t););n=Ua[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new _p(e[i],n)))||e.splice(i,1);return e},Er=function(e){return e._gsap||Mu(qn(e))[0]._gsap},jd=function(e,t,n){return(n=e[t])&&St(n)?e[t]():mu(n)&&e.getAttribute&&e.getAttribute(t)||n},_n=function(e,t){return(e=e.split(",")).forEach(t)||e},wt=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},xs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},gM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Za=function(){var e=Ji.length,t=Ji.slice(0),n,i;for(Rc={},Ji.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Kd=function(e,t,n,i){Ji.length&&!$t&&Za(),e.render(t,n,i||$t&&t<0&&(e._initted||e._startAt)),Ji.length&&!$t&&Za()},$d=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hd).length<2?t:Vt(e)?e.trim():e},Zd=function(e){return e},Kn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_M=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ur=function(e,t){for(var n in t)e[n]=t[n];return e},_f=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=di(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Ja=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},xo=function(e){var t=e.parent||vt,n=e.keyframes?_M(Zt(e.keyframes)):Kn;if(gn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},xM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Jd=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},fl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},nr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ar=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},vM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Pc=function(e,t,n,i){return e._startAt&&($t?e._startAt.revert(za):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},yM=function a(e){return!e||e._ts&&a(e.parent)},xf=function(e){return e._repeat?Is(e._tTime,e=e.duration()+e._rDelay)*e:0},Is=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Qa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},dl=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||pt)||0))},pl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),dl(e),n._dirty||Ar(n,e)),e},Qd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Qa(e.rawTime(),t),(!t._dur||$o(0,t.totalDuration(),n)-t._tTime>pt)&&t.render(n,!0)),Ar(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-pt}},ai=function(e,t,n,i){return t.parent&&nr(t),t._start=Bt((Ii(n)?n:n||e!==vt?zn(e,n,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Jd(e,t,"_first","_last",e._sort?"_start":0),Dc(t)||(e._recent=t),i||Qd(e,t),e._ts<0&&pl(e,e._tTime),e},ep=function(e,t){return(On.ScrollTrigger||xu("scrollTrigger",t))&&On.ScrollTrigger.create(t,e)},tp=function(e,t,n,i,r){if(Su(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!$t&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Yd!==Ln.frame)return Ji.push(e),e._lazy=[r,i],1},MM=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Dc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bM=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&MM(e)&&!(!e._initted&&Dc(e))||(e._ts<0||e._dp._ts<0)&&!Dc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=$o(0,e._tDur,t),u=Is(l,o),e._yoyo&&u&1&&(s=1-s),u!==Is(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||$t||i||e._zTime===pt||!t&&e._zTime){if(!e._initted&&tp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?pt:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&Pc(e,t,n,!0),e._onUpdate&&!n&&In(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&In(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&nr(e,1),!n&&!$t&&(In(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},SM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ns=function(e,t,n,i){var r=e._repeat,s=Bt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Bt(s*(r+1)+e._rDelay*r):s,o>0&&!i&&pl(e,e._tTime=e._tDur*o),e.parent&&dl(e),n||Ar(e.parent,e),e},vf=function(e){return e instanceof cn?Ar(e):Ns(e,e._dur)},wM={_start:0,endTime:zo,totalDuration:zo},zn=function a(e,t,n){var i=e.labels,r=e._recent||wM,s=e.duration()>=Xn?r.endTime(!1):e._dur,o,l,c;return Vt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Zt(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},vo=function(e,t,n){var i=Ii(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],o,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=gn(l.vars.inherit)&&l.parent;s.immediateRender=gn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Lt(t[0],s,t[r+1])},or=function(e,t){return e||e===0?t(e):t},$o=function(e,t,n){return n<e?e:n>t?t:n},Kt=function(e,t){return!Vt(e)||!(t=dM.exec(e))?"":t[1]},TM=function(e,t,n){return or(n,function(i){return $o(e,t,i)})},Ic=[].slice,np=function(e,t){return e&&di(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&di(e[0]))&&!e.nodeType&&e!==ri},EM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Vt(i)&&!t||np(i,1)?(r=n).push.apply(r,qn(i)):n.push(i)})||n},qn=function(e,t,n){return _t&&!t&&_t.selector?_t.selector(e):Vt(e)&&!n&&(Lc||!Os())?Ic.call((t||_u).querySelectorAll(e),0):Zt(e)?EM(e,n):np(e)?Ic.call(e,0):e?[e]:[]},Nc=function(e){return e=qn(e)[0]||ko("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return qn(t,n.querySelectorAll?n:n===e?ko("Invalid scope")||_u.createElement("div"):e)}},ip=function(e){return e.sort(function(){return .5-Math.random()})},rp=function(e){if(St(e))return e;var t=di(e)?e:{each:e},n=Cr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Vt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,g){var p=(g||t).length,m=s[p],_,b,v,y,M,E,A,x,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,Xn])[1],!w){for(A=-Xn;A<(A=g[w++].getBoundingClientRect().left)&&w<p;);w<p&&w--}for(m=s[p]=[],_=l?Math.min(w,p)*u-.5:i%w,b=w===Xn?0:l?p*h/w-.5:i/w|0,A=0,x=Xn,E=0;E<p;E++)v=E%w-_,y=b-(E/w|0),m[E]=M=c?Math.abs(c==="y"?y:v):Ud(v*v+y*y),M>A&&(A=M),M<x&&(x=M);i==="random"&&ip(m),m.max=A-x,m.min=x,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(w>p?p-1:c?c==="y"?p/w:w:Math.max(w,p/w))||0)*(i==="edges"?-1:1),m.b=p<0?r-p:r,m.u=Kt(t.amount||t.each)||0,n=n&&p<0?pp(n):n}return p=(m[f]-m.min)/m.max||0,Bt(m.b+(n?n(p):p)*m.v)+m.u}},Oc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ii(n)?0:Kt(n))}},sp=function(e,t){var n=Zt(e),i,r;return!n&&di(e)&&(i=n=e.radius||Xn,e.values?(e=qn(e.values),(r=!Ii(e[0]))&&(i*=i)):e=Oc(e.increment)),or(t,n?St(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Xn,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:s,r||u===s||Ii(s)?u:u+Kt(s)}:Oc(e))},op=function(e,t,n,i){return or(Zt(e)?!t:n===!0?!!(n=0):!i,function(){return Zt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},AM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},CM=function(e,t){return function(n){return e(parseFloat(n))+(t||Kt(n))}},LM=function(e,t,n){return lp(e,t,0,1,n)},ap=function(e,t,n){return or(n,function(i){return e[~~t(i)]})},RM=function a(e,t,n){var i=t-e;return Zt(e)?ap(e,a(0,e.length),t):or(n,function(r){return(i+(r-e)%i)%i+e})},PM=function a(e,t,n){var i=t-e,r=i*2;return Zt(e)?ap(e,a(0,e.length-1),t):or(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},Uo=function(e){for(var t=0,n="",i,r,s,o;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(o?Hd:Cc),n+=e.substr(t,i-t)+op(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},lp=function(e,t,n,i,r){var s=t-e,o=i-n;return or(r,function(l){return n+((l-e)/s*o||0)})},DM=function a(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var s=Vt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(Zt(e)&&!Zt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,r=function(g){g*=h;var p=Math.min(f,~~g);return u[p](g-p)},n=t}else i||(e=Ur(Zt(e)?[]:{},e));if(!u){for(l in t)bu.call(o,e,l,"get",t[l]);r=function(g){return Eu(g,o)||(s?e.p:e)}}}return or(n,r)},yf=function(e,t,n){var i=e.labels,r=Xn,s,o,l;for(s in i)o=i[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},In=function(e,t,n){var i=e.vars,r=i[t],s=_t,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ji.length&&Za(),o&&(_t=o),u=l?r.apply(c,l):r.call(c),_t=s,u},lo=function(e){return nr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!$t),e.progress()<1&&In(e,"onInterrupt"),e},ps,cp=[],up=function(e){if(e)if(e=!e.name&&e.default||e,gu()||e.headless){var t=e.name,n=St(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:zo,render:Eu,add:bu,kill:jM,modifier:YM,rawVars:0},s={targetTest:0,get:0,getSetter:Tu,aliases:{},register:0};if(Os(),e!==i){if(Cn[t])return;Kn(i,Kn(Ja(e,r),s)),Ur(i.prototype,Ur(r,Ja(e,s))),Cn[i.prop=t]=i,e.targetTest&&(Ua.push(i),vu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qd(t,i),e.register&&e.register(yn,i,xn)}else cp.push(e)},ct=255,co={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},tc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ct+.5|0},hp=function(e,t,n){var i=e?Ii(e)?[e>>16,e>>8&ct,e&ct]:0:co.black,r,s,o,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),co[e])i=co[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ct,i&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Cc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=tc(l+1/3,r,s),i[1]=tc(l,r,s),i[2]=tc(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(Vd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Cc)||co.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/ct,s=i[1]/ct,o=i[2]/ct,h=Math.max(r,s,o),f=Math.min(r,s,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(s-o)/d+(s<o?6:0):h===s?(o-r)/d+2:(r-s)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},fp=function(e){var t=[],n=[],i=-1;return e.split(Qi).forEach(function(r){var s=r.match(ds)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},Mf=function(e,t,n){var i="",r=(e+i).match(Qi),s=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=hp(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=fp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Qi,"1").split(ds),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Qi),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},Qi=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in co)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),IM=/hsl[a]?\(/,dp=function(e){var t=e.join(" "),n;if(Qi.lastIndex=0,Qi.test(t))return n=IM.test(t),e[1]=Mf(e[1],n),e[0]=Mf(e[0],n,fp(e[1])),!0},Bo,Ln=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,s=r,o=[],l,c,u,h,f,d,g=function p(m){var _=a()-i,b=m===!0,v,y,M,E;if((_>e||_<0)&&(n+=_-t),i+=_,M=i-n,v=M-s,(v>0||b)&&(E=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,s+=v+(v>=r?4:r-v),y=1),b||(l=c(p)),y)for(d=0;d<o.length;d++)o[d](M,f,E,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Wd&&(!Lc&&gu()&&(ri=Lc=window,_u=ri.document||{},On.gsap=yn,(ri.gsapVersions||(ri.gsapVersions=[])).push(yn.version),Xd($a||ri.GreenSockGlobals||!ri.gsap&&ri||{}),cp.forEach(up)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,s-h.time*1e3+1|0)},Bo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Bo=0,c=zo},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),s=h.time*1e3+r},add:function(m,_,b){var v=_?function(y,M,E,A){m(y,M,E,A),h.remove(v)}:m;return h.remove(m),o[b?"unshift":"push"](v),Os(),v},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&d>=_&&d--},_listeners:o},h}(),Os=function(){return!Bo&&Ln.wake()},Je={},NM=/^[\d.\-M][\d.\-,\s]/,OM=/["']/g,FM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,o,l,c;r<s;r++)l=n[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(OM,"").trim():+c,i=l.substr(o+1).trim();return t},kM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},zM=function(e){var t=(e+"").split("("),n=Je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[FM(t[1])]:kM(e).split(",").map($d)):Je._CE&&NM.test(e)?Je._CE("",e):n},pp=function(e){return function(t){return 1-e(1-t)}},mp=function a(e,t){for(var n=e._first,i;n;)n instanceof cn?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Cr=function(e,t){return e&&(St(e)?e:Je[e]||zM(e))||t},Xr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return _n(e,function(o){Je[o]=On[o]=r,Je[s=o.toLowerCase()]=n;for(var l in r)Je[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Je[o+"."+l]=r[l]}),r},gp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},nc=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/Ac*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*fM((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:gp(o);return r=Ac/r,l.config=function(c,u){return a(e,c,u)},l},ic=function a(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:gp(n);return i.config=function(r){return a(e,r)},i};_n("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Xr(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Je.Linear.easeNone=Je.none=Je.Linear.easeIn;Xr("Elastic",nc("in"),nc("out"),nc());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Xr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Xr("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});Xr("Circ",function(a){return-(Ud(1-a*a)-1)});Xr("Sine",function(a){return a===1?1:-hM(a*cM)+1});Xr("Back",ic("in"),ic("out"),ic());Je.SteppedEase=Je.steps=On.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-pt;return function(o){return((i*$o(0,s,o)|0)+r)*n}}};Ds.ease=Je["quad.out"];_n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return yu+=a+","+a+"Params,"});var _p=function(e,t){this.id=uM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:jd,this.set=t?t.getSetter:Tu},Vo=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ns(this,+t.duration,1,1),this.data=t.data,_t&&(this._ctx=_t,_t.data.push(this)),Bo||Ln.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ns(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Os(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(pl(this,n),!r._dp||r.parent||Qd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===pt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Kd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Is(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Qa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-pt?0:this._rts,this.totalTime($o(-Math.abs(this._delay),this._tDur,r),i!==!1),dl(this),vM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Os(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ai(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=mM);var i=$t;return $t=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),$t=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(zn(this,n),gn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,gn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-pt)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=St(n)?n:Zd,o=function(){var c=i.then;i.then=null,St(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){lo(this)},a}();Kn(Vo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var cn=function(a){zd(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=gn(n.sortChildren),vt&&ai(n.parent||vt,Si(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ep(Si(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return vo(0,arguments,this),this},t.from=function(i,r,s){return vo(1,arguments,this),this},t.fromTo=function(i,r,s,o){return vo(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,xo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Lt(i,r,zn(this,s),1),this},t.call=function(i,r,s){return ai(this,Lt.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Lt(i,s,zn(this,l)),this},t.staggerFrom=function(i,r,s,o,l,c,u){return s.runBackwards=1,xo(s).immediateRender=gn(s.immediateRender),this.staggerTo(i,r,s,o,l,c,u)},t.staggerFromTo=function(i,r,s,o,l,c,u,h){return o.startAt=s,xo(o).immediateRender=gn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Bt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,p,m,_,b,v,y,M,E,A;if(this!==vt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,y=this._start,v=this._ts,_=!v,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(f=Bt(u%m),u===l?(p=this._repeat,f=c):(p=~~(u/m),p&&p===u/m&&(f=c,p--),f>c&&(f=c)),M=Is(this._tTime,m),!o&&this._tTime&&M!==p&&this._tTime-M*m-this._dur<=0&&(M=p),E&&p&1&&(f=c-f,A=1),p!==M&&!this._lock){var x=E&&M&1,w=x===(E&&p&1);if(p<M&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Bt(p*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&In(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;mp(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=SM(this,Bt(o),Bt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!p&&(In(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,s),f!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=-pt);break}}d=g}else{d=this._last;for(var R=i<0?i:f;d;){if(g=d._prev,(d._act||R<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,r,s||$t&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=R?-pt:pt);break}}d=g}}if(b&&!r&&(this.pause(),b.render(f>=o?0:-pt)._zTime=f>=o?1:-1,this._ts))return this._start=y,dl(this),this.render(i,r,s);this._onUpdate&&!r&&In(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&nr(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(In(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(Ii(r)||(r=zn(this,r,i)),!(i instanceof Vo)){if(Zt(i))return i.forEach(function(o){return s.add(o,r)}),this;if(Vt(i))return this.addLabel(i,r);if(St(i))i=Lt.delayedCall(0,i);else return this}return this!==i?ai(this,i,r):this},t.getChildren=function(i,r,s,o){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-Xn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Lt?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return Vt(i)?this.removeLabel(i):St(i)?this.killTweensOf(i):(fl(this,i),i===this._recent&&(this._recent=this._last),Ar(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(Ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=zn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var o=Lt.delayedCall(0,r||zo,s);return o.data="isPause",this._hasPause=1,ai(this,o,zn(this,i))},t.removePause=function(i){var r=this._first;for(i=zn(this,i);r;)r._start===i&&r.data==="isPause"&&nr(r),r=r._next},t.killTweensOf=function(i,r,s){for(var o=this.getTweensOf(i,s),l=o.length;l--;)qi!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],o=qn(i),l=this._first,c=Ii(r),u;l;)l instanceof Lt?gM(l._targets,o)&&(c?(!qi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,o=zn(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Lt.to(s,Kn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||pt,onStart:function(){if(s.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==m&&Ns(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,Kn({startAt:{time:zn(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),yf(this,zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),yf(this,zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+pt)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return Ar(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ar(this)},t.totalDuration=function(i){var r=0,s=this,o=s._last,l=Xn,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,ai(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Ns(s,s===vt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(vt._ts&&(Kd(vt,Qa(i,vt)),Yd=Ln.frame),Ln.frame>=gf){gf+=Nn.autoSleep||120;var r=vt._first;if((!r||!r._ts)&&Nn.autoSleep&&Ln._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ln.sleep()}}},e}(Vo);Kn(cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var UM=function(e,t,n,i,r,s,o){var l=new xn(this._pt,e,t,0,1,Sp,null,r),c=0,u=0,h,f,d,g,p,m,_,b;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Uo(i)),s&&(b=[n,i],s(b,e,t),n=b[0],i=b[1]),f=n.match(Ql)||[];h=Ql.exec(i);)g=h[0],p=i.substring(c,h.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:m,c:g.charAt(1)==="="?xs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Ql.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Gd.test(i)||_)&&(l.e=0),this._pt=l,l},bu=function(e,t,n,i,r,s,o,l,c,u){St(i)&&(i=i(r||0,e,s));var h=e[t],f=n!=="get"?n:St(h)?c?e[t.indexOf("set")||!St(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=St(h)?c?WM:Mp:wu,g;if(Vt(i)&&(~i.indexOf("random(")&&(i=Uo(i)),i.charAt(1)==="="&&(g=xs(f,i)+(Kt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Fc)return!isNaN(f*i)&&i!==""?(g=new xn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?qM:bp,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&xu(t,i),UM.call(this,e,t,f,i,d,l||Nn.stringFilter,c))},BM=function(e,t,n,i,r){if(St(e)&&(e=yo(e,r,t,n,i)),!di(e)||e.style&&e.nodeType||Zt(e)||Bd(e))return Vt(e)?yo(e,r,t,n,i):e;var s={},o;for(o in e)s[o]=yo(e[o],r,t,n,i);return s},xp=function(e,t,n,i,r,s){var o,l,c,u;if(Cn[e]&&(o=new Cn[e]).init(r,o.rawVars?t[e]:BM(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new xn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==ps))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},qi,Fc,Su=function a(e,t,n){var i=e.vars,r=i.ease,s=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,p=e._startAt,m=e._targets,_=e.parent,b=_&&_.data==="nested"?_.vars.targets:m,v=e._overwrite==="auto"&&!pu,y=e.timeline,M,E,A,x,w,R,z,k,I,D,U,K,X;if(y&&(!f||!r)&&(r="none"),e._ease=Cr(r,Ds.ease),e._yEase=h?pp(Cr(h===!0?r:h,Ds.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(k=m[0]?Er(m[0]).harness:0,K=k&&i[k.prop],M=Ja(i,vu),p&&(p._zTime<0&&p.progress(1),t<0&&u&&o&&!d?p.render(-1,!0):p.revert(u&&g?za:pM),p._lazy=0),s){if(nr(e._startAt=Lt.set(m,Kn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!p&&gn(l),startAt:null,delay:0,onUpdate:c&&function(){return In(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t||!o&&!d)&&e._startAt.revert(za),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!p){if(t&&(o=!1),A=Kn({overwrite:!1,data:"isFromStart",lazy:o&&!p&&gn(l),immediateRender:o,stagger:0,parent:_},M),K&&(A[k.prop]=K),nr(e._startAt=Lt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t?e._startAt.revert(za):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,pt,pt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&gn(l)||l&&!g,E=0;E<m.length;E++){if(w=m[E],z=w._gsap||Mu(m)[E]._gsap,e._ptLookup[E]=D={},Rc[z.id]&&Ji.length&&Za(),U=b===m?E:b.indexOf(w),k&&(I=new k).init(w,K||M,e,U,b)!==!1&&(e._pt=x=new xn(e._pt,w,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(V){D[V]=x}),I.priority&&(R=1)),!k||K)for(A in M)Cn[A]&&(I=xp(A,M,e,U,w,b))?I.priority&&(R=1):D[A]=x=bu.call(e,w,A,"get",M[A],U,b,0,i.stringFilter);e._op&&e._op[E]&&e.kill(w,e._op[E]),v&&e._pt&&(qi=e,vt.killTweensOf(w,D,e.globalTime(t)),X=!e.parent,qi=0),e._pt&&l&&(Rc[z.id]=1)}R&&wp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&y.render(Xn,!0,!0)},VM=function(e,t,n,i,r,s,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Fc=1,e.vars[t]="+=0",Su(e,o),Fc=0,l?ko(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+s*u.c,u.c=n-u.s,h.e&&(h.e=wt(n)+Kt(h.e)),h.b&&(h.b=u.s+Kt(h.b))},GM=function(e,t){var n=e[0]?Er(e[0]).harness:0,i=n&&n.aliases,r,s,o,l;if(!i)return t;r=Ur({},t);for(s in i)if(s in r)for(l=i[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},HM=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,o;if(Zt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},yo=function(e,t,n,i,r){return St(e)?e.call(t,n,i,r):Vt(e)&&~e.indexOf("random(")?Uo(e):e},vp=yu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",yp={};_n(vp+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return yp[a]=1});var Lt=function(a){zd(e,a);function e(n,i,r,s){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=a.call(this,s?i:xo(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,b=i.parent||vt,v=(Zt(n)||Bd(n)?Ii(n[0]):"length"in i)?[n]:qn(n),y,M,E,A,x,w,R,z;if(o._targets=v.length?Mu(v):ko("GSAP target "+n+" not found. https://gsap.com",!Nn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Ma(c)||Ma(u)){if(i=o.vars,y=o.timeline=new cn({data:"nested",defaults:p||{},targets:b&&b.data==="nested"?b.vars.targets:v}),y.kill(),y.parent=y._dp=Si(o),y._start=0,f||Ma(c)||Ma(u)){if(A=v.length,R=f&&rp(f),di(f))for(x in f)~vp.indexOf(x)&&(z||(z={}),z[x]=f[x]);for(M=0;M<A;M++)E=Ja(i,yp),E.stagger=0,_&&(E.yoyoEase=_),z&&Ur(E,z),w=v[M],E.duration=+yo(c,Si(o),M,w,v),E.delay=(+yo(u,Si(o),M,w,v)||0)-o._delay,!f&&A===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),y.to(w,E,R?R(M,w,v):0),y._ease=Je.none;y.duration()?c=u=0:o.timeline=0}else if(g){xo(Kn(y.vars.defaults,{ease:"none"})),y._ease=Cr(g.ease||i.ease||"none");var k=0,I,D,U;if(Zt(g))g.forEach(function(K){return y.to(v,K,">")}),y.duration();else{E={};for(x in g)x==="ease"||x==="easeEach"||HM(x,g[x],E,g.easeEach);for(x in E)for(I=E[x].sort(function(K,X){return K.t-X.t}),k=0,M=0;M<I.length;M++)D=I[M],U={ease:D.e,duration:(D.t-(M?I[M-1].t:0))/100*c},U[x]=D.v,y.to(v,U,k),k+=U.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!pu&&(qi=Si(o),vt.killTweensOf(v),qi=0),ai(b,Si(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Bt(b._time)&&gn(h)&&yM(Si(o))&&b.data!=="nested")&&(o._tTime=-pt,o.render(Math.max(0,-u)||0)),m&&ep(Si(o),m),o}var t=e.prototype;return t.render=function(i,r,s){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-pt&&!u?l:i<pt?0:i,f,d,g,p,m,_,b,v,y;if(!c)bM(this,i,r,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+i,r,s);if(f=Bt(h%p),h===l?(g=this._repeat,f=c):(g=~~(h/p),g&&g===Bt(h/p)&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,f=c-f),m=Is(this._tTime,p),f===o&&!s&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(v&&this._yEase&&mp(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&this._time!==p&&this._initted&&(this._lock=s=1,this.render(Bt(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(tp(this,u?i:f,s,r,h))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!o&&!r&&!g&&(In(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Pc(this,i,r,s),In(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&In(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Pc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&nr(this,1),!r&&!(u&&!o)&&(h||o||_)&&(In(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,s,o,l){Bo||Ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Su(this,c),u=this._ease(c/this._dur),VM(this,i,r,s,o,u,c,l)?this.resetTo(i,r,s,o,1):(pl(this,0),this.parent||Jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?lo(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,qi&&qi.vars.overwrite!==!0)._first||lo(this),this.parent&&s!==this.timeline.totalDuration()&&Ns(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=i?qn(i):o,c=this._ptLookup,u=this._pt,h,f,d,g,p,m,_;if((!r||r==="all")&&xM(o,l))return r==="all"&&(this._pt=0),lo(this);for(h=this._op=this._op||[],r!=="all"&&(Vt(r)&&(p={},_n(r,function(b){return p[b]=1}),r=p),r=GM(o,r)),_=o.length;_--;)if(~l.indexOf(o[_])){f=c[_],r==="all"?(h[_]=r,g=f,d={}):(d=h[_]=h[_]||{},g=r);for(p in g)m=f&&f[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&fl(this,m,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&u&&lo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return vo(1,arguments)},e.delayedCall=function(i,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(i,r,s){return vo(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return vt.killTweensOf(i,r,s)},e}(Vo);Kn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_n("staggerTo,staggerFrom,staggerFromTo",function(a){Lt[a]=function(){var e=new cn,t=Ic.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var wu=function(e,t,n){return e[t]=n},Mp=function(e,t,n){return e[t](n)},WM=function(e,t,n,i){return e[t](i.fp,n)},XM=function(e,t,n){return e.setAttribute(t,n)},Tu=function(e,t){return St(e[t])?Mp:mu(e[t])&&e.setAttribute?XM:wu},bp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},qM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Eu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},YM=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},jM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?fl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},KM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},wp=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},xn=function(){function a(t,n,i,r,s,o,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=o||bp,this.d=l||this,this.set=c||wu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=KM,this.m=n,this.mt=r,this.tween=i},a}();_n(yu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return vu[a]=1});On.TweenMax=On.TweenLite=Lt;On.TimelineLite=On.TimelineMax=cn;vt=new cn({sortChildren:!1,defaults:Ds,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Nn.stringFilter=dp;var Lr=[],Ba={},$M=[],bf=0,ZM=0,rc=function(e){return(Ba[e]||$M).map(function(t){return t()})},kc=function(){var e=Date.now(),t=[];e-bf>2&&(rc("matchMediaInit"),Lr.forEach(function(n){var i=n.queries,r=n.conditions,s,o,l,c;for(o in i)s=ri.matchMedia(i[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(n.revert(),l&&t.push(n))}),rc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),bf=e,rc("matchMedia"))},Tp=function(){function a(t,n){this.selector=n&&Nc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ZM++,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){St(n)&&(r=i,i=n,n=St);var s=this,o=function(){var c=_t,u=s.selector,h;return c&&c!==s&&c.data.push(s),r&&(s.selector=Nc(r)),_t=s,h=i.apply(s,arguments),St(h)&&s._r.push(h),_t=c,s.selector=u,s.isReverted=!1,h};return s.last=o,n===St?o(s,function(l){return s.add(null,l)}):n?s[n]=o:o},e.ignore=function(n){var i=_t;_t=null,n(this),_t=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof Lt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Lt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var s=Lr.length;s--;)Lr[s].id===this.id&&Lr.splice(s,1)},e.revert=function(n){this.kill(n||{})},a}(),JM=function(){function a(t){this.contexts=[],this.scope=t,_t&&_t.data.push(this)}var e=a.prototype;return e.add=function(n,i,r){di(n)||(n={matches:n});var s=new Tp(0,r||this.scope),o=s.conditions={},l,c,u;_t&&!s.selector&&(s.selector=_t.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=ri.matchMedia(n[c]),l&&(Lr.indexOf(s)<0&&Lr.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(kc):l.addEventListener("change",kc)));return u&&i(s,function(h){return s.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),el={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return up(i)})},timeline:function(e){return new cn(e)},getTweensOf:function(e,t){return vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Vt(e)&&(e=qn(e)[0]);var r=Er(e||{}).get,s=n?Zd:$d;return n==="native"&&(n=""),e&&(t?s((Cn[t]&&Cn[t].get||r)(e,t,n,i)):function(o,l,c){return s((Cn[o]&&Cn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=qn(e),e.length>1){var i=e.map(function(u){return yn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var s=Cn[t],o=Er(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;ps._pt=0,h.init(e,n?u+n:u,ps,0,[e]),h.render(1,h),ps._pt&&Eu(1,ps)}:o.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=yn.to(e,Ur((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Cr(e.ease,Ds.ease)),_f(Ds,e||{})},config:function(e){return _f(Nn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Cn[o]&&!On[o]&&ko(t+" effect requires "+o+" plugin.")}),ec[t]=function(o,l,c){return n(qn(o),Kn(l||{},r),c)},s&&(cn.prototype[t]=function(o,l,c){return this.add(ec[t](o,di(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Je[e]=Cr(t)},parseEase:function(e,t){return arguments.length?Cr(e,t):Je},getById:function(e){return vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new cn(e),i,r;for(n.smoothChildTiming=gn(e.smoothChildTiming),vt.remove(n),n._dp=0,n._time=n._tTime=vt._time,i=vt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Lt&&i.vars.onComplete===i._targets[0]))&&ai(n,i,i._start-i._delay),i=r;return ai(vt,n,0),n},context:function(e,t){return e?new Tp(e,t):_t},matchMedia:function(e){return new JM(e)},matchMediaRefresh:function(){return Lr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||kc()},addEventListener:function(e,t){var n=Ba[e]||(Ba[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ba[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:RM,wrapYoyo:PM,distribute:rp,random:op,snap:sp,normalize:LM,getUnit:Kt,clamp:TM,splitColor:hp,toArray:qn,selector:Nc,mapRange:lp,pipe:AM,unitize:CM,interpolate:DM,shuffle:ip},install:Xd,effects:ec,ticker:Ln,updateRoot:cn.updateRoot,plugins:Cn,globalTimeline:vt,core:{PropTween:xn,globals:qd,Tween:Lt,Timeline:cn,Animation:Vo,getCache:Er,_removeLinkedListItem:fl,reverting:function(){return $t},context:function(e){return e&&_t&&(_t.data.push(e),e._ctx=_t),_t},suppressOverwrites:function(e){return pu=e}}};_n("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return el[a]=Lt[a]});Ln.add(cn.updateRoot);ps=el.to({},{duration:0});var QM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},eb=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=QM(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},sc=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(o){var l,c;if(Vt(r)&&(l={},_n(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}eb(o,r)}}}},yn=el.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,o,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)$t?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},sc("roundProps",Oc),sc("modifiers"),sc("snap",sp))||el;Lt.version=cn.version=yn.version="3.12.5";Wd=1;gu()&&Os();Je.Power0;Je.Power1;Je.Power2;Je.Power3;Je.Power4;Je.Linear;Je.Quad;Je.Cubic;Je.Quart;Je.Quint;Je.Strong;Je.Elastic;Je.Back;Je.SteppedEase;Je.Bounce;Je.Sine;Je.Expo;Je.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sf,Yi,vs,Au,Mr,wf,Cu,tb=function(){return typeof window<"u"},Ni={},pr=180/Math.PI,ys=Math.PI/180,os=Math.atan2,Tf=1e8,Lu=/([A-Z])/g,nb=/(left|right|width|margin|padding|x)/i,ib=/[\s,\(]\S/,li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ob=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ep=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ap=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ab=function(e,t,n){return e.style[t]=n},lb=function(e,t,n){return e.style.setProperty(t,n)},cb=function(e,t,n){return e._gsap[t]=n},ub=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hb=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},fb=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},yt="transform",vn=yt+"Origin",db=function a(e,t){var n=this,i=this.target,r=i.style,s=i._gsap;if(e in Ni&&r){if(this.tfm=this.tfm||{},e!=="transform")e=li[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=wi(i,o)}):this.tfm[e]=s.x?s[e]:wi(i,e),e===vn&&(this.tfm.zOrigin=s.zOrigin);else return li.transform.split(",").forEach(function(o){return a.call(n,o,t)});if(this.props.indexOf(yt)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(vn,t,"")),e=yt}(r||t)&&this.props.push(e,t,r[e])},Cp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Lu,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Cu(),(!r||!r.isStart)&&!n[yt]&&(Cp(n),i.zOrigin&&n[vn]&&(n[vn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Lp=function(e,t){var n={target:e,props:[],revert:pb,save:db};return e._gsap||yn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Rp,Uc=function(e,t){var n=Yi.createElementNS?Yi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Yi.createElement(e);return n&&n.style?n:Yi.createElement(e)},hi=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Lu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,Fs(t)||t,1)||""},Ef="O,Moz,ms,Ms,Webkit".split(","),Fs=function(e,t,n){var i=t||Mr,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Ef[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Ef[s]:"")+e},Bc=function(){tb()&&window.document&&(Sf=window,Yi=Sf.document,vs=Yi.documentElement,Mr=Uc("div")||{style:{}},Uc("div"),yt=Fs(yt),vn=yt+"Origin",Mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rp=!!Fs("perspective"),Cu=yn.core.reverting,Au=1)},oc=function a(e){var t=Uc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(vs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),vs.removeChild(t),this.style.cssText=r,s},Af=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Pp=function(e){var t;try{t=e.getBBox()}catch{t=oc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===oc||(t=oc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Af(e,["x","cx","x1"])||0,y:+Af(e,["y","cy","y1"])||0,width:0,height:0}:t},Dp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Pp(e))},Br=function(e,t){if(t){var n=e.style,i;t in Ni&&t!==vn&&(t=yt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Lu,"-$1").toLowerCase())):n.removeAttribute(t)}},ji=function(e,t,n,i,r,s){var o=new xn(e._pt,t,n,0,1,s?Ap:Ep);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Cf={deg:1,rad:1,turn:1},mb={grid:1,flex:1},ir=function a(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=Mr.style,l=nb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,p,m,_;if(i===s||!r||Cf[i]||Cf[s])return r;if(s!=="px"&&!f&&(r=a(e,t,n,"px")),_=e.getCTM&&Dp(e),(d||s==="%")&&(Ni[t]||~t.indexOf("adius")))return g=_?e.getBBox()[l?"width":"height"]:e[u],wt(d?r/g*h:r/100*g);if(o[l?"width":"height"]=h+(f?s:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Yi||!p.appendChild)&&(p=Yi.body),m=p._gsap,m&&d&&m.width&&l&&m.time===Ln.time&&!m.uncache)return wt(r/m.width*h);if(d&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=h+i,g=e[u],b?e.style[t]=b:Br(e,t)}else(d||s==="%")&&!mb[hi(p,"display")]&&(o.position=hi(e,"position")),p===e&&(o.position="static"),p.appendChild(Mr),g=Mr[u],p.removeChild(Mr),o.position="absolute";return l&&d&&(m=Er(p),m.time=Ln.time,m.width=p[u]),wt(f?g*r/h:g&&r?h/g*r:0)},wi=function(e,t,n,i){var r;return Au||Bc(),t in li&&t!=="transform"&&(t=li[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ni[t]&&t!=="transform"?(r=Ho(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:nl(hi(e,vn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=tl[t]&&tl[t](e,t,n)||hi(e,t)||jd(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ir(e,t,r,n)+n:r},gb=function(e,t,n,i){if(!n||n==="none"){var r=Fs(t,e,1),s=r&&hi(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=hi(e,"borderTopColor"))}var o=new xn(this._pt,e.style,t,0,1,Sp),l=0,c=0,u,h,f,d,g,p,m,_,b,v,y,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(p=e.style[t],e.style[t]=i,i=hi(e,t)||i,p?e.style[t]=p:Br(e,t)),u=[n,i],dp(u),n=u[0],i=u[1],f=n.match(ds)||[],M=i.match(ds)||[],M.length){for(;h=ds.exec(i);)m=h[0],b=i.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(p=f[c++]||"")&&(d=parseFloat(p)||0,y=p.substr((d+"").length),m.charAt(1)==="="&&(m=xs(d,m)+y),_=parseFloat(m),v=m.substr((_+"").length),l=ds.lastIndex-v.length,v||(v=v||Nn.units[t]||y,l===i.length&&(i+=v,o.e+=v)),y!==v&&(d=ir(e,t,p,v)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:d,c:_-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Ap:Ep;return Gd.test(i)&&(o.e=0),this._pt=o,o},Lf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_b=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Lf[n]||n,t[1]=Lf[i]||i,t.join(" ")},xb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ni[o]&&(l=1,o=o==="transformOrigin"?vn:yt),Br(n,o);l&&(Br(n,yt),s&&(s.svg&&n.removeAttribute("transform"),Ho(n,1),s.uncache=1,Cp(i)))}},tl={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new xn(e._pt,t,n,0,0,xb);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},Go=[1,0,0,1,0,0],Ip={},Np=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Rf=function(e){var t=hi(e,yt);return Np(t)?Go:t.substr(7).match(Vd).map(wt)},Ru=function(e,t){var n=e._gsap||Er(e),i=e.style,r=Rf(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Go:r):(r===Go&&!e.offsetParent&&e!==vs&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,o=e.nextElementSibling,vs.appendChild(e)),r=Rf(e),l?i.display=l:Br(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):vs.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Vc=function(e,t,n,i,r,s){var o=e._gsap,l=r||Ru(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],p=l[2],m=l[3],_=l[4],b=l[5],v=t.split(" "),y=parseFloat(v[0])||0,M=parseFloat(v[1])||0,E,A,x,w;n?l!==Go&&(A=d*m-g*p)&&(x=y*(m/A)+M*(-p/A)+(p*b-m*_)/A,w=y*(-g/A)+M*(d/A)-(d*b-g*_)/A,y=x,M=w):(E=Pp(e),y=E.x+(~v[0].indexOf("%")?y/100*E.width:y),M=E.y+(~(v[1]||v[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&o.smooth?(_=y-c,b=M-u,o.xOffset=h+(_*d+b*p)-_,o.yOffset=f+(_*g+b*m)-b):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[vn]="0px 0px",s&&(ji(s,o,"xOrigin",c,y),ji(s,o,"yOrigin",u,M),ji(s,o,"xOffset",h,o.xOffset),ji(s,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Ho=function(e,t){var n=e._gsap||new _p(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=hi(e,vn)||"0",u,h,f,d,g,p,m,_,b,v,y,M,E,A,x,w,R,z,k,I,D,U,K,X,V,J,C,B,q,ne,ee,se;return u=h=f=p=m=_=b=v=y=0,d=g=1,n.svg=!!(e.getCTM&&Dp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),i.scale=i.rotate=i.translate="none"),A=Ru(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Vc(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,E=n.yOrigin||0,A!==Go&&(z=A[0],k=A[1],I=A[2],D=A[3],u=U=A[4],h=K=A[5],A.length===6?(d=Math.sqrt(z*z+k*k),g=Math.sqrt(D*D+I*I),p=z||k?os(k,z)*pr:0,b=I||D?os(I,D)*pr+p:0,b&&(g*=Math.abs(Math.cos(b*ys))),n.svg&&(u-=M-(M*z+E*I),h-=E-(M*k+E*D))):(se=A[6],ne=A[7],C=A[8],B=A[9],q=A[10],ee=A[11],u=A[12],h=A[13],f=A[14],x=os(se,q),m=x*pr,x&&(w=Math.cos(-x),R=Math.sin(-x),X=U*w+C*R,V=K*w+B*R,J=se*w+q*R,C=U*-R+C*w,B=K*-R+B*w,q=se*-R+q*w,ee=ne*-R+ee*w,U=X,K=V,se=J),x=os(-I,q),_=x*pr,x&&(w=Math.cos(-x),R=Math.sin(-x),X=z*w-C*R,V=k*w-B*R,J=I*w-q*R,ee=D*R+ee*w,z=X,k=V,I=J),x=os(k,z),p=x*pr,x&&(w=Math.cos(x),R=Math.sin(x),X=z*w+k*R,V=U*w+K*R,k=k*w-z*R,K=K*w-U*R,z=X,U=V),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,_=180-_),d=wt(Math.sqrt(z*z+k*k+I*I)),g=wt(Math.sqrt(K*K+se*se)),x=os(U,K),b=Math.abs(x)>2e-4?x*pr:0,y=ee?1/(ee<0?-ee:ee):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Np(hi(e,yt)),X&&e.setAttribute("transform",X))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(d*=-1,b+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=wt(d),n.scaleY=wt(g),n.rotation=wt(p)+o,n.rotationX=wt(m)+o,n.rotationY=wt(_)+o,n.skewX=b+o,n.skewY=v+o,n.transformPerspective=y+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[vn]=nl(c)),n.xOffset=n.yOffset=0,n.force3D=Nn.force3D,n.renderTransform=n.svg?yb:Rp?Op:vb,n.uncache=0,n},nl=function(e){return(e=e.split(" "))[0]+" "+e[1]},ac=function(e,t,n){var i=Kt(t);return wt(parseFloat(t)+parseFloat(ir(e,"x",n+"px",i)))+i},vb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Op(e,t)},ur="0deg",Qs="0px",hr=") ",Op=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,p=n.scaleY,m=n.transformPerspective,_=n.force3D,b=n.target,v=n.zOrigin,y="",M=_==="auto"&&e&&e!==1||_===!0;if(v&&(h!==ur||u!==ur)){var E=parseFloat(u)*ys,A=Math.sin(E),x=Math.cos(E),w;E=parseFloat(h)*ys,w=Math.cos(E),s=ac(b,s,A*w*-v),o=ac(b,o,-Math.sin(E)*-v),l=ac(b,l,x*w*-v+v)}m!==Qs&&(y+="perspective("+m+hr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(M||s!==Qs||o!==Qs||l!==Qs)&&(y+=l!==Qs||M?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+hr),c!==ur&&(y+="rotate("+c+hr),u!==ur&&(y+="rotateY("+u+hr),h!==ur&&(y+="rotateX("+h+hr),(f!==ur||d!==ur)&&(y+="skew("+f+", "+d+hr),(g!==1||p!==1)&&(y+="scale("+g+", "+p+hr),b.style[yt]=y||"translate(0, 0)"},yb=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,p=n.yOrigin,m=n.xOffset,_=n.yOffset,b=n.forceCSS,v=parseFloat(s),y=parseFloat(o),M,E,A,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ys,c*=ys,M=Math.cos(l)*h,E=Math.sin(l)*h,A=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=ys,w=Math.tan(c-u),w=Math.sqrt(1+w*w),A*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),M*=w,E*=w)),M=wt(M),E=wt(E),A=wt(A),x=wt(x)):(M=h,x=f,E=A=0),(v&&!~(s+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(v=ir(d,"x",s,"px"),y=ir(d,"y",o,"px")),(g||p||m||_)&&(v=wt(v+g-(g*M+p*A)+m),y=wt(y+p-(g*E+p*x)+_)),(i||r)&&(w=d.getBBox(),v=wt(v+i/100*w.width),y=wt(y+r/100*w.height)),w="matrix("+M+","+E+","+A+","+x+","+v+","+y+")",d.setAttribute("transform",w),b&&(d.style[yt]=w)},Mb=function(e,t,n,i,r){var s=360,o=Vt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?pr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*Tf)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*Tf)%s-~~(c/s)*s)),e._pt=f=new xn(e._pt,t,n,i,c,rb),f.e=u,f.u="deg",e._props.push(n),f},Pf=function(e,t){for(var n in t)e[n]=t[n];return e},bb=function(e,t,n){var i=Pf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[yt]=t,o=Ho(n,1),Br(n,yt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[yt],s[yt]=t,o=Ho(n,1),s[yt]=c);for(l in Ni)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=Kt(c),g=Kt(u),h=d!==g?ir(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new xn(e._pt,o,l,h,f-h,zc),e._pt.u=g||0,e._props.push(l));Pf(o,i)};_n("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?a+o:"border"+o+a});tl[e>1?"border"+a:a]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=s.map(function(g){return wi(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},s.forEach(function(g,p){return d[g]=f[p]=f[p]||f[(p-1)/2|0]}),o.init(l,d,h)}});var Fp={name:"css",register:Bc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,g,p,m,_,b,v,y,M,E,A,x;Au||Bc(),this.styles=this.styles||Lp(e),x=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!(Cn[p]&&xp(p,t,n,i,e,r)))){if(d=typeof u,g=tl[p],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Uo(u)),g)g(this,e,p,u,n)&&(A=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Qi.lastIndex=0,Qi.test(c)||(m=Kt(c),_=Kt(u)),_?m!==_&&(c=ir(e,p,c,_)+_):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,p),s.push(p),x.push(p,0,o[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,r):l[p],Vt(c)&&~c.indexOf("random(")&&(c=Uo(c)),Kt(c+"")||c==="auto"||(c+=Nn.units[p]||Kt(wi(e,p))||""),(c+"").charAt(1)==="="&&(c=wi(e,p))):c=wi(e,p),f=parseFloat(c),b=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),p in li&&(p==="autoAlpha"&&(f===1&&wi(e,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",0,o.visibility),ji(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=li[p],~p.indexOf(",")&&(p=p.split(",")[0]))),v=p in Ni,v){if(this.styles.save(p),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ho(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new xn(this._pt,o,yt,0,1,M.renderTransform,M,0,-1),y.dep=1),p==="scale")this._pt=new xn(this._pt,M,"scaleY",M.scaleY,(b?xs(M.scaleY,b+h):h)-M.scaleY||0,zc),this._pt.u=0,s.push("scaleY",p),p+="X";else if(p==="transformOrigin"){x.push(vn,0,o[vn]),u=_b(u),M.svg?Vc(e,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==M.zOrigin&&ji(this,M,"zOrigin",M.zOrigin,_),ji(this,o,p,nl(c),nl(u)));continue}else if(p==="svgOrigin"){Vc(e,u,1,E,0,this);continue}else if(p in Ip){Mb(this,M,p,f,b?xs(f,b+u):u);continue}else if(p==="smoothOrigin"){ji(this,M,"smooth",M.smooth,u);continue}else if(p==="force3D"){M[p]=u;continue}else if(p==="transform"){bb(this,u,e);continue}}else p in o||(p=Fs(p)||p);if(v||(h||h===0)&&(f||f===0)&&!ib.test(u)&&p in o)m=(c+"").substr((f+"").length),h||(h=0),_=Kt(u)||(p in Nn.units?Nn.units[p]:m),m!==_&&(f=ir(e,p,c,_)),this._pt=new xn(this._pt,v?M:o,p,f,(b?xs(f,b+h):h)-f,!v&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?ob:zc),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=sb);else if(p in o)gb.call(this,e,p,c,b?b+u:u);else if(p in e)this.add(e,p,c||e[p],b?b+u:u,i,r);else if(p!=="parseTransform"){xu(p,u);continue}v||(p in o?x.push(p,0,o[p]):x.push(p,1,c||e[p])),s.push(p)}}A&&wp(this)},render:function(e,t){if(t.tween._time||!Cu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:wi,aliases:li,getSetter:function(e,t,n){var i=li[t];return i&&i.indexOf(",")<0&&(t=i),t in Ni&&t!==vn&&(e._gsap.x||wi(e,"x"))?n&&wf===n?t==="scale"?ub:cb:(wf=n||{})&&(t==="scale"?hb:fb):e.style&&!mu(e.style[t])?ab:~t.indexOf("-")?lb:Tu(e,t)},core:{_removeProperty:Br,_getMatrix:Ru}};yn.utils.checkPrefix=Fs;yn.core.getStyleSaver=Lp;(function(a,e,t,n){var i=_n(a+","+e+","+t,function(r){Ni[r]=1});_n(e,function(r){Nn.units[r]="deg",Ip[r]=1}),li[i[13]]=a+","+e,_n(n,function(r){var s=r.split(":");li[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Nn.units[a]="px"});yn.registerPlugin(Fp);var Rn=yn.registerPlugin(Fp)||yn;Rn.core.Tween;class Sb extends Ko{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cb(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new Rb(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new Db(t)}),this.register(function(t){return new Ib(t)}),this.register(function(t){return new Ab(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new Lb(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new zb(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=Tr.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new kd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},o={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Tr.decodeText(new Uint8Array(e,0,4))===kp){try{s[tt.KHR_BINARY_GLTF]=new Ub(e)}catch(u){i&&i(u);return}r=JSON.parse(s[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(Tr.decodeText(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Jb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);o[u.name]=u,s[u.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const u=r.extensionsUsed[c],h=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:s[u]=new Eb;break;case tt.KHR_DRACO_MESH_COMPRESSION:s[u]=new Bb(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:s[u]=new Vb;break;case tt.KHR_MESH_QUANTIZATION:s[u]=new Gb;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(s),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function wb(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Tb{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ve(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $y(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new jy(u),c.distance=h;break;case"spot":c=new qy(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Wi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Eb{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return vr}extendParams(e,t,n){const i=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ot))}return Promise.all(i)}}class Ab{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Cb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new nt(o,o)}return Promise.all(r)}}class Lb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class Rb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,ot)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class Pb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class Db{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Ve(o[0],o[1],o[2]),Promise.all(r)}}class Ib{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Nb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new Ve(o[0],o[1],o[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,ot)),Promise.all(r)}}class Ob{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class Fb{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kb{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):s.ready.then(function(){const d=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class zb{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Un.TRIANGLES&&c.mode!==Un.TRIANGLE_STRIP&&c.mode!==Un.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,o=[],l={};for(const c in s)o.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const p=new Ke,m=new F,_=new sr,b=new F(1,1,1),v=new Cy(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,p.compose(m,_,b));for(const y in l)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Mt.prototype.copy.call(v,g),v.frustumCulled=!1,this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const kp="glTF",eo=12,Df={JSON:1313821514,BIN:5130562};class Ub{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,eo);if(this.header={magic:Tr.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-eo,i=new DataView(e,eo);let r=0;for(;r<n;){const s=i.getUint32(r,!0);r+=4;const o=i.getUint32(r,!0);if(r+=4,o===Df.JSON){const l=new Uint8Array(e,eo+r,s);this.content=Tr.decodeText(l)}else if(o===Df.BIN){const l=eo+r;this.body=e.slice(l,l+s)}r+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Bb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const u in s){const h=Gc[u]||u.toLowerCase();o[h]=s[u]}for(const u in e.attributes){const h=Gc[u]||u.toLowerCase();if(s[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Ms[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],p=l[d];p!==void 0&&(g.normalized=p)}h(f)},o,c)})})}}class Vb{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Gb{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class zp extends jo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,p=g-c,m=-2*d+3*f,_=d-f,b=1-m,v=_-f+h;for(let y=0;y!==o;y++){const M=s[p+y+o],E=s[p+y+l]*u,A=s[g+y+o],x=s[g+y]*u;r[y]=b*M+v*E+m*A+_*x}return r}}const Hb=new sr;class Wb extends zp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Hb.fromArray(r).normalize().toArray(r),r}}const Un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},If={9728:Ut,9729:mn,9984:Mc,9985:cd,9986:Oa,9987:Ir},Nf={33071:Gn,33648:ja,10497:As},lc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Xb={CUBICSPLINE:void 0,LINEAR:Ls,STEP:Po},cc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qb(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new uu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:tr})),a.DefaultMaterial}function to(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wi(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Yb(a,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(a);const s=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;s.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(f)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=h),r&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function jb(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Kb(a){const e=a.extensions&&a.extensions[tt.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Of(e.attributes):t=a.indices+":"+Of(a.attributes)+":"+a.mode,t}function Of(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Hc(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $b(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Zb=new Ke;class Jb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wb,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Wy(this.options.manager):this.textureLoader=new Jy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};to(r,o,i),Wi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,u]of s.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(Tr.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=lc[i.type],o=Ms[i.componentType],l=i.normalized===!0,c=new o(i.count*s);return Promise.resolve(new fn(c,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=lc[i.type],c=Ms[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,m;if(d&&d!==h){const _=Math.floor(f/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let v=t.cache.get(b);v||(p=new c(o,_*d,i.count*d/u),v=new by(p,d/u),t.cache.add(b,v)),m=new au(v,l,f%d/u,g)}else o===null?p=new c(i.count*l):p=new c(o,f,i.count*l),m=new fn(p,l,g);if(i.sparse!==void 0){const _=lc.SCALAR,b=Ms[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new b(s[1],v,i.sparse.count*_),E=new c(s[2],y,i.sparse.count*l);o!==null&&(m=new fn(m.array.slice(),m.itemSize,m.normalized));for(let A=0,x=M.length;A<x;A++){const w=M[A];if(m.setX(w,E[A*l]),l>=2&&m.setY(w,E[A*l+1]),l>=3&&m.setZ(w,E[A*l+2]),l>=4&&m.setW(w,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||o.name||"";const f=(r.samplers||{})[s.sampler]||{};return u.magFilter=If[f.magFilter]||mn,u.minFilter=If[f.minFilter]||Ir,u.wrapS=Nf[f.wrapS]||As,u.wrapT=Nf[f.wrapT]||As,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:s.mimeType});return l=o.createObjectURL(f),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(p){const m=new Wt(p);m.needsUpdate=!0,f(m)}),t.load(Tr.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=s.mimeType||$b(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(s);s=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Id,ui.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Dd,ui.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||r||s){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return uu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const o={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const h=i[tt.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ve(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,ot)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=ll);const u=r.alphaMode||cc.OPAQUE;if(u===cc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===cc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==vr&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new nt(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&s!==vr&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==vr&&(o.emissive=new Ve().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==vr&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ot)),Promise.all(c).then(function(){const h=new s(o);return r.name&&(h.name=r.name),Wi(h,r),t.associations.set(h,{materials:e}),r.extensions&&to(i,h,r),h})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ff(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Kb(c),h=i[u];if(h)s.push(h.promise);else{let f;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Ff(new pi,c,t),i[u]={primitive:c,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?qb(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const p=u[d],m=s[d];let _;const b=c[d];if(m.mode===Un.TRIANGLES||m.mode===Un.TRIANGLE_STRIP||m.mode===Un.TRIANGLE_FAN||m.mode===void 0)_=r.isSkinnedMesh===!0?new wy(p,b):new Wn(p,b),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),m.mode===Un.TRIANGLE_STRIP?_.geometry=kf(_.geometry,ig):m.mode===Un.TRIANGLE_FAN&&(_.geometry=kf(_.geometry,hd));else if(m.mode===Un.LINES)_=new Ly(p,b);else if(m.mode===Un.LINE_STRIP)_=new cu(p,b);else if(m.mode===Un.LINE_LOOP)_=new Ry(p,b);else if(m.mode===Un.POINTS)_=new Py(p,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&jb(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),Wi(_,r),m.extensions&&to(i,_,m),t.assignFinalMaterial(_),h.push(_)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new yr;t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ln(Mg.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new su(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,o=[],l=[];for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h){o.push(h);const f=new Ke;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new lu(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],s=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],d=h.target,g=d.node,p=n.parameters!==void 0?n.parameters[f.input]:f.input,m=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",p)),s.push(this.getDependency("accessor",m)),o.push(f),l.push(d)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],d=c[3],g=c[4],p=[];for(let _=0,b=u.length;_<b;_++){const v=u[_],y=h[_],M=f[_],E=d[_],A=g[_];if(v===void 0)continue;v.updateMatrix();let x;switch(Gi[A.path]){case Gi.weights:x=Oo;break;case Gi.rotation:x=zr;break;case Gi.position:case Gi.scale:default:x=Fo;break}const w=v.name?v.name:v.uuid,R=E.interpolation!==void 0?Xb[E.interpolation]:Ls,z=[];Gi[A.path]===Gi.weights?v.traverse(function(I){I.morphTargetInfluences&&z.push(I.name?I.name:I.uuid)}):z.push(w);let k=M.array;if(M.normalized){const I=Hc(k.constructor),D=new Float32Array(k.length);for(let U=0,K=k.length;U<K;U++)D[U]=k[U]*I;k=D}for(let I=0,D=z.length;I<D;I++){const U=new x(z[I]+"."+Gi[A.path],y.array,k,R);E.interpolation==="CUBICSPLINE"&&(U.createInterpolant=function(X){const V=this instanceof zr?Wb:zp;return new V(this.times,this.values,this.getValueSize()/3,X)},U.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(U)}}const m=n.name?n.name:"animation_"+e;return new ky(m,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"";return function(){const o=[],l=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(f){return i._getNodeRef(i.cameraCache,r.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){o.push(f)});const c=[],u=r.children||[];for(let f=0,d=u.length;f<d;f++)c.push(i.getDependency("node",u[f]));const h=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([Promise.all(o),Promise.all(c),h])}().then(function(o){const l=o[0],c=o[1],u=o[2];let h;if(r.isBone===!0?h=new Pd:l.length>1?h=new yr:l.length===1?h=l[0]:h=new Mt,h!==l[0])for(let f=0,d=l.length;f<d;f++)h.add(l[f]);if(r.name&&(h.userData.name=r.name,h.name=s),Wi(h,r),r.extensions&&to(n,h,r),r.matrix!==void 0){const f=new Ke;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Zb)});for(let f=0,d=c.length;f<d;f++)h.add(c[f]);return h})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new yr;n.name&&(r.name=i.createUniqueName(n.name)),Wi(r,n),n.extensions&&to(t,r,n);const s=n.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(i.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof ui||f instanceof Wt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}}function Qb(a,e,t){const n=e.attributes,i=new Us;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),o.normalized){const u=Hc(Ms[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new F,l=new F;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const p=Hc(Ms[f.componentType]);l.multiplyScalar(p)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const s=new Bs;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=s}function Ff(a,e,t){const n=e.attributes,i=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=Gc[s]||s.toLowerCase();o in a.attributes||i.push(r(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(s)}return Wi(a,e),Qb(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Yb(a,e.targets,t):a})}function kf(a,e){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===hd)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(i),r}function zf(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function eS(a,e,t){return e&&zf(a.prototype,e),t&&zf(a,t),a}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ht,Va,Pn,Ki,$i,bs,Up,mr,Mo,Bp,Ci,Qn,Vp,Gp=function(){return Ht||typeof window<"u"&&(Ht=window.gsap)&&Ht.registerPlugin&&Ht},Hp=1,ms=[],je=[],fi=[],bo=Date.now,Wc=function(e,t){return t},tS=function(){var e=Mo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,je),i.push.apply(i,fi),je=n,fi=i,Wc=function(s,o){return t[s](o)}},er=function(e,t){return~fi.indexOf(e)&&fi[fi.indexOf(e)+1][t]},So=function(e){return!!~Bp.indexOf(e)},tn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ba="scrollLeft",Sa="scrollTop",Xc=function(){return Ci&&Ci.isPressed||je.cache++},il=function(e,t){var n=function i(r){if(r||r===0){Hp&&(Pn.history.scrollRestoration="manual");var s=Ci&&Ci.isPressed;r=i.v=Math.round(r)||(Ci&&Ci.iOS?1:0),e(r),i.cacheID=je.cache,s&&Wc("ss",r)}else(t||je.cache!==i.cacheID||Wc("ref"))&&(i.cacheID=je.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},un={s:ba,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:il(function(a){return arguments.length?Pn.scrollTo(a,Dt.sc()):Pn.pageXOffset||Ki[ba]||$i[ba]||bs[ba]||0})},Dt={s:Sa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:un,sc:il(function(a){return arguments.length?Pn.scrollTo(un.sc(),a):Pn.pageYOffset||Ki[Sa]||$i[Sa]||bs[Sa]||0})},pn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Ht.utils.toArray)(e)[0]||(typeof e=="string"&&Ht.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},rr=function(e,t){var n=t.s,i=t.sc;So(e)&&(e=Ki.scrollingElement||$i);var r=je.indexOf(e),s=i===Dt.sc?1:2;!~r&&(r=je.push(e)-1),je[r+s]||tn(e,"scroll",Xc);var o=je[r+s],l=o||(je[r+s]=il(er(e,n),!0)||(So(e)?i:il(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Ht.getProperty(e,"scrollBehavior")==="smooth"),l},qc=function(e,t,n){var i=e,r=e,s=bo(),o=s,l=t||50,c=Math.max(500,l*3),u=function(g,p){var m=bo();p||m-s>l?(r=i,i=g,o=s,s=m):n?i+=g:i=r+(g-r)/(m-o)*(s-o)},h=function(){r=i=n?0:i,o=s=0},f=function(g){var p=o,m=r,_=bo();return(g||g===0)&&g!==i&&u(g),s===o||_-o>c?0:(i+(n?m:-m))/((n?_:s)-p)*1e3};return{update:u,reset:h,getVelocity:f}},no=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Uf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Wp=function(){Mo=Ht.core.globals().ScrollTrigger,Mo&&Mo.core&&tS()},Xp=function(e){return Ht=e||Gp(),!Va&&Ht&&typeof document<"u"&&document.body&&(Pn=window,Ki=document,$i=Ki.documentElement,bs=Ki.body,Bp=[Pn,Ki,$i,bs],Ht.utils.clamp,Vp=Ht.core.context||function(){},mr="onpointerenter"in bs?"pointer":"mouse",Up=Tt.isTouch=Pn.matchMedia&&Pn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Pn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Qn=Tt.eventTypes=("ontouchstart"in $i?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in $i?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Hp=0},500),Wp(),Va=1),Va};un.op=Dt;je.cache=0;var Tt=function(){function a(t){this.init(t)}var e=a.prototype;return e.init=function(n){Va||Xp(Ht)||console.warn("Please gsap.registerPlugin(Observer)"),Mo||Wp();var i=n.tolerance,r=n.dragMinimum,s=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,p=n.event,m=n.onDragStart,_=n.onDragEnd,b=n.onDrag,v=n.onPress,y=n.onRelease,M=n.onRight,E=n.onLeft,A=n.onUp,x=n.onDown,w=n.onChangeX,R=n.onChangeY,z=n.onChange,k=n.onToggleX,I=n.onToggleY,D=n.onHover,U=n.onHoverEnd,K=n.onMove,X=n.ignoreCheck,V=n.isNormalizer,J=n.onGestureStart,C=n.onGestureEnd,B=n.onWheel,q=n.onEnable,ne=n.onDisable,ee=n.onClick,se=n.scrollSpeed,Y=n.capture,Ae=n.allowClicks,fe=n.lockAxis,ye=n.onLockAxis;this.target=o=pn(o)||$i,this.vars=n,d&&(d=Ht.utils.toArray(d)),i=i||1e-9,r=r||0,g=g||1,se=se||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Pn.getComputedStyle(bs).lineHeight)||22);var pe,Fe,Pe,ae,Xe,rt,at,H=this,Qe=0,qe=0,Ot=n.passive||!u,it=rr(o,un),L=rr(o,Dt),S=it(),$=L(),Q=~s.indexOf("touch")&&!~s.indexOf("pointer")&&Qn[0]==="pointerdown",re=So(o),ie=o.ownerDocument||Ki,Te=[0,0,0],oe=[0,0,0],Z=0,Ee=function(){return Z=bo()},me=function(Se,ke){return(H.event=Se)&&d&&~d.indexOf(Se.target)||ke&&Q&&Se.pointerType!=="touch"||X&&X(Se,ke)},ve=function(){H._vx.reset(),H._vy.reset(),Fe.pause(),h&&h(H)},we=function(){var Se=H.deltaX=Uf(Te),ke=H.deltaY=Uf(oe),ue=Math.abs(Se)>=i,ze=Math.abs(ke)>=i;z&&(ue||ze)&&z(H,Se,ke,Te,oe),ue&&(M&&H.deltaX>0&&M(H),E&&H.deltaX<0&&E(H),w&&w(H),k&&H.deltaX<0!=Qe<0&&k(H),Qe=H.deltaX,Te[0]=Te[1]=Te[2]=0),ze&&(x&&H.deltaY>0&&x(H),A&&H.deltaY<0&&A(H),R&&R(H),I&&H.deltaY<0!=qe<0&&I(H),qe=H.deltaY,oe[0]=oe[1]=oe[2]=0),(ae||Pe)&&(K&&K(H),Pe&&(b(H),Pe=!1),ae=!1),rt&&!(rt=!1)&&ye&&ye(H),Xe&&(B(H),Xe=!1),pe=0},be=function(Se,ke,ue){Te[ue]+=Se,oe[ue]+=ke,H._vx.update(Se),H._vy.update(ke),c?pe||(pe=requestAnimationFrame(we)):we()},Ue=function(Se,ke){fe&&!at&&(H.axis=at=Math.abs(Se)>Math.abs(ke)?"x":"y",rt=!0),at!=="y"&&(Te[2]+=Se,H._vx.update(Se,!0)),at!=="x"&&(oe[2]+=ke,H._vy.update(ke,!0)),c?pe||(pe=requestAnimationFrame(we)):we()},et=function(Se){if(!me(Se,1)){Se=no(Se,u);var ke=Se.clientX,ue=Se.clientY,ze=ke-H.x,Le=ue-H.y,Ne=H.isDragging;H.x=ke,H.y=ue,(Ne||Math.abs(H.startX-ke)>=r||Math.abs(H.startY-ue)>=r)&&(b&&(Pe=!0),Ne||(H.isDragging=!0),Ue(ze,Le),Ne||m&&m(H))}},ft=H.onPress=function(_e){me(_e,1)||_e&&_e.button||(H.axis=at=null,Fe.pause(),H.isPressed=!0,_e=no(_e),Qe=qe=0,H.startX=H.x=_e.clientX,H.startY=H.y=_e.clientY,H._vx.reset(),H._vy.reset(),tn(V?o:ie,Qn[1],et,Ot,!0),H.deltaX=H.deltaY=0,v&&v(H))},P=H.onRelease=function(_e){if(!me(_e,1)){en(V?o:ie,Qn[1],et,!0);var Se=!isNaN(H.y-H.startY),ke=H.isDragging,ue=ke&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),ze=no(_e);!ue&&Se&&(H._vx.reset(),H._vy.reset(),u&&Ae&&Ht.delayedCall(.08,function(){if(bo()-Z>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(ie.createEvent){var Le=ie.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,Pn,1,ze.screenX,ze.screenY,ze.clientX,ze.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(Le)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,h&&ke&&!V&&Fe.restart(!0),_&&ke&&_(H),y&&y(H,ue)}},j=function(Se){return Se.touches&&Se.touches.length>1&&(H.isGesturing=!0)&&J(Se,H.isDragging)},te=function(){return(H.isGesturing=!1)||C(H)},le=function(Se){if(!me(Se)){var ke=it(),ue=L();be((ke-S)*se,(ue-$)*se,1),S=ke,$=ue,h&&Fe.restart(!0)}},ge=function(Se){if(!me(Se)){Se=no(Se,u),B&&(Xe=!0);var ke=(Se.deltaMode===1?l:Se.deltaMode===2?Pn.innerHeight:1)*g;be(Se.deltaX*ke,Se.deltaY*ke,0),h&&!V&&Fe.restart(!0)}},Ge=function(Se){if(!me(Se)){var ke=Se.clientX,ue=Se.clientY,ze=ke-H.x,Le=ue-H.y;H.x=ke,H.y=ue,ae=!0,h&&Fe.restart(!0),(ze||Le)&&Ue(ze,Le)}},mt=function(Se){H.event=Se,D(H)},dt=function(Se){H.event=Se,U(H)},Mn=function(Se){return me(Se)||no(Se,u)&&ee(H)};Fe=H._dc=Ht.delayedCall(f||.25,ve).pause(),H.deltaX=H.deltaY=0,H._vx=qc(0,50,!0),H._vy=qc(0,50,!0),H.scrollX=it,H.scrollY=L,H.isDragging=H.isGesturing=H.isPressed=!1,Vp(this),H.enable=function(_e){return H.isEnabled||(tn(re?ie:o,"scroll",Xc),s.indexOf("scroll")>=0&&tn(re?ie:o,"scroll",le,Ot,Y),s.indexOf("wheel")>=0&&tn(o,"wheel",ge,Ot,Y),(s.indexOf("touch")>=0&&Up||s.indexOf("pointer")>=0)&&(tn(o,Qn[0],ft,Ot,Y),tn(ie,Qn[2],P),tn(ie,Qn[3],P),Ae&&tn(o,"click",Ee,!0,!0),ee&&tn(o,"click",Mn),J&&tn(ie,"gesturestart",j),C&&tn(ie,"gestureend",te),D&&tn(o,mr+"enter",mt),U&&tn(o,mr+"leave",dt),K&&tn(o,mr+"move",Ge)),H.isEnabled=!0,_e&&_e.type&&ft(_e),q&&q(H)),H},H.disable=function(){H.isEnabled&&(ms.filter(function(_e){return _e!==H&&So(_e.target)}).length||en(re?ie:o,"scroll",Xc),H.isPressed&&(H._vx.reset(),H._vy.reset(),en(V?o:ie,Qn[1],et,!0)),en(re?ie:o,"scroll",le,Y),en(o,"wheel",ge,Y),en(o,Qn[0],ft,Y),en(ie,Qn[2],P),en(ie,Qn[3],P),en(o,"click",Ee,!0),en(o,"click",Mn),en(ie,"gesturestart",j),en(ie,"gestureend",te),en(o,mr+"enter",mt),en(o,mr+"leave",dt),en(o,mr+"move",Ge),H.isEnabled=H.isPressed=H.isDragging=!1,ne&&ne(H))},H.kill=H.revert=function(){H.disable();var _e=ms.indexOf(H);_e>=0&&ms.splice(_e,1),Ci===H&&(Ci=0)},ms.push(H),V&&So(o)&&(Ci=H),H.enable(p)},eS(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();Tt.version="3.12.5";Tt.create=function(a){return new Tt(a)};Tt.register=Xp;Tt.getAll=function(){return ms.slice()};Tt.getById=function(a){return ms.filter(function(e){return e.vars.id===a})[0]};Gp()&&Ht.registerPlugin(Tt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xe,us,Ze,xt,ei,gt,qp,rl,Wo,wo,uo,wa,Yt,ml,Yc,sn,Bf,Vf,hs,Yp,uc,jp,rn,jc,Kp,$p,Hi,Kc,Pu,Ss,Du,sl,$c,hc,Ta=1,jt=Date.now,fc=jt(),jn=0,ho=0,Gf=function(e,t,n){var i=An(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Hf=function(e,t){return t&&(!An(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},nS=function a(){return ho&&requestAnimationFrame(a)},Wf=function(){return ml=1},Xf=function(){return ml=0},si=function(e){return e},fo=function(e){return Math.round(e*1e5)/1e5||0},Zp=function(){return typeof window<"u"},Jp=function(){return xe||Zp()&&(xe=window.gsap)&&xe.registerPlugin&&xe},Vr=function(e){return!!~qp.indexOf(e)},Qp=function(e){return(e==="Height"?Du:Ze["inner"+e])||ei["client"+e]||gt["client"+e]},em=function(e){return er(e,"getBoundingClientRect")||(Vr(e)?function(){return qa.width=Ze.innerWidth,qa.height=Du,qa}:function(){return Ei(e)})},iS=function(e,t,n){var i=n.d,r=n.d2,s=n.a;return(s=er(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(t?Qp(r):e["client"+r])||0}},rS=function(e,t){return!t||~fi.indexOf(e)?em(e):function(){return qa}},ci=function(e,t){var n=t.s,i=t.d2,r=t.d,s=t.a;return Math.max(0,(n="scroll"+i)&&(s=er(e,n))?s()-em(e)()[r]:Vr(e)?(ei[n]||gt[n])-Qp(i):e[n]-e["offset"+i])},Ea=function(e,t){for(var n=0;n<hs.length;n+=3)(!t||~t.indexOf(hs[n+1]))&&e(hs[n],hs[n+1],hs[n+2])},An=function(e){return typeof e=="string"},hn=function(e){return typeof e=="function"},po=function(e){return typeof e=="number"},gr=function(e){return typeof e=="object"},io=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},dc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},as=Math.abs,tm="left",nm="top",Iu="right",Nu="bottom",Rr="width",Pr="height",To="Right",Eo="Left",Ao="Top",Co="Bottom",Ct="padding",Bn="margin",ks="Width",Ou="Height",Pt="px",Vn=function(e){return Ze.getComputedStyle(e)},sS=function(e){var t=Vn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},qf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ei=function(e,t){var n=t&&Vn(e)[Yc]!=="matrix(1, 0, 0, 1, 0, 0)"&&xe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ol=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},im=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},oS=function(e){return function(t){return xe.utils.snap(im(e),t)}},Fu=function(e){var t=xe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,s){s===void 0&&(s=.001);var o;if(!r)return t(i);if(r>0){for(i-=s,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=s;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,s){s===void 0&&(s=.001);var o=t(i);return!r||Math.abs(o-i)<s||o-i<0==r<0?o:t(r<0?i-e:i+e)}},aS=function(e){return function(t,n){return Fu(im(e))(t,n.direction)}},Aa=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},zt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},kt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ca=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Yf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},La={toggleActions:"play",anticipatePin:0},al={top:0,left:0,center:.5,bottom:1,right:1},Ga=function(e,t){if(An(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in al?al[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ra=function(e,t,n,i,r,s,o,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,g=xt.createElement("div"),p=Vr(n)||er(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=p?gt:n,b=e.indexOf("start")!==-1,v=b?c:u,y="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&p?"fixed;":"absolute;"),(m||l||!p)&&(y+=(i===Dt?Iu:Nu)+":"+(s+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],Ha(g,0,i,b),g},Ha=function(e,t,n,i){var r={display:"block"},s=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+s+ks]=1,r["border"+o+ks]=0,r[n.p]=t+"px",xe.set(e,r)},We=[],Zc={},Xo,jf=function(){return jt()-jn>34&&(Xo||(Xo=requestAnimationFrame(Pi)))},ls=function(){(!rn||!rn.isPressed||rn.startX>gt.clientWidth)&&(je.cache++,rn?Xo||(Xo=requestAnimationFrame(Pi)):Pi(),jn||Hr("scrollStart"),jn=jt())},pc=function(){$p=Ze.innerWidth,Kp=Ze.innerHeight},mo=function(){je.cache++,!Yt&&!jp&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!jc||$p!==Ze.innerWidth||Math.abs(Ze.innerHeight-Kp)>Ze.innerHeight*.25)&&rl.restart(!0)},Gr={},lS=[],rm=function a(){return kt($e,"scrollEnd",a)||br(!0)},Hr=function(e){return Gr[e]&&Gr[e].map(function(t){return t()})||lS},En=[],sm=function(e){for(var t=0;t<En.length;t+=5)(!e||En[t+4]&&En[t+4].query===e)&&(En[t].style.cssText=En[t+1],En[t].getBBox&&En[t].setAttribute("transform",En[t+2]||""),En[t+3].uncache=1)},ku=function(e,t){var n;for(sn=0;sn<We.length;sn++)n=We[sn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));sl=!0,t&&sm(t),t||Hr("revert")},om=function(e,t){je.cache++,(t||!on)&&je.forEach(function(n){return hn(n)&&n.cacheID++&&(n.rec=0)}),An(e)&&(Ze.history.scrollRestoration=Pu=e)},on,Dr=0,Kf,cS=function(){if(Kf!==Dr){var e=Kf=Dr;requestAnimationFrame(function(){return e===Dr&&br(!0)})}},am=function(){gt.appendChild(Ss),Du=!rn&&Ss.offsetHeight||Ze.innerHeight,gt.removeChild(Ss)},$f=function(e){return Wo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},br=function(e,t){if(jn&&!e&&!sl){zt($e,"scrollEnd",rm);return}am(),on=$e.isRefreshing=!0,je.forEach(function(i){return hn(i)&&++i.cacheID&&(i.rec=i())});var n=Hr("refreshInit");Yp&&$e.sort(),t||ku(),je.forEach(function(i){hn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),We.slice(0).forEach(function(i){return i.refresh()}),sl=!1,We.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",s=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-s),i.refresh()}}),$c=1,$f(!0),We.forEach(function(i){var r=ci(i.scroller,i._dir),s=i.vars.end==="max"||i._endClamp&&i.end>r,o=i._startClamp&&i.start>=r;(s||o)&&i.setPositions(o?r-1:i.start,s?Math.max(o?r:i.start+1,r):i.end,!0)}),$f(!1),$c=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),je.forEach(function(i){hn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),om(Pu,1),rl.pause(),Dr++,on=2,Pi(2),We.forEach(function(i){return hn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),on=$e.isRefreshing=!1,Hr("refresh")},Jc=0,Wa=1,Lo,Pi=function(e){if(e===2||!on&&!sl){$e.isUpdating=!0,Lo&&Lo.update(0);var t=We.length,n=jt(),i=n-fc>=50,r=t&&We[0].scroll();if(Wa=Jc>r?-1:1,on||(Jc=r),i&&(jn&&!ml&&n-jn>200&&(jn=0,Hr("scrollEnd")),uo=fc,fc=n),Wa<0){for(sn=t;sn-- >0;)We[sn]&&We[sn].update(0,i);Wa=1}else for(sn=0;sn<t;sn++)We[sn]&&We[sn].update(0,i);$e.isUpdating=!1}Xo=0},Qc=[tm,nm,Nu,Iu,Bn+Co,Bn+To,Bn+Ao,Bn+Eo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Xa=Qc.concat([Rr,Pr,"boxSizing","max"+ks,"max"+Ou,"position",Bn,Ct,Ct+Ao,Ct+To,Ct+Co,Ct+Eo]),uS=function(e,t,n){ws(n);var i=e._gsap;if(i.spacerIsNative)ws(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},mc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Qc.length,s=t.style,o=e.style,l;r--;)l=Qc[r],s[l]=n[l];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),o[Nu]=o[Iu]="auto",s.flexBasis=n.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[Rr]=ol(e,un)+Pt,s[Pr]=ol(e,Dt)+Pt,s[Ct]=o[Bn]=o[nm]=o[tm]="0",ws(i),o[Rr]=o["max"+ks]=n[Rr],o[Pr]=o["max"+Ou]=n[Pr],o[Ct]=n[Ct],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},hS=/([A-Z])/g,ws=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,s;for((e.t._gsap||xe.core.getCache(e.t)).uncache=1;i<n;i+=2)s=e[i+1],r=e[i],s?t[r]=s:t[r]&&t.removeProperty(r.replace(hS,"-$1").toLowerCase())}},Pa=function(e){for(var t=Xa.length,n=e.style,i=[],r=0;r<t;r++)i.push(Xa[r],n[Xa[r]]);return i.t=e,i},fS=function(e,t,n){for(var i=[],r=e.length,s=n?8:0,o;s<r;s+=2)o=e[s],i.push(o,o in t?t[o]:e[s+1]);return i.t=e.t,i},qa={left:0,top:0},Zf=function(e,t,n,i,r,s,o,l,c,u,h,f,d,g){hn(e)&&(e=e(l)),An(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Ga("0"+e.substr(3),n):0));var p=d?d.time():0,m,_,b;if(d&&d.seek(0),isNaN(e)||(e=+e),po(e))d&&(e=xe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Ha(o,n,i,!0);else{hn(t)&&(t=t(l));var v=(e||"0").split(" "),y,M,E,A;b=pn(t,l)||gt,y=Ei(b)||{},(!y||!y.left&&!y.top)&&Vn(b).display==="none"&&(A=b.style.display,b.style.display="block",y=Ei(b),A?b.style.display=A:b.style.removeProperty("display")),M=Ga(v[0],y[i.d]),E=Ga(v[1]||"0",n),e=y[i.p]-c[i.p]-u+M+r-E,o&&Ha(o,E,i,n-E<20||o._isStart&&E>20),n-=n-E}if(g&&(l[g]=e||-.001,e<0&&(e=0)),s){var x=e+n,w=s._isStart;m="scroll"+i.d2,Ha(s,x,i,w&&x>20||!w&&(h?Math.max(gt[m],ei[m]):s.parentNode[m])<=x+1),h&&(c=Ei(o),h&&(s.style[i.op.p]=c[i.op.p]-i.op.m-s._offset+Pt))}return d&&b&&(m=Ei(b),d.seek(f),_=Ei(b),d._caScrollDist=m[i.p]-_[i.p],e=e/d._caScrollDist*f),d&&d.seek(p),d?e:Math.round(e)},dS=/(webkit|moz|length|cssText|inset)/i,Jf=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,s,o;if(t===gt){e._stOrig=r.cssText,o=Vn(e);for(s in o)!+s&&!dS.test(s)&&o[s]&&typeof r[s]=="string"&&s!=="0"&&(r[s]=o[s]);r.top=n,r.left=i}else r.cssText=e._stOrig;xe.core.getCache(e).uncache=1,t.appendChild(e)}},lm=function(e,t,n){var i=t,r=i;return function(s){var o=Math.round(e());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(s=o,n&&n()),r=i,i=s,s}},Da=function(e,t,n){var i={};i[t.p]="+="+n,xe.set(e,i)},Qf=function(e,t){var n=rr(e,t),i="_scroll"+t.p2,r=function s(o,l,c,u,h){var f=s.tween,d=l.onComplete,g={};c=c||n();var p=lm(n,c,function(){f.kill(),s.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return p(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){je.cache++,s.tween&&Pi()},l.onComplete=function(){s.tween=0,d&&d.call(f)},f=s.tween=xe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},zt(e,"wheel",n.wheelHandler),$e.isTouch&&zt(e,"touchmove",n.wheelHandler),r},$e=function(){function a(t,n){us||a.register(xe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Kc(this),this.init(t,n)}var e=a.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ho){this.update=this.refresh=this.kill=si;return}n=qf(An(n)||po(n)||n.nodeType?{trigger:n}:n,La);var r=n,s=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,g=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,b=r.onSnapComplete,v=r.once,y=r.snap,M=r.pinReparent,E=r.pinSpacer,A=r.containerAnimation,x=r.fastScrollEnd,w=r.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?un:Dt,z=!h&&h!==0,k=pn(n.scroller||Ze),I=xe.core.getCache(k),D=Vr(k),U=("pinType"in n?n.pinType:er(k,"pinType")||D&&"fixed")==="fixed",K=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=z&&n.toggleActions.split(" "),V="markers"in n?n.markers:La.markers,J=D?0:parseFloat(Vn(k)["border"+R.p2+ks])||0,C=this,B=n.onRefreshInit&&function(){return n.onRefreshInit(C)},q=iS(k,D,R),ne=rS(k,D),ee=0,se=0,Y=0,Ae=rr(k,R),fe,ye,pe,Fe,Pe,ae,Xe,rt,at,H,Qe,qe,Ot,it,L,S,$,Q,re,ie,Te,oe,Z,Ee,me,ve,we,be,Ue,et,ft,P,j,te,le,ge,Ge,mt,dt;if(C._startClamp=C._endClamp=!1,C._dir=R,m*=45,C.scroller=k,C.scroll=A?A.time.bind(A):Ae,Fe=Ae(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Yp=1,n.refreshPriority===-9999&&(Lo=C)),I.tweenScroll=I.tweenScroll||{top:Qf(k,Dt),left:Qf(k,un)},C.tweenTo=fe=I.tweenScroll[R.p],C.scrubDuration=function(ue){j=po(ue)&&ue,j?P?P.duration(ue):P=xe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return _&&_(C)}}):(P&&P.progress(1).kill(),P=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),et=0,l||(l=i.vars.id)),y&&((!gr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in gt.style&&xe.set(D?[gt,ei]:k,{scrollBehavior:"auto"}),je.forEach(function(ue){return hn(ue)&&ue.target===(D?xt.scrollingElement||ei:k)&&(ue.smooth=!1)}),pe=hn(y.snapTo)?y.snapTo:y.snapTo==="labels"?oS(i):y.snapTo==="labelsDirectional"?aS(i):y.directional!==!1?function(ue,ze){return Fu(y.snapTo)(ue,jt()-se<500?0:ze.direction)}:xe.utils.snap(y.snapTo),te=y.duration||{min:.1,max:2},te=gr(te)?wo(te.min,te.max):wo(te,te),le=xe.delayedCall(y.delay||j/2||.1,function(){var ue=Ae(),ze=jt()-se<500,Le=fe.tween;if((ze||Math.abs(C.getVelocity())<10)&&!Le&&!ml&&ee!==ue){var Ne=(ue-ae)/it,T=i&&!z?i.totalProgress():Ne,N=ze?0:(T-ft)/(jt()-uo)*1e3||0,G=xe.utils.clamp(-Ne,1-Ne,as(N/2)*N/.185),O=Ne+(y.inertia===!1?0:G),W,he,de=y,De=de.onStart,Me=de.onInterrupt,Ie=de.onComplete;if(W=pe(O,C),po(W)||(W=O),he=Math.round(ae+W*it),ue<=Xe&&ue>=ae&&he!==ue){if(Le&&!Le._initted&&Le.data<=as(he-ue))return;y.inertia===!1&&(G=W-Ne),fe(he,{duration:te(as(Math.max(as(O-T),as(W-T))*.185/N/.05||0)),ease:y.ease||"power3",data:as(he-ue),onInterrupt:function(){return le.restart(!0)&&Me&&Me(C)},onComplete:function(){C.update(),ee=Ae(),i&&(P?P.resetTo("totalProgress",W,i._tTime/i._tDur):i.progress(W)),et=ft=i&&!z?i.totalProgress():C.progress,b&&b(C),Ie&&Ie(C)}},ue,G*it,he-ue-G*it),De&&De(C,fe.tween)}}else C.isActive&&ee!==ue&&le.restart(!0)}).pause()),l&&(Zc[l]=C),f=C.trigger=pn(f||d!==!0&&d),dt=f&&f._gsap&&f._gsap.stRevert,dt&&(dt=dt(C)),d=d===!0?f:pn(d),An(o)&&(o={targets:f,className:o}),d&&(g===!1||g===Bn||(g=!g&&d.parentNode&&d.parentNode.style&&Vn(d.parentNode).display==="flex"?!1:Ct),C.pin=d,ye=xe.core.getCache(d),ye.spacer?L=ye.pinState:(E&&(E=pn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),ye.spacerIsNative=!!E,E&&(ye.spacerState=Pa(E))),ye.spacer=Q=E||xt.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),ye.pinState=L=Pa(d)),n.force3D!==!1&&xe.set(d,{force3D:!0}),C.spacer=Q=ye.spacer,Ue=Vn(d),Ee=Ue[g+R.os2],ie=xe.getProperty(d),Te=xe.quickSetter(d,R.a,Pt),mc(d,Q,Ue),$=Pa(d)),V){qe=gr(V)?qf(V,Yf):Yf,H=Ra("scroller-start",l,k,R,qe,0),Qe=Ra("scroller-end",l,k,R,qe,0,H),re=H["offset"+R.op.d2];var Mn=pn(er(k,"content")||k);rt=this.markerStart=Ra("start",l,Mn,R,qe,re,0,A),at=this.markerEnd=Ra("end",l,Mn,R,qe,re,0,A),A&&(mt=xe.quickSetter([rt,at],R.a,Pt)),!U&&!(fi.length&&er(k,"fixedMarkers")===!0)&&(sS(D?gt:k),xe.set([H,Qe],{force3D:!0}),ve=xe.quickSetter(H,R.a,Pt),be=xe.quickSetter(Qe,R.a,Pt))}if(A){var _e=A.vars.onUpdate,Se=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){C.update(0,0,1),_e&&_e.apply(A,Se||[])})}if(C.previous=function(){return We[We.indexOf(C)-1]},C.next=function(){return We[We.indexOf(C)+1]},C.revert=function(ue,ze){if(!ze)return C.kill(!0);var Le=ue!==!1||!C.enabled,Ne=Yt;Le!==C.isReverted&&(Le&&(ge=Math.max(Ae(),C.scroll.rec||0),Y=C.progress,Ge=i&&i.progress()),rt&&[rt,at,H,Qe].forEach(function(T){return T.style.display=Le?"none":"block"}),Le&&(Yt=C,C.update(Le)),d&&(!M||!C.isActive)&&(Le?uS(d,Q,L):mc(d,Q,Vn(d),me)),Le||C.update(Le),Yt=Ne,C.isReverted=Le)},C.refresh=function(ue,ze,Le,Ne){if(!((Yt||!C.enabled)&&!ze)){if(d&&ue&&jn){zt(a,"scrollEnd",rm);return}!on&&B&&B(C),Yt=C,fe.tween&&!Le&&(fe.tween.kill(),fe.tween=0),P&&P.pause(),p&&i&&i.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var T=q(),N=ne(),G=A?A.duration():ci(k,R),O=it<=.01,W=0,he=Ne||0,de=gr(Le)?Le.end:n.end,De=n.endTrigger||f,Me=gr(Le)?Le.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Ie=C.pinnedContainer=n.pinnedContainer&&pn(n.pinnedContainer,C),Oe=f&&Math.max(0,We.indexOf(C))||0,Re=Oe,He,st,Gt,Fn,Ye,Ce,dn,bt,ni,Fi,Xt,gi,Et;for(V&&gr(Le)&&(gi=xe.getProperty(H,R.p),Et=xe.getProperty(Qe,R.p));Re--;)Ce=We[Re],Ce.end||Ce.refresh(0,1)||(Yt=C),dn=Ce.pin,dn&&(dn===f||dn===d||dn===Ie)&&!Ce.isReverted&&(Fi||(Fi=[]),Fi.unshift(Ce),Ce.revert(!0,!0)),Ce!==We[Re]&&(Oe--,Re--);for(hn(Me)&&(Me=Me(C)),Me=Gf(Me,"start",C),ae=Zf(Me,f,T,R,Ae(),rt,H,C,N,J,U,G,A,C._startClamp&&"_startClamp")||(d?-.001:0),hn(de)&&(de=de(C)),An(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(An(Me)?Me.split(" ")[0]:"")+de:(W=Ga(de.substr(2),T),de=An(Me)?Me:(A?xe.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,ae):ae)+W,De=f)),de=Gf(de,"end",C),Xe=Math.max(ae,Zf(de||(De?"100% 0":G),De,T,R,Ae()+W,at,Qe,C,N,J,U,G,A,C._endClamp&&"_endClamp"))||-.001,W=0,Re=Oe;Re--;)Ce=We[Re],dn=Ce.pin,dn&&Ce.start-Ce._pinPush<=ae&&!A&&Ce.end>0&&(He=Ce.end-(C._startClamp?Math.max(0,Ce.start):Ce.start),(dn===f&&Ce.start-Ce._pinPush<ae||dn===Ie)&&isNaN(Me)&&(W+=He*(1-Ce.progress)),dn===d&&(he+=He));if(ae+=W,Xe+=W,C._startClamp&&(C._startClamp+=W),C._endClamp&&!on&&(C._endClamp=Xe||-.001,Xe=Math.min(Xe,ci(k,R))),it=Xe-ae||(ae-=.01)&&.001,O&&(Y=xe.utils.clamp(0,1,xe.utils.normalize(ae,Xe,ge))),C._pinPush=he,rt&&W&&(He={},He[R.a]="+="+W,Ie&&(He[R.p]="-="+Ae()),xe.set([rt,at],He)),d&&!($c&&C.end>=ci(k,R)))He=Vn(d),Fn=R===Dt,Gt=Ae(),oe=parseFloat(ie(R.a))+he,!G&&Xe>1&&(Xt=(D?xt.scrollingElement||ei:k).style,Xt={style:Xt,value:Xt["overflow"+R.a.toUpperCase()]},D&&Vn(gt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(Xt.style["overflow"+R.a.toUpperCase()]="scroll")),mc(d,Q,He),$=Pa(d),st=Ei(d,!0),bt=U&&rr(k,Fn?un:Dt)(),g?(me=[g+R.os2,it+he+Pt],me.t=Q,Re=g===Ct?ol(d,R)+it+he:0,Re&&(me.push(R.d,Re+Pt),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=Re+Pt)),ws(me),Ie&&We.forEach(function(bn){bn.pin===Ie&&bn.vars.pinSpacing!==!1&&(bn._subPinOffset=!0)}),U&&Ae(ge)):(Re=ol(d,R),Re&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=Re+Pt)),U&&(Ye={top:st.top+(Fn?Gt-ae:bt)+Pt,left:st.left+(Fn?bt:Gt-ae)+Pt,boxSizing:"border-box",position:"fixed"},Ye[Rr]=Ye["max"+ks]=Math.ceil(st.width)+Pt,Ye[Pr]=Ye["max"+Ou]=Math.ceil(st.height)+Pt,Ye[Bn]=Ye[Bn+Ao]=Ye[Bn+To]=Ye[Bn+Co]=Ye[Bn+Eo]="0",Ye[Ct]=He[Ct],Ye[Ct+Ao]=He[Ct+Ao],Ye[Ct+To]=He[Ct+To],Ye[Ct+Co]=He[Ct+Co],Ye[Ct+Eo]=He[Ct+Eo],S=fS(L,Ye,M),on&&Ae(0)),i?(ni=i._initted,uc(1),i.render(i.duration(),!0,!0),Z=ie(R.a)-oe+it+he,we=Math.abs(it-Z)>1,U&&we&&S.splice(S.length-2,2),i.render(0,!0,!0),ni||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),uc(0)):Z=it,Xt&&(Xt.value?Xt.style["overflow"+R.a.toUpperCase()]=Xt.value:Xt.style.removeProperty("overflow-"+R.a));else if(f&&Ae()&&!A)for(st=f.parentNode;st&&st!==gt;)st._pinOffset&&(ae-=st._pinOffset,Xe-=st._pinOffset),st=st.parentNode;Fi&&Fi.forEach(function(bn){return bn.revert(!1,!0)}),C.start=ae,C.end=Xe,Fe=Pe=on?ge:Ae(),!A&&!on&&(Fe<ge&&Ae(ge),C.scroll.rec=0),C.revert(!1,!0),se=jt(),le&&(ee=-1,le.restart(!0)),Yt=0,i&&z&&(i._initted||Ge)&&i.progress()!==Ge&&i.progress(Ge||0,!0).render(i.time(),!0,!0),(O||Y!==C.progress||A||p)&&(i&&!z&&i.totalProgress(A&&ae<-.001&&!Y?xe.utils.normalize(ae,Xe,0):Y,!0),C.progress=O||(Fe-ae)/it===Y?0:Y),d&&g&&(Q._pinOffset=Math.round(C.progress*Z)),P&&P.invalidate(),isNaN(gi)||(gi-=xe.getProperty(H,R.p),Et-=xe.getProperty(Qe,R.p),Da(H,R,gi),Da(rt,R,gi-(Ne||0)),Da(Qe,R,Et),Da(at,R,Et-(Ne||0))),O&&!on&&C.update(),u&&!on&&!Ot&&(Ot=!0,u(C),Ot=!1)}},C.getVelocity=function(){return(Ae()-Pe)/(jt()-uo)*1e3||0},C.endAnimation=function(){io(C.callbackAnimation),i&&(P?P.progress(1):i.paused()?z||io(i,C.direction<0,1):io(i,i.reversed()))},C.labelToScroll=function(ue){return i&&i.labels&&(ae||C.refresh()||ae)+i.labels[ue]/i.duration()*it||0},C.getTrailing=function(ue){var ze=We.indexOf(C),Le=C.direction>0?We.slice(0,ze).reverse():We.slice(ze+1);return(An(ue)?Le.filter(function(Ne){return Ne.vars.preventOverlaps===ue}):Le).filter(function(Ne){return C.direction>0?Ne.end<=ae:Ne.start>=Xe})},C.update=function(ue,ze,Le){if(!(A&&!Le&&!ue)){var Ne=on===!0?ge:C.scroll(),T=ue?0:(Ne-ae)/it,N=T<0?0:T>1?1:T||0,G=C.progress,O,W,he,de,De,Me,Ie,Oe;if(ze&&(Pe=Fe,Fe=A?Ae():Ne,y&&(ft=et,et=i&&!z?i.totalProgress():N)),m&&d&&!Yt&&!Ta&&jn&&(!N&&ae<Ne+(Ne-Pe)/(jt()-uo)*m?N=1e-4:N===1&&Xe>Ne+(Ne-Pe)/(jt()-uo)*m&&(N=.9999)),N!==G&&C.enabled){if(O=C.isActive=!!N&&N<1,W=!!G&&G<1,Me=O!==W,De=Me||!!N!=!!G,C.direction=N>G?1:-1,C.progress=N,De&&!Yt&&(he=N&&!G?0:N===1?1:G===1?2:3,z&&(de=!Me&&X[he+1]!=="none"&&X[he+1]||X[he],Oe=i&&(de==="complete"||de==="reset"||de in i))),w&&(Me||Oe)&&(Oe||h||!i)&&(hn(w)?w(C):C.getTrailing(w).forEach(function(Gt){return Gt.endAnimation()})),z||(P&&!Yt&&!Ta?(P._dp._time-P._start!==P._time&&P.render(P._dp._time-P._start),P.resetTo?P.resetTo("totalProgress",N,i._tTime/i._tDur):(P.vars.totalProgress=N,P.invalidate().restart())):i&&i.totalProgress(N,!!(Yt&&(se||ue)))),d){if(ue&&g&&(Q.style[g+R.os2]=Ee),!U)Te(fo(oe+Z*N));else if(De){if(Ie=!ue&&N>G&&Xe+1>Ne&&Ne+1>=ci(k,R),M)if(!ue&&(O||Ie)){var Re=Ei(d,!0),He=Ne-ae;Jf(d,gt,Re.top+(R===Dt?He:0)+Pt,Re.left+(R===Dt?0:He)+Pt)}else Jf(d,Q);ws(O||Ie?S:$),we&&N<1&&O||Te(oe+(N===1&&!Ie?Z:0))}}y&&!fe.tween&&!Yt&&!Ta&&le.restart(!0),o&&(Me||v&&N&&(N<1||!hc))&&Wo(o.targets).forEach(function(Gt){return Gt.classList[O||v?"add":"remove"](o.className)}),s&&!z&&!ue&&s(C),De&&!Yt?(z&&(Oe&&(de==="complete"?i.pause().totalProgress(1):de==="reset"?i.restart(!0).pause():de==="restart"?i.restart(!0):i[de]()),s&&s(C)),(Me||!hc)&&(c&&Me&&dc(C,c),K[he]&&dc(C,K[he]),v&&(N===1?C.kill(!1,1):K[he]=0),Me||(he=N===1?1:3,K[he]&&dc(C,K[he]))),x&&!O&&Math.abs(C.getVelocity())>(po(x)?x:2500)&&(io(C.callbackAnimation),P?P.progress(1):io(i,de==="reverse"?1:!N,1))):z&&s&&!Yt&&s(C)}if(be){var st=A?Ne/A.duration()*(A._caScrollDist||0):Ne;ve(st+(H._isFlipped?1:0)),be(st)}mt&&mt(-Ne/A.duration()*(A._caScrollDist||0))}},C.enable=function(ue,ze){C.enabled||(C.enabled=!0,zt(k,"resize",mo),D||zt(k,"scroll",ls),B&&zt(a,"refreshInit",B),ue!==!1&&(C.progress=Y=0,Fe=Pe=ee=Ae()),ze!==!1&&C.refresh())},C.getTween=function(ue){return ue&&fe?fe.tween:P},C.setPositions=function(ue,ze,Le,Ne){if(A){var T=A.scrollTrigger,N=A.duration(),G=T.end-T.start;ue=T.start+G*ue/N,ze=T.start+G*ze/N}C.refresh(!1,!1,{start:Hf(ue,Le&&!!C._startClamp),end:Hf(ze,Le&&!!C._endClamp)},Ne),C.update()},C.adjustPinSpacing=function(ue){if(me&&ue){var ze=me.indexOf(R.d)+1;me[ze]=parseFloat(me[ze])+ue+Pt,me[1]=parseFloat(me[1])+ue+Pt,ws(me)}},C.disable=function(ue,ze){if(C.enabled&&(ue!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,ze||P&&P.pause(),ge=0,ye&&(ye.uncache=1),B&&kt(a,"refreshInit",B),le&&(le.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!D)){for(var Le=We.length;Le--;)if(We[Le].scroller===k&&We[Le]!==C)return;kt(k,"resize",mo),D||kt(k,"scroll",ls)}},C.kill=function(ue,ze){C.disable(ue,ze),P&&!ze&&P.kill(),l&&delete Zc[l];var Le=We.indexOf(C);Le>=0&&We.splice(Le,1),Le===sn&&Wa>0&&sn--,Le=0,We.forEach(function(Ne){return Ne.scroller===C.scroller&&(Le=1)}),Le||on||(C.scroll.rec=0),i&&(i.scrollTrigger=null,ue&&i.revert({kill:!1}),ze||i.kill()),rt&&[rt,at,H,Qe].forEach(function(Ne){return Ne.parentNode&&Ne.parentNode.removeChild(Ne)}),Lo===C&&(Lo=0),d&&(ye&&(ye.uncache=1),Le=0,We.forEach(function(Ne){return Ne.pin===d&&Le++}),Le||(ye.spacer=0)),n.onKill&&n.onKill(C)},We.push(C),C.enable(!1,!1),dt&&dt(C),i&&i.add&&!it){var ke=C.update;C.update=function(){C.update=ke,ae||Xe||C.refresh()},xe.delayedCall(.01,C.update),it=.01,ae=Xe=0}else C.refresh();d&&cS()},a.register=function(n){return us||(xe=n||Jp(),Zp()&&window.document&&a.enable(),us=ho),us},a.defaults=function(n){if(n)for(var i in n)La[i]=n[i];return La},a.disable=function(n,i){ho=0,We.forEach(function(s){return s[i?"kill":"disable"](n)}),kt(Ze,"wheel",ls),kt(xt,"scroll",ls),clearInterval(wa),kt(xt,"touchcancel",si),kt(gt,"touchstart",si),Aa(kt,xt,"pointerdown,touchstart,mousedown",Wf),Aa(kt,xt,"pointerup,touchend,mouseup",Xf),rl.kill(),Ea(kt);for(var r=0;r<je.length;r+=3)Ca(kt,je[r],je[r+1]),Ca(kt,je[r],je[r+2])},a.enable=function(){if(Ze=window,xt=document,ei=xt.documentElement,gt=xt.body,xe&&(Wo=xe.utils.toArray,wo=xe.utils.clamp,Kc=xe.core.context||si,uc=xe.core.suppressOverwrites||si,Pu=Ze.history.scrollRestoration||"auto",Jc=Ze.pageYOffset,xe.core.globals("ScrollTrigger",a),gt)){ho=1,Ss=document.createElement("div"),Ss.style.height="100vh",Ss.style.position="absolute",am(),nS(),Tt.register(xe),a.isTouch=Tt.isTouch,Hi=Tt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),jc=Tt.isTouch===1,zt(Ze,"wheel",ls),qp=[Ze,xt,ei,gt],xe.matchMedia?(a.matchMedia=function(l){var c=xe.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},xe.addEventListener("matchMediaInit",function(){return ku()}),xe.addEventListener("matchMediaRevert",function(){return sm()}),xe.addEventListener("matchMedia",function(){br(0,1),Hr("matchMedia")}),xe.matchMedia("(orientation: portrait)",function(){return pc(),pc})):console.warn("Requires GSAP 3.11.0 or later"),pc(),zt(xt,"scroll",ls);var n=gt.style,i=n.borderTopStyle,r=xe.core.Animation.prototype,s,o;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",s=Ei(gt),Dt.m=Math.round(s.top+Dt.sc())||0,un.m=Math.round(s.left+un.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),wa=setInterval(jf,250),xe.delayedCall(.5,function(){return Ta=0}),zt(xt,"touchcancel",si),zt(gt,"touchstart",si),Aa(zt,xt,"pointerdown,touchstart,mousedown",Wf),Aa(zt,xt,"pointerup,touchend,mouseup",Xf),Yc=xe.utils.checkPrefix("transform"),Xa.push(Yc),us=jt(),rl=xe.delayedCall(.2,br).pause(),hs=[xt,"visibilitychange",function(){var l=Ze.innerWidth,c=Ze.innerHeight;xt.hidden?(Bf=l,Vf=c):(Bf!==l||Vf!==c)&&mo()},xt,"DOMContentLoaded",br,Ze,"load",br,Ze,"resize",mo],Ea(zt),We.forEach(function(l){return l.enable(0,1)}),o=0;o<je.length;o+=3)Ca(kt,je[o],je[o+1]),Ca(kt,je[o],je[o+2])}},a.config=function(n){"limitCallbacks"in n&&(hc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(wa)||(wa=i)&&setInterval(jf,i),"ignoreMobileResize"in n&&(jc=a.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ea(kt)||Ea(zt,n.autoRefreshEvents||"none"),jp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(n,i){var r=pn(n),s=je.indexOf(r),o=Vr(r);~s&&je.splice(s,o?6:2),i&&(o?fi.unshift(Ze,i,gt,i,ei,i):fi.unshift(r,i))},a.clearMatchMedia=function(n){We.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},a.isInViewport=function(n,i,r){var s=(An(n)?pn(n):n).getBoundingClientRect(),o=s[r?Rr:Pr]*i||0;return r?s.right-o>0&&s.left+o<Ze.innerWidth:s.bottom-o>0&&s.top+o<Ze.innerHeight},a.positionInViewport=function(n,i,r){An(n)&&(n=pn(n));var s=n.getBoundingClientRect(),o=s[r?Rr:Pr],l=i==null?o/2:i in al?al[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(s.left+l)/Ze.innerWidth:(s.top+l)/Ze.innerHeight},a.killAll=function(n){if(We.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Gr.killAll||[];Gr={},i.forEach(function(r){return r()})}},a}();$e.version="3.12.5";$e.saveStyles=function(a){return a?Wo(a).forEach(function(e){if(e&&e.style){var t=En.indexOf(e);t>=0&&En.splice(t,5),En.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),xe.core.getCache(e),Kc())}}):En};$e.revert=function(a,e){return ku(!a,e)};$e.create=function(a,e){return new $e(a,e)};$e.refresh=function(a){return a?mo():(us||$e.register())&&br(!0)};$e.update=function(a){return++je.cache&&Pi(a===!0?2:0)};$e.clearScrollMemory=om;$e.maxScroll=function(a,e){return ci(a,e?un:Dt)};$e.getScrollFunc=function(a,e){return rr(pn(a),e?un:Dt)};$e.getById=function(a){return Zc[a]};$e.getAll=function(){return We.filter(function(a){return a.vars.id!=="ScrollSmoother"})};$e.isScrolling=function(){return!!jn};$e.snapDirectional=Fu;$e.addEventListener=function(a,e){var t=Gr[a]||(Gr[a]=[]);~t.indexOf(e)||t.push(e)};$e.removeEventListener=function(a,e){var t=Gr[a],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};$e.batch=function(a,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,s=function(c,u){var h=[],f=[],d=xe.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&hn(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return hn(r)&&(r=r(),zt($e,"refresh",function(){return r=e.batchMax()})),Wo(a).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push($e.create(c))}),t};var ed=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},gc=function a(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Tt.isTouch?" pinch-zoom":""):"none",e===ei&&a(gt,t)},Ia={auto:1,scroll:1},pS=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,s=r._gsap||xe.core.getCache(r),o=jt(),l;if(!s._isScrollT||o-s._isScrollT>2e3){for(;r&&r!==gt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Ia[(l=Vn(r)).overflowY]||Ia[l.overflowX]));)r=r.parentNode;s._isScroll=r&&r!==n&&!Vr(r)&&(Ia[(l=Vn(r)).overflowY]||Ia[l.overflowX]),s._isScrollT=o}(s._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},cm=function(e,t,n,i){return Tt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&pS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&zt(xt,Tt.eventTypes[0],nd,!1,!0)},onDisable:function(){return kt(xt,Tt.eventTypes[0],nd,!0)}})},mS=/(input|label|select|textarea)/i,td,nd=function(e){var t=mS.test(e.target.tagName);(t||td)&&(e._gsapAllow=!0,td=t)},gS=function(e){gr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,s=t.onRelease,o,l,c=pn(e.target)||ei,u=xe.core.globals().ScrollSmoother,h=u&&u.get(),f=Hi&&(e.content&&pn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=rr(c,Dt),g=rr(c,un),p=1,m=(Tt.isTouch&&Ze.visualViewport?Ze.visualViewport.scale*Ze.visualViewport.width:Ze.outerWidth)/Ze.innerWidth,_=0,b=hn(i)?function(){return i(o)}:function(){return i||2.8},v,y,M=cm(c,e.type,!0,r),E=function(){return y=!1},A=si,x=si,w=function(){l=ci(c,Dt),x=wo(Hi?1:0,l),n&&(A=wo(0,ci(c,un))),v=Dr},R=function(){f._gsap.y=fo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},z=function(){if(y){requestAnimationFrame(E);var V=fo(o.deltaY/2),J=x(d.v-V);if(f&&J!==d.v+d.offset){d.offset=J-d.v;var C=fo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",d.cacheID=je.cache,Pi()}return!0}d.offset&&R(),y=!0},k,I,D,U,K=function(){w(),k.isActive()&&k.vars.scrollY>l&&(d()>l?k.progress(1)&&d(l):k.resetTo("scrollY",l))};return f&&xe.set(f,{y:"+=0"}),e.ignoreCheck=function(X){return Hi&&X.type==="touchmove"&&z()||p>1.05&&X.type!=="touchstart"||o.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){y=!1;var X=p;p=fo((Ze.visualViewport&&Ze.visualViewport.scale||1)/m),k.pause(),X!==p&&gc(c,p>1.01?!0:n?!1:"x"),I=g(),D=d(),w(),v=Dr},e.onRelease=e.onGestureStart=function(X,V){if(d.offset&&R(),!V)U.restart(!0);else{je.cache++;var J=b(),C,B;n&&(C=g(),B=C+J*.05*-X.velocityX/.227,J*=ed(g,C,B,ci(c,un)),k.vars.scrollX=A(B)),C=d(),B=C+J*.05*-X.velocityY/.227,J*=ed(d,C,B,ci(c,Dt)),k.vars.scrollY=x(B),k.invalidate().duration(J).play(.01),(Hi&&k.vars.scrollY>=l||C>=l-1)&&xe.to({},{onUpdate:K,duration:J})}s&&s(X)},e.onWheel=function(){k._ts&&k.pause(),jt()-_>1e3&&(v=0,_=jt())},e.onChange=function(X,V,J,C,B){if(Dr!==v&&w(),V&&n&&g(A(C[2]===V?I+(X.startX-X.x):g()+V-C[1])),J){d.offset&&R();var q=B[2]===J,ne=q?D+X.startY-X.y:d()+J-B[1],ee=x(ne);q&&ne!==ee&&(D+=ee-ne),d(ee)}(J||V)&&Pi()},e.onEnable=function(){gc(c,n?!1:"x"),$e.addEventListener("refresh",K),zt(Ze,"resize",K),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),M.enable()},e.onDisable=function(){gc(c,!0),kt(Ze,"resize",K),$e.removeEventListener("refresh",K),M.kill()},e.lockAxis=e.lockAxis!==!1,o=new Tt(e),o.iOS=Hi,Hi&&!d()&&d(1),Hi&&xe.ticker.add(si),U=o._dc,k=xe.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:lm(d,d(),function(){return k.pause()})},onUpdate:Pi,onComplete:U.vars.onComplete}),o};$e.sort=function(a){return We.sort(a||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};$e.observe=function(a){return new Tt(a)};$e.normalizeScroll=function(a){if(typeof a>"u")return rn;if(a===!0&&rn)return rn.enable();if(a===!1){rn&&rn.kill(),rn=a;return}var e=a instanceof Tt?a:gS(a);return rn&&rn.target===e.target&&rn.kill(),Vr(e.target)&&(rn=e),e};$e.core={_getVelocityProp:qc,_inputObserver:cm,_scrollers:je,_proxies:fi,bridge:{ss:function(){jn||Hr("scrollStart"),jn=jt()},ref:function(){return Yt}}};Jp()&&xe.registerPlugin($e);Rn.registerPlugin($e);const Oi=new My;Oi.background=new Ve(5672959);const _S=document.querySelector("canvas.webgl"),Di=new ln(75,window.innerWidth/window.innerHeight);Oi.add(Di);Di.position.z=10;const xS=new Zy(16777215,1.5);Oi.add(xS);const gl=new Sb;gl.load("/rifle.glb",function(a){Oi.add(a.scene),a.scene.scale.x=10,a.scene.scale.y=10,a.scene.scale.z=10,a.scene.position.z=-5,a.scene.rotation.y=-4.58,Rn.fromTo(a.scene.rotation,{y:-4.58,x:0},{y:-3.1,x:.3,scrollTrigger:{start:"400vh center",end:"600vh center",scrub:3}}),Rn.fromTo(a.scene.rotation,{x:.3},{x:.6,scrollTrigger:{start:"600vh center",end:"650vh center",scrub:3}}),Rn.fromTo(Di.rotation,{x:.3},{x:.6,scrollTrigger:{start:"650vh center",end:"700vh center",scrub:3}}),Rn.fromTo(Di.position,{x:0},{x:1,scrollTrigger:{start:"650vh center",end:"700vh center",scrub:3}}),Rn.fromTo(Di.position,{z:0},{z:-9,scrollTrigger:{start:"700vh center",end:"1000vh center",scrub:6}})});gl.load("/bull.glb",function(a){Oi.add(a.scene),a.scene.scale.set(.4,.4,.4),a.scene.position.z=-8,a.scene.position.y=3,a.scene.position.x=-.2,a.scene.rotation.y=-55,a.scene.rotation.z=-95.55,a.scene.rotation.x=2,Rn.fromTo(a.scene.scale,{z:0,y:0,x:0},{z:0,y:0,x:0,scrollTrigger:{start:"0vh center",end:"750vh center"}}),Rn.fromTo(a.scene.scale,{z:.4,y:.4,x:.4},{z:.4,y:.4,x:.4,scrollTrigger:{start:"750vh center",end:"850vh center",scrub:3}}),Rn.fromTo(a.scene.position,{z:-8,y:3},{z:-10,y:4.7,scrollTrigger:{start:"750vh center",end:"850vh center",scrub:6}})});gl.load("/wizard_room.glb",function(a){Oi.add(a.scene),a.scene.position.z=-15,a.scene.position.y=4,a.scene.position.x=-1,a.scene.rotation.x=-18,Rn.fromTo(a.scene.scale,{z:0,y:0,x:0},{z:1,y:1,x:1,scrollTrigger:{scrub:3,start:"820vh center",end:"1500vh center"}})});gl.load("wizard.glb",function(a){Oi.add(a.scene),a.scene.scale.set(.9,.9,.9),a.scene.position.z=8,a.scene.position.y=-19,a.scene.position.x=15,a.scene.rotation.x=-18.2,a.scene.rotation.y=-1.45,Rn.fromTo(Di.rotation,{y:0},{y:-2,scrollTrigger:{start:"1500vh center",end:"1700vh center",scrub:6}}),Rn.fromTo(Di.position,{x:1},{x:13,scrollTrigger:{start:"1700vh center",end:"1900vh center",scrub:6}})});window.onresize=function(){_l.setSize(window.innerWidth,window.innerHeight)};const _l=new Rd({canvas:_S});_l.setSize(window.innerWidth,window.innerHeight);_l.render(Oi,Di);const vS=new Qy,um=()=>{vS.getElapsedTime(),_l.render(Oi,Di),window.requestAnimationFrame(um)};um();const _c=document.querySelector("h1 span"),id=["Web<D>eveloppers","Art","The Future","Everything"];let Na=0,ro=0,so=!1;const Ya=()=>{const a=id[Na],e=a.substring(0,ro);_c.textContent=e,_c.classList.add("stop-blinking"),!so&&ro<a.length?(ro++,setTimeout(Ya,200)):so&&ro>0?(ro--,setTimeout(Ya,100)):(so=!so,_c.classList.remove("stop-blinking"),Na=so?Na:(Na+1)%id.length,setTimeout(Ya,1200))};Ya();document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelectorAll("section"),e=document.querySelectorAll("nav a");function t(){let n="";a.forEach(i=>{const r=i.offsetTop-100;window.scrollY>=r&&(n=i.getAttribute("id"))}),e.forEach(i=>{i.classList.remove("active"),i.getAttribute("href").includes(n)&&i.classList.add("active")})}window.addEventListener("scroll",t)});
//# sourceMappingURL=index-538ff32f.js.map
