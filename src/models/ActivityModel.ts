export default class ActivityModel {
    private id?:number;
    private name?:string;
    private moneyIn?:number;
    private moneyOut?:number;
    private date?:Date;

    constructor(name:string, moneyIn:number, moneyOut:number, date:Date, id?:number) {
        this.name = name;
        this.moneyIn = moneyIn;
        this.moneyOut = moneyOut;
        this.date = date;
        this.id = id;
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getMoneyIn() { return this.moneyIn; }
    getMoneyOut() { return this.moneyOut; }
    getDate() { return this.date; }
}