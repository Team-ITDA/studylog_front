function registerAsideButtonClickEvent(){
    // asidebutton을 클릭했을 때 aside 보여주고 숨기는 기능
    const asideContainer = document.querySelector("#aside");
    const asideContainerButton = aside.querySelector(".fa-angle-double-left");
    const mainContainer = document.querySelector("#main");

    asideContainerButton.addEventListener("click", function (){
        if(asideContainerButton.classList.contains("show")){
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

var isUserInfoShow = false;

function registerUserInfoClickEvent(){
    // userInfo를 클릭했을 때 userInfoDetails를 보여주는 기능
    const userInfoArea = document.querySelector("#aside-userInfo");

    userInfoArea.addEventListener("click", function(){
        const userInfoDetail = userInfoArea.nextElementSibling;

        if(!isUserInfoShow){
            userInfoDetail.classList.add("show");
            userInfoDetail.classList.remove("hide");
        }else{
            userInfoDetail.classList.add("hide");
            userInfoDetail.classList.remove("show");
        }

        isUserInfoShow = !isUserInfoShow;
    });
}

registerUserInfoClickEvent();


// function init(){
//     main top값에 대한 제어 연구중
//     const mainContainer = document.querySelector("#main");
//     const headerHeight = document.getElementById("header");
//     const h = headerHeight.clientHeight;
//     console.log(h);
//     mainContainer.style.marginTop = h;
// }
//
// init();