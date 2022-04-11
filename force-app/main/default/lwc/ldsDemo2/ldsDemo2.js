import { LightningElement, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const eItemFields = ['Electronics_Item__c.Name', 'Electronics_Item__c.Price__c', 'Electronics_Item__c.Type__c'];
export default class LdsDemo2 extends LightningElement {

    @track recordID = 'a009D000003GK2JQAW';

    @wire(getRecord, {recordId:'this.recordID', fields:eItemFields})
    eiTemRecord;

    recordIdHandler(event){
        this.recordId = event.target.value;
    }

    showRecord(){
        this.recordID = this.template.querySelector('lightning-input').value;
        console.log(typeof this.recordID, this.eiTemRecord)
    }

    get eItemName(){
        if(this.eItemRecord.data){
            return this.eItemRecord.data.fields.Name.value;
        }
        // return undefined;
    }

    get eItemPrice(){
        if(this.eItemRecord.data){
            return this.eItemRecord.data.fields.Price__c.value;
        }
        // return undefined;
    }

    get eItemType(){
        if(this.eItemRecord.data){
            return this.eItemRecord.data.fields.Type__c.value; 
        }
        // return undefined;
    }


}