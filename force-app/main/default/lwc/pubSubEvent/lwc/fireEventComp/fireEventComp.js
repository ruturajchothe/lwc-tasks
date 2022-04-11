import { LightningElement, api, wire } from 'lwc';
import { fireEvent } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation'

export default class FireEventComp extends LightningElement {
    @api meetingRoomInfo = {rooName: 'A-01', roomCapacity: '12'};
    @api showRoomInfo = false;

    @wire(CurrentPageReference) pageRef;

    // tileClickHandler(){
    //     fireEvent(this.pageRef, 'pubsubtileclick', this.meetingRoomInfo)
    // }

    buttonAHandler(){
        fireEvent(this.pageRef, 'pubsubtileclick', 'Button A Clicked')
    }

    buttonBHandler(){
        fireEvent(this.pageRef, 'pubsubtileclick', 'Button B Clicked')
    }
    buttonCHandler(){
        fireEvent(this.pageRef, 'pubsubtileclick', 'Button C Clicked')
    }
}