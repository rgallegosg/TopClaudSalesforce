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
    public sObject_Filter_Setting__mdt getQueryCriteria(String SObjectName) {
        sObject_Filter_Setting__mdt fs = sObject_Filter_Setting__mdt.getInstance(SObjectName);

        return fs;
    }

    public List<sObject> getSObjectName() {
        //String myTestString = 'Tag__c';
        //String sObjectLabel = Schema.getGlobalDescribe().get(SObjectName).getDescribe().getLabel();
        //String SObjectAPIName = 
        List<sObject> sobjList = Database.query(generateQuery(SObjectName));

        return sobjList;
    } 

    public String generateQuery(String SObjectName) { 
        String query = 'SELECT Id,' + getQueryCriteria(SObjectName).Field_List__c + ' FROM ' + SObjectName + '__c WHERE ' + getQueryCriteria(SObjectName).Filter_condition__c + ''; 
        return query;
    }
}