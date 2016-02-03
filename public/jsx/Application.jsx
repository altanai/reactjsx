var Application = React.createClass({

    componentDidMount:function(){
        console.log("applicationjsx mounted ");
    },

    render:function(){
        return (
            <div>

                <header id="headerArea" style={{background: "orange"}}>  
                    <AppHeader/>  
                </header>
                
                <div>
                    <div id="tBoxArea" style={{background : "pink"}}></div>
                    <div id="tItemsArea" style={{backgroud : "grey"}}></div>
                </div>

                <div id="tOverlayArea"></div>

            </div>
        );
    }
});

