export default class Section {
    constructor({items, render}, containerSelector) {
        this._itemsArray = items;
        this._render = render;
        this._containerSelector = document.querySelector(containerSelector);
    }

    renderItems() {
        this._itemsArray.forEach(item => this._render(item));
    }

    prependItem(element) {
        this._containerSelector.prepend(element);
    }
    appendItem(element) {
        this._containerSelector.append(element);
    }
}