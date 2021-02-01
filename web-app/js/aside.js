class SideBar {
    #container = document.querySelector(".sidebar");
    #containerControlButton = this.#container.querySelector(".fa-angle-double-left");

    constructor() {
        this.#containerControlButton.addEventListener("click", this.#showOrHide.bind(this));
        this.#container.addEventListener("click", event => {
            if (this.#isNavTitleClicked(event.target)) {
                this.#rotateNavIcon(event.target);
                this.#showOrHideNavItems(event.target);
            }
        });
    }

    #showOrHide() {
        if (this.#container.classList.contains("hide")) {
            this.#container.classList.add("show");
            this.#container.classList.remove("hide");
            this.#containerControlButton.classList.add("show");
            this.#containerControlButton.classList.remove("hide");
            mainContainer.reduce();
        } else {
            this.#container.classList.add("hide");
            this.#container.classList.remove("show");
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