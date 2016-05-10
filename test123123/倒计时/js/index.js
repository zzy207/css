/*var time = document.getElementById('time');
var shuru = document.getElementById('shuru');
var start = document.getElementById('start');
var xuanze = document.getElementById('xuanze');

start.onclick = function(){
    var val = shuru.value;
        qwe = xuanze.value;
        total;
}

function time(val) {
    var h, m, s ;
    h = Math.floor(val/3600);
    m = Math.floor(val%3600/60);
    s = Math.floor(val%60)
    console.log(h);
}

time(5000);*/

function fill0(num) {
    return num < 10 ? '0' + num : num;
}


var daojishi = function() {

    var start = document.getElementById('start');
    var shuru = document.getElementById('shuru');
    var xuanze = document.getElementById('xuanze'); 
    var time = document.getElementById('time');
    var stop = document.getElementById('stop');
    var timer;
     var total;

    start.onclick = function() {
        var ipt = shuru.value;
        var sel = xuanze.value;
       
        if(timer){
            return;
        }

        if(total) {
            countDown();
        }else {
            if(isNaN(ipt) || ipt <= 0) {
            alert('请输入正数...');
            shuru.value = '';
            return;
        }else if(sel == 0) {
            alert('请选择单位...');
            return;
        }else {
            shuru.value = '';
        }
        total = ipt * sel;

        countDown();

        }

        

        

       

        
//数据检查 正数  选择不能为0

     
        // console.log(total);
    }

    stop.onclick = function() {
        clearInterval(timer);
        timer = 0;

    }
    // countDown(5000);
    function countDown() {
        
        timer = setInterval(function(){

            run()}, 1000);
        }
            
       
      
     function run() {
        var h , m , s ;
                total--

                if(total == 0) {
                    clearInterval(timer);
                    alert('时间到');
                } else if(total < 10) {
                    time.style.color = 'red';
                }

                h = Math.floor(total /60/60);
                m = Math.floor(total /60%60);
                s = Math.floor(total % 60);

                time.innerHTML = fill0(h) +':'+ fill0(m) + ':' + fill0(s);

            }
};

daojishi();

















