'use strict';$(document).ready(function () {
  SimpleJekyllSearch({
    searchInput: document.getElementById('searchInput'),
    resultsContainer: document.getElementById('resultsContainer'),
    json: base_url + 'search.json',
    // searchResultTemplate: '<li class="search__item"><a href="{url}" class="search__link"><img src="{image}" alt="{title}"> <span>{title}<small>{category}</small></span></a></li>'
    searchResultTemplate: '<article class="toolsCard">\n        <a class="toolsCard__inner" href="{url}" target="_blank" title="{title}">\n          <figure class="toolsCard__figure" style="background-image: url(\'{image}\')">\n            <img class="toolsCard__image" src="{image}" alt="{title}">\n          </figure>\n          <header class="toolsCard__heading">\n            <h2 class="toolsCard__title" title="{title}">{title}</h2>\n            <p class="toolsCard__desc">{description}</p>\n          </header>\n          <footer class="toolsCard__footer">\n            <div class="toolsCard__user">\n              <img src="{userImage}" width="36" height="36" alt="">\n              <span>\n                <small>Enviado por </small>\n                <strong>@{user}</strong>\n              </span>\n            </div>\n            <div class="toolsCard__link">\n              <svg class="feather feather-external-link" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewbox="0 0 24 24" fill="none" stroke="#6FA1E8" stroke-width="2"\n              stroke-linecap="round" stroke-linejoin="round">\n                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>\n                <polyline points="15 3 21 3 21 9"></polyline>\n                <line x1="10" y1="14" x2="21" y2="3"></line>\n              </svg>\n            </div>\n          </footer>\n        </a>\n      </article>' });




























});

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('sw.js')
//     .then(registration => {
//       console.log('offline worker registered!')
//     })
// }
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlNpbXBsZUpla3lsbFNlYXJjaCIsInNlYXJjaElucHV0IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXN1bHRzQ29udGFpbmVyIiwianNvbiIsImJhc2VfdXJsIiwic2VhcmNoUmVzdWx0VGVtcGxhdGUiXSwibWFwcGluZ3MiOiJhQUFBQSxFQUFBQyxRQUFBLEVBQUFDLEtBQUEsQ0FBQSxZQUFBO0FBQ0FDLHFCQUFBO0FBQ0FDLGlCQUFBSCxTQUFBSSxjQUFBLENBQUEsYUFBQSxDQURBO0FBRUFDLHNCQUFBTCxTQUFBSSxjQUFBLENBQUEsa0JBQUEsQ0FGQTtBQUdBRSxVQUFBQyxRQUFBLGdCQUhBO0FBSUE7QUFDQUMsbTVDQUxBLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBLENBbkNBOztBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICBTaW1wbGVKZWt5bGxTZWFyY2goe1xuICAgIHNlYXJjaElucHV0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoSW5wdXQnKSxcbiAgICByZXN1bHRzQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0c0NvbnRhaW5lcicpLFxuICAgIGpzb246IGAke2Jhc2VfdXJsfXNlYXJjaC5qc29uYCxcbiAgICAvLyBzZWFyY2hSZXN1bHRUZW1wbGF0ZTogJzxsaSBjbGFzcz1cInNlYXJjaF9faXRlbVwiPjxhIGhyZWY9XCJ7dXJsfVwiIGNsYXNzPVwic2VhcmNoX19saW5rXCI+PGltZyBzcmM9XCJ7aW1hZ2V9XCIgYWx0PVwie3RpdGxlfVwiPiA8c3Bhbj57dGl0bGV9PHNtYWxsPntjYXRlZ29yeX08L3NtYWxsPjwvc3Bhbj48L2E+PC9saT4nXG4gICAgc2VhcmNoUmVzdWx0VGVtcGxhdGU6IGA8YXJ0aWNsZSBjbGFzcz1cInRvb2xzQ2FyZFwiPlxuICAgICAgICA8YSBjbGFzcz1cInRvb2xzQ2FyZF9faW5uZXJcIiBocmVmPVwie3VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cInt0aXRsZX1cIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwidG9vbHNDYXJkX19maWd1cmVcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgne2ltYWdlfScpXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwidG9vbHNDYXJkX19pbWFnZVwiIHNyYz1cIntpbWFnZX1cIiBhbHQ9XCJ7dGl0bGV9XCI+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPGhlYWRlciBjbGFzcz1cInRvb2xzQ2FyZF9faGVhZGluZ1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwidG9vbHNDYXJkX190aXRsZVwiIHRpdGxlPVwie3RpdGxlfVwiPnt0aXRsZX08L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b29sc0NhcmRfX2Rlc2NcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJ0b29sc0NhcmRfX2Zvb3RlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xzQ2FyZF9fdXNlclwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cInt1c2VySW1hZ2V9XCIgd2lkdGg9XCIzNlwiIGhlaWdodD1cIjM2XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxzbWFsbD5FbnZpYWRvIHBvciA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QHt1c2VyfTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sc0NhcmRfX2xpbmtcIj5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1leHRlcm5hbC1saW5rXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjdcIiBoZWlnaHQ9XCIyN1wiIHZpZXdib3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiM2RkExRThcIiBzdHJva2Utd2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOCAxM3Y2YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjhhMiAyIDAgMCAxIDItMmg2XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxNSAzIDIxIDMgMjEgOVwiPjwvcG9seWxpbmU+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIxMFwiIHkxPVwiMTRcIiB4Mj1cIjIxXCIgeTI9XCIzXCI+PC9saW5lPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2E+XG4gICAgICA8L2FydGljbGU+YFxuICB9KVxufSlcblxuLy8gaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbi8vICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3N3LmpzJylcbi8vICAgICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuLy8gICAgICAgY29uc29sZS5sb2coJ29mZmxpbmUgd29ya2VyIHJlZ2lzdGVyZWQhJylcbi8vICAgICB9KVxuLy8gfVxuIl19
