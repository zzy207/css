var xinzeng = document.getElementById('xinzeng');

xinzeng.onclick = function() {

    var ul = document.getElementById('ul');
    var li = document.createElement('li');
    var input = document.createElement('input');
    var Btn = document.createElement('button');
    var text = document.createTextNode('删除');
    var len = document.getElementsByTagName("li").length; 
          
    if(len < 4) {
                        //可替换 ul.innerHTML = '<li><input></inout><button>删除</button></li>'
        Btn.appendChild(text);        
        li.appendChild(input);
        li.appendChild(Btn)
        ul.appendChild(li);       
    }    
                        //var len = document.getElementsByTagName("li").length; 
                        //for(var a=0; a<len; a++) {Btn[a].onclick = function() {}}                                        
    Btn.onclick = function() {
        ul.removeChild(this.parentNode);       
    }
};

var queding = document.getElementById('queding');
var ipt = document.getElementsByTagName('input');
var suoyou = document.getElementById('suoyou');

queding.onclick = function() {
    var len = document.getElementsByTagName("li").length;
    var arr = [];
    for(var i=0; i<=len; i++) {
      arr.push(ipt[i].value);    
    }
    suoyou.innerHTML = '爱好有：' + arr.join('__');
    // console.log(arr.join('-'));
};



