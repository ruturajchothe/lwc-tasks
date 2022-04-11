import { LightningElement, api } from 'lwc';

export default class CustomEventDemoChild extends LightningElement {
    @api meetingRoomInfo = {roomName: 'A-01', roomCapacity:'12'};

    @api showRoomInfo = false;

    tileClickHandler(){
        alert('clicked')
        const tileClicked = new customEvent('tileclick', {detail:this.meetingRoomInfo, bubbles:true});
        this.dispatchEvent(tileClicked);
    }
}