var helper ={

	routeHelper:function(JSXClassName , params , htmlElementName){
		console.log( "route helper =-> " , JSXClassName , " : " , htmlElementName);
		JSXClassName = React.createElement(window[JSXClassName], params );
        ReactDOM.render( JSXClassName , document.getElementById(htmlElementName));
    }
}