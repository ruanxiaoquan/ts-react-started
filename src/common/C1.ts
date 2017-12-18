

import Base from "./Base";

export default class COne extends Base {

    constructor(name: string) {
        super(name);
    }

    showSuperName() {
        super.showName();
    }

    showName() {
        console.log("我是子类的name", this.name);
    }

}