var InputField = JsonC.inherit(BaseField,{
    constructor:InputField,
    // 获取值 isNative是否返回原始值
    getVal:function(isNative){
    },
    // 重新注册ns到cellmap中
    reSignNS:function(ns){

    },
    // 验证方法
    validate:function(){

    },
    // 初始化方法
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
        this._super(conf);
        conf = {_jc_pns:'123'};
        console.log('i init');
        this.conf = conf = JsonC.extend(true,{},defaultConf,conf);
        console.log(this.conf);
        this.ns = conf._jc_pns.length>0? conf._jc_pns + '.' + conf._jc_ns :conf._jc_ns;
        this.valEl = null;
        this.titleEl = null;
        this.delEl = null;
        this.status = true;
        // 填充默认值
        if(conf._jc_defaultValue){
            this.setVal(conf._jc_defaultValue);
        }
    }
});
