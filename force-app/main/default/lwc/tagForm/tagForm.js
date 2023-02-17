import { LightningElement } from 'lwc';
import TAG_OBJECT from '@salesforce/schema/Tag__c'
import REASON_FIELD from '@salesforce/schema/Tag__c.Reason__c'
import TAG_REMINDER_DATE_FIELD from '@salesforce/schema/Tag__c.Tag_Reminder_Date__c'
import PRIMARY_RECRUITER_FIELD from '@salesforce/schema/Tag__c.Primary_Recruiter__c'
import SECONDARY_RECRUITER_FIELD from '@salesforce/schema/Tag__c.Secondary_Recruiter__c'

export default class TagForm extends LightningElement {
    trackObject = TAG_OBJECT
    reminderDate = TAG_REMINDER_DATE_FIELD

    value = 'considered';
    
    get options() {
        return [
            { label: 'Considered But Not Interviewed', value: 'considered' },
            { label: 'Declined Interview', value: 'declined' },
            { label: 'Failed Background', value: 'failed' },
            { label: 'High Demanded Skills', value: 'highDemanded' },
            { label: 'Not available', value: 'notAvailable' },
            { label: 'Rejected Offer', value: 'rejectedOffer' },
        ];
    }
    handleChange(event) {
        this.value = event.detail.value;
    }
}