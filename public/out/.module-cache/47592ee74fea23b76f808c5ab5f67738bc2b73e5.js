var TItems = React.createClass({displayName: "TItems",
  
  createItem:function(item){
      var self=this;
      return React.createElement("li", {key:  item.id}, " ",  item.text, " ");
  },

  render: function() {
    var self=this;
    return (React.createElement("ul", null, " ",  this.props.items.map(self.createItem), " ") );
  }

});


var TList = React.createClass({displayName: "TList",

	getInitialState: function() {
	    return {
	      summary: "please add something ",
	      items: [],
	      text: ''
	    };
	  },

	  addZero: function (i) {
	      if (i < 10) {
	          i = "0" + i;
	      }
	      return i;
	  },

	  createSummary: function(){
	    console.log("summary");
	      var d = new Date();
	      var h = this.addZero(d.getHours());
	      var m = this.addZero(d.getMinutes());
	      var s = this.addZero(d.getSeconds());
	      return (React.createElement("span", null, " updated at ", h, " : ", m, " : ", s, " "));
	  },
	  
	  onChange: function(e) {
	    this.setState({
	      text: e.target.value
	    });
	  },
  
 	handleSubmit: function(e) {
	    e.preventDefault();
	    
	    var nextItems = this.state.items.concat([{  
	      text: this.state.text,
	      id: Date.now()
	    }]);
		

	    var nextText = '';
	    this.setState({
	      items: nextItems,
	      text: nextText,
	      summary : this.createSummary()
	   });
  	},
  

  	componentDidMount: function(){
        var self = this;
        console.log(" compoenet did mount ");
        //donothing
        self.forceUpdate();
  	},
    
    render: function() {
        var self=this;
   
        return ( 
            React.createElement("div", null, 
                React.createElement("div", null, 
                  React.createElement("h5", null, " thnigs to be done goes here .. "), 
                  React.createElement(TItems, {items:  this.state.items}), 
                  React.createElement("form", {onSubmit:  this.handleSubmit}, 
                    React.createElement("input", {onChange:  this.onChange, value:  this.state.text}), 
                    React.createElement("button", null, " ",  'Add #' + (this.state.items.length + 1), " ")
                  )
                ), 
                
                React.createElement("div", null, 
                  React.createElement("h4", null, ": - "), 
                  React.createElement("div", null, " ",  self.state.summary)
                )
            )    
        );
    }
});


ReactDOM.render( React.createElement(TList, null) , document.getElementById("container"));