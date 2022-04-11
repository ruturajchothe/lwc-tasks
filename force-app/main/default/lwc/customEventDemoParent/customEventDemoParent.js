import { LightningElement, track } from 'lwc';

export default class CustomEventDemoParent extends LightningElement {
    @track selectedMeetingRoom;

    meetingRoomsinfo = [
        {roomName: 'A-01', roomCapacity:'11'},
        {roomName: 'A-02', roomCapacity:'12'},
        {roomName: 'A-03', roomCapacity:'13'},
        {roomName: 'A-04', roomCapacity:'14'},
        {roomName: 'A-05', roomCapacity:'15'},
        {roomName: 'A-06', roomCapacity:'16'},
        {roomName: 'A-07', roomCapacity:'17'},
        {roomName: 'A-08', roomCapacity:'18'},
        {roomName: 'A-09', roomCapacity:'19'},
        {roomName: 'A-10', roomCapacity:'22'},
    ];

    onTileSelectHandler(event){
        alert('ulululul')
        const meetingRoomFromChild = event.detail;
        console.log(event.detail)
        this.selectedMeetingRoom = meetingRoomFromChild.roomName;
    }

    constructor(){
        super();
        // this.template.addEventListener('tileclick',this.onTileSelectHandler.bind(this))
    }
}