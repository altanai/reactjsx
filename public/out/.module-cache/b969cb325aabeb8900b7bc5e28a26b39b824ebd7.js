    
var DataTransactions = React.createClass({

  	componentdidMount : function(){

  		Parse.initialize("JpcVjth5zlPL7iH3j9AVjLN9Wd4YVeTRNiLWaMij", "7IW7fMn3T6s3xOjgrc1xZw14ZWnkNvBMf6zRGeC3");

  	},

  	render: function() {
    	var self=this;
    	return (React.createElement("ul", null, " ",  this.props.items.map(self.createItem), " ") );
  	}

});
