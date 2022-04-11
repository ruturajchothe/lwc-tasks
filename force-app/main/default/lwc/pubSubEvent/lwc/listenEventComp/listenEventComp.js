import { LightningElement, track, wire} from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation'

export default class ListenEventComp extends LightningElement {
    @track selectedMeetingRoom = '';

    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener('pubsubtileclick', this.onMeetingRoomSelectHandler, this);
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }

    onMeetingRoomSelectHandler(payload){
        this.selectedMeetingRoom = payload;
    }

    
}