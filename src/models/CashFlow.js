export default class CashFlow{
    #id;
    #activityModel;
    #moneyIn;
    #moneyOut;
    #date;
    constructor(id,activityModel,moneyIn,moneyOut,date){
        this.id = id;
        this.activityModel = activityModel;
        this.moneyIn = moneyIn;
        this.moneyOut = moneyOut;
        this.date = date;
    }
    getId(){
        return this.id
    }
    getMoneyIn(){
        return this.moneyIn
    }
    getMoneyOut(){
        return this.moneyOut
    }
    getDate(){
        return this.date
    }
    getActivityModel(){
        return this.activityModel
    }
}