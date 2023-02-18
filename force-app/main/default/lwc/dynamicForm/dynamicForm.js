import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const TRACK = 'Track'
const PING = 'Ping'
const TAG = 'Tag'

export default class DynamicForm extends LightningElement {
  @api recordId;
  @api baseObject;

  get isTrack() {
    return this.baseObject === TRACK
  }

  get isPing() {
    return this.baseObject === PING
  }

  get isTag() {
    return this.baseObject === TAG
  }
}