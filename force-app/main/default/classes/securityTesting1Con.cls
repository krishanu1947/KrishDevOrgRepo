public with sharing class securityTesting1Con {


List<Lead> leads;

        public List<Lead> getLeads() {
                if(leads == null) leads = [SELECT Name, Email, Fax FROM Lead where Fax<> ''];
                System.debug(leads); 
                return leads;
        }


}