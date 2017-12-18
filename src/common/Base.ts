
export default class Base {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    showName() {
        console.log("我的基类：", this.name);
    }
}