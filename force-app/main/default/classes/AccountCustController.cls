/*
Changed in VSCODE
 */

public class AccountCustController {

public Account acc {get;set;} 

public String accsite {get;set;} 
 
 
public AccountCustController(){

acc = [select id, name, rating, website from Account where id = '0014J000004EnB6' ] ; 
accsite = acc.website ; 
}

 

}