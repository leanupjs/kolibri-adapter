var buttons=document.querySelectorAll("kol-button.not-used");buttons.forEach((t=>{t._on={onClick:()=>{alert(`Button "${t._label}" wurde geklickt.`)}}}));const toc=document.querySelector("kol-link-group#table-of-content"),toc_links=[],timeout=setTimeout((()=>{clearTimeout(timeout),document.querySelectorAll('div.row > div.col-12 > kol-heading[_level="2"]').forEach(((t,o)=>{"Ich bin eine h2-Überschrift"!==t.innerText&&(t.setAttribute("id",`heading-${o}`),t.setAttribute("tabindex","0"),toc_links.push({_label:t.innerText,_selector:`#heading-${o}`}))})),toc._links=toc_links,console.log(toc_links)}),5e3),toc_button=document.querySelector("kol-button#table-of-content-button");toc_button._on={onClick:()=>{null!==toc&&(window.scrollTo({behavior:"smooth",top:toc.getBoundingClientRect().top+window.pageYOffset-50}),toc.focus())}};