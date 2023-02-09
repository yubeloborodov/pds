import { Controller } from "@hotwired/stimulus";
import loadjs from "loadjs";

const TOP_HOTELS_TOKEN = "6f8561e0ae8e19d575ed54ea850b4056";

export default class extends Controller {
  static targets = ["btn", "tab"];
  static values = { defaultTab: String };

  connect() {
    console.log(this.tabTargets);
    this.tabTargets.forEach((x) => (x.hidden = true)); // hide all tabs by default
    // OPEN DEFAULT TAB
    try {
      const selectedBtn = this.btnTargets.find(
        (element) => element.id === this.defaultTabValue
      );
      const selectedTab = this.tabTargets.find(
        (element) => element.id === this.defaultTabValue
      );
      selectedTab.hidden = false;
      selectedBtn.classList.add("active");
    } catch {}

    loadjs(
      `https://partner.tophotels.ru/rates/ver8/${407189}?uid=${TOP_HOTELS_TOKEN}&sec=1`
    );

    // loadjs(
    //   `https://partner.tophotels.ru/rates/ver8/$407189?uid=$6f8561e0ae8e19d575ed54ea850b4056&sec=1`
    // );
  }

  select(e) {
    // find tab with same id as clicked btn
    const selectedTab = this.tabTargets.find(
      (element) => element.id === event.currentTarget.id
    );

    this.tabTargets.forEach((x) => (x.hidden = true)); // hide all tabs
    this.btnTargets.forEach((x) => x.classList.remove("active")); // deactive all btns
    selectedTab.hidden = false; // show current tab
    e.currentTarget.classList.add("active"); // active current btn
  }
}
