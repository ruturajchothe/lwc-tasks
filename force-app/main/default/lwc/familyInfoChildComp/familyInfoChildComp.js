import { LightningElement, api } from 'lwc';

export default class FamilyInfoChildComp extends LightningElement {

    @api fathersName;
    @api mothersName;
    @api fatherPAN;
    @api motherPAN;

    fathersNameChangeHandler(event){
        this.fathersName = event.target.value;
    }

    mothersNameChangeHandler(event){
        this.mothersName = event.target.value;
    }

    fathersPANHandler(event){
        this.fatherPAN = event.target.value;
    }

    fireEvent(event){
        this.motherPAN = event.target.value;
        const evnt = new Event("familyinfoevent", {detail: 'value'});
        this.dispatchEvent(evnt);
    }
}