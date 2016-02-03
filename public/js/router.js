
var TodoRouteController  = Backbone.Router.extend({
    routes: { 
        "todo"                     : "renderHome", 
        "todo/:title"              : "renderTodo",       
        "*path"                    : "defaultRoute"
    },

    renderHome:function() {
        console.log(" renderHome "); 
        paramObj.contentType = 'todoHome';
        this.navigate("/todo",{trigger:true});
        helper.routeHelper("TBox" , "tBoxArea");
        //ReactDOM.render( <TBox />, document.getElementById('tBoxArea'));
    },

    renderTodo:function(title) { 
        console.log(" renderTodo ");
        paramObj.contentType = 'todoContent';
        paramObj.title = title;
        this.navigate("/todo",{trigger:true});
        helper.routeHelper("TBox" , "tItemsArea");
        //ReactDOM.render( <TBox />, document.getElementById('tItemsArea'));
    },

    defaultRoute:function(path) {
        console.log(" defaultRoute "); 
        this.navigate("/",{trigger:true});
        helper.routeHelper("Application" , "main_content_area");
        //ReactDOM.render( <Application />, document.getElementById('main_content_area'));
    }
    
});

