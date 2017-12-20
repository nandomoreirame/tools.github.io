$(document).ready(() => {
  SimpleJekyllSearch({
    searchInput: document.getElementById('searchInput'),
    resultsContainer: document.getElementById('resultsContainer'),
    json: `${baseUrl}search.json`,
    // searchResultTemplate: '<li class="search__item"><a href="{url}" class="search__link"><img src="{image}" alt="{title}"> <span>{title}<small>{category}</small></span></a></li>'
    searchResultTemplate: `<article class="toolsCard">
        <a class="toolsCard__inner" href="{url}" target="_blank" title="{title}">
          <figure class="toolsCard__figure" style="background-image: url('{image}')">
            <img class="toolsCard__image" src="{image}" alt="{title}">
          </figure>
          <header class="toolsCard__heading">
            <h2 class="toolsCard__title" title="{title}">{title}</h2>
            <p class="toolsCard__desc">{description}</p>
          </header>
          <footer class="toolsCard__footer">
            <div class="toolsCard__user">
              <img src="{userImage}" width="36" height="36" alt="">
              <span>
                <small>Enviado por </small>
                <strong>@{user}</strong>
              </span>
            </div>
            <div class="toolsCard__link">
              <svg class="feather feather-external-link" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewbox="0 0 24 24" fill="none" stroke="#6FA1E8" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </footer>
        </a>
      </article>`
  })
})

if (env === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(r => {
      console.log('offline worker registered!')
    })
}
