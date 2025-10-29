/*
let utils = (function (){
    return {
        children:function (ele,tagName){
            let arr = []; // 要求返回一个数组
            if (ele === null || ele ===undefined)
                throw new Error("不能传递null 或 undefined");

            //判断当前浏览器的版本号
            if (/MSIE (6|7|8)/i.test(navigator.userAgent)){
                //->首先获取该元素的子节点（childNodes）,在所有的子节点中把元素节点过滤出来(nodeType===1)
                let nodeList = ele.childNodes;
                for (let i = 0 ,len=nodeList.length;i<len;i++){
                    let curNode = nodeList[i];
                    if (curNode.nodeType === 1){
                        arr[arr.length] = curNode;
                    }
                }
                return arr;
            }

            console.log("<=================>");
            //-> 标准浏览器中，直接使用children属性即可，但是这样获取的是一个元素集合(HTMLCollection)
            //-> 它是一个类数组，为了和IE6-8下保持一致，我们使用借用数组原型上的slice，实现把类数组转成数组
            arr = Array.prototype.slice.call(ele.children);

            //-> 二次筛选
            if(typeof tagName ==='string'){
                /!* for (let i,len=arr.length;i<len;i++){
                     if (arr[i].nodeName.toLocaleLowerCase() !== tagName.toLocaleLowerCase())
                         //使用splice删除数据，会改变原数组的长度
                         arr.splice(i, 1);
                 }*!/

                for (let i = 0;i < arr.length;i++){
                    if (arr[i].nodeName.toLowerCase() !== tagName.toLowerCase()){
                        //使用splice删除数据，会改变原数组的长度
                        arr.splice(i, 1);
                        i--;//删除一个之后i要减1
                    }
                }
            }

            return arr;
        }
    }
})();*/

let utils = (function (){
    return {
        children:function (ele,tagName){
            let arr = []; // 要求返回一个数组
            if (ele === null || ele ===undefined)
                throw new Error("不能传递null 或 undefined");

            //判断当前浏览器的版本号
            if (/MSIE (6|7|8)/i.test(navigator.userAgent)){
                //->首先获取该元素的子节点（childNodes）,在所有的子节点中把元素节点过滤出来(nodeType===1)
                let nodeList = ele.childNodes;
                for (let i = 0 ,len=nodeList.length;i<len;i++){
                    let curNode = nodeList[i];
                    if (curNode.nodeType === 1){
                        arr[arr.length] = curNode;
                    }
                }
                return arr;
            }

            console.log("<=================>");
            //-> 标准浏览器中，直接使用children属性即可，但是这样获取的是一个元素集合(HTMLCollection)
            //-> 它是一个类数组，为了和IE6-8下保持一致，我们使用借用数组原型上的slice，实现把类数组转成数组
            arr = Array.prototype.slice.call(ele.children);

            //-> 二次筛选
            if(typeof tagName ==='string'){
                /* for (let i,len=arr.length;i<len;i++){
                     if (arr[i].nodeName.toLocaleLowerCase() !== tagName.toLocaleLowerCase())
                         //使用splice删除数据，会改变原数组的长度
                         arr.splice(i, 1);
                 }*/

                for (let i = 0;i < arr.length;i++){
                    if (arr[i].nodeName.toLowerCase() !== tagName.toLowerCase()){
                        //使用splice删除数据，会改变原数组的长度
                        arr.splice(i, 1);
                        i--;//删除一个之后i要减1
                    }
                }
            }

            return arr;
        }
    }
})();
