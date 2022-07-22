## JS中创建数组有两种方法：
（一）使用Array构造函数：

```javascript
new Array() //创建一个空数组
new Array(10) //创建一个长度为10的数组
new Array(1,2,3) //创建数组为 [1,2,3]
```
（二）使用数组字面值创建：

```javascript
let arr1 = [];//创建一个空数组
let arr2 = [10] //创建一个一项为10的数组
let aee3 = [1,2,3] //创建数组[1,2,3]
```

##  数组原型方法：

 1. join(separator)：
 	将数组转化为字符串类型，以separator为分割，只接受分隔符一个参数

 2. shift()和unshift():

      shift方法不接收参数，shift方法是删除数组第一位，并返回删除的值，如果是空数组则返回undefined

      unshift方法接受一个参数，unshift方法是将参数添加到原数组开头，返回数组长度

      ```javascript
      [1,2,3].unshift(1,2,3)  //返回值为6
      [1,2,3].unshift(1)  //返回值为4
      [1,2,3].unshift()	//返回值为3
      ```

 3. push（）和pop（）：

      push可以接受任意长度的参数，把他们逐个添加到末尾，并返回新数组的长度

      pop删除数组最后一项，返回删除的值

 4. reverse（）：

      数组顺序反转，原数组改变

 5. sort（）：

      数组排序，按升序排列数组项，在排序时，实际上会调用每个数组项的toString()方法，然后比较转化后的字符串。无论数组的每一项是不是数字，都会调用toString（）方法，转化为字符串再比较。这样的话就会产生一些问题，他只会比较第一位，第一位相同才会比较第二位，例如：

      ```javascript
      var arr1 = ["a","b",6,23,12];
      console.log(arr1.sort())  //[12, 23, 6, "a", "b"]，由于只比较了第一位，就会产生这样的错误
      ```

      sort（）方法还可以接受一个比较函数作为参数，使我们指定值位于某个值的前面，比较函数接受的两个参数，如果第一个应该位于第二个之前就返回-1，如果两个参数相等则返回0，如果第一个参数应该位于第二个参数之后则返回1。例：

      ```javascript
      function compare(val1, val2) {
      if (val1 < val2) {
      return -1;
      } else if (val1 > val2) {
      return 1;
      } else {
      return 0;
      }
      }
      arr2 = [13, 24, 51, 3];
      console.log(arr2.sort(compare)); // [3, 13, 24, 51]
      
      //如果要比较函数产生降序排序的结果，只要交换比较函数返回的值即可
      ```

 6. concat（）：

      数组的拼接方法，将里面的参数添加到数组中，原数组并不改变，该方法返回一个新数组

      ```javascript
      var arr = [1,2,3];
      var arr1 = arr.concat(4,5,6)
      console.log(arr1) //[1,2,3,4,5,6]
      var arr2 = arr/concat(arr)
      console.log(arr2) //[1,2,3,1,2,3]
      console.log(arr)  // [1,2,3]，并未改变原数组
      ```

      如果传入的是数组，会把数组中的各个项添加到原数组中，如果传入的是个二维数组，那么也会把这一数组项当作一项添加进去

      ```javascript
      var arr = [1,2,3];
      var arr2 = arr.concat([7,9,[11,13]]);
      console.log(arr2); //[1, 2, 3, 7, 9, Array[2]]
      console.log(arrCopy2[5]); //[11, 13]
      ```

 7. slice():

      返回从原数组中指定开始下标到结束下标之间的项组成的新数组。slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。在只有一个参数的情况下， slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项——但不包括结束位置的项

      ```javascript
      复制一个数组：
      var a = [1,2,3,4]
      var shallowCopy = a.slice();
      // [1,2,3,4]
      ```

      

 8. splice():

      splice的功能比较强大，可以实现删除、插入和替换

      删除：改变原数组，可以删除任意长度的项，指定两个参数，要删除的第一项索引和要删除的项数

      ```javascript
      var arr = [1,3,5,7,9,11];
      var arrRemoved = arr.splice(0,2);
      console.log(arr); //[5, 7, 9, 11]
      ```

      插入：可以向任意指定位置插入任意数量的项，要提供3个参数，第一个参数为起始位置，第二个参数为要删除的项数（插入的话这里为0），第三个参数为要插入的值。

      ```javascript
      var arr = [1,3,5,7,9,11];
      var arrRemoved = arr.splice(2,0,3,4,5) //表示从索引为2的项开始，插入3，4，5 
      console.log(arrRemoved) //[]
      console.log(arr) //[1,3,3,4,5,5,7,9,11]
      ```

      替换：向指定位置插入任意数量的项，同时删除任意数量的项，要提供3个参数，第一个参数为起始位置，第二个参数为要删除的项数，第三个参数为要插入的值。

      ```javascript
      var arr = [1,2,3,4,5,6];
      var arrRemoved = arr.splice(2,3,7,8,9);
      console.log(arrRemoved) //[3,4,5]
      console.log(arr) //[1,2,7,8,9,6]
      ```

 9. indexOf()和lastIndexOf()（ES5新增）:

      indexOf：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找。

      lastIndexOf：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找。

      这两个方法的共同点都是没找到指定项的索引就返回-1，找到了就返回第一次出现该项的索引

      ```javascript
      var arr = [1,3,5,7,7,5,3,1];
      console.log(arr.indexOf(5)); //2
      console.log(arr.lastIndexOf(5)); //5
      console.log(arr.indexOf(5,2)); //2
      console.log(arr.lastIndexOf(5,4)); //2
      console.log(arr.indexOf("5")); //-1
      ```

