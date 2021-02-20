window.onload = function () {
    const header = document.querySelector('.frame-header').contentWindow.document.body;
    const menuBtn = header.querySelector('.header-menu')
    const sidebarIFrame = document.querySelector('.frame-sidebar');
    const mainContainer = document.querySelector('.main-container');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', function (event) {
        sidebarHandler(event);
        menuBtnClick(event);
        mainContainerHandler(event);
        mainContainerOverlayHandler(event);
    });

    function sidebarHandler(event) {
        event.preventDefault();
        if (sidebarIFrame.classList.contains('off')) {
            sidebarIFrame.classList.add('on');
            sidebarIFrame.classList.remove('off');
        } else {
            sidebarIFrame.classList.add('off');
            sidebarIFrame.classList.remove('on');
        }
    }

    function menuBtnClick(event) {
        event.preventDefault();
        if (menuBtn.classList.contains('sideOff')) {
            menuBtn.classList.add('sideOn');
            menuBtn.classList.remove('sideOff');
        } else {
            menuBtn.classList.add('sideOff');
            menuBtn.classList.remove('sideOn');
        }
    }

    function mainContainerHandler(event) {
        event.preventDefault();
        if (mainContainer.classList.contains('sideOff')) {
            mainContainer.classList.add('sideOn');
            mainContainer.classList.remove('sideOff');
        } else {
            mainContainer.classList.add('sideOff');
            mainContainer.classList.remove('sideOn');
        }
    }

    function mainContainerOverlayHandler(event) {
        event.preventDefault();
        if (overlay.classList.contains('off')) {
            overlay.classList.add('on');
            overlay.classList.remove('off');
        } else {
            overlay.classList.add('off');
            overlay.classList.remove('on');
        }
    }
}