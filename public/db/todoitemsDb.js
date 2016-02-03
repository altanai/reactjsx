var todoitemsDb = {

    create:function(obj, callback ){
        var self=this;
        var TodoDS = Parse.Object.extend("Todo");
		var todoObj = new TodoDS();

		todoObj.set("item", 	obj.text);
		todoObj.set("status", 	obj.status);
		todoObj.set("priority", obj.priority);
		todoObj.set("title", 	obj.title);
		todoObj.save(null, {
		  	success: function(result) {
	   		    callback( result );
		  	},
		  	error: function(todoObj, error) {
		    	console.log('Failed to create new object, with error code: ' , error.message);
		  	}
		});
    },

    updateStatus:function(obj , callback){
        var self=this;
        var TodoDS = Parse.Object.extend("Todo");
		var todoObj = new TodoDS();

		todoObj.set("item", obj.get("item"));
		todoObj.set("status", obj.get("status"));
		todoObj.save(null, {
		  	success: function(todoObj) {
		  		todoObj.set("status", "deleted");
		  		todoObj.save();
		  		if(callback!=null) callback(todoObj);
		  	},
		  	error: function(todoObj, error) {
		    	console.log('Failed to delete : ' + error.message);
		  	}
		});
    },

	read:function(text, callback){
        var TodoDS = Parse.Object.extend("Todo");
		var query = new Parse.Query(TodoDS);
		query.equalTo("item", text);
		query.limit(1);
		query.find( {
		  	success: function(result) {
				callback(result);
		  	},
		  	error: function(object, error) {
		  		console.log("error" , error.code , error.message);
		  	}
		});
    },

    readAll:function (title , callback){
    	var self=this;
        var TodoDS = Parse.Object.extend("Todo");
        var query = new Parse.Query(TodoDS);
        query.descending("createdAt");
        query.equalTo("title", title);
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

