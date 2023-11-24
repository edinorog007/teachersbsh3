window.onload = () => {
    let button = document.getElementsByClassName('button');
    let modal = document.getElementsByClassName('teacher-modal');
    let modalBlock = document.getElementsByClassName('teacher-modal-block');


    for (let i = 0; i < button.length; i++) {
        button[i].onclick = function (e) {
            let el = this.parentElement.nextElementSibling;
            el.style.display = 'inline-block';
            setTimeout(function () {
                el.style.opacity = '1';
            }, 1000);
        }
        modal[i].onclick = function (e) {
            modal[i].style.opacity = '0';
            setTimeout(function () {
                modal[i].style.display = 'none';
            }, 1000);
        }
        modalBlock[i].onclick = function (e) {
            e.stopPropagation();
        }
    }
    function scroll() {
        for (let i = 0; i < button.length; i++) {
            modal[i].style.opacity = '0';
            setTimeout(function () {
                modal[i].style.display = 'none';
            }, 1000);
        }
    }
    window.onscroll = () => {
        scroll();
    }



};

