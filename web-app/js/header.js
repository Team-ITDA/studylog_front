class Header {
    #searchContainer = document.querySelector(".header-search");
    #loginContainer = document.querySelector(".login-container");

    constructor() {
        document.querySelector(".header-search-input").addEventListener("focus", this.#focusSearchInput.bind(this));
        document.querySelector(".header-search-input").addEventListener("focusout", this.#focusoutSearchInput.bind(this));
        document.querySelector(".header-login-button").addEventListener("click", this.#showLoginContainer.bind(this));
        document.querySelector(".login-area-closeButton").addEventListener("click", this.#hideLoginContainer.bind(this));
    }

    #focusSearchInput() {
        this.#searchContainer.classList.add("focus");
        this.#searchContainer.classList.remove("focusout");
    }

    #focusoutSearchInput() {
        this.#searchContainer.classList.add("focusout");
        this.#searchContainer.classList.remove("focus");
    }

    #showLoginContainer() {
        this.#loginContainer.classList.add("show");
        this.#loginContainer.classList.remove("hide");
    }

    #hideLoginContainer() {
        this.#loginContainer.classList.remove("show");
        this.#loginContainer.classList.add("hide");
    }
}

new Header();