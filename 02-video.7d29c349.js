function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("i5zXd"),l=r("9OeKo");const d=document.getElementById("vimeo-player"),a=new(0,i.default)(d);a.on("timeupdate",e(l)((e=>{localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));let u=localStorage.getItem("videoplayer-current-time");a.setCurrentTime(u).then((function(e){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.7d29c349.js.map
