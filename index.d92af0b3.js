var e=document.querySelector(".spider"),t=document.querySelector(".wall"),c=t.offsetTop,o=t.offsetLeft,n=e.offsetWidth/2,f=e.offsetHeight/2;document.addEventListener("click",function(t){if(t.target.closest(".wall")){var l=t.clientX-o-f,s=t.clientY-c-n;e.style.cssText="\n    top: ".concat(s,"px;\n    left: ").concat(l,"px;\n    ")}});
//# sourceMappingURL=index.d92af0b3.js.map
