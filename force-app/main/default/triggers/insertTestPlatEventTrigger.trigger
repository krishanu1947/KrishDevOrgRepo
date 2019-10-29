trigger insertTestPlatEventTrigger on TestPlatformEvent__e (after insert) {


Case my_case = new Case() ; 
my_case.subject = 'Testing Platform Event' ; 
my_case.Status = 'New' ;
my_case.origin = 'Email' ;
insert my_case ; 
}