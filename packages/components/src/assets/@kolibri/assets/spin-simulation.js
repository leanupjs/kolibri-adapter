let selector='kol-button[_label="Aktion ausführen"]';document.querySelector(selector)._on={onClick:()=>{document.querySelector(selector).setAttribute("_disabled","true");var e=document.querySelectorAll("kol-spin");e.forEach((e=>{e.removeAttribute("style"),e.setAttribute("_show","true")}));let t=setTimeout((()=>{clearTimeout(t),e.forEach((e=>{e.removeAttribute("_show")})),document.querySelector(selector).removeAttribute("_disabled")}),7500)}};