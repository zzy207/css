var arr = [1,2,3,4,5,6];

var obj = {
    name:'李四',
    age:20,
    gender:'女'
}

var arr3 = [
    {
        name:'李四',
        age:20,
        gender:'女'
    },
    {
        name:'张三',
        age:22,
        gender:'男'
    },
    {
        name:'赵5',
        age:21,
        gender:'女'
    },
    {
        name:'王柳',
        age:2,
        gender:'男'
    },
    {
        name:'小七',
        age:20,
        gender:'女'
    }
]

//_.each()                                  _.each()  用于遍历数组，对象
// var r = _.each(arr,function(val,index) {
//     console.log(val)
// });
// for(var i=0;i<arr.length;i++) {
//     console.log(arr[i]);
// } 


// var o = _.each(obj,function(val,key) {
//     console.log(val);
//     console.log(key)
// })
// for(var obj2 in obj) {
//     console.log(obj[obj2]);
// }

                                 //_.map()把list中的每个值映射到一个新的数组中
// var r = _.map(arr,function(num) {return num *3});
// console.log(r)
// var arr2=[];
// for(var i=0;i<arr.length;i++) {
//     arr2.push(arr[i])
// };
// console.log(arr2);

                             //_.reduce()方法把list中元素归结为一个单独的数值
// var r = _.reduce(arr,function(a,b) {return a+b})
// console.log(r);
// var he = 0;
// for(var i=0;i<arr.length;i++) {
//     he += arr[i]
// };
// console.log(he);

//_.find()在list中逐项查找，返回第一个通过predicate迭代函数真值检测的元素值，
//                          如果没有值传递给测试迭代器将返回undefined。 
//                         如果找到匹配的元素，函数将立即返回，不会遍历整个list。
// var r = _.find(arr,function(num) {return num%2 == 0});
// console.log(r)
// !function() {
//     for(var i=0;i<arr.length;i++) {
//         if(arr[i]%2==0) {
//             console.log(arr[i]);
//             return;
//         }
//     }
// }();
                                    //_.filter()遍历list中的每个值，返回包含所有通过predicate真值检测的元素值。
// var r = _.filter(arr,function(num) {return num%2 == 0});
// console.log(r)
// var arr2 = [];
// for(var i=0;i<arr.length;i++) {
//     if(arr[i]%2==0) {
//         arr2.push(arr[i]);
//     }
// };
// console.log(arr2)
                                        //_.where()遍历list中的每一个值，返回一个数组，
                                        //这个数组包含包含所列出的属性的所有的键 - 值对。
// var r = _.where(arr3,{gender:'女'});
// console.log(r)
// var arr2 = [];
// for(var i=0;i<arr3.length;i++) {
//     if(arr3[i].gender == '女') {
//         arr2.push(arr3[i]);
//     }
// };
// console.log(arr2);
                //_.findWhere()遍历list中的每一个值，返回匹配所列出的属性的所有的键 - 值对的第一个值。
// var r = _.findWhere(arr3,{gender:'女'});
// !function () {
//     for(var i=0;i<arr3.length;i++) {
//         if(arr3[i].gender == '女') {
//             console.log(arr3[i]);
//             return ;
//         }
//     }
// }();
                                                        //_.every()
// var r = _.every(arr,function(val) {return val>0});
// console.log(r)









