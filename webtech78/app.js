const GITHUB_ACCESS_TOKEN = 'TOKEN';

function loadNavigation() {
    fetch('nav.html')
        .then(res => res.text())
        .then(navHtml => {
            const body = document.querySelector('body');
            body.insertAdjacentHTML('afterbegin', navHtml);
        })
        .catch(err => console.error(err));
}

loadNavigation();