


// /*
// * Javascript to show and hide cookie banner using localstorage
// */

// function showCookieBanner(){
//     let cookieBanner = document.getElementById("cookie-banner");
//     cookieBanner.style.display = "block";
// }


// function hideCookieBanner(){
//     localStorage.setItem("isCookieAccepted", "yes");

//     let cookieBanner = document.getElementById("cookie-banner");
//     cookieBanner.style.display = "none";
// }

// function initializeCookieBanner(){
//     let isCookieAccepted = localStorage.getItem("isCookieAccepted");
//     if(isCookieAccepted === null)
//     {
//         localStorage.setItem("isCookieAccepted", "no");
//         showCookieBanner();
//     }
//     if(isCookieAccepted === "no"){
//         showCookieBanner();
//     }
// }

// // Assigning values to window object
// window.onload = initializeCookieBanner();
// window.hideCookieBanner = hideCookieBanner;