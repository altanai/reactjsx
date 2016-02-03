'use strict';

var BootstrapButton = React.createClass({
  render: function() {
    return (
      <a {...this.props}
        href="javascript:;"
        role="button"
        className={(this.props.className || '') + ' btn'} />
    );
  }
});

var BootstrapModal = React.createClass({

  componentDidMount: function() {
        $(this.refs.root).modal({backdrop: 'static', keyboard: false, show: false});
  },
  componentWillUnmount: function() {
        $(this.refs.root).off('hidden', this.handleHidden);
  },
  close: function() {
        var self=this;
        todoRouteController.navigate("/todo",{trigger:false});
        $(this.refs.root).modal('hide');
  },
  open: function() {
        var self=this;
        todoRouteController.navigate("/todo/"+self.props.title,{trigger:false});
        $(this.refs.root).modal('show');
  },
  render: function() {
    var confirmButton = null;
    var cancelButton = null;

    if (this.props.confirm) {
          confirmButton = (
            <BootstrapButton onClick={this.handleConfirm} className="btn-primary">
              {this.props.confirm}
            </BootstrapButton>
          );
    }
    if (this.props.cancel) {
          cancelButton = (
            <BootstrapButton onClick={this.handleCancel} className="btn-default">
              {this.props.cancel}
            </BootstrapButton>
          );
    }

    return (
      <div className="modal fade" ref="root">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" onClick={this.handleCancel}> &times; </button>
              <h3>{this.props.title}</h3>
            </div>

            <div className="modal-body">
              {this.props.children}
            </div>
            
            <div className="modal-footer">
              {cancelButton}
              {confirmButton}
            </div>
          </div>
        </div>
      </div>
    );
  },
  handleCancel: function() {
    if (this.props.onCancel) {
        this.props.onCancel();
    }
  },
  handleConfirm: function() {
    if (this.props.onConfirm) {
        this.props.onConfirm();
    }
  }
});

var BoxModal = React.createClass({
    getInitialState: function() {
        return {
            title: this.props.title
        }
    },

    handleCancel: function() {
        if (confirm('Are you sure you want to detroy this Todo list?')) {
            //tododb update 
            this.refs.modal.close();
        }
    },

    render: function() {
        var modal = null;
        var self=this;
        console.log(" BoxModal " , self.state.title);
        modal = (
          <BootstrapModal ref="modal"   confirm="OK"  cancel="Destroy" 
            onCancel={this.handleCancel} onConfirm={this.closeModal}  title={ self.state.title}>
                    <div id="container"> 
                        <TList title={self.state.title} /> 
                    </div>
          </BootstrapModal>
        );
        return (
          <div className="example">
            {modal}
            <BootstrapButton onClick={this.openModal} className="btn-default">
              {self.state.title}
            </BootstrapButton>
          </div>
        );
    },
    
    openModal: function() {
        this.refs.modal.open();
    },
    
    closeModal: function() {
        this.refs.modal.close();
    }
});


/*--------------non bootstrao stuff -------------*/

var TItems = React.createClass({
    getInitialState: function() {
        return {
            status: this.props.items.status
        }
    },

    itemUpdate:function(){
         console.log(" itemUpdate ");
    },

    itemUpdateStatus:function(item){
    	var self=this;
        todoitemsDb.updateStatus(item , null);
		self.state.status="deleted";
 		self.forceUpdate();
    },

  	createItem:function(item){
    	var self=this;	
    	if(self.state.status!="deleted"){
	      	return (
	      		<div className="itemBox">
	      		    <div>
                        <input type="checkbox" key = {"done"+item.id} value="done"/> 
                        <span key = {"delete"+item.id}  onClick={this.itemUpdateStatus.bind(this, item)}> X </span>
                    </div>
                    <div key = {item.id}> { item.text } < /div>
	      			<div style={{fontSize: "10px" , color: "grey"}}>
	      				<span> Created At : {item.createdAt } </span> <br/>
	      				<span> Updated At : {item.updatedAt } </span>
	      			</div>

	      		</div>);
      	}
  	},

  	componentDidMount: function(){
        var self = this;
        console.log(" component did mount ");
  	},

	render: function() {
	    var self=this;
	    return ( <div> { self.createItem(this.props.items) } </div>);
	}
});


