var helper ={

	routeHelper:function(JSXClassName , htmlElementName){
		console.log( "route helper =-> " , JSXClassName , " : " , htmlElementName);
		JSXClassName = React.createElement(window[JSXClassName], '' );
        ReactDOM.render( JSXClassName , document.getElementById(htmlElementName));
    }
}