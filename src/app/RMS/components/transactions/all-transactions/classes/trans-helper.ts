export class TransHelper {

    constructor() {}

    shapeData(data: any[]) {
        let transactions: any = [];

        data.forEach(val => {
          let obj = {
            id: val["id"],
            office: (Boolean(val["office"])) ? val["office"]["username"] : '',
            user: (Boolean(val["user"])) ? val["user"]["username"] : '',
            value: val["value"],
            lastCredit: val["lastcredit"],
            date: val["created"]
          }
    
          transactions = [...transactions, obj];
        });

        return transactions;
      }

}