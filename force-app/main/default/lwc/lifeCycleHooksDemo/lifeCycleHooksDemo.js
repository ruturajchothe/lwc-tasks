import { LightningElement } from 'lwc';

export default class LifeCycleHooksDemo extends LightningElement {
    renderedCallback(){
        console.log('Coming from rendered callback')
    }

    connectedCallback(){
        console.log('Coming from connectedCallback')
    }

    constructor(){
        super();
        console.log('Constructor Log')
    }
}