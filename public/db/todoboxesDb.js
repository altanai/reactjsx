var todoboxesDb = {

    create:function(text  , callback ){
        var self=this;
        var TodoDS = Parse.Object.extend("TodoBox");
        var todoObj = new TodoDS();

        todoObj.set("title", text);

        todoObj.save(null, {
            success: function(obj) {
                callback(obj);
            },
            error: function(obj, error) {
              console.log('Failed to create new object, with error code: ' , error.message);
            }
        });
    },

    read:function(text){
        var self=this;
        var TodoDS = Parse.Object.extend("TodoBox");
        var query = new Parse.Query(TodoDS);
        query.equalTo("title", text);
        query.find( {
            success: function(results) {
                callback(obj);
            },
            error: function(object, error) {
              console.log("error" , error.code , error.message);
            }
        });
    },

    readAll:function (callback){
        var self=this;
        var TodoDS = Parse.Object.extend("TodoBox");
        var query = new Parse.Query(TodoDS);
        query.descending("createdAt");
        query.find( {
            success: function(results) {
                callback(results);
            },
            error: function(object, error) {
                console.log("error" , error.code , error.message);
            }

        });
    }
}

