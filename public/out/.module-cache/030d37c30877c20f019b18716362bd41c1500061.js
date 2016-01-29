    
var DataTransactions = React.createClass({displayName: "DataTransactions",

    itemCreate:function(){
        console.log(" itemCreate ");
    },

    itemRead:function(){
        console.log(" itemRead ");
    },

    itemUpdate:function(){
         console.log(" itemUpdate ");
    },

    itemDelete:function(){
         console.log(" itemDelete ");
    },

    componentDidMount : function(){
        console.log("DataTransactions componentDidMount");
        Parse.initialize("JpcVjth5zlPL7iH3j9AVjLN9Wd4YVeTRNiLWaMij", "7IW7fMn3T6s3xOjgrc1xZw14ZWnkNvBMf6zRGeC3");

    },


    render: function() {
        var self=this;
        return (React.createElement("div", null, " done"));
    }

});
