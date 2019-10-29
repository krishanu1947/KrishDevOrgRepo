trigger addProjectTeamMember on Project_Team__c (after update, after insert) {


if(Trigger.isInsert){

Project__Share ps = new Project__Share() ;

ps.ParentId = trigger.new[0].Project__c ;   
ps.UserOrGroupId = trigger.new[0].User__c ; 
ps.AccessLevel = 'edit';
ps.RowCause = Schema.Project__Share.RowCause.Manual;
insert ps;
}


}