var toastButtons=document.querySelectorAll('kol-button[_label="Toast starten"]');toastButtons.forEach((t=>{console.log(t),t._on={onClick:()=>{t.setAttribute("_disabled","true"),console.log("Toast");const e=document.createElement("kol-toast");e.setAttribute("_heading","Ich bin ein Toast!"),e.setAttribute("_level","3"),e.setAttribute("_show-duration","10000"),e.setAttribute("_type","info"),e.innerText="Ich werde in 10 Sekunden automatisch wieder ausgeblendet.",document.body.appendChild(e),setTimeout((()=>{t.removeAttribute("_disabled")}),1e4)}}}));