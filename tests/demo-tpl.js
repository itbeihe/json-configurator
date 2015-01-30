(function(G,undefined){
var extend;
if(window.JC){
    extend = window.JC.$.extend;
}else if($&& $.extend){
    extend = $.extend;;
}
var commonTpl = {
    "_jc_ns":"ECS",
    "_jc_dataControl":"object",
    "_rid":"1001",
    "usemonitors":{
        "_jc_cellTitle":"前端过滤器:",
        "_jc_dataType":"string",
        "_jc_dataControl":"multiple",
        "_jc_multipletValues":["MotuImg_destroy","MotuImg_refresh","MotuImg_resize","MotuImg_move","MotuImg_show","MotuImg_hide"],
        "_jc_defaultValue":"MotuImg_destroy MotuImg_refresh MotuImg_resize MotuImg_move",
        "_jc_translate":function(cellValue){
            var customValue;
            customValue = cellValue.join(' ');
            return customValue;
        },
        "_jc_parse":function(customValue){
            var cellVale;
            cellVale = customValue.split(' ');
            return cellVale;
        }
    },
    "rule":{
        "_jc_dataControl":"object",
        "_jc_cellTitle":"投放限制:",
        "dynamic": {
            "_jc_cellTitle":"是否自适应:",
            "_jc_dataType":'boolean',
            "_jc_dataControl":"select",
            "_jc_selectValues":[true,false],
            "_jc_selectDes":["是","否"]
        },
        "seq": {
            "_jc_cellTitle":"生效图片位置:",
            "_jc_dataType":"string",
            "_jc_dataControl":"select",
            "_jc_selectValues":['first','last','all'],
            "_jc_selectDes":["第1张图片","最后1张图片","所有图片"],
            "_jc_defaultValue":'first'
        },
        "width": {
            "_jc_dataControl":"object",
            "_jc_cellTitle":"宽度:",
            "_jc_choosable":true,
            "_jc_choosable_show":true,
            "_jc_optionTip":"选择另一个限制",
            "gte": {
                "_jc_cellTitle":"大于等于",
                "_jc_dataType":"number",
                "_jc_choosable":true,
                "_jc_choosable_show":true,
                "_jc_dataControl":"input",
                "_jc_defaultValue":200,
                "_jc_validate":{
                    "_jc_dataReg":"int"
                }
            },
            "gt": {
                "_jc_cellTitle":"大于",
                "_jc_dataType":"number",
                "_jc_choosable":true,
                "_jc_dataControl":"input",
                "_jc_validate":{
                    "_jc_dataReg":"int"
                }
            },
            "lte": {
                "_jc_cellTitle":"小于等于",
                "_jc_dataType":"number",
                "_jc_choosable":true,
                "_jc_dataControl":"input",
                "_jc_validate":{
                    "_jc_dataReg":"int"
                }
            },
            "lt": {
                "_jc_cellTitle":"小于",
                "_jc_dataType":"number",
                "_jc_choosable":true,
                "_jc_dataControl":"input",
                "_jc_validate":{
                    "_jc_dataReg":"int"
                }
            },
            "eq": {
                "_jc_cellTitle":"等于",
                "_jc_dataType":"number",
                "_jc_choosable":true,
                "_jc_dataControl":"input",
                "_jc_validate":{
                    "_jc_dataReg":"int"
                }
            }
        },
        "height": {
            "_jc_cellTitle":"高度",
            "_jc_dataControl":"object",
            "_jc_choosable":true,
            "_jc_choosable_show":true,
            "_jc_optionTip":"选择另一个限制",
            "gte": {
                "_jc_cellTitle":"大于等于",
                "_jc_dataType":"number",
                "_jc_choosable":true,
                "_jc_choosable_show":true,
                "_jc_dataControl":"input",
                "_jc_defaultValue":300,
                "_jc_validate":{
                    "_jc_dataReg":"int"
                }
            },
            "gt": {
                "_jc_cellTitle":"大于",
                "_jc_dataType":"number",
                "_jc_choosable":true,
                "_jc_dataControl":"input",
                "_jc_validate":{
                    "_jc_dataReg":"int"
                }
            },
            "lte": {
                "_jc_cellTitle":"小于等于",
                "_jc_dataType":"number",
                "_jc_choosable":true,
                "_jc_dataControl":"input",
                "_jc_validate":{
                    "_jc_dataReg":"int"
                }
            },
            "lt": {
                "_jc_cellTitle":"小于",
                "_jc_dataType":"number",
                "_jc_choosable":true,
                "_jc_dataControl":"input",
                "_jc_validate":{
                    "_jc_dataReg":"int"
                }
            },
            "eq": {
                "_jc_cellTitle":"等于",
                "_jc_dataType":"number",
                "_jc_choosable":true,
                "_jc_dataControl":"input",
                "_jc_validate":{
                    "_jc_dataReg":"int"
                }
            }
        }
    },
    "conf": {
        "_jc_dataControl":"object",
        "_jc_cellTitle":"标签配置:"
    }
};

var editTpl = {
    conf:{
        "trackType":"ut|pagechoice",
        "trackConf":"OUTPUT_LOG_TRIGGER_URL_2_REPLACE",
        "PCAD_GEO_2_REPLACE": "PCAD_GEO_2_REPLACE",
        "pcTrackLinks":{"label_imp":"OUTPUT_LOG_URL_2_REPLACE"},
        "utTrackLink": {
            "_jc_dataType":"string",
            "_jc_name":"utTrackLinkInput",
            "_jc_dataControl":"input",
            "_jc_cellTitle":"UT监测地址:",
            "_jc_validate":{
                "_jc_dataReg":"url"
            },
            "_jc_renderedFn":function(obj,valEl){
                var getUrlEl = $('<a id="get-ut-link">获取监测</a>');
                getUrlEl.insertAfter(valEl);
                var url;
                var getUrl = function(){
                    if(window.getTrackURL){
                        url = getTrackURL(valEl);
                    }
                }
                if(getUrlEl){
                    getUrlEl.bind('click',getUrl);
                }
            }
        }
    }
}
var formTpl = {
    "_jc_cellTitle":"交互浮层配置:",
    "_jc_dataControl":"object",
    "_jc_choosable":"true",
    "namespace": "Motu.forms.Custom",
    "param":{
        "_jc_cellTitle":"交互浮层详细配置:",
        "_jc_dataControl":"object",
        "_jc_translate":function(cellValue){
            var customValue;
            if(cellValue.useExtraConfig&&cellValue.useExtraConfig == 'custom'){
                customValue = $.extend(true,{},cellValue.customForm);
                customValue.submitBtn = cellValue.submitBtn;
                delete customValue.customForm;
            }else{
                customValue = cellValue;
                delete customValue.customForm;
            }
            return customValue;
        },
        "_jc_parse":function(customValue){
            var cellValue = {};
            if(customValue&&customValue.useExtraConfig){
                cellValue = customValue;
            }else{
                cellValue.customForm = $.extend(true,{},customValue);
                cellValue.useExtraConfig = 'custom';
                cellValue.submitBtn = customValue.submitBtn
            }
            return cellValue;
        },
        "fontColor": {
            "_jc_cellTitle":"文字颜色",
            "_jc_dataType":"string",
            "_jc_defaultValue":'#ffffff',
            "_jc_dataControl":"input"
        },
         "useExtraConfig": {
            "_jc_cellTitle":"视窗广告类型:",
            "_jc_dataType":"string",
            "_jc_dataControl":"select",
            "_jc_selectValues":['Motu.confs.ExpandCornerForm','Motu.confs.ExpandCornerFormBig','custom'],
            "_jc_selectDes":['扩展250表单','扩展300表单','自定义表单']
        },
         "customForm":{
            "_jc_linkns":'useExtraConfig',
            "_jc_linkValue":'custom',
            "_jc_cellTitle":"自定义表单配置:",
            "_jc_dataType":"object",
            "_jc_dataControl":"textArea"
        },
        "submitBtn":{
            "_jc_cellTitle":"提交按钮配置:",
            "_jc_dataControl":"object",
            "uiType": {
                "_jc_cellTitle":"按钮控件样式",
                "_jc_dataType":"string",
                "_jc_dataControl":"select",
                "_jc_selectValues":["red", "pink", "orange", "blue", "green", "gray"]
            },
            "text": {
                "_jc_cellTitle":"按钮控件文字",
                "_jc_dataType":"string",
                "_jc_dataControl":"input",
                "_jc_defaultValue":"提 交"
            }
        }
    }
};

var expandTpl = {
    "_jc_cellTitle":"魔图flash扩展标签:",
    "_jc_ns":"ECS",
    "_jc_dataControl":"object",
    "_namespace":"Motu.std.widgets.ExpandCornerStd",
    "_rid":"5500",
    "conf": {
        "_jc_dataControl":"object",
        "_jc_cellTitle":"标签配置:",
        "icon": {
            "_jc_dataControl":"object",
            "_jc_cellTitle":"标签层配置:",
            "creativeType": {
                "_jc_cellTitle":"标签素材类型:",
                "_jc_dataType":"string",
                "_jc_dataControl":"select",
                "_jc_selectValues":['img','swf','video']
            },
            "creativeUrl": {
                "_jc_cellTitle":"广告素材地址",
                "_jc_dataType":"string",
                "_jc_dataControl":"input",
                "_jc_validate":{
                    "_jc_dataReg":"url"
                }
            },
            "creativeHeight": {
                "_jc_cellTitle":"标签ICON高度",
                "_jc_defaultValue": 150,
                "_jc_dataType":"string",
                "_jc_dataControl":"input",
                "_jc_validate":{
                    "_jc_dataReg":"int"
                }
            },
            "creativeWidth": {
                "_jc_cellTitle":"标签ICON宽度",
                "_jc_defaultValue": 25,
                "_jc_dataType":"string",
                "_jc_dataControl":"input",
                "_jc_validate":{
                    "_jc_dataReg":"int"
                }
            },
            "ieFixSrc": {
                "_jc_cellTitle":"ie6视频图像",
                "_jc_linkns":'creativeType',
                "_jc_linkValue":'video',
                "_jc_dataType":"string",
                "_jc_dataControl":"input",
                "_jc_validate":{
                    "_jc_dataReg":"url"
                }
            },
            "creativeLink": {
                "_jc_cellTitle":"点击跳转地址",
                "_jc_dataType":"string",
                "_jc_dataControl":"input",
                "_jc_validate":{
                    "_jc_dataReg":"url"
                }
            },
            "wmode": {
                "_jc_cellTitle":"wmode选项:",
                "_jc_dataType":"string",
                "_jc_dataControl":"select",
                "_jc_choosable":"true",
                "_jc_selectValues":['transparent','window','opaque']
            }
        },
        "layer": {
            "_jc_dataControl":"object",
            "_jc_cellTitle":"展示层配置:",
            "horizontalAlign": {
                "_jc_cellTitle":"浮层弹出方向:",
                "_jc_dataType":"string",
                "_jc_dataControl":"select",
                "_jc_selectValues":['left','right'],
                "_jc_selectDes":['向左展示','向右展示']
            },
            "creativeWidth": {
                "_jc_cellTitle":"展示层宽度",
                "_jc_dataType":"string",
                "_jc_dataControl":"input",
                "_jc_defaultValue": 250,
                "_jc_validate":{
                    "_jc_dataReg":"int"
                }
            },
            "expandFlash":{
                "_jc_dataControl":"object",
                "_jc_cellTitle":"扩展广告配置:",
                "creativeType": {
                    "_jc_cellTitle":"标签素材类型:",
                    "_jc_dataType":"string",
                    "_jc_dataControl":"select",
                    "_jc_selectValues":['swf','img','video']
                },
                "creativeUrl": {
                    "_jc_cellTitle":"广告素材地址",
                    "_jc_dataType":"string",
                    "_jc_dataControl":"input",
                    "_jc_validate":{
                        "_jc_dataReg":"url"
                    }
                },
                "ieFixSrc": {
                    "_jc_cellTitle":"ie6视频图像",
                    "_jc_linkns":'creativeType',
                    "_jc_linkValue":'video',
                    "_jc_dataType":"string",
                    "_jc_dataControl":"input",
                    "_jc_validate":{
                        "_jc_dataReg":"url"
                    }
                },
                "creativeHeight": {
                    "_jc_cellTitle":"扩展广告高度",
                    "_jc_dataType":"string",
                    "_jc_dataControl":"input",
                    "_jc_defaultValue": 250,
                    "_jc_validate":{
                        "_jc_dataReg":"int"
                    }
                },
                "creativeWidth": {
                    "_jc_cellTitle":"扩展广告宽度",
                    "_jc_dataType":"string",
                    "_jc_dataControl":"input",
                    "_jc_defaultValue": 500,
                    "_jc_validate":{
                        "_jc_dataReg":"int"
                    }
                },
                "maxShowTime": {
                    "_jc_cellTitle":"扩展广告展示时间",
                    "_jc_dataType":"string",
                    "_jc_dataControl":"input",
                    "_jc_defaultValue": 10000,
                    "_jc_validate":{
                        "_jc_dataReg":"int"
                    }
                },
                "creativeLink": {
                    "_jc_cellTitle":"扩展广告跳转地址",
                    "_jc_dataType":"string",
                    "_jc_dataControl":"input",
                    "_jc_validate":{
                        "_jc_dataReg":"url"
                    }
                },
                "wmode": {
                    "_jc_cellTitle":"wmode选项:",
                    "_jc_dataType":"string",
                    "_jc_dataControl":"select",
                    "_jc_choosable":"true",
                    "_jc_selectValues":['transparent','window','opaque']
                }
            },
            "_linkAd":{
                "_jc_dataControl":"object",
                "_jc_cellTitle":"信息区配置:",
                "_jc_choosable":"true",
                "fontColor": {
                    "_jc_cellTitle": "链接文字颜色:",
                    "_jc_dataType": "string",
                    "_jc_dataControl": "input",
                    "_jc_defaultValue": "#ffffff"
                },
                "bgColor": {
                    "_jc_cellTitle": "链接背景颜色:",
                    "_jc_dataType": "string",
                    "_jc_dataControl": "input",
                    "_jc_defaultValue": "#000000"
                },
                "link1Text": {
                    "_jc_cellTitle": "文字链1文字:",
                    "_jc_dataType": "string",
                    "_jc_dataControl": "input"
                },
                "link1Url": {
                    "_jc_cellTitle": "文字链1链接:",
                    "_jc_dataType": "string",
                    "_jc_dataControl": "input",
                    "_jc_validate": {
                        "_jc_dataReg": "url"
                    }
                },
                "link2Text": {
                    "_jc_cellTitle": "文字链2文字:",
                    "_jc_dataType": "string",
                    "_jc_dataControl": "input"
                },
                "link2Url": {
                    "_jc_cellTitle": "文字链2链接",
                    "_jc_dataType": "string",
                    "_jc_dataControl": "input",
                    "_jc_validate": {
                        "_jc_dataReg": "url"
                    }
                }
            },
            "secondAd": {
                "_jc_dataControl":"object",
                "_jc_cellTitle":"交互区广告:",
                "creativeType": {
                    "_jc_cellTitle":"交互区广告素材类型:",
                    "_jc_dataType":"string",
                    "_jc_dataControl":"select",
                    "_jc_selectValues":['img','swf','video']
                },
                "creativeUrl": {
                    "_jc_cellTitle":"交互区广告素材地址",
                    "_jc_dataType":"string",
                    "_jc_dataControl":"input",
                    "_jc_validate":{
                        "_jc_dataReg":"url"
                    }
                },
                "ieFixSrc": {
                    "_jc_cellTitle":"ie6视频图像",
                    "_jc_linkns":'creativeType',
                    "_jc_linkValue":'video',
                    "_jc_dataType":"string",
                    "_jc_dataControl":"input",
                    "_jc_validate":{
                        "_jc_dataReg":"url"
                    }
                },
                "creativeLink": {
                    "_jc_cellTitle":"点击跳转地址",
                    "_jc_dataType":"string",
                    "_jc_dataControl":"input",
                    "_jc_validate":{
                        "_jc_dataReg":"url"
                    }
                },
                "wmode": {
                    "_jc_cellTitle":"wmode选项:",
                    "_jc_dataType":"string",
                    "_jc_dataControl":"select",
                    "_jc_choosable":"true",
                    "_jc_selectValues":['transparent','window','opaque']
                }
            },
            "form":formTpl,
            "layerShowDelayTime": {
                "_jc_cellTitle": "展示延迟时间:",
                "_jc_dataType": 'number',
                "_jc_dataControl": "input",
                "_jc_defaultValue": 50,
                "_jc_validate": {
                    "_jc_dataReg": "int"
                }
            },
            "layerHideDelayTime": {
                "_jc_cellTitle": "隐藏延迟时间:",
                "_jc_dataType": 'number',
                "_jc_dataControl": "input",
                "_jc_defaultValue": 50,
                "_jc_validate": {
                    "_jc_dataReg": "int"
                }
            },
            "autoDisplay": {
                "_jc_dataControl":"object",
                "_jc_cellTitle":"自动展示配置:",
                "type": {
                    "_jc_cellTitle":"自动展示类型:",
                    "_jc_dataType":"string",
                    "_jc_dataControl":"select",
                    "_jc_selectValues":['','default','inScreen'],
                    "_jc_selectDes":["不自动展示","直接展示","在屏幕内"]
                },
                "times": {
                    "_jc_cellTitle":"最大展示次数:",
                    "_jc_dataType":'number',
                    "_jc_dataControl":"input",
                    "_jc_defaultValue":9999,
                    "_jc_validate":{
                        "_jc_dataReg":"int"
                    }
                },
                "rangeHours": {
                    "_jc_cellTitle":"展示次数清零时间:",
                    "_jc_dataType":'number',
                    "_jc_dataControl":"input",
                    "_jc_defaultValue":24,
                    "_jc_validate":{
                        "_jc_dataReg":"int"
                    }
                },
                "creativeTime": {
                    "_jc_cellTitle":"默认展示时间(ms):",
                    "_jc_dataType":'number',
                    "_jc_dataControl":"input",
                    "_jc_defaultValue":5000,
                    "_jc_validate":{
                        "_jc_dataReg":"int"
                    }
                }
            },
            "manualDisplay": {
                "_jc_dataControl":"object",
                "_jc_cellTitle":"手动展示配置:",
                "type": {
                    "_jc_cellTitle":"手动展示类型:",
                    "_jc_dataType":"string",
                    "_jc_dataControl":"select",
                    "_jc_selectValues":['withImage','default','withImageRect'],
                    "_jc_selectDes":["图片","标签","图片区域"]
                },
                "times": {
                    "_jc_cellTitle":"最大展示次数:",
                    "_jc_dataType":'number',
                    "_jc_dataControl":"input",
                    "_jc_defaultValue":9999,
                    "_jc_validate":{
                        "_jc_dataReg":"int"
                    }
                },
                "rangeHours": {
                    "_jc_cellTitle":"展示次数清零时间:",
                    "_jc_dataType":'number',
                    "_jc_dataControl":"input",
                    "_jc_defaultValue":24,
                    "_jc_validate":{
                        "_jc_dataReg":"int"
                    }
                }
            }
        },
        "menu":{
            "_jc_dataControl":"object",
            "_jc_cellTitle":"关闭按钮配置:",
            "horizontalAlign": {
                "_jc_cellTitle":"水平定位:",
                "_jc_dataType":"string",
                "_jc_dataControl":"select",
                "_jc_selectValues":['left','right'],
                "_jc_selectDes":["左","右"]
            },
            "verticalAlign": {
                "_jc_cellTitle":"垂直定位:",
                "_jc_dataType":"string",
                "_jc_dataControl":"select",
                "_jc_selectValues":['top','bottom'],
                "_jc_selectDes":["上","下"]
            },
            "innerMode": {
                "_jc_cellTitle":"内部模式:",
                "_jc_dataType":'boolean',
                "_jc_dataControl":"select",
                "_jc_selectValues":[true,false]
            },
            "hasLayerCloseBtn": {
                "_jc_cellTitle":"显示关闭按钮:",
                "_jc_dataType":'boolean',
                "_jc_dataControl":"select",
                "_jc_selectValues":[true,false]
            },
            "closeBtnType": {
                "_jc_cellTitle":"关闭按钮类型:",
                "_jc_dataType":"string",
                "_jc_dataControl":"select",
                "_jc_selectValues":['small','huge','large']
            },
            "hasLogo": {
                "_jc_cellTitle":"显示logo:",
                "_jc_dataType":'boolean',
                "_jc_dataControl":"select",
                "_jc_selectValues":[true,false]
            },
            "logoType": {
                "_jc_cellTitle":"LOGO类型:",
                "_jc_dataType":"string",
                "_jc_dataControl":"select",
                "_jc_selectValues":['small','huge','nano']
            }
        }
    },
    "positions":{
        "_jc_dataControl":"object",
        "_jc_cellTitle":"坐标配置:",
        "at":{
            "_jc_cellTitle":"底图焦点:",
            "_jc_dataType":"string",
            "_jc_dataControl":"select",
            "_jc_selectValues":["right top","right center","right bottom","center top","center center","center bottom","left top","left center","left bottom"],
            "_jc_selectDes":["右上","右中","右下","中上","中间","中下","左上","左中","左下"],
            "_jc_defaultValue":"right top"
        },
        "my":{
            "_jc_cellTitle":"标签焦点:",
            "_jc_dataType":"string",
            "_jc_dataControl":"select",
            "_jc_selectValues":["right top","right center","right bottom","center top","center center","center bottom","left top","left center","left bottom"],
            "_jc_selectDes":["右上","右中","右下","中上","中间","中下","左上","左中","左下"],
            "_jc_defaultValue":"left top"
        },
        "offset":{
            "_jc_cellTitle":"偏移量:",
            "_jc_dataType":"string",
            "_jc_dataControl":"input",
            "_jc_defaultValue": "0 0"
        },
        "mode":{
            "_jc_cellTitle":"对焦模式:",
            "_jc_dataType":"string",
            "_jc_dataControl":"select",
            "_jc_selectValues":['content','inner','outer'],
            "_jc_selectDes":['自身','间隙上','边框上'],
            "_jc_defaultValue":"content"
        }
    }
};
if(!window.JCTPL){
    window.JCTPL = {}
}
window.JCTPL['expandTpl'] = extend(true,{},commonTpl,expandTpl);
})(window)