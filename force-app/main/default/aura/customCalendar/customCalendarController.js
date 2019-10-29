({
	afterScriptsLoaded : function(component, event, helper) {
        component.set('v.selectedDate', moment());
        component.set('v.calendarViewList', [
            { label : 'Day', value : 'dailyView', selected : false },
            { label : 'Week', value : 'weeklyView', selected : false },
            { label : 'Month', value : 'monthlyView', selected : true }
        ]);
        
        helper.getCalendarMonthView(component, event, helper);
    },
    handleMenuSelect: function(component, event, helper) {
        var viewName = event.getParam('value');
        
        if(component.get('v.currentView') !== viewName) {
            var calendarViewList = component.get('v.calendarViewList');
            var menuItemComponent = event.getSource();
            calendarViewList.forEach(function(view) {
                view.selected = (view.value === viewName);
            });
            
            component.set('v.currentView', viewName);
            component.set('v.calendarViewList', calendarViewList);
            menuItemComponent.set('v.visible', false);
            helper.getCalendarMonthView(component, event, helper);
        }
    },
    onPrevClick : function(component, event, helper) {
        var selectedDate = component.get('v.selectedDate');
        var currentView = component.get('v.currentView');
        if(currentView === 'monthlyView') {
            selectedDate.add('months', -1);
        } else if(currentView === 'weeklyView') {
            selectedDate.add('weeks', -1);
        } else {
            selectedDate.add('days', -1);
        }
        
        component.set('v.selectedDate', selectedDate);
        helper.getCalendarMonthView(component, event, helper);
    },
    onNextClick : function(component, event, helper) {
        var selectedDate = component.get('v.selectedDate');
        var currentView = component.get('v.currentView');
        if(currentView === 'monthlyView') {
            selectedDate.add('months', 1);
        } else if(currentView === 'weeklyView') {
            selectedDate.add('weeks', 1);
        } else {
            selectedDate.add('days', 1);
        }
        
        component.set('v.selectedDate', selectedDate);
        helper.getCalendarMonthView(component, event, helper);
    },
    onTodayClick : function(component, event, helper) {
        component.set('v.selectedDate', moment());
        helper.getCalendarMonthView(component, event, helper);
    },
    onCalendarDayClick : function(component, event, helper) {
        var calendarDayArray = component.find('CalendarDay');
        calendarDayArray.forEach(function(calendarDay) {
            $A.util.removeClass(calendarDay.getElement(), 'slds-is-selected');
        });
        
        $A.util.addClass(event.currentTarget, 'slds-is-selected');
    },
    onCalendarDayDblClick : function(component, event, helper) {
        var calendarDayArray = component.find('CalendarDay');
        calendarDayArray.forEach(function(calendarDay) {
            $A.util.removeClass(calendarDay.getElement(), 'slds-is-selected');
        });
        
        $A.util.addClass(event.currentTarget, 'slds-is-selected');
        helper.createNewRecord(component, event, helper);
    },
    onCreateNewRecordClick : function (component, event, helper) {
        helper.createNewRecord(component, event, helper);
    }
})