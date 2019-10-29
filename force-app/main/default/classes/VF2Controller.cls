public with sharing class VF2Controller {

public List<Account> listAccs {get;set;} 

 
public VF2Controller(){

listAccs = [select id, name, rating, website from Account  ] ; 
 
}

 

}