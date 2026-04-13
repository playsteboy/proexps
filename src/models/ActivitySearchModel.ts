export default class ActivitySearchModel {
    private name?:string;
    private moneyIn?:number;
    private moneyOut?:number;
    private date?:Date;
    private currency?:string;

    constructor(name?:string, moneyIn?:number, moneyOut?:number, date?:Date, currency?:string) {
        this.name = name;
        this.moneyIn = moneyIn;
        this.moneyOut = moneyOut;
        this.date = date;
        this.currency = currency;
    }

    getName() { return this.name; }
    getMoneyIn() { return this.moneyIn; }
    getMoneyOut() { return this.moneyOut; }
    getDate() { return this.date; }
    getCurrency() { return this.currency; }

    setName(name:string | undefined) { this.name = name; return this; }
    setMoneyIn(moneyIn:number | undefined) { this.moneyIn = moneyIn; return this; }
    setMoneyOut(moneyOut:number | undefined) { this.moneyOut = moneyOut; return this; }
    setDate(date:Date | undefined) { this.date = date; return this; }
    setCurrency(currency:string | undefined){this.currency = currency;return this;}
}