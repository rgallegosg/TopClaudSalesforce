import { LightningElement } from 'lwc';
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

export default class TrackForm extends LightningElement {
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
}