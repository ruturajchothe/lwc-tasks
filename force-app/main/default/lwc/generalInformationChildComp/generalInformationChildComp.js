import { LightningElement, api } from 'lwc';

export default class GeneralInformationChildComp extends LightningElement {
    @api fName = '';
    @api lName = '';
    @api nationality = 'Select Nationality';
    @api gender='Select Gender';
    get genderOptions(){
        return [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Gender Neutral', value: 'GenderNeutral' },
        ]
    }

    get nationalityOptions(){
        return [
            { label: 'Indian', value: 'Indian' },
            { label: 'Non-Indian', value: 'NonIndian' },
        ]
    }

    fNameHandler(event){
        this.fName = event.target.value;
    }

    lNameHandler(event){
        this.lName = event.target.value;
    }
    
    nationalityHandler(event){
        this.nationality = event.detail.value;
    }

    fireEvent(event) {
        this.gender = event.detail.value;
        const evnt = new Event("generalinfoevent", {detail: 'value'});
        this.dispatchEvent(evnt);
    }

    
}