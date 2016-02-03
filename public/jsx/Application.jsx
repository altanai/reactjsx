var Application = React.createClass({

    componentDidMount:function(){
        console.log("applicationjsx mounted ");
    },

    render:function(){
        return (
            <div> 
                <div>
                    <div id="tBoxArea"></div>
                    <div id="tItemsArea"></div>
                </div>
            </div>
        );
    }
});