var TList = React.createClass({

	getInitialState: function() {
	    return {
	      summary: "...",
	      items: [],
          filter: (<div></div>),
	      title : this.props.title,
	      text: '',
	    };
	 },

    itemCreate:function( _text  , _status, _priority){
        var self=this;
        //todoRouteController.navigate("/todo/"+title+"/create",{trigger:true});
        var obj={
        	text			: _text,
        	status			: _status,
        	priority		: _priority,
        	title           : self.state.title
        };
	   	self.state.items.push( todoitemsDb.create(obj ,self.renderItems ) );
    },

    itemReadAll:function(){
    	var self=this;
        
    	todoitemsDb.readAll( self.state.title , function(results){
    		if(results.length>0){
	            for (var i = 0; i < results.length; i++) {
	                self.state.items.push( self.renderItems( results[i] ) );
	            }
                self.state.filter=(
                        <div>
                            <button type="button" className="btn btn-info" >Easy</button>
                            <button type="button" className="btn btn-warning">Medium</button>
                            <button type="button" className="btn btn-danger">Urgent</button>
                        </div>);
                self.state.summary= "total "+ results.length + "items in this todo";
	        }else{
	        	self.state.items.push(<div> </div>);
                self.state.filter=(<div></div>);
                self.state.summary="add a todo";
	        }
        	self.forceUpdate();
    	} );
    },

	/*
    itemRead:function(text){
        var self=this;
		self.state.items.push( self.renderItems( result ) );
		self.forceUpdate();
    },
	*/
	
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
	
	renderItems:function(obj){
		var self=this;
		var obj={
	    	text 		: obj.get('item'),
	    	id 			: self.state.items.length++ , 
	    	status		: obj.get('status'),
	    	createdAt 	: String(obj.createdAt),
	    	updatedAt	: String(obj.updatedAt)
	    };
		return( <TItems items = {obj} /> );
	},

 	handleSubmit: function(e) {
	    var self=this;

	    var text = $('#textBoxItem').val();
	    var priority = "medium" ;

        self.itemCreate(text ,  "created"  , priority );

	    $('#textBoxItem').val("");
	    self.forceUpdate();
  	},
  
  	componentDidMount: function(){
        var self = this;
        self.itemReadAll();

        $('#textBoxItem').keypress(function(event){
            if(event.keyCode == 13){
                self.handleSubmit();
            }
        });   
  	},
    
    render: function() {
        var self=this;
   
        return ( 
            <div>    
                <div classNme="createItemClass">
                    <input id="textBoxItem"/>
                    <select>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='urgent'>Urgent</option>
                    </select>
                </div>

                <div className="showItemsClass">
                    <div id="filter"> {self.state.filters} </div>
                    <div id="items">{ self.state.items }</div>
                </div>
                
                <div className="summaryClass"> 
                  	<div> { self.state.summary }</div>
                </div>
            </div>    
        );
    }
});


var TBox = React.createClass({
    getInitialState: function() {
        return {
            todoBoxList:[],
            rendercreationArea:<div></div>
        }
    },

    tBoxescreate:function(title){
        var self=this;
        todoboxesDb.create(title , self.rendertBoxes );
        self.forceUpdate();
    },

    tBoxesReadAll:function(results){
        var self=this;
        if(results.length>0){
            for (var i = 0; i < results.length; i++) {
                self.rendertBoxes( results[i] ) ;
            }
        }else{
            self.state.todoBoxList.push(self.rendercreationBox) ;
        }
        self.forceUpdate();
    },

    rendercreationBox:function(){
        var self=this;
        return(
            <div id="createTodoBox"> 
                <input id="inputTitleTodoBox"/>
            </div> 
        );
    },

    rendertBoxes:function(obj){
        var self=this;
        self.state.todoBoxList.push( <BoxModal title={obj.get('title')}/>);
    },

 	handleSubmit: function(e) {
	    var self  = this;
        var title = $("#inputTitleTodoBox").val();
        self.tBoxescreate(title );
	    $('#inputTitleTodoBox').val("");
	    self.forceUpdate();
  	},

    componentDidMount: function(){ 
        var self=this;
        todoboxesDb.readAll(self.tBoxesReadAll);
        $('#inputTitleTodoBox').keypress(function(event){
            if(event.keyCode == 13){
                self.handleSubmit();
            }
        }); 
    },

    render: function() {
        var self=this;
        self.state.rendercreationArea=self.rendercreationBox();
        Parse.initialize("JpcVjth5zlPL7iH3j9AVjLN9Wd4YVeTRNiLWaMij", "7IW7fMn3T6s3xOjgrc1xZw14ZWnkNvBMf6zRGeC3");
        return ( 
            <div id="mainArea">
                <div id="creationArea"> { self.state.rendercreationArea }</div>
                <div id="boxListArea"> { self.state.todoBoxList } </div>  
            </div>
        );
    },
});