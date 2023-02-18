import { LightningElement, api, track, wire } from 'lwc';
import getActiveTrackForContact from '@salesforce/apex/TrackDataService.getActiveTrackForContact';


export default class Track extends LightningElement {
  @api contactId;
  isTrackOpen = true;

  @wire(getActiveTrackForContact, { contactId: '$contactId' })
  getAssociatedTrack({ data, error}) {
    if (data) {
      console.log('data.length', data.length)
      this.isTrackOpen = data.length === 0 ? false : true;
      console.log('isTrackOpen', this.isTrackOpen)
    } else if (error) {
      console.log(error);
    }
  }

  handleSwitchView () {
    console.log('handleSwitchView');
    this.isTrackOpen = true;
  }
}