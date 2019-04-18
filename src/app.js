require('dotenv').config();
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.API_ACCESS_KEY,
  secret: process.env.API_SECRET_KEY
});

document.addEventListener("DOMContentLoaded", () => {
  unsplash.photos.getRandomPhoto({
    query: 'cat',
    width: 1600
  })
  .then(toJson)
  .then(json => {
    const img = document.getElementById('bg-img');
    img.setAttribute('src', json.urls.full);

    const author = document.getElementById('author-name');
    author.textContent = json.user.name;

    const link = document.getElementById('author-link');
    link.setAttribute('href', json.links.html);
 });
});