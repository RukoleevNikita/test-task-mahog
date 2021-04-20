function testWebP(callback) {
    var webP = new Image()
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2)
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
 
testWebP(function (support) { 
    if (support == true) {
        document.querySelector('body').classList.add('webp')
    } else{
        document.querySelector('body').classList.add('no-webp')
    }
});

const blockNominationItem = [...document.getElementsByClassName('nomination__blocks')]

blockNominationItem.forEach((e) => {
    e.addEventListener('mouseover', function(e) {
        this.classList.add('_border_red');
    })
    e.addEventListener('mouseleave', function (e) {
        this.classList.remove('_border_red');
    });
})
