class MainContainer {
    #box = document.querySelector(".main-container");

    expand() {
        this.#box.classList.remove("reduce");
    }

    reduce() {
        this.#box.classList.add("reduce");
    }
}

const mainContainer = new MainContainer();