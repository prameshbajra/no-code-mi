import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'no-code-mi';

    public isPinPresent = false;
    public onePin = "";
    public secondPin = "";
    public thirdPin = "";
    public positions = ["", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"];
    public triplets = this.getTriplets();

    public genUniqTriplets(): any {
        const number = Math.ceil(Math.random() * (this.positions.length - 1) * 100) + "";
        const setReady = number.split("");
        if ((new Set(setReady)).size === 3 && !setReady.includes("0") && !setReady.includes("9")) {
            return setReady.map(value => parseInt(value));
        }
        return this.genUniqTriplets();
    }

    public getTriplets(): any {
        const uniqTriplets = this.genUniqTriplets();
        const positionTriples = this.positions.filter((position, index) => uniqTriplets.includes(index));
        console.log(positionTriples);
        return positionTriples;
    }

    public onContinueClick(): any {
        if (this.onePin && this.secondPin && this.thirdPin) {
            this.isPinPresent = true;
        }
    }

}
