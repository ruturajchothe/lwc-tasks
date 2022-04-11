import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class PANApplicationParentComp extends LightningElement {

    //TODO: create one object to store all this data and access the data by key value pair
    @track fName = '';
    @track lName = '';
    @track nationality = '';
    @track gender='';
    @track DoB = '';
    @track mobileNo = 0;
    @track aadharNo = 0;
    @track email = '';
    @track fathersName = '';
    @track mothersName = '';
    @track motherPAN = '';
    @track fatherPAN = '';

    // Getting data from general info child
    generalInfoEventHandler(event){
        this.lName = event.target.lName;
        this.fName = event.target.fName;
        this.gender = event.target.gender;
        this.nationality = event.target.nationality;
    }

    // Getting data from personal info child
    personalInfoEventHandler(event){
        this.DoB = event.target.DoB;
        this.mobileNo = event.target.mobileNo;
        this.aadharNo = event.target.aadharNo;
        this.email = event.target.email;
    }

    // Getting data from family info child
    familyInfoEventHandler(event){
        this.fathersName = event.target.fathersName;
        this.mothersName = event.target.mothersName;
        this.motherPAN = event.target.motherPAN;
        this.fatherPAN = event.target.fatherPAN;
    }

    // Creating a new record with this values
    submitTheRecord(){
        let indian = (this.nationality === 'Indian') ? true : false;
        const fields = {
            'First_Name__c': this.fName, 'Last_Name__c': this.lName, 'Indian_Nationality__c': indian,
            'Gender__c' : this.gender, 'Date_of_Birth__c' : this.DoB, 'Mobile_no__c' : this.mobileNo,
            'Aadhar_No__c' : this.aadharNo, 'Email__c' : this.email ,'Father_s_Full_Name__c': this.fathersName, 
            'Mother_s_Full_Name__c' : this.mothersName, 'PAN_of_Father__c' : this.fatherPAN, 'PAN_of_Mother__c' : this.motherPAN
        };

        const recordInput = {apiName: "PAN_Application__c", fields};
        
        createRecord(recordInput)
        .then(response => {
            alert('New Record added');
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }
}