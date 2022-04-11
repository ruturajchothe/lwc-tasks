import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    players = [];
    playerName = "";
    sport = "";
    position = "";

    inputHandler(event) {
        if(event.target.name === "name"){
            this.name = event.target.value;
        }else if(event.target.name === "sport"){
            this.sport = event.target.value;
        }else if(event.target.name === "position"){
            this.position = event.target.value;
        }
    }

    addChildHandler(event){
        let tempObj = {};
        tempObj.name = this.name;
        tempObj.sport = this.sport;
        tempObj.position = this.position;
        this.players.push(tempObj);
        this.players = [...this.players];
        console.log(this.players)
    }

    get playerArrayGetter() {
        return this.players;
    }
}
