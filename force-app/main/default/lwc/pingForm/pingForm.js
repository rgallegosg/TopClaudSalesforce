import { LightningElement } from 'lwc';
import PING_OBJECT from '@salesforce/schema/Ping__c'

import PINGING_REASON_FIELD from '@salesforce/schema/Ping__c.Pinging_Reason__c'
import PING_REMINDER_DATE_FIELD from '@salesforce/schema/Ping__c.Ping_Reminder_Date__c'
import PING_CHANNEL_FIELD from '@salesforce/schema/Ping__c.Ping_Channel__c'
import PRIMARY_RECRUITER_FIELD from '@salesforce/schema/Ping__c.Primary_Recruiter__c'
import SECONDARY_RECRUITER_FIELD from '@salesforce/schema/Ping__c.Secondary_Recruiter__c'

import labelCreatePing from '@salesforce/label/c.createPing'
import labelPrimaryRecruiter from '@salesforce/label/c.primaryRecruiter'
import labelReminderDate from '@salesforce/label/c.reminderDate'
import labelSecondaryRecruiter from '@salesforce/label/c.secondaryRecruiter'
import labelPingAssignment from '@salesforce/label/c.PingAssignment'


export default class PingForm extends LightningElement {
  pingObject = PING_OBJECT

  reason = PINGING_REASON_FIELD
  reminderDate = PING_REMINDER_DATE_FIELD
  pingchannel = PING_CHANNEL_FIELD
  primaryRecruiter = PRIMARY_RECRUITER_FIELD
  secondaryRecruiter = SECONDARY_RECRUITER_FIELD

  label = {
    createPing: labelCreatePing,
    primaryRecruiter: labelPrimaryRecruiter,
    reminderDate: labelReminderDate,
    secondaryRecruiter: labelSecondaryRecruiter,
    pingAssignment: labelPingAssignment
  }
}