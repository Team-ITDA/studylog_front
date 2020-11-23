function asideButton(){
    // aside 메뉴 버튼 클릭 기능

    const aside = document.querySelector("#aside");
    const button = aside.querySelector(".fa-angle-double-left");

    button.addEventListener("click", function (){
        if(this.classList.contains("show")){
            aside.classList.add("hide");
            this.classList.add("hide");
            aside.classList.remove("show");
            this.classList.remove("show");
        } else {
            aside.classList.add("show");
            this.classList.add("show");
            aside.classList.remove("hide");
            this.classList.remove("hide");
        }
    });
}

asideButton();

function userInfoMouse(){
    // 클릭으로 바꿀 예정
    const userInfo = document.querySelector("#aside-userInfo");

    userInfo.addEventListener("mouseover", function (){
        const userInfoDetail = this.nextElementSibling;
        userInfoDetail.classList.add("show");
        userInfoDetail.classList.remove("hide");

        userInfoDetail.addEventListener("mouseleave", function (){
            this.classList.remove("show");
            this.classList.add("hide");
        });
    });
}

userInfoMouse();