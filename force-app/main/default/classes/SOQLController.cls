public class SOQLController {
    public String name {
        get { return name;}
        set { name = value;}
    }
    public List<Contact> queryResult{get;set;}
     
    public PageReference query() {
        //String qryString = 'SELECT Id, Name FROM Contact WHERE ' + '(IsDeleted = true and Name like \'%' + name + '%\')';
        //queryResult = Database.query(qryString);
        
        //String qryString = 'SELECT Id, Name FROM Contact WHERE ' + '(IsDeleted = true and Name like \'%' + name + '%\')';
        queryResult = [SELECT Id, Name FROM Contact WHERE (IsDeleted = true and Name like : name) ];
        
        return null;
    }
}