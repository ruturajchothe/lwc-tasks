import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {

    @api playerDetails = {name: 'Player1', sport: 'Cricket', position: 'All-Rounder'};
    
}