
var JsonC = {},
    _JC = window.JC;
  window.JC = JsonC;

var class2type = {};

var toString = class2type.toString;

JsonC.each = function( obj, callback, args ) {
  var value,
    i = 0,
    length = obj.length;

  if (args) {
    if ( toString.call(obj) === '[object Array]' ) {
      for ( ; i < length; i++ ) {
        value = callback.apply( obj[i], args );
        if ( value === false ) {
          break;
        }
      }
    } else {
      for ( i in obj ) {
        value = callback.apply( obj[ i ], args );
        if ( value === false ) {
          break;
        }
      }
    }

    // A special, fast, case for the most common use of each
  } else {
    if ( toString.call(obj) === '[object Array]' ) {
      for ( ; i < length; i++ ) {
        value = callback.call( obj[ i ], i, obj[ i ] );

        if ( value === false ) {
          break;
        }
      }
    } else {
      for ( i in obj ) {
        value = callback.call( obj[ i ], i, obj[ i ] );

        if ( value === false ) {
          break;
        }
      }
    }
  }

  return obj;
};

JsonC.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
  class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

JsonC.isWindow = function( obj ) {
  return obj != null && obj == obj.window;
};

JsonC.isPlainObject = function( obj ) {
  if ( !obj || JsonC.type(obj) !== "object" || obj.nodeType || JsonC.isWindow( obj ) ) {
    return false;
  }

  try {
    if ( obj.constructor &&
        !Object.prototype.hasOwnProperty.call(obj, "constructor") &&
        !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf") ) {
      return false;
    }
  } catch ( e ) {
    return false;
  }

  var key;
  for ( key in obj ) {}

  return key === undefined || Object.prototype.hasOwnProperty.call( obj, key );
}

// 防止变量冲突
JsonC.noConflict = function( deep ) {
  if ( window.JC === JsonC ) {
    window.JC = _JC;
    if (deep){
      window.JsonC = JsonC;
    }
  }
  return JsonC;
};

// Support: Android<4.1, IE<9
JsonC.trim = function( text ) {
  var rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" );
    return text == null ?
    "" :
    ( text + "" ).replace( rtrim, "" );
}

// 类型判断
JsonC.type = function( obj ) {
  if ( obj == null ) {
    return obj + "";
  }
  return typeof obj === "object" || typeof obj === "function" ?
  class2type[ toString.call(obj) ] || "object" :
    typeof obj;
},

JsonC.isFunction = function( obj ) {
  return JsonC.type(obj) === "function";
};
JsonC.isArray = function( obj ) {
  return JsonC.type(obj) === "array";
};


// 创建对象方法
JsonC.create = function(prop){
  function F(){
    this.init.apply(this,arguments)
  }
  for(var name in prop){
    F.prototype[name] = prop[name];
  }
  return F;
}

// 对象继承方法
JsonC.inherit = function(baseClass,prop){
  function F(){
    this.init.apply(this,arguments)
  }
  var middleClass = function() {};
  middleClass.prototype = baseClass.prototype;
  F.prototype = new middleClass();
  F.prototype.constructor = F;
  for(var name in prop){
    if(prop.hasOwnProperty(name)){
      if(baseClass&&typeof (prop[name])==="function"&&typeof(F.prototype[name]) ==="function" &&/\b_super\b/.test(prop[name])){
        F.prototype[name] = (function(name,fn){
          return function(){
            this._super = baseClass.prototype[name];
            return fn.apply(this,arguments);
          }
        })(name,prop[name]);
      }else{
        F.prototype[name] = prop[name];
      }
    }
  }
  return F;
};

// 继承方法 来自JsonC
JsonC.extend = function() {
  var src, copyIsArray, copy, name, options, clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;

  // Handle a deep copy situation
  if ( typeof target === "boolean" ) {
    deep = target;

    // skip the boolean and the target
    target = arguments[ i ] || {};
    i++;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if ( typeof target !== "object" && !JsonC.isFunction(target) ) {
    target = {};
  }

  // extend JsonC itself if only one argument is passed
  if ( i === length ) {
    target = this;
    i--;
  }

  for ( ; i < length; i++ ) {
    // Only deal with non-null/undefined values
    if ( (options = arguments[ i ]) != null ) {
      // Extend the base object
      for ( name in options ) {
        src = target[ name ];
        copy = options[ name ];

        // Prevent never-ending loop
        if ( target === copy ) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if ( deep && copy && ( JsonC.isPlainObject(copy) || (copyIsArray = JsonC.isArray(copy)) ) ) {
          if ( copyIsArray ) {
            copyIsArray = false;
            clone = src && JsonC.isArray(src) ? src : [];

          } else {
            clone = src && JsonC.isPlainObject(src) ? src : {};
          }

          // Never move original objects, clone them
          target[ name ] = JsonC.extend( deep, clone, copy );

          // Don't bring in undefined values
        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
}
