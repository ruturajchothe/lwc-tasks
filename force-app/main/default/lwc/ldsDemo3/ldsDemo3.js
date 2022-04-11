import { LightningElement, track } from 'lwc';

export default class LdsDemo3 extends LightningElement {
    @track recordID;

    successHandler(event){
        this.recordID = event.detail.id;
        // console.log(event)
        alert('Record saved!')
    }
}