10. filter（）（ES5新增）：

    数组的过滤功能，数组中每一项都会运行给定函数，返回满足条件的项组成的数组，不改变原数组

    ```javascript
    var arr = [1,2,3,4,5,6,7];
    var arr2 = arr.filter(item=>item%2 === 0); //返回元组中偶数组成的新数组
    console.log(arr2) // [2,4,6]
    var arr3 = arr.filter((item,i)=> i > 3 && item%2 === 0);
    console.log(arr3); // [6]
    console.log(arr) // [1,2,3,4,5,6,7]
    ```

11. every()（ES5新增）:
    返回一个Boolean值，判断数组中的项是否都满足条件，只有所有项都满足条件，才返回true

    ```javascript
    var arr = [1, 2, 3, 4, 5];
    var arr2 = arr.every( function (x) {
    return x < 10;
    }); 
    console.log(arr2);  //true
    var arr3 = arr.every( function (x) {
    return x < 3;
    }); 
    console.log(arr3); // false
    ```

12. forEach()（ES5新增）:

    数组的一种遍历方法，该方法没有返回值。参数是function，默认参数为：遍历的数组内容；对应的索引；数组本身

    ```javascript
    var arr = [1,2,3,4,5];
    arr.forEach((item,index,self)=>{
        console.log(x +"|" + index + "|"+ self===arr);
    })
    // 1|0|true
    // 2|1|true
    // 3|2|true
    // 4|3|true
    // 5|4|true
    ```

13. some()（ES5新增）:

    返回一个Booloean值，判断数组是否有满足条件的项，只要有一项满足就返回true

    ```javascript
    var arr = [1,2,3,4,5,6];
    var arr2 = arr.some(item =>item>5);
    console.log(arr2) //true
    ```

14. map()（ES5新增）:

    映射，给数组每一项运行函数，返回每一项结果组成的数组，例：

    ```javascript
    var arr = [1,3,41,2,4];
    var arr1 = arr.map(function(item){
        return item *2   //给原数组每一项  x2
    })
    console.log(arr1);
    ```

15. reduce():

    迭代所有数组项，然后构建一个最终返回的值。reduce方法从数组第一项开始，遍历到最后。

    该方法接受两个参数：一个是在每一项上调用的函数和作为归并基础的初始值（可选的）。

    函数内部接受四个参数：前一个值；当前值；项的索引；数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。例：

    ```javascript
    var num = [1,4,2,5,9];
    var sum = num.reduce((prev,current,index,array)=>{
        return prev + current;
    },10)
    console.log(sum)  //31
    //实现num数组的求和，并加上初始值10，所以为31
    ```

16. includes():

    判断一个数组是否包含指定的值，返回一个Boolean
