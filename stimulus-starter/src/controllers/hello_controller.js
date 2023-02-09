import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["name"];

  connect() {
    // console.log("Hello from controller");
    // console.log(this.nameTarget);
  }

  greet() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
