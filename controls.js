class Controls {
  constructor() {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;

    this.#addKeyboardListeners();
  }

  #addKeyboardListeners() {
    document.onkeydown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
        case "j":
          this.left = true;
          break;
        case "l":
          this.right = true;
          break;
        case "i":
          this.forward = true;
          break;
        case "k":
          this.reverse = true;
          break;
      }
      // console.table(this);
    };
    document.onkeyup = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
        case "j":
          this.left = false;
          break;
        case "l":
          this.right = false;
          break;
        case "i":
          this.forward = false;
          break;
        case "k":
          this.reverse = false;
          break;
      }
      // console.table(this);
    };
  }
}
