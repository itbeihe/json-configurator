test("JsonC.each test", function() {
  var arr  = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error"];
  var flagArr = [];
  var flag = true;
  JsonC.each(arr, function(i, obj) {
    if(arr[i] !== obj){
      flagArr[i] = false;
    }
  });
  ok(flag,'常规数组测试');

  var result= false,cc = [];
  JsonC.each([1,2], function(aa) {
    cc.push(aa);
  },['aa']);
  console.log(cc);
  if(cc.length ==2 ){
    if(cc[0] == 'aa'&& cc[1]=='aa'){
      result = true
    }
  }
  ok(result,"常规数组测试：自定义参数");

});

test("hello2", function() {
  ok(false, "world");
});

