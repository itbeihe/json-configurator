var BaseField = JsonC.create({
    constructor:BaseField,
    getVal:function(){

    },
    setVal:function(){
        console.log('base set');
    },
    init:function(conf){
        var defaultConf = {
            _jc_pns:'',                     // 上级cell的namespace
            _jc_ns:'',                      // 当前元素的namespace
            _jc_cellTitle:'title',          // 当前元素的标题
            _jc_choosable:false,            // 是否可选
            _jc_dataControl:'input',        // cell 输入值的类型
            _jc_dataType:'string',          // cell 值的类型
            _jc_validate:undefined,         // cell 验证器配置
            _jc_parentNode:null,            // 父节点
            _jc_renderedFn: null,           // 渲染后callback方法
            _jc_parse:null,                 // 自定义解释方法，把cell返回值，格式化成用户需要的值
            _jc_translate:null,             // 自定义翻译方法, 把json的值，翻译成cell的值
            _jc_name:null                   // 值元素自定义name
        };
        this.conf = JsonC.extend({},defaultConf,conf);
    }
});
