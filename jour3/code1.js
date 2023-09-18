const lien = document.getElementById('lien');
const image = document.getElementById('image');
lien.addEventListener('mouseover', function() {
    lien.style.color = 'white';
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'black';
    image.style.filter = 'opacity(0%)';
    document.body.link = 'black';
});

lien.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    document.body.link = '';
    lien.style.color = '';
    image.style.filter = '';

});