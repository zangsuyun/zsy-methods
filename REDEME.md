下载

```bath
npm install zsy-methods
```

引用
```js
import { add } form  'zsy-methods'
```
```js
1.getUrlParam() //获取路由中？后 key 的值

2.extname()  //获取文件扩展名

3.random_string()  //生成指定长度的随机字符串
random_string(5) //SFJ25
4.formatDate()  //格式化时间

5.deepClone()  //深克隆

6.hidePhone()  //隐藏手机号中间四位

7.numberToChines()  //金额转大写
numberToChines(652) //陆佰伍拾贰元整

8.getAllCombin(array, n, sum, temp)  // 从给定的无序，不重复的数组中取出n个数，使其相加和为sum 
getAllCombin([1,2,3,4],3,6,[]) // [1, 2, 3] 
getAllCombin([1,2,3,4],3,6,[2])  // [2, 1, 3]

9.anagrams('abc') //Anagrams of string（带有重复项）
// anagrams('abc') -> ['abc','acb','bac','bca','cab','cba']

10.average() //数组平均数
// average([1,2,3]) -> 2

11.capitalizeEveryWord() // 3.大写每个单词首字母
// capitalizeEveryWord('hello world!') -> 'Hello World!'

12.capitalize()  // 首字母大写
// capitalize('myName', true) -> 'Myname'

13.palindrome()  // 检查回文
// palindrome('taco cat') -> true

14.countOccurrences()  // 计算数组中值出现的次数
// countOccurrences([1,1,2,1,2,3], 1) -> 3

15.currentUrl() //当前Url
// currentUrl() -> 'https://google.com'

16.curry() //Curry
// curry(Math.pow)(2)(10) -> 1024
// curry(Math.min, 3)(10)(50)(2) -> 2

17.deepFlatten() //数组扁平化
// deepFlatten([1,[2],[[3],4],5]) -> [1,2,3,4,5]

18.difference() //数组之间的区别
// difference([1,2,3], [1,2]) -> [3]


19.distance() //两点之间的距离
// distance(1,1, 2,3) -> 2.23606797749979

20.isDivisible() //可以按数字整除
// isDivisible(6,3) -> true

21.escapeRegExp() //转义正则表达式
// escapeRegExp('(test)') -> \\(test\\)

22.isEven() //偶数或奇数
// isEven(3) -> false

23.factorial() //阶乘
// factorial(6) -> 720

24.fibonacci() //斐波那契数组生成器
// fibonacci(5) -> [0,1,1,2,3]

25.filterNonUnique() //过滤数组中的非唯一值
// filterNonUnique([1,2,2,3,4,4,5]) -> [1,3,5]

26.flatten() //Flatten数组
// flatten([1,[2],3,4]) -> [1,2,3,4]

27.arrayMax() //从数组中获取最大值
// arrayMax([10, 1, 5]) -> 10

28.arrayMin() //从数组中获取最小值
// arrayMin([10, 1, 5]) -> 1

29.getScrollPos() //获取滚动位置
// getScrollPos() -> {x: 0, y: 200}

30.gcd() //最大公约数
// gcd (8, 36) -> 4

31.initializeArray() //用值初始化数组
// initializeArray(5, 2) -> [2,2,2,2,2]

32.randomIntegerInRange() //范围内的随机整数
// randomIntegerInRange(0, 5) -> 2

33.randomInRange() //范围内的随机数
// randomInRange(2,10) -> 6.0211363285087005

34.//随机化数组的顺序
// shuffle([1,2,3]) -> [2,3,1]

35.//反转一个字符串
// reverseString('foobar') -> 'raboof'

36.//.按字符串排序（按字母顺序排列）
// sortCharactersInString('cabbage') -> 'aabbceg'

36.//.获取URL参数
// getUrlParameters('http://url.com/page?name=Adam&surname=Smith') -> {name: 'Adam', surname: 'Smith'}

37.// 检测是否为正确的手机号码
//  isValidPhone(13116765655)  true

38.// 去除JSON中的空属性
// deleteEmptyProperty(obj)

39. //判断是否含有特殊符号
//  checkCampusName('~~')   //true 

40. // dataURL 转 Blob
//  dataURLtoBlob(dataurl) 

41. //分钟数转成小时表示
//  intToHours(70) // 1:10

42. // base64 转 blob
//  convertBase64ToBlob(base64) 

43. //金额处理
//  disposeMoney(1523354)  // 1,523,354


```