
var TodoRouteController  = Backbone.Router.extend({
    paramObj:{
        contentType : null , 
        title       : null , 
        sttaus      : null ,
        action      : null
    },

    routes: { 
        "todo"                      : "renderTodo", 
        "todo/:title"               : "renderTodoItem", 
        "todo/:title/:action"       : "renderTodoItemAction", 
        "todo/:title/filter/:status": "renderTodoItemStatus",       
        "*path"                     : "defaultRoute"
    },

    renderTodo:function() { 
        var self=this ; 
        console.log(" renderTodo ");
            self.paramObj.contentType = 'todoOuter';
            this.navigate("/todo",{trigger:true});
            helper.routeHelper("TBox" , self.paramObj , "tBoxArea");
    },

    renderTodoItem:function(title ) { 
        var self=this ; 
        console.log(" renderTodoItem ");
        if(title!=null ){
            self.paramObj.contentType = 'todoContent';
            self.paramObj.title = title;
            this.navigate("/todo/#"+title,{trigger:true});
        }
        helper.routeHelper("TBox" , paramObj , "tItemsArea");
    },

    renderTodoItemAction:function(title , action) { 
        var self=this ; 
        console.log(" renderTodoItemAction ");
        if(title!=null && status!=null){
            self.paramObj.contentType = 'renderTodoItemAction';
            self.paramObj.title = title;
            self.paramObj.action = action;
            this.navigate("/todo/#"+title+"/#"+action,{trigger:true});
        }
        helper.routeHelper("TBox" , self.paramObj , "tItemsArea");
    },

    renderTodoItemStatus:function(title , status) { 
        var self=this ; 
        console.log(" renderTodoItemStatus ");
        if(title!=null && status!=null){
            self.paramObj.contentType = 'todoContent';
            self.paramObj.title = title;
            self.paramObj.status = status;
            this.navigate("/todo/#"+title+"/filter/#"+status,{trigger:true});
        }
        helper.routeHelper("TBox" , self.paramObj , "tItemsArea");
    },

    defaultRoute:function(path) {
        var self=this ;
        console.log(" defaultRoute "); 
        helper.routeHelper("Application" , self.paramObj , "main_content_area");
        this.navigate("/todo",{trigger:true});
    },

    loadLink:function(evt) {
        var url = $(evt.currentTarget).attr('href').replace('#','');
        var target = $(evt.currentTarget).attr("target");
        evt.stopPropagation();
        evt.preventDefault(); 
        todoRouteController.navigate(url,{trigger:true});
    },
    
});

