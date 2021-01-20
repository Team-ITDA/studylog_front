class Header {
    #isUserContainerShow = false;

    #searchContainer = document.querySelector(".header-search");
    #loginContainer = document.querySelector(".login-container");

    constructor() {
        this.#loginContainer.querySelector(".login-article").addEventListener("click", event => this.#login(event));

        document.querySelector(".header-search-input").addEventListener("focus", this.#focusSearchInput.bind(this));
        document.querySelector(".header-search-input").addEventListener("focusout", this.#focusoutSearchInput.bind(this));
        document.querySelector(".header-login-button").addEventListener("click", this.#showLoginContainer.bind(this));
        document.querySelector(".login-area-closeButton").addEventListener("click", this.#hideLoginContainer.bind(this));
        document.querySelector(".header-user-info").addEventListener("click", this.#showOrHideUserContainer.bind(this));
        document.querySelector(".logout").addEventListener("click", this.#logout.bind(this));
    }

    #focusSearchInput() {
        this.#searchContainer.classList.add("focus");
    }

    #focusoutSearchInput() {
        this.#searchContainer.classList.remove("focus");
    }

    #showLoginContainer() {
        this.#loginContainer.classList.remove("hide");
    }

    #hideLoginContainer() {
        this.#loginContainer.classList.add("hide");
    }

    #showOrHideUserContainer() {
        if (this.#isUserContainerShow) {
            document.querySelector(".user-container").classList.add("hide");
            document.querySelector(".fa-angle-down").classList.remove("hide");
            document.querySelector(".fa-angle-up").classList.add("hide");
        } else {
            document.querySelector(".user-container").classList.remove("hide");
            document.querySelector(".fa-angle-down").classList.add("hide");
            document.querySelector(".fa-angle-up").classList.remove("hide");
        }
        this.#isUserContainerShow = !this.#isUserContainerShow;
    }

    #login(event) {
        if (event.target.classList.contains("login-button") ||
            event.target.closest("div").classList.contains("login-button")) {
            document.querySelector(".header-login-button").classList.add("hide");
            document.querySelector(".header-user-info").classList.remove("hide");
            this.#hideLoginContainer();
        }
    }

    #logout() {
        document.querySelector(".header-login-button").classList.remove("hide");
        document.querySelector(".header-user-info").classList.add("hide");
        this.#showOrHideUserContainer();
    }
}

new Header();