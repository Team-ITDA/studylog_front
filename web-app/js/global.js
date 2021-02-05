class MainContainer {
    #box = document.querySelector(".main-container");

    expand() {
        this.#box.classList.remove("reduce");
    }

    reduce() {
        this.#box.classList.add("reduce");
    }
}

class LoginContainer {
    #frame = document.querySelector(".frame-login");

    constructor() {
        this.#frame.onload = () => {
            this.#frame.contentDocument.body.querySelector(".login-article").addEventListener("click", event => this.#login(event));
            this.#frame.contentDocument.body.querySelector(".login-area-closeButton").addEventListener("click", () => this.hide());
        }
    }

    hide() {
        this.#frame.classList.add("hide");
    }

    show() {
        this.#frame.classList.remove("hide");
    }

    #login(event) {
        if (event.target.classList.contains("login-button") ||
            event.target.closest("div").classList.contains("login-button")) {
            header.hideLoginButton();
            header.showUserInfo();
            this.hide();
        }
    }
}

class Header {
    #searchContainer;
    #loginButton;
    #userInfo;

    constructor() {
        let body = document.querySelector(".frame-header");
        body.onload = () => {
            body = body.contentDocument.body;

            this.#searchContainer = body.querySelector(".header-search");
            this.#loginButton = body.querySelector(".header-login-button");
            this.#userInfo = body.querySelector(".header-user-info");

            this.#userInfo.addEventListener("click", () => this.showOrHideUserContainer());

            body.querySelector(".header-search-input").addEventListener("focus", this.#focusSearchInput.bind(this));
            body.querySelector(".header-search-input").addEventListener("focusout", this.#focusoutSearchInput.bind(this));
            body.querySelector(".header-login-button").addEventListener("click", loginContainer.show.bind(loginContainer));
        }
    }

    hideLoginButton() {
        this.#loginButton.classList.add("hide");
    }

    showLoginButton() {
        this.#loginButton.classList.remove("hide");
    }

    showUserInfo() {
        this.#userInfo.classList.remove("hide");
    }

    hideUserInfo() {
        this.#userInfo.classList.add("hide");
    }

    showOrHideUserContainer() {
        if (userInfoContainer.isHide()) {
            userInfoContainer.show();
            this.#userInfo.querySelector(".fa-angle-down").classList.add("hide");
            this.#userInfo.querySelector(".fa-angle-up").classList.remove("hide");
        } else {
            userInfoContainer.hide();
            this.#userInfo.querySelector(".fa-angle-down").classList.remove("hide");
            this.#userInfo.querySelector(".fa-angle-up").classList.add("hide");
        }
    }

    #focusSearchInput() {
        this.#searchContainer.classList.add("focus");
    }

    #focusoutSearchInput() {
        this.#searchContainer.classList.remove("focus");
    }
}

class UserInfoContainer {
    #frame = document.querySelector(".frame-header-user-info");

    constructor() {
        this.#frame.onload = () => {
            this.#frame.contentDocument.body.querySelector(".logout").addEventListener("click", this.#logout);
        }
    }

    isHide() {
        return this.#frame.classList.contains("hide");
    }

    show() {
        this.#frame.classList.remove("hide");
    }

    hide() {
        this.#frame.classList.add("hide");
    }

    #logout() {
        header.hideUserInfo();
        header.showLoginButton();
        header.showOrHideUserContainer();
    }
}

class SideBar {
    #frame = document.querySelector(".frame-sidebar");
    #container;
    #containerControlButton;

    constructor() {
        this.#frame.onload = () => {
            this.#container = this.#frame.contentDocument.body.querySelector(".sidebar");
            this.#containerControlButton = this.#frame.contentDocument.body.querySelector(".fa-angle-double-left");
            this.#containerControlButton.addEventListener("click", this.#showOrHide.bind(this));
            this.#container.addEventListener("click", event => {
                if (this.#isNavTitleClicked(event.target)) {
                    this.#rotateNavIcon(event.target);
                    this.#showOrHideNavItems(event.target);
                }
            });
        }
    }

    #showOrHide() {
        if (this.#frame.classList.contains("hide")) {
            this.#frame.classList.add("show");
            this.#frame.classList.remove("hide");
            this.#containerControlButton.classList.add("show");
            this.#containerControlButton.classList.remove("hide");
            mainContainer.reduce();
        } else {
            this.#frame.classList.add("hide");
            this.#frame.classList.remove("show");
            this.#containerControlButton.classList.add("hide");
            this.#containerControlButton.classList.remove("show");
            mainContainer.expand();
        }
    }

    #isNavTitleClicked(target) {
        if (target.classList.contains("sidebar-nav-item-title")) {
            return true;
        }
        return target.classList.contains("fa-caret-down");
    }

    #showOrHideNavItems(target) {
        if (target.classList.contains("fas")) {
            target = target.closest(".sidebar-nav-item-title");
        }

        const items = target.nextElementSibling;

        if (items.classList.contains("hide")) {
            items.classList.remove("hide");
        } else {
            items.classList.add("hide");
        }
    }

    #rotateNavIcon(target) {
        if (!target.classList.contains("fas")) {
            target = target.querySelector(".fas");
        }

        if (target.classList.contains("hide")) {
            target.classList.remove("hide");
        } else {
            target.classList.add("hide");
        }
    }

}

new SideBar();

const header = new Header();
const mainContainer = new MainContainer();
const loginContainer = new LoginContainer();
const userInfoContainer = new UserInfoContainer();

