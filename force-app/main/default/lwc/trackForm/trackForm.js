import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import TRACK_OBJECT from '@salesforce/schema/Track__c'
import REASON_FIELD from '@salesforce/schema/Track__c.Reason__c'
import TRACK_REMINDER_DATE_FIELD from '@salesforce/schema/Track__c.Track_Reminder_Date__c'
import PRIMARY_RECRUITER_FIELD from '@salesforce/schema/Track__c.Primary_Recruiter__c'
import SECONDARY_RECRUITER_FIELD from '@salesforce/schema/Track__c.Secondary_Recruiter__c'
import labelCreateTrack from '@salesforce/label/c.createTrack'
import labelPrimaryRecruiter from '@salesforce/label/c.primaryRecruiter'
import labelReminderDate from '@salesforce/label/c.reminderDate'
import labelSecondaryRecruiter from '@salesforce/label/c.secondaryRecruiter'
import labelTrackAssignment from '@salesforce/label/c.TrackAssignment'

const SUCCESS_TITLE = 'Track created!';
const SUCCESS_VARIANT = 'success';

export default class TrackForm extends LightningElement {
  @api contactId
  reason = REASON_FIELD
  trackObject = TRACK_OBJECT
  reminderDate = TRACK_REMINDER_DATE_FIELD
  primaryRecruiter = PRIMARY_RECRUITER_FIELD
  secondaryRecruiter = SECONDARY_RECRUITER_FIELD

  label = {
    createTrack: labelCreateTrack,
    primaryRecruiter: labelPrimaryRecruiter,
    reminderDate: labelReminderDate,
    secondaryRecruiter: labelSecondaryRecruiter,
    trackAssignment: labelTrackAssignment
  }

  handleSubmit (event) {
    event.preventDefault();
    const fields = event.detail.fields;
    console.log('fields', fields)
    console.log('typeof fields', typeof fields)
    fields.Candidate__c = this.contactId;
    this.template.querySelector('lightning-record-edit-form').submit(fields);
  }

  handleSuccess () {
    console.log('handleSuccess')
    this.dispatchEvent(
      new ShowToastEvent({
          title: SUCCESS_TITLE,
          variant: SUCCESS_VARIANT
      })
    );
    this.handleReset();
    this.dispatchEvent(new CustomEvent('switchVeiw'));
  }

  /**
     * handleReset
     * 
     * @description Reset all lightning input fields displayed on the form
     */
  handleReset() {
    const inputFields = this.template.querySelectorAll(
        'lightning-input-field'
    );
    if (inputFields) {
        inputFields.forEach(field => {
            field.reset();
        });
    }
}
}