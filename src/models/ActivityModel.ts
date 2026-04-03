export default class ActivityModel {
    private id?:number;
    private name?:string;
    private description?:string;
    private moneyIn?:number;
    private moneyOut?:number;
    private date?:Date;

    constructor(name:string, description:string, moneyIn:number, moneyOut:number, date:Date, id?:number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.moneyIn = moneyIn;
        this.moneyOut = moneyOut;
        this.date = date;
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getDescription() { return this.description; }
    getMoneyIn() { return this.moneyIn; }
    getMoneyOut() { return this.moneyOut; }
    getDate() { return this.date; }
}