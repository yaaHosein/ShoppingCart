type view = "products" | "basket";
export class App {
  activeView: view = "products";
  setActiveView(view: view) {
    this.activeView = view;
  }
}
