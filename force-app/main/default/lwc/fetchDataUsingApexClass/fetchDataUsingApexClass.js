import { LightningElement, wire, track } from 'lwc';
import getEItems from '@salesforce/apex/apexManager.getEItems';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Price', fieldName: 'Price__c', type: 'currency', cellAttributes: { alignment: 'center' } },
    { label: 'Type', fieldName: 'Type__c' },
];

export default class FetchDataUsingApexClass extends LightningElement {
    @wire(getEItems)
    eItemsArray;

    columns = columns;

    get receivedResponse(){
        if(this.eItemsArray.data){
            return true;
        }
        return false;
    }
}