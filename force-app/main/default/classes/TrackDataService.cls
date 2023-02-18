public with sharing class TrackDataService {
  private static final String OPEN = 'Open';

  @AuraEnabled(cacheable=true)
  public static List<Track__c> getActiveTrackForContact(String contactId) {
    try {
      List<Track__C> tracks = [SELECT Id, Status__c, Candidate__c
                                FROM Track__c
                                WHERE Candidate__c = :contactId
                                AND Status__c = :OPEN
                              ];
      return tracks;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}