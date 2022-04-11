public with sharing class apexManager {
    @AuraEnabled(cacheable=true)
    
    public static List<Electronics_Item__c> getEItems(){
        return [SELECT Id, Name, Type__c, Price__c FROM Electronics_Item__c limit 10];
    }

    @AuraEnabled(cacheable=true)

    public static List<Electronics_Item__c> getNoOfEItems(integer numOfRecords){
        return [SELECT Id, Name, Type__c, Price__c FROM Electronics_Item__c limit :numOfRecords];
    }
}

 