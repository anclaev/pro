(this.webpackJsonpanclaev=this.webpackJsonpanclaev||[]).push([[0],{37:function(n,t,e){"use strict";e.r(t);var r,i,o,a,l,s,c,f,d,u,p,b,h,m,C,j,g,x,v,O,w,y,k=e(0),E=e(11),L=e(12),M=e(16),V=e(8),P=e(17),Z=e(6),z="APP_SELECT_LANG",S="APP_CHANGE_CURSOR",H={lang:"ru"===window.navigator.language.substr(0,2)?"ru":"en",cursor:!1},R=function(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case z:return Object(Z.a)(Object(Z.a)({},t),{},{lang:null!==(n=e.lang)&&void 0!==n?n:"ru"});case S:return Object(Z.a)(Object(Z.a)({},t),{},{cursor:!t.cursor});default:return t}},I=Object(V.combineReducers)({app:R}),B=Object(V.createStore)(I,Object(M.composeWithDevTools)(Object(V.applyMiddleware)(P.a))),N=e(14),_=e(5),D=e(3),A=e(4),W=Object(A.b)(r||(r=Object(D.a)(["\n  @font-face {\n    font-family: 'Bebas Neue';\n    src: url('fonts/Bebas.eot');\n    src: url('fonts/Bebas.eot?#iefix') format('embedded-opentype'),\n      url('media/fonts/Bebas.woff2') format('woff2'),\n      url('media/fonts/Bebas.woff') format('woff'),\n      url('media/fonts/Bebas.ttf') format('truetype'),\n      url('media/fonts/Bebas.svg#BebasNeueCyrillic') format('svg');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: 'Roboto Condensed';\n    src: url('media/fonts/Roboto.eot');\n    src: url('media/fonts/Roboto.eot?#iefix') format('embedded-opentype'),\n      url('media/fonts/Roboto.woff2') format('woff2'),\n      url('media/fonts/Roboto.woff') format('woff'),\n      url('media/fonts/Roboto.ttf') format('truetype'),\n      url('media/fonts/Roboto.svg#Roboto-Condensed') format('svg');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n"]))),J=Object(A.a)(i||(i=Object(D.a)(["\n    ","\n\n    * {\n        box-sizing: border-box;\n        overflow-x: hidden;\n\n        &::selection {\n            color: #fff;\n            background: #111;\n        }\n    }\n\n    html {\n        font-size: 15px;\n    }\n\n    body {\n        margin: 0;\n        height: 1em;\n        min-height: 100vh;\n        font-family: 'Roboto Condensed';   \n        background: #111;\n        color: #fff;\n    }\n\n    .logo {\n        height: inherit;\n\n        & svg {\n            height: inherit;\n        }\n\n        path {\n            mix-blend-mode: difference;\n        }\n    }\n\n    input, button {\n        padding: 0;\n        cursor: pointer;\n        appearance: none;\n        border: none;\n        background: transparent;\n        color: inherit;\n        font-family: inherit;\n        font-weight: inherit;\n        font-size: inherit;\n    }\n\n    input:focus {        \n        outline: none;\n    }\n\n\n    h1 {\n        font: inherit;\n        margin: 0;\n    }\n\n    ::-webkit-scrollbar {\n    width: 7px;\n    background: #fff;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background: #111;\n        opacity: 0.5;\n    }\n\n    @media (max-width: 1250px) {\n        html {\n            font-size: 14px;\n        }\n    }\n\n    @media (max-width: 1120px) {\n        html {\n            font-size: 13px;\n        }\n    }\n\n    @media (max-width: 1040px) {\n        html {\n            font-size: 12px;\n        }\n    }\n\n    @media (max-width: 992px) {\n        html {\n            font-size: 24px;\n        }\n    }\n\n    @media (max-width: 320px) {\n        html {\n            font-size: 20px;\n        }\n    }\n"])),W),T=e(21),X=e(1),Y=function(n){return Object(X.jsxs)(T.a,{children:[Object(X.jsx)("html",{lang:n.lang}),Object(X.jsx)("meta",{name:"description",content:n.description}),Object(X.jsx)("meta",{name:"keywords",content:n.keywords}),Object(X.jsx)("meta",{property:"og:description",content:n.og}),Object(X.jsx)("meta",{property:"og:locale",content:n.lang?n.lang+"_"+n.lang.toUpperCase():void 0}),Object(X.jsx)("title",{children:n.title})]})},F=A.c.div(o||(o=Object(D.a)(["\n  position: fixed;\n  top: 0;\n  left 0;\n  width: 5px;\n  height: 5px;\n  z-index: 100;\n  mix-blend-mode: difference;\n  border-radius: 100px;\n  border: 1px solid hsla(0,0%,100%,.4);\n  background: #fff;\n  mix-blend-mode: difference;\n  transition: width .3s, height .3s, background .3s;\n  pointer-events: none;\n\n  &[data-status=true] {\n    width: 50px;\n    height: 50px;\n    background: transparent;\n  }\n"]))),G=A.c.div(a||(a=Object(D.a)(['\n  position: fixed;\n  overflow: hidden;\n  z-index: -7;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n\n  & > video,\n  &:after {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  & > video {\n    width: 100%;\n    height: 100%;\n  }\n\n  &:after {\n    content: "";\n    background: #000;\n    opacity: ',";\n    bottom: 0;\n    right: 0;\n  }\n\n  @media (min-aspect-ratio: 16/9) {\n    & > video {\n      height: 300%;\n      top: -100%;\n    }\n  }\n\n  @media (max-aspect-ratio: 16/9) {\n    & > video {\n      width: 300%;\n      left: -100%;\n    }\n  }\n\n  @supports (object-fit: cover) {\n    & > video {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n"])),(function(n){return n.transparency})),U=A.c.button(l||(l=Object(D.a)(["\n  position: absolute;\n  overflow: visible;\n  padding: 10px 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 7;\n"]))),q=A.c.div(s||(s=Object(D.a)(["\n  position: relative;\n  overflow: visible;\n\n  & > span {\n    display: block;\n    width: 50px;\n    height: 1px;\n    background: ",";\n    transition: 0.2s;\n\n    ","\n\n    &:nth-child(2) {\n      margin: ",";\n      ","\n    }\n  }\n"])),(function(n){return n.status?"#000":"#fff"}),(function(n){return n.status?Object(A.b)(c||(c=Object(D.a)(["\n            &:first-child {\n              transform: rotate(45deg) translateX(1px);\n            }\n\n            &:last-child {\n              transform: rotate(-45deg) translateX(1px);\n            }\n          "]))):""}),(function(n){return n.status?"0":"7px 0"}),(function(n){return n.status?Object(A.b)(f||(f=Object(D.a)(["\n              opacity: 0;\n            "]))):""})),K=A.c.a(d||(d=Object(D.a)(["\n  padding: 35px 30px;\n  overflow: visible;\n  position: relative;\n\n  &:hover {\n    & svg {\n      width: 25px;\n      height: 25px;\n\n      path {\n        opacity: 0.7;\n      }\n    }\n  }\n\n  & > svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: 0.2s;\n    width: 18px;\n    height: 18px;\n\n    & path {\n      fill: #fff;\n      mix-blend-mode: difference;\n      transition: 0.2s;\n    }\n  }\n"]))),Q=A.c.div(u||(u=Object(D.a)(['\n  margin-bottom: 1.167rem;\n  max-width: 60%;\n  white-space: pre-line;\n\n  font-family: "Bebas Neue";\n  text-transform: uppercase;\n  font-size: 3.75rem;\n  line-height: 1.111111111111111;\n  letter-spacing: 0.03rem;\n\n  @media (max-width: 992px) {\n    font-size: 1.25rem;\n    margin-bottom: 0.667rem;\n    max-width: 100%;\n    line-height: 1.176470588235294;\n  }\n']))),$=A.c.div(p||(p=Object(D.a)(["\n  margin-bottom: 1rem;\n  font-size: 1rem;\n  line-height: 1.416666666666667;\n\n  @media (max-width: 992px) {\n    font-size: 0.667rem;\n    margin-bottom: 0.667rem;\n  }\n"]))),nn=function(n){return Object(X.jsx)(F,{style:{transform:"translate(calc(".concat(n.x,"px - 50%), calc(").concat(n.y,"px - 50%))")},"data-status":n.status})},tn=function(n){var t=n.autoplay,e=void 0===t||t,r=n.loop,i=void 0===r||r,o=n.muted,a=void 0===o||o,l=n.opacity;return Object(X.jsx)(G,{transparency:null!==l&&void 0!==l?l:"0.2",children:Object(X.jsx)("video",{autoPlay:e,loop:i,muted:a,children:Object(X.jsx)("source",{src:"media/rain.mp4",type:"video/mp4"})})})},en=e(24),rn=function(){return Object(X.jsx)(en.YMInitializer,{accounts:[82985923],options:{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0}})},on=A.c.div(b||(b=Object(D.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column-reverse;\n\n  left: calc(3.333rem - 18px);\n  bottom: calc(2.917rem - 25px);\n\n  z-index: 7;\n\n  & path {\n    fill: "," !important;\n  }\n\n  @media (max-width: 992px) {\n    display: none;\n  }\n"])),(function(n){return n.status?"#000":"#fff"})),an=A.c.header(h||(h=Object(D.a)(["\n  position: absolute;\n  left: 3.333rem;\n  top: 2.917rem;\n  right: 3.333rem;\n  height: 18px;\n  overflow: visible;\n  display: flex;\n\n  @media (max-width: 992px) {\n    left: 1.25rem;\n    top: 1.667rem;\n    right: 1.25rem;\n  }\n\n  & svg {\n    mix-blend-mode: difference;\n    z-index: 7;\n  }\n"]))),ln=A.c.div(m||(m=Object(D.a)(["\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 7.083rem 12.5%;\n\n  @media (max-width: 992px) {\n    padding: 1.667rem 1.25rem;\n  }\n"]))),sn=A.c.div(C||(C=Object(D.a)(["\n  position: fixed;\n  z-index: 6;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: ",";\n\n  transition: 0.7s;\n  background: #fff;\n  color: #000;\n\n  &,\n  & > div {\n    overflow: hidden;\n  }\n\n  & > div {\n    width: 100%;\n    height: 100%;\n    padding: 7rem 12.5%;\n  }\n\n  @media (max-width: 992px) {\n    &,\n    & > div {\n      display: flex;\n      flex-direction: column;\n    }\n\n    & > div {\n      flex: 1 1;\n      justify-content: center;\n      padding: 1.6rem 1.25rem;\n    }\n  }\n"])),(function(n){return n.status?"100%":0})),cn=["title","titleId"];function fn(){return(fn=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function dn(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function un(n,t){var e=n.title,r=n.titleId,i=dn(n,cn);return k.createElement("svg",fn({viewBox:"0 0 111 22",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),e?k.createElement("title",{id:r},e):null,j||(j=k.createElement("path",{d:"M14.336 21.344H10.272V19.744C9.16267 21.0667 7.53067 21.728 5.376 21.728C3.98933 21.728 2.74133 21.28 1.632 20.384C0.544 19.4667 0 18.208 0 16.608C0 14.944 0.533333 13.696 1.6 12.864C2.688 12.032 3.94667 11.616 5.376 11.616C7.57333 11.616 9.20533 12.2453 10.272 13.504V11.424C10.272 10.6347 9.96267 10.0053 9.344 9.536C8.72533 9.06667 7.904 8.832 6.88 8.832C5.19467 8.832 3.69067 9.44 2.368 10.656L0.832 7.936C2.66667 6.31467 4.91733 5.504 7.584 5.504C9.568 5.504 11.1893 5.96267 12.448 6.88C13.7067 7.79733 14.336 9.29067 14.336 11.36V21.344ZM7.008 18.976C8.52267 18.976 9.61067 18.528 10.272 17.632V15.712C9.61067 14.816 8.52267 14.368 7.008 14.368C6.176 14.368 5.48267 14.5813 4.928 15.008C4.37333 15.4133 4.096 15.9787 4.096 16.704C4.096 17.408 4.37333 17.9627 4.928 18.368C5.48267 18.7733 6.176 18.976 7.008 18.976Z",fill:"white"})),g||(g=k.createElement("path",{d:"M32.863 21.344H28.799V12C28.799 10.08 27.8497 9.12 25.951 9.12C24.479 9.12 23.3057 9.728 22.431 10.944V21.344H18.367V5.888H22.431V7.904C23.775 6.304 25.5777 5.504 27.839 5.504C29.503 5.504 30.751 5.94133 31.583 6.816C32.4363 7.69067 32.863 8.896 32.863 10.432V21.344Z",fill:"white"})),x||(x=k.createElement("path",{d:"M44.0983 21.728C41.7089 21.728 39.7463 20.9707 38.2103 19.456C36.6743 17.9413 35.9062 15.9893 35.9062 13.6C35.9062 11.232 36.6743 9.29067 38.2103 7.776C39.7463 6.26133 41.7089 5.504 44.0983 5.504C46.8289 5.504 48.8663 6.432 50.2103 8.288L47.5543 10.784C46.8076 9.67467 45.7196 9.12 44.2903 9.12C43.0529 9.12 42.0396 9.536 41.2503 10.368C40.4823 11.1787 40.0983 12.256 40.0983 13.6C40.0983 14.944 40.4823 16.032 41.2503 16.864C42.0396 17.696 43.0529 18.112 44.2903 18.112C45.6769 18.112 46.7649 17.5573 47.5543 16.448L50.2103 18.912C48.8663 20.7893 46.8289 21.728 44.0983 21.728Z",fill:"white"})),v||(v=k.createElement("path",{d:"M56.931 21.344H52.867V0H56.931V21.344Z",fill:"white"})),O||(O=k.createElement("path",{d:"M74.3047 21.344H70.2407V19.744C69.1314 21.0667 67.4994 21.728 65.3447 21.728C63.9581 21.728 62.7101 21.28 61.6007 20.384C60.5127 19.4667 59.9688 18.208 59.9688 16.608C59.9688 14.944 60.5021 13.696 61.5688 12.864C62.6568 12.032 63.9154 11.616 65.3447 11.616C67.5421 11.616 69.1741 12.2453 70.2407 13.504V11.424C70.2407 10.6347 69.9314 10.0053 69.3127 9.536C68.6941 9.06667 67.8727 8.832 66.8487 8.832C65.1634 8.832 63.6594 9.44 62.3368 10.656L60.8008 7.936C62.6354 6.31467 64.8861 5.504 67.5527 5.504C69.5368 5.504 71.1581 5.96267 72.4167 6.88C73.6754 7.79733 74.3047 9.29067 74.3047 11.36V21.344ZM66.9767 18.976C68.4914 18.976 69.5794 18.528 70.2407 17.632V15.712C69.5794 14.816 68.4914 14.368 66.9767 14.368C66.1447 14.368 65.4514 14.5813 64.8968 15.008C64.3421 15.4133 64.0648 15.9787 64.0648 16.704C64.0648 17.408 64.3421 17.9627 64.8968 18.368C65.4514 18.7733 66.1447 18.976 66.9767 18.976Z",fill:"white"})),w||(w=k.createElement("path",{d:"M85.5997 21.728C83.2104 21.728 81.2371 20.9813 79.6797 19.488C78.1224 17.9947 77.3438 16.032 77.3438 13.6C77.3438 11.3173 78.0904 9.39734 79.5837 7.84C81.0984 6.28267 83.0184 5.504 85.3438 5.504C87.6478 5.504 89.5144 6.29333 90.9437 7.872C92.3731 9.42933 93.0878 11.4773 93.0878 14.016V14.912H81.5997C81.7277 15.936 82.1864 16.7893 82.9757 17.472C83.7651 18.1547 84.7891 18.496 86.0477 18.496C86.7304 18.496 87.4664 18.3573 88.2558 18.08C89.0664 17.8027 89.7064 17.4293 90.1758 16.96L91.9678 19.584C90.4104 21.0133 88.2878 21.728 85.5997 21.728ZM89.1517 12.16C89.0877 11.2853 88.7357 10.496 88.0957 9.792C87.4771 9.088 86.5598 8.736 85.3438 8.736C84.1917 8.736 83.2957 9.088 82.6557 9.792C82.0157 10.4747 81.6424 11.264 81.5358 12.16H89.1517Z",fill:"white"})),y||(y=k.createElement("path",{d:"M104.407 21.344H100.023L93.8152 5.888H98.1673L102.199 16.64L106.231 5.888H110.615L104.407 21.344Z",fill:"white"})))}var pn,bn=k.forwardRef(un),hn=(e.p,function(){return Object(X.jsx)(bn,{className:"logo"})}),mn=function(n){var t=n.status,e=n.setStatus;return Object(X.jsx)(U,{className:"cursor",onClick:function(){return e(!t)},children:Object(X.jsxs)(q,{className:"cursor",status:t,children:[Object(X.jsx)("span",{className:"cursor"}),Object(X.jsx)("span",{className:"cursor"}),Object(X.jsx)("span",{className:"cursor"})]})})},Cn=function(n){return Object(X.jsxs)(an,{children:[Object(X.jsx)(hn,{}),Object(X.jsx)(mn,Object(Z.a)({},n))]})},jn=["title","titleId"];function gn(){return(gn=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function xn(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function vn(n,t){var e=n.title,r=n.titleId,i=xn(n,jn);return k.createElement("svg",gn({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),e?k.createElement("title",{id:r},e):null,pn||(pn=k.createElement("path",{d:"M16.5958 10.8567C16.2725 10.4483 16.365 10.2667 16.5958 9.90168C16.6 9.89751 19.2692 6.20917 19.5442 4.95834L19.5458 4.95751C19.6825 4.50167 19.5458 4.16667 18.885 4.16667H16.6983C16.1417 4.16667 15.885 4.45417 15.7475 4.77584C15.7475 4.77584 14.6342 7.44084 13.0592 9.16834C12.5508 9.66751 12.3158 9.82751 12.0383 9.82751C11.9017 9.82751 11.6892 9.66751 11.6892 9.21168V4.95751C11.6892 4.41084 11.5333 4.16667 11.0725 4.16667H7.63417C7.285 4.16667 7.0775 4.42167 7.0775 4.65917C7.0775 5.17751 7.865 5.29667 7.94667 6.75501V9.91918C7.94667 10.6125 7.82083 10.74 7.54167 10.74C6.79833 10.74 4.99417 8.06417 3.925 5.00167C3.70917 4.40751 3.49833 4.16751 2.9375 4.16751H0.75C0.125833 4.16751 0 4.45501 0 4.77667C0 5.34501 0.743333 8.17084 3.45667 11.9042C5.265 14.4525 7.81167 15.8333 10.1283 15.8333C11.5208 15.8333 11.6908 15.5267 11.6908 14.9992C11.6908 12.5642 11.565 12.3342 12.2625 12.3342C12.5858 12.3342 13.1425 12.4942 14.4425 13.7233C15.9283 15.1808 16.1725 15.8333 17.0042 15.8333H19.1908C19.8142 15.8333 20.13 15.5267 19.9483 14.9217C19.5325 13.6492 16.7225 11.0317 16.5958 10.8567Z",fill:"white"})))}var On,wn=k.forwardRef(vn),yn=(e.p,["title","titleId"]);function kn(){return(kn=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function En(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function Ln(n,t){var e=n.title,r=n.titleId,i=En(n,yn);return k.createElement("svg",kn({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),e?k.createElement("title",{id:r},e):null,On||(On=k.createElement("path",{d:"M10 0C4.50394 0 0 4.543 0 10.0391C0 15.5032 4.46289 20 10 20C15.5302 20 20 15.5099 20 10.0391C20 4.543 15.4961 0 10 0ZM11.7578 18.6523C11.1954 18.7695 10.5977 18.8281 10 18.8281C9.40231 18.8281 8.80463 18.7695 8.24219 18.6523V15.9102C8.24219 15.2539 8.41797 15.0195 8.65234 14.7031C8.77167 14.5667 8.84369 14.4443 9.37881 13.6368L8.47656 13.4961C6.15616 13.1563 5.24216 11.9492 4.87885 11.0117C4.4101 9.75784 4.65622 8.18741 5.50003 7.19147C5.62897 7.03903 5.73441 6.78116 5.64072 6.51169C5.46478 5.9726 5.48828 5.11719 5.60547 4.78897C6.22681 4.87778 6.86569 5.32288 7.39853 5.64453C7.64404 5.78781 7.77283 5.74997 7.89062 5.76172C8.31879 5.67261 8.98666 5.457 10.0117 5.457C10.6445 5.457 11.3126 5.55069 11.9688 5.73822C12.0862 5.73547 12.2748 5.83527 12.6016 5.64453C13.1586 5.30518 13.7758 4.87534 14.3945 4.78897C14.5117 5.11719 14.5352 5.9726 14.3594 6.51169C14.2656 6.78116 14.371 7.03903 14.5001 7.19147C15.3438 8.18756 15.5899 9.75784 15.1212 11.0117C14.7578 11.9492 13.8438 13.1563 11.5234 13.4961L10.6212 13.6368C11.1743 14.4714 11.2326 14.5715 11.3478 14.7031C11.582 15.0195 11.7578 15.2539 11.7578 15.9102V18.6523ZM12.9297 18.3125V15.9102C12.9297 15.2422 12.789 14.7969 12.6015 14.4687C14.3828 13.9883 15.6485 12.9335 16.2109 11.4218C16.8086 9.82819 16.5392 7.92969 15.5429 6.61713C15.7188 5.83206 15.7188 4.57809 15.2969 3.99216C15.1094 3.73444 14.8515 3.59375 14.5235 3.59375C14.5117 3.59375 14.5117 3.59375 14.5117 3.59375C13.6031 3.64288 12.8879 4.10049 12.1211 4.56635C11.418 4.37881 10.7031 4.28513 9.98825 4.28513C9.26178 4.28513 8.53516 4.39056 7.89078 4.56635C7.08359 4.07959 6.37527 3.64166 5.44144 3.59375C5.14847 3.59375 4.89059 3.73444 4.70306 3.99216C4.28131 4.57809 4.28131 5.83206 4.45709 6.61713C3.46085 7.92969 3.19138 9.83978 3.78906 11.4218C4.3515 12.9335 5.61722 13.9883 7.39853 14.4687C7.25311 14.7231 7.13806 15.0513 7.09274 15.4955C6.73294 15.6195 6.4209 15.6599 6.13068 15.5746C5.82458 15.4842 5.58609 15.2798 5.37888 14.9313C4.91348 14.1495 4.12079 13.5112 3.21823 13.5942L3.32123 14.7615C3.73917 14.7232 4.15512 15.1654 4.37119 15.5299C4.72763 16.1302 5.20782 16.5239 5.7988 16.6985C6.23749 16.8277 6.63849 16.8246 7.07031 16.7325V18.3125C3.66013 17.1172 1.17188 13.8594 1.17188 10.0391C1.17188 5.18753 5.14847 1.17188 10 1.17188C14.8515 1.17188 18.8281 5.18753 18.8281 10.0391C18.8281 13.8594 16.3399 17.1172 12.9297 18.3125Z",fill:"white"})))}var Mn,Vn,Pn,Zn=k.forwardRef(Ln),zn=(e.p,["title","titleId"]);function Sn(){return(Sn=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function Hn(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function Rn(n,t){var e=n.title,r=n.titleId,i=Hn(n,zn);return k.createElement("svg",Sn({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),e?k.createElement("title",{id:r},e):null,Mn||(Mn=k.createElement("path",{d:"M19.9804 5.88005C19.9335 4.81738 19.7617 4.0868 19.5155 3.45374C19.2616 2.78176 18.8709 2.18014 18.359 1.68002C17.8589 1.1721 17.2533 0.777435 16.5891 0.527447C15.9524 0.281274 15.2256 0.109427 14.1629 0.0625732C13.0923 0.0117516 12.7524 0 10.037 0C7.32167 0 6.98179 0.0117516 5.91515 0.0586052C4.85247 0.105459 4.12189 0.277459 3.48898 0.523479C2.81686 0.777435 2.21524 1.16814 1.71511 1.68002C1.2072 2.18014 0.812682 2.78573 0.562542 3.44992C0.31637 4.0868 0.144522 4.81341 0.0976684 5.87609C0.0468468 6.9467 0.0350952 7.28658 0.0350952 10.002C0.0350952 12.7173 0.0468468 13.0572 0.0937004 14.1239C0.140554 15.1865 0.312554 15.9171 0.558726 16.5502C0.812682 17.2221 1.2072 17.8238 1.71511 18.3239C2.21524 18.8318 2.82082 19.2265 3.48502 19.4765C4.12189 19.7226 4.8485 19.8945 5.91133 19.9413C6.97782 19.9883 7.31786 19.9999 10.0332 19.9999C12.7486 19.9999 13.0885 19.9883 14.1551 19.9413C15.2178 19.8945 15.9484 19.7226 16.5813 19.4765C17.9254 18.9568 18.9881 17.8941 19.5077 16.5502C19.7538 15.9133 19.9258 15.1865 19.9726 14.1239C20.0195 13.0572 20.0312 12.7173 20.0312 10.002C20.0312 7.28658 20.0272 6.9467 19.9804 5.88005ZM18.1793 14.0457C18.1363 15.0225 17.9722 15.5499 17.8355 15.9015C17.4994 16.7728 16.8079 17.4643 15.9366 17.8004C15.585 17.9372 15.0537 18.1012 14.0808 18.1441C13.0259 18.1911 12.7095 18.2027 10.041 18.2027C7.37249 18.2027 7.05215 18.1911 6.00107 18.1441C5.02432 18.1012 4.49687 17.9372 4.14524 17.8004C3.71165 17.6402 3.31698 17.3862 2.99664 17.0541C2.66454 16.7298 2.41059 16.3391 2.25034 15.9055C2.11359 15.5539 1.94953 15.0225 1.90665 14.0497C1.85964 12.9948 1.84804 12.6783 1.84804 10.0097C1.84804 7.34122 1.85964 7.02087 1.90665 5.96995C1.94953 4.99319 2.11359 4.46575 2.25034 4.11412C2.41059 3.68038 2.66454 3.28586 3.00061 2.96536C3.32477 2.63327 3.71547 2.37931 4.14921 2.21921C4.50084 2.08247 5.03225 1.9184 6.00504 1.87537C7.05993 1.82851 7.37646 1.81676 10.0448 1.81676C12.7173 1.81676 13.0337 1.82851 14.0848 1.87537C15.0615 1.9184 15.589 2.08247 15.9406 2.21921C16.3742 2.37931 16.7689 2.63327 17.0892 2.96536C17.4213 3.28967 17.6753 3.68038 17.8355 4.11412C17.9722 4.46575 18.1363 4.99701 18.1793 5.96995C18.2262 7.02484 18.238 7.34122 18.238 10.0097C18.238 12.6783 18.2262 12.9908 18.1793 14.0457Z",fill:"white"})),Vn||(Vn=k.createElement("path",{d:"M10.0371 4.86423C7.20068 4.86423 4.89935 7.1654 4.89935 10.0019C4.89935 12.8385 7.20068 15.1397 10.0371 15.1397C12.8736 15.1397 15.1748 12.8385 15.1748 10.0019C15.1748 7.1654 12.8736 4.86423 10.0371 4.86423ZM10.0371 13.3347C8.19696 13.3347 6.70436 11.8422 6.70436 10.0019C6.70436 8.16169 8.19696 6.66924 10.0371 6.66924C11.8773 6.66924 13.3698 8.16169 13.3698 10.0019C13.3698 11.8422 11.8773 13.3347 10.0371 13.3347Z",fill:"white"})),Pn||(Pn=k.createElement("path",{d:"M16.5775 4.66109C16.5775 5.32346 16.0405 5.86052 15.378 5.86052C14.7156 5.86052 14.1785 5.32346 14.1785 4.66109C14.1785 3.99858 14.7156 3.46167 15.378 3.46167C16.0405 3.46167 16.5775 3.99858 16.5775 4.66109Z",fill:"white"})))}var In,Bn=k.forwardRef(Rn),Nn=(e.p,["title","titleId"]);function _n(){return(_n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function Dn(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function An(n,t){var e=n.title,r=n.titleId,i=Dn(n,Nn);return k.createElement("svg",_n({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),e?k.createElement("title",{id:r},e):null,In||(In=k.createElement("path",{d:"M7.84747 12.6508L7.51663 17.3042C7.98997 17.3042 8.19497 17.1008 8.4408 16.8567L10.66 14.7358L15.2583 18.1033C16.1016 18.5733 16.6958 18.3258 16.9233 17.3275L19.9416 3.18416L19.9425 3.18332C20.21 1.93666 19.4916 1.44916 18.67 1.75499L0.928298 8.54749C-0.282535 9.01749 -0.264202 9.69249 0.722465 9.99832L5.2583 11.4092L15.7941 4.81666C16.29 4.48832 16.7408 4.66999 16.37 4.99832L7.84747 12.6508Z",fill:"white"})))}var Wn=k.forwardRef(An),Jn=(e.p,function(n){switch(n){case"vk":return Object(X.jsx)(wn,{});case"github":return Object(X.jsx)(Zn,{});case"insta":return Object(X.jsx)(Bn,{});case"telegram":return Object(X.jsx)(Wn,{});default:return Object(X.jsx)(wn,{})}}),Tn=function(n){return Object(X.jsx)(K,{href:n.link,target:"_blank",rel:"noreferrer",className:"cursor",children:Jn(n.id)})},Xn=function(n){var t=[];return n.map((function(n,e){t.push(Object(X.jsx)(Tn,{id:n.id,link:n.link},e))})),t},Yn=function(n){return Object(X.jsx)(on,{status:n.status,id:n.id,children:Xn(n.items)})},Fn=function(n){var t=n.status;return Object(X.jsx)(sn,{status:t,children:Object(X.jsx)("div",{children:Object(X.jsx)("div",{children:"\u041a\u043e\u043d\u0442\u0435\u043d\u0442"})})})},Gn=function(n){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Q,{children:n.title}),Object(X.jsx)($,{children:n.subtitle})]})},Un=function(){var n=Object(L.b)((function(n){return n.app})).lang,t=Object(k.useState)(!1),e=Object(N.a)(t,2),r=e[0],i=e[1],o=Object(k.useState)({x:0,y:0,status:!1}),a=Object(N.a)(o,2),l=a[0],s=a[1];return Object(X.jsxs)(ln,{onMouseMove:function(n){var t=!1;try{t=n.target.className.includes("cursor")}catch(n){t=!0}s({x:n.clientX,y:n.clientY,status:t})},children:[Object(X.jsx)(J,{}),Object(X.jsx)(Y,{lang:n,description:_[n].helmet.description,title:_[n].helmet.title,keywords:_[n].helmet.keywords,og:_[n].helmet.og}),Object(X.jsx)(Cn,{status:r,setStatus:function(n){return i(n)}}),Object(X.jsx)(Yn,{items:_.social,status:r}),Object(X.jsx)(Gn,{title:_[n].pages.home.title,subtitle:_[n].pages.home.subtitle}),Object(X.jsx)(Fn,{status:r}),Object(X.jsx)(nn,{x:l.x,y:l.y,status:l.status}),Object(X.jsx)(tn,{}),Object(X.jsx)(rn,{})]})};Object(E.render)(Object(X.jsx)(k.StrictMode,{children:Object(X.jsx)(L.a,{store:B,children:Object(X.jsx)(Un,{})})}),document.body)},5:function(n){n.exports=JSON.parse('{"ru":{"helmet":{"title":"\u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 | anclaev","description":"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043d\u044b\u0445 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439","og":"\u0412\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043d","keywords":"\u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430, \u0441\u0430\u0439\u0442\u044b, \u0432\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043d"},"pages":{"home":{"title":"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043d\u044b\u0445 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439","subtitle":"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434 & \u0432\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043d"}}},"en":{"helmet":{"title":"Web Development | anclaev","description":"Developing progressive web applications","og":"Web design","keywords":"web development, websites, web design"},"pages":{"home":{"title":"Developing progressive web applications","subtitle":"Frontend & Web Design"}}},"social":[{"id":"insta","link":"https://www.instagram.com/anclaev/"},{"id":"github","link":"https://github.com/anclaev"},{"id":"telegram","link":"https://t.me/anclaev"},{"id":"vk","link":"https://vk.com/anclaev"}]}')}},[[37,1,2]]]);
//# sourceMappingURL=main.7fd61609.chunk.js.map