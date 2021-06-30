import Component from '@glimmer/component'; //Glimmer Component
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class RentalImageComponent extends Component {
    // constructor(...args) {
    //     super(...args);
    //     this.isLarge = false; // default state
    // }
    // isLarge = false; // concise version of above

    @tracked isLarge = false; // monitor isLarge for changes, if it changes then rerender it

    @action toggleSize() {
      this.isLarge = !this.isLarge;
    }
}
