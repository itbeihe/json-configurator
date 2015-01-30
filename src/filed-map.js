var FiledMap = JsonC.create({
    // 初始化
    init:function(){
        this.filedMap = {};
        this.rootNS = [];
    },
    // 获取对应节点
    getCell:function(ns){
        return this.filedMap[ns];
    },
    // 设置一个节点
    setCell:function(ns,obj){
        var filedMap = this.filedMap;
        filedMap[ns] = obj;
    },
    // 删除一个节点
    removeCell:function(ns){
        delete this.filedMap[ns];
    },
    // 获取一个底层namesapce
    getRootNS:function(){
        return 'jc'+this.rootNS.length;
    }
});
