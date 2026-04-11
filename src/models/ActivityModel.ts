export default class ActivityModel {
    private id?:number;
    private name?:string;
    private moneyIn?:number;
    private moneyOut?:number;
    private date?:Date;
    private currency?:string;

    constructor(name:string, moneyIn:number, moneyOut:number, date:Date, currency:string, id?:number) {
        this.name = name;
        this.moneyIn = moneyIn;
        this.moneyOut = moneyOut;
        this.date = date;
        this.currency = currency;
        this.id = id;
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getMoneyIn() { return this.moneyIn; }
    getMoneyOut() { return this.moneyOut; }
    getDate() { return this.date; }
    getCurrency() { return this.currency; }
}