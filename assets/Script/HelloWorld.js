cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        
    },

    // called every frame
    update: function (dt) {

    },
    
    save: function() {
        cc.sys.localStorage.setItem('name', "Harry Potter");
        cc.sys.localStorage.setItem('gold', 1500.85);
        cc.sys.localStorage.setItem('level', 45);
    },
    
    read: function(){
        var name = cc.sys.localStorage.getItem('name');
        var gold = cc.sys.localStorage.getItem('gold');
        var level = cc.sys.localStorage.getItem('level');
        
        var lblName = cc.find("Canvas/layout_value/lblName").getComponent(cc.Label);
        var lblGold = cc.find("Canvas/layout_value/lblGold").getComponent(cc.Label);
        var lblLevel = cc.find("Canvas/layout_value/lblLevel").getComponent(cc.Label);
        
        lblName.string = name;
        lblGold.string = gold;
        lblLevel.string = level;
    },
    
    clear: function(){
        cc.sys.localStorage.removeItem('name');
        cc.sys.localStorage.removeItem('gold');
        cc.sys.localStorage.removeItem('level');
        
        var lblName = cc.find("Canvas/layout_value/lblName").getComponent(cc.Label);
        var lblGold = cc.find("Canvas/layout_value/lblGold").getComponent(cc.Label);
        var lblLevel = cc.find("Canvas/layout_value/lblLevel").getComponent(cc.Label);
        
        lblName.string = "No data";
        lblGold.string = "No data";
        lblLevel.string = "No data";
    }
});
