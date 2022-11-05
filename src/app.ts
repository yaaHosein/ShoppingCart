type View = "products" | "basket";
export class App {
  activeView: View = "products";
  setActiveView(view: View) {
    this.activeView = view;
  }
}
