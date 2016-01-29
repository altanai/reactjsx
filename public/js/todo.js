var TItems = React.createClass({


    itemUpdate:function(){
         console.log(" itemUpdate ");
    },

    itemDelete:function(){
         console.log(" itemDelete ");
    },

  	createItem:function(item){
    	var self=this;
    	console.log( " item " , item.id  , item.text);

       	//var key = Date.now();
      	return (<li key = {item.id}> { item.text } < /li>);
  	},
  	componentDidMount: function(){
        var self = this;
        console.log(" compoenet did mount ");
        //self.forceUpdate();
  	},
	render: function() {
	    var self=this;
	    return (<ul> { self.createItem(this.props.items) } < /ul> );
	}

});


var TList = React.createClass({

	getInitialState: function() {
	    return {
	      summary: "please add something ",
	      items: [],
	      text: ''
	    };
	 },


    itemCreate:function(text ){
        console.log(" itemCreate ");
        var self=this;
        var TodoDS = Parse.Object.extend("Todo");
		var todoObj = new TodoDS();

		todoObj.set("item", text);

		todoObj.save(null, {
		  	success: function(todoObj) {
		    	console.log('New object created with objectId: ' + todoObj.item);
		  	},
		  	error: function(todoObj, error) {
		    	console.log('Failed to create new object, with error code: ' + error.message);
		  	}
		});
    },

    itemRead:function(){
        console.log(" itemRead ");
        var self=this;
        var TodoDS = Parse.Object.extend("Todo");
		var query = new Parse.Query(TodoDS);
		query.find( {
		  success: function(results) {
			/*		   
			var item 		= todoObj.get("item");
			var timestamp 	= todoObj.get("timestamp");
			var objectId 	= todoObj.id;
			var updatedAt 	= todoObj.updatedAt;
			var createdAt 	= todoObj.createdAt;*/
			console.log( "todoObjs" , results , " results.length " , results.length );

			for (var i = 0; i < results.length; i++) {
		       var object = results[i];
		       var text=object.get('item');
		       console.log(object.id + ' - ' + text);
		       self.state.items.push( self.renderItems( text ) );
		    }
		    self.forceUpdate();

		  },
		  error: function(object, error) {
		  	console.log("error" , error.code , error.message);
		  }
		});
    },

	addZero: function (i) {
	    if (i < 10) {
	        i = "0" + i;
	    }
	    return i;
	},

	createSummary: function(){
	    var d = new Date();
	    var h = this.addZero(d.getHours());
	    var m = this.addZero(d.getMinutes());
	    var s = this.addZero(d.getSeconds());
	    return (<span> updated at {h} : {m} : {s} </span>);
	},
	
	renderItems:function(val){
		var self=this;
		console.log("renderItems");
		var obj={
	    	text: val,
	    	id : self.state.items.length++
	    	//id: Date.now()
	    };
	    console.log("object " , obj);
		return( <TItems items = {obj} /> );
	},

 	handleSubmit: function(e) {
	    var self=this;
	    console.log(" handleSubmit ");
	    var text = $('#textBox').val();
        self.itemCreate(text);
	    self.state.items.push( self.renderItems(text) );
	    var text = $('#textBox').val("");
	    self.forceUpdate();
  	},
  

  	componentDidMount: function(){
        var self = this;
        Parse.initialize("JpcVjth5zlPL7iH3j9AVjLN9Wd4YVeTRNiLWaMij", "7IW7fMn3T6s3xOjgrc1xZw14ZWnkNvBMf6zRGeC3");
        self.itemRead();
        $('#textBox').keypress(function(event){
            if(event.keyCode == 13){
                self.handleSubmit();
            }
        });   
  	},
    
    render: function() {
        var self=this;
   
        return ( 
            <div>    
                <div >
                  	<h5 > thnigs to be done goes here .. < /h5> 
                  	{ self.state.items }
                    <input id="textBox"  /> 
                </div>
                
                <div> 
                  	<h4>: - </h4>
                  	<div> { self.state.summary }</div>
                </div>
            </div>    
        );
    }
});


ReactDOM.render( <TList /> , document.getElementById("container"));