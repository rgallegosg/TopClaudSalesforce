public with sharing class tagComponent {
    public static String SObjectName;
    
    public void setSObjectName(String s) {
        SObjectName = s;
    }
    /*
        Track: Candidate, Reason
               List of all that have Reminder date TODAY and/or Tracks that are past due 2 weeks  // 8am batch job

        Tags: Candidate, Company, Skills q coinciden 
              List when new Open Position -and- Candidates with Skills that Open position require // 8am batch job
        
        Ping: Candidate, Reason, Channel
               List of all that have Reminder date TODAY and/or Pings that are past due 2 days // 8am batch job
    */
    //Ete es el bueno
    public static List<sObject> getSObjectName() {
        List<sObject> sobjList = new List<sObject>();

        switch on SObjectName {
            when 'Tag__c' {
                //r = q + 'Company__c, Skills__c FROM Tag__c'; //Queda where pendiente jaja 
                sobjList = [SELECT Id, Candidate__c, Skills__c FROM Tag__c];
            }
            when 'Track__c' {
                sobjList = [SELECT Id, Reason__c, Track_Reminder_Date__c FROM Track__c WHERE Track_Reminder_Date__c = TODAY OR Track_Reminder_Date__c = LAST_N_WEEKS:2];
            }
            when 'Ping__c' {
                sobjList = [SELECT Id, Candidate__c, Pinging_Reason__c, Ping_Channel__c FROM Ping__c WHERE Ping_Reminder_Date__c = TODAY OR Ping_Reminder_Date__c = LAST_N_DAYS:2];
            }
        }
        return sobjList;
    }


    /*
    public List<String> getQueryCriteria(String SObjectName) {
        List<String> fs = sObject_Filter_Setting__mdt.getInstance(SObjectName);

        return fs;
    } */
    /*
    public List<sObject> getSObjectName() {
        String q = getQuery(SObjectName);
        List<sObject> sobjList = Database.query('SELECT Id, Reason__c, Track_Reminder_Date__c FROM Track__c WHERE Track_Reminder_Date__c = TODAY() OR Track_Reminder_Date__c LAST_N_WEEKS:2');

        return sobjList;
    } */
    /*
    public String generateQuery(String SObjectName) { 
        String query = 'SELECT Id, ' + String.join(getQueryCriteria(SObjectName).Field_List__c, '') + ' FROM ' + SObjectName + '__c WHERE ' + String.join(getQueryCriteria(SObjectName, '').Filter_condition__c) + ''; 
        return query;
    } */
}