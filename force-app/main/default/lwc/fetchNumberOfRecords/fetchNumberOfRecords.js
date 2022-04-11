import { LightningElement, track } from 'lwc';
import getNoOfEItems from '@salesforce/apex/apexManager.getNoOfEItems';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Price', fieldName: 'Price__c', type: 'currency', cellAttributes: { alignment: 'center' } },
    { label: 'Type', fieldName: 'Type__c' },
];

export default class FetchNumberOfRecords extends LightningElement {
    @track numberOfRecords;
    @track EItemsArray;
    columns = columns;

    changeHandler(event){
        this.numberOfRecords = event.target.value;
    }

    get responseRecieved(){
        if(this.EItemsArray){
            return true;
        }
        return false;
    }

    getRecords(){
        console.log("Button Clicked");
        getNoOfEItems({numOfRecords: +this.numberOfRecords})
        .then(res => {
            console.log('response')
            console.log(res)
            this.EItemsArray = res;
        }).catch(err => {
            console.log(err.message);
            console.log('error');
        })
    }
}