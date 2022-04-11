import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
export default class LdsDemo1 extends LightningElement {

    @track itemName;
    @track itemPrice;
    @track itemType;

    nameHandler(event) {
        this.itemName = event.target.value;
    }
    priceHandler(event) {
        this.itemPrice = event.target.value;
    }
    typeHandler(event) {
        this.itemType = event.target.value;
    }

    addItemHandler(){
        const fields = {'Name': this.itemName, 'Price__c': +this.itemPrice, 'Type__c': this.itemType};

        const recordInput = {apiName: "Electronics_Item__c", fields};

        createRecord(recordInput)
        .then(response => {
            alert('New Record added');
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

}