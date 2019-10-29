({
    getCalendarMonthView : function(component, event, helper) {
        var selectedDate = component.get('v.selectedDate');
        var action = component.get('c.getCalendarViewFor');
        action.setParams({
            targetDateString : selectedDate.toISOString(),
            calendarViewType : component.get('v.currentView')
        });
        
        component.set('v.showSpinner', true);
        action.setCallback(this, function(response) {
            component.set('v.showSpinner', false);
            var state = response.getState();
            if(state === 'SUCCESS') {
                var result = JSON.parse(response.getReturnValue());
                component.set('v.calendarView', result);
            } else {
                console.log(response.getError());
            }
        });
        
        $A.enqueueAction(action);
    },
    createNewRecord : function(component, event, helper) {
        var createRecordEvent = $A.get('e.force:createRecord');
        
        if(createRecordEvent) {
            createRecordEvent.setParams({
                'entityApiName' : component.get('v.object')
            });
            createRecordEvent.fire();    
        } else {
         	alert('This functionality is only available in Lightning Experience or Salesforce 1 App.');   
        }
    }
})