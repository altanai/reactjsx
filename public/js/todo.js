var TItems = React.createClass({
  
  createItem:function(item){
      var self=this;
      return <li key = { item.id }> { item.text } < /li>;
  },

  render: function() {
    var self=this;
    return (<ul> { this.props.items.map(self.createItem) } < /ul> );
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
	      return (<span> updated at {h} : {m} : {s} </span>);
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
            <div>    
                <div >
                  <h5 > thnigs to be done goes here .. < /h5> 
                  <TItems items = { this.state.items } />
                  <form onSubmit = { this.handleSubmit } >
                    <input onChange = { this.onChange } value = {  this.state.text} /> 
                    <button > { 'Add #' + (this.state.items.length + 1)} < /button> 
                  </form> 
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