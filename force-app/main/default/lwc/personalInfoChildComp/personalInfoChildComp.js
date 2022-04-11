import { LightningElement, api } from 'lwc';

export default class PersonalInfoChildComp extends LightningElement {
    today = new Date().toISOString().slice(0, 10);

    @api DoB = '';
    @api mobileNo = 0;
    @api aadharNo = 0;
    @api email = '';
    


    DOBHandler(event){
        this.DoB = event.target.value;
    }

    mobileNoHandler(event){
        this.mobileNo = event.target.value;
    }

    aadharHandler(event){
        this.aadharNo = event.target.value;
    }

    fireEvent(event){
        this.email = event.target.value;
        const evnt = new Event("personalinfoevent", {detail: 'value'});
        this.dispatchEvent(evnt);
    }
}