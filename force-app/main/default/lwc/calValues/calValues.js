import { LightningElement, track } from 'lwc';

export default class CalValues extends LightningElement {
    firstValue = 0;
    secondValue = 0;
    @track result;

    inputHandler(event){
        if(event.target.name === 'firstValue')
            this.firstValue = event.target.value;
        else if(event.target.name === 'secondValue')
            this.secondValue = event.target.value;
    }

    addHandler(){
        this.result = (+this.firstValue) + (+this.secondValue);
    }

    subHandler(){
        this.result = (+this.firstValue) - (+this.secondValue);
    }

    mulHandler(){
        this.result = (+this.firstValue) * (+this.secondValue);
    }

    divHandler(){
        this.result = (+this.firstValue) / (+this.secondValue);
    }
}