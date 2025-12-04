import{a as l,S as c,i}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const u="53497690-592ac66f2c7c0c491717e710e",d=t=>{const s=`https://pixabay.com/api/?key=${u}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`;return l.get(s).then(r=>r.data)},m=t=>{const s=document.querySelector(".gallery"),r=t.map(e=>`
        <li>
            <a href="${e.largeImageURL}">
                <img src="${e.webformatURL}" alt="${e.tags}" />
            </a>
            <ul class="description">
            <li><span>Likes:</span> ${e.likes}</li>
            <li><span>Views:</span> ${e.views}</li>
            <li><span>Comments:</span> ${e.comments}</li>
            <li><span>Downloads:</span> ${e.downloads}</li>
            </ul>
        </li>
    `).join("");s.insertAdjacentHTML("beforeend",r),new c(".gallery a").refresh()},f=()=>{const t=document.querySelector(".gallery");t.innerHTML=""},p=()=>{document.querySelector(".loader").classList.remove("hidden")},y=()=>{document.querySelector(".loader").classList.add("hidden")},h=document.querySelector(".form");document.querySelector("input");h.addEventListener("submit",async t=>{t.preventDefault(),f(),p();const s=t.currentTarget.elements["search-text"].value.trim();try{const r=await d(s);if(!r.hits||r.hits.length===0){i.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(r.hits)}catch(r){console.error(r),i.error({message:"Something went wrong, please try again later!"})}finally{y()}});
//# sourceMappingURL=index.js.map
