public class CalloutController {

public String retString {get;set;}  
public CalloutController (){

HttpRequest req = new HttpRequest();
req.setEndpoint('callout:Gmail');
req.setMethod('GET');
Http http = new Http();
HTTPResponse res = http.send(req);
System.debug(res.getBody());

retString = res.getBody() ; 

} 

}