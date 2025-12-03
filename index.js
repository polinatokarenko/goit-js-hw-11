import{a as i,S as l,i as c}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="53497690-592ac66f2c7c0c491717e710e",u=o=>{const s=`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;return i.get(s).then(t=>t.data)},m=o=>{const s=document.querySelector(".gallery"),t=o.map(e=>`
        <li>
            <a href="${e.largeImageURL}">
                <img src="${e.webformatURL}" alt="${e.tags}" />
            </a>
            <p>Likes: ${e.likes}</p>
            <p>Views: ${e.views}</p>
            <p>Comments: ${e.comments}</p>
            <p>Downloads: ${e.downloads}</p>
        </li>
    `).join("");s.insertAdjacentHTML("beforeend",t),new l(".gallery a").refresh()},f=()=>{document.querySelector(".loader").classList.remove("hidden")},p=()=>{document.querySelector(".loader").classList.add("hidden")},h=document.querySelector(".form");document.querySelector("input");h.addEventListener("submit",async o=>{o.preventDefault(),f();const s=o.currentTarget.elements["search-text"].value.trim();try{const t=await u(s);if(!t.hits||t.hits.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(t.hits)}catch(t){console.error(t),c.error({message:"Something went wrong, please try again later!"})}finally{p()}});
//# sourceMappingURL=index.js.map
