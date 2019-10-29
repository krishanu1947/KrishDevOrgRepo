trigger DupTrigger on DuplicateRecordItem (after insert) {

    for (DuplicateRecordItem dri : Trigger.new){
        
        Project__c  p = new Project__c() ; 
        p.id = dri.RecordId ; 
        p.Duplicate_set_id__c = dri.DuplicateRecordSetId ; 
        update p ; 
    }
    
}