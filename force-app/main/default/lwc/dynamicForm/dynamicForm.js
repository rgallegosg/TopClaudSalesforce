import { LightningElement, api } from 'lwc';

const TRACK = 'Track'
const PING = 'Ping'
const TAG = 'Tag'

export default class DynamicForm extends LightningElement {
  @api baseObject

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