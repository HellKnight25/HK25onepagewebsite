    //--JavaScript---------------------------------------

    //--Load Intro---------------------------------------
    let intro = document.getElementById('intro');

    window.addEventListener('load', () => {
        intro.innerHTML = "<img class='intro-img' src='images/flame3croped.gif' alt='flames intro'>";
    });

    //--Toogle Menu
    let menuicon = document.getElementById('menu-icon');
    let menu = document.getElementById('menu');
    menuicon.addEventListener('click', toggleMenu);

    let anchors = document.getElementsByClassName('anchor');
    for (anchor of anchors) {
        anchor.addEventListener('click', toggleMenu);
    }

    function toggleMenu() {
        menuicon.classList.toggle('toggle-menu');
        menu.classList.toggle('toggle-menu');
    }

    //--Play Tags Animations on Scroll---------------------
    let separators = document.getElementsByClassName('separator');
    window.addEventListener('scroll', () => {
        for (separator of separators) {
            if (!separator.classList.contains('animated')) {
                let y = separator.getBoundingClientRect().top;
                if (y <= window.innerHeight) {
                    let tags = separator.children;
                    separator.classList.add('animated');
                    tags[0].classList.add('tag-line-anim');
                    tags[1].classList.add('tag-diag-anim');
                    tags[2].classList.add('tag-anim');
                }
            }
        }
    });
    window.dispatchEvent(new Event('scroll'));