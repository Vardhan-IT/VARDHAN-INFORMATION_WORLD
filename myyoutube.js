
let html=``;
videos.forEach((video1) => {
    html +=`
    <div>
    <img class="thumbnail" src="${video1.thumbnail}">
<video class="video1-1" width="300" height="200" controls play>
    <source src="${video1.video}">
   
</video>
<p>${video1.name}</p>
</div>`
});
document.querySelector(`.webpage`).innerHTML = html;
console.log(html);