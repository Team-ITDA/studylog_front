const asideContainer = document.querySelector("#aside");
const asideContainerButton = asideContainer.querySelector(".fa-angle-double-left");

var isUserLoggedIn = false;
var isUserInfoShow = false;
const asideUserInfoContainer = asideContainer.querySelector("#aside-userInfo");

const asideUserInfoDetailsContainer = asideContainer.querySelector("#aside-userInfo-details");
const asideUserInfoDetailsLogoutButton = asideUserInfoDetailsContainer.querySelector(".aside-userInfo-details-logout");

const asideNavTitles = asideContainer.querySelectorAll(".aside-nav-title");

const RegisterAsideEventHandler = {
    asideControlButton: function () {
        const mainContainer = document.querySelector("#main");
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
    },
    asideUserInfoClick: function () {
        if (isUserLoggedIn) {
            // 유저가 로그인 한 상태에서 userInfo를 클릭했을 때 userInfoDetails를 보여주는 기능
            if (!isUserInfoShow) {
                asideUserInfoDetailsContainer.classList.add("show");
                asideUserInfoDetailsContainer.classList.remove("hide");
            } else {
                asideUserInfoDetailsContainer.classList.add("hide");
                asideUserInfoDetailsContainer.classList.remove("show");
            }
            isUserInfoShow = !isUserInfoShow;
        } else { // 유저가 로그인하지 않은 상태에서 로그인 모달창을 띄우는 기능
            const loginContainer = document.querySelector("#login");
            loginContainer.classList.remove("hide");
            loginContainer.classList.add("show");

            const loginContainerCloseButton = loginContainer.querySelector(".login-area-closeButton");
            loginContainerCloseButton.addEventListener("click", function () {
                loginContainer.classList.add("hide");
                loginContainer.classList.remove("show");
            });

            // 아래 부분은 로그인 클릭에 대한 기능으로 임시로 css를 보기위해 넣어놨습니다.
            const loginButtons = loginContainer.querySelectorAll(".login-area-button");
            const userInfoContainerId = asideUserInfoContainer.querySelector("#aside-userInfo-id");
            loginButtons.forEach(function (button) {
                button.addEventListener("click", function () {
                    isUserLoggedIn = true;
                    loginContainer.classList.add("hide");
                    loginContainer.classList.remove("show");
                    userInfoContainerId.innerText = "Jinmin";
                });
            });
        }
    },
    asideUserInfoDetailsLogoutButtonClick: function () {
        const userInfoContainerId = asideUserInfoContainer.querySelector("#aside-userInfo-id");
        isUserLoggedIn = false;
        isUserInfoShow = false;
        asideUserInfoDetailsContainer.classList.add("hide");
        asideUserInfoDetailsContainer.classList.remove("show");
        userInfoContainerId.innerText = "로그인 해주세요."
    },
    asideNavTitleClick: function (element) {
        let title = element.target;
        while (!title.classList.contains("aside-nav-title")) {   // h2가 아닌 i태그를 눌렀을때 오류를 이벤트 위임을 사용해봄.
            title = title.parentNode;
            if (title.nodeName === "BODY") {
                title = null;
                return;
            }
        }
        const controlledAsideNavList = title.nextElementSibling;
        const asideNavTitleIcon = title.firstElementChild;
        if (controlledAsideNavList.classList.contains("show")) {
            controlledAsideNavList.classList.add("hide");
            controlledAsideNavList.classList.remove("show");
            asideNavTitleIcon.classList.add("hide");
            asideNavTitleIcon.classList.remove("show");
        } else {
            controlledAsideNavList.classList.add("show");
            controlledAsideNavList.classList.remove("hide");
            asideNavTitleIcon.classList.add("show");
            asideNavTitleIcon.classList.remove("hide");
        }
    }
}


asideContainerButton.addEventListener("click", RegisterAsideEventHandler.asideControlButton);

asideUserInfoContainer.addEventListener("click", RegisterAsideEventHandler.asideUserInfoClick);
asideUserInfoDetailsLogoutButton.addEventListener("click", RegisterAsideEventHandler.asideUserInfoDetailsLogoutButtonClick);

asideNavTitles.forEach(function (element) {
    element.addEventListener("click", RegisterAsideEventHandler.asideNavTitleClick);
});




/*
이후에 구현해야할 것들
 - 로그인 후 정보 영역에서 블로그리스트의 블로그를 눌렀을 때 이동기능
 - 로그인 후 정보 영역에서 내 정보 관리 눌렀을 때 이동기능 + 페이지
 - 검색기능에 대한 화면 이동
 - nav 리스트에 대한 화면 이동
 - 블로그 설정 페이지
*/
