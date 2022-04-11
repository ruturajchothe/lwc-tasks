import { LightningElement } from 'lwc';

export default class GetterCodingChallenge extends LightningElement {
    groupName="";

    changeHandler(event){
        this.groupName = event.target.value;
    }
    
    get APIName(){
        return this.groupName.split(' ').join('_');
    }
}

// // string ="asfb_asf_askfjasf"
// split(' ')
// ['asdf', 'asdasd' ,'asd'].join('_')