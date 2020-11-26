function registerAsideButtonClickEvent() {
    // asidebutton을 클릭했을 때 aside 보여주고 숨기는 기능
    const asideContainer = document.querySelector("#aside");
    const asideContainerButton = aside.querySelector(".fa-angle-double-left");
    const mainContainer = document.querySelector("#main");

    asideContainerButton.addEventListener("click", function () {
        if (asideContainerButton.classList.contains("show")) {
            asideContainer.classList.add("hide");
            asideContainerButton.classList.add("hide");
            asideContainer.classList.remove("show");
            asideContainerButton.classList.remove("show");
            mainContainer.classList.add("increase");
            mainContainer.classList.remove("reduce");
        } else {
            asideContainer.classList.add("show");
            asideContainerButton.classList.add("show");
            asideContainer.classList.remove("hide");
            asideContainerButton.classList.remove("hide");
            mainContainer.classList.add("reduce");
            mainContainer.classList.remove("increase");
        }
    });
}

registerAsideButtonClickEvent();

var isUserLoggedIn = false;
var isUserInfoShow = false;

function registerUserInfoClickEvent() {
    const userInfoArea = document.querySelector("#aside-userInfo");
    if (isUserLoggedIn) {
        // userInfo를 클릭했을 때 userInfoDetails를 보여주는 기능
        userInfoArea.addEventListener("click", function () {
            const userInfoDetail = userInfoArea.nextElementSibling;

            if (!isUserInfoShow) {
                userInfoDetail.classList.add("show");
                userInfoDetail.classList.remove("hide");
            } else {
                userInfoDetail.classList.add("hide");
                userInfoDetail.classList.remove("show");
            }

            isUserInfoShow = !isUserInfoShow;
        });
    } else {
        userInfoArea.addEventListener("click", function (){
            const loginArea = document.querySelector("#login");
            loginArea.style.display = "block";

            const loginAreaCloseButton = loginArea.querySelector(".login-area-closeButton");
            loginAreaCloseButton.addEventListener("click", function (){
                loginArea.style.display = "none";
            });

            const loginButtons = loginArea.querySelectorAll(".login-area-button");
            const userInfoAreaId = userInfoArea.querySelector("#aside-userInfo-id");
            loginButtons.forEach(function (button){
                button.addEventListener("click", function (){
                   isUserLoggedIn = !isUserLoggedIn;
                   loginArea.style.display = "none";
                   userInfoAreaId.innerHTML = "Jinmin";
                });
            });
        });
    }

}

registerUserInfoClickEvent();

function registerAsideNavTitleClickEvent() {
    const asideNavTitles = document.querySelectorAll(".aside-nav-title");

    asideNavTitles.forEach(function (title) {
        title.addEventListener("click", function () {
            const controledAsideNavList = title.nextElementSibling;
            const asideNavTitlesIcon = title.firstElementChild;
            if (controledAsideNavList.classList.contains("show")) {
                controledAsideNavList.classList.add("hide");
                controledAsideNavList.classList.remove("show");
                asideNavTitlesIcon.classList.add("hide");
                asideNavTitlesIcon.classList.remove("show");
            } else {
                controledAsideNavList.classList.add("show");
                controledAsideNavList.classList.remove("hide");
                asideNavTitlesIcon.classList.add("show");
                asideNavTitlesIcon.classList.remove("hide");
            }
        });
    });
}

registerAsideNavTitleClickEvent();









function registerAsideLoginClickEvent() {

}
















