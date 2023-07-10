window.addEventListener("load", function(){
    const btn_next = document.getElementById("btn_next");
    const btn_back = document.getElementById("btn_back");
    const mas = document.getElementsByClassName("advantages");

    btn_next.addEventListener("click", function(){
        $(mas[mas.length - 1]).after(mas[0]);        
    })
    btn_back.addEventListener("click", function(){
        $(mas[0]).before(mas[mas.length - 1]);
    })
});

window.addEventListener("load", function(){
    const uper = document.createElement("div");
    uper.classList.add("toUp");
    uper.setAttribute('title', 'Вверх');
    window.addEventListener('scroll', function(){
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;
        if( scrolled > coords ){
            uper.style.display = "block";
        }
        if( scrolled < coords ){
            uper.style.display = "none";
        }
    });
    document.body.append(uper);

    function backToTop() {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -80);
          setTimeout(backToTop, 0);
        }
      }    

    uper.addEventListener("click", function(){
        backToTop();
    });
});

$(document).ready(function() {
    function scrollToElement(element, parent) {
      $(parent)[0].scrollIntoView(true);
      $(parent).animate({
        scrollTop: $(parent).scrollTop() + $(element).offset().top - $(parent).offset().top
      }, {
        duration: 'slow',
        easing: 'swing'
      });
    }
  
    $('.info_btn').on('click', function() {
      var paretq = $('#catalog');
      var elemq = $('#all-tab');
      scrollToElement(elemq, paretq);
    })

  })