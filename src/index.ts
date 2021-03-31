export function add(a: number, b: number): number {
  return a + b
}

export function getUrlParam(query: string) {
  const url = window.location.href;
  if (url.indexOf("?") != -1) {
    const str = url.split("?");
    for (let i = 0; i < str.length; i++) {
      const strItem = str[i];
      const strArray = strItem.split("&");

      for (let i = 0, length = strArray.length; i < length; i++) {
        const itemArray = strArray[i].split("=");
        if (itemArray[0].toLocaleLowerCase() === query.toLocaleLowerCase()) {
          return itemArray[1];
        }
      }
    }
  }
  return undefined;
}
// 获取文件扩展名
export function extname(filename: string) {
  /* TODO */
  var matchList = filename.match(/.+(\.[a-zA-Z]+)/);//通过正则（）获取后缀
  return matchList ? matchList[matchList.length - 1] : "";
}

/**
 * 生成指定长度的随机字符串
 * @param len
 * @returns {string}
 */

export function random_string(len: number) {
  len = len || 32;
  var chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  var maxPos = chars.length;
  var pwd = "";
  for (var i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};

export function formatDate(timestamp: string | number, format: string = 'YYYY-MM-DD',): string {
  if (!timestamp) return '';
  const date: Date = new Date(Number(timestamp));
  let y: number | string = date.getFullYear(),
    m: number | string = date.getMonth() + 1,
    d: number | string = date.getDate(),
    h: number | string = date.getHours(),
    i: number | string = date.getMinutes(),
    s: number | string = date.getSeconds(),
    w: number | string = date.getDay(),
    week: ReadonlyArray<string> = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  m = m < 10 ? '0' + m : m;
  d = d < 10 ? '0' + d : d;
  h = h < 10 ? '0' + h : h;
  i = i < 10 ? '0' + i : i;
  s = s < 10 ? '0' + s : s;
  return format.replace('YYYY', y.toString())
    .replace('MM', m.toString())
    .replace('DD', d.toString())
    .replace('H', h.toString())
    .replace('i', i.toString())
    .replace('s', s.toString())
    .replace('WW', week[w]);
}
// 检验是否有相应的权限
export function getPermission(code: string): boolean {
  const permissionCodeList = localStorage.getItem("permissionCodeList") || [] as Array<string>;
  let hasPermission = permissionCodeList.indexOf(code) > -1;
  return hasPermission;
};
// 检测是否为正确的手机号码
export function isValidPhone(phone: string): boolean {
  return /^[0-9]{11}$/.test(phone);
};
// 深拷贝
export function deepClone(obj: object) {
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        //判断ojb子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          //如果不是，简单复制
          if (typeof obj[key] === "string") {
            // console.log(obj[key])
            objClone[key] = obj[key] && obj[key].replace(/^\s+|\s+$/gm, '');
          } else {
            objClone[key] = obj[key];
          }

        }
      }
    }
  }
  return objClone;
}

// 隐藏手机号中间四位
export function hidePhone(tel: string) {
  if (isValidPhone(tel)) {
    return tel.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
  }
};

/**
 * 金额转大写
 * @param num
 * @returns {string|*}
 */
export function numberToChines(num: any): string {
  if (num != 0 && !num) return ''
  let strOutput = ''
  let strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分'
  num += '00'
  const intPos = num.indexOf('.')
  if (intPos >= 0) num = num.substring(0, intPos) + num.substr(intPos + 1, 2)
  strUnit = strUnit.substr(strUnit.length - num.length)
  for (let i = 0; i < num.length; i++)
    strOutput +=
      '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1)
  return strOutput
    .replace(/零角零分$/, '整')
    .replace(/零[仟佰拾]/g, '零')
    .replace(/零{2,}/g, '零')
    .replace(/零([亿|万])/g, '$1')
    .replace(/零+元/, '元')
    .replace(/亿零{0,3}万/, '亿')
    .replace(/^元/, '零元')
}

export const getAllCombin = (array: number[], n: number, sum: number, temp: number[]) => {
  if (temp.length === n) {
    if (temp.reduce((t, c) => t + c) === sum) {
      return temp;
    }
    return false
  }
  for (let i = 0; i < array.length; i++) {
    const current = array.shift()
    temp.push(current)
    const result = getAllCombin(array, n, sum, temp)
    if (result) {
      return result
    }
    temp.pop()
    array.push(current)
  }
}

export const anagrams = (str: string) => {

  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];

  return str.split('').reduce((acc, letter, i) =>

    acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);

};

export const average = (arr: number[]) => arr.reduce((acc, val) => acc + val, 0) / arr.length;

export const capitalizeEveryWord = (str: string) => str.replace(/\b[a-z]/g, char => char.toUpperCase());

export const capitalize = (str: string, lowerRest = false) => str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));

export const palindrome = (str: string) => {

  const s = str.toLowerCase().replace(/[\W_]/g, '');

  return s === s.split('').reverse().join('');

}

export const countOccurrences = (arr: number[], value: number) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);

export const currentUrl = () => window.location.href;

export const curry = (fn: Function, arity = fn.length, ...args: any) =>

  arity <= args.length

    ? fn(...args)

    : curry.bind(null, fn, arity, ...args);

export const deepFlatten = (arr: number[]) =>

  arr.reduce((a, v) => a.concat(Array.isArray(v) ? deepFlatten(v) : v), []);

export const difference = (a: number[], b: number[]) => { const s = new Set(b); return a.filter(x => !s.has(x)); };

export const distance = (x0: number, y0: number, x1: number, y1: number) => Math.hypot(x1 - x0, y1 - y0);

export const isDivisible = (dividend: number, divisor: number) => dividend % divisor === 0;

export const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const isEven = (num: number) => num % 2 === 0;

export const factorial = (n: number) => n <= 1 ? 1 : n * factorial(n - 1);

export const filterNonUnique = (arr: number[]) => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

export const flatten = (arr: number[]) => arr.reduce((a, v) => a.concat(v), []);

export const arrayMax = (arr: number[]) => Math.max(...arr);

export const arrayMin = (arr: number[]) => Math.min(...arr);

export const getScrollPos = (el: any = window) =>

({
  x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,

  y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
});

export const gcd = (x: number, y: number) => !y ? x : gcd(y, x % y);

export const initializeArray = (n: number, value = 0) => Array(n).fill(value);

export const randomIntegerInRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

export const shuffle = (arr: number[]) => arr.sort(() => Math.random() - 0.5);

export const reverseString = (str: any) => [...str].reverse().join('');

// export const rgbToHex = (r: number, g: number, b: number) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

export const sortCharactersInString = (str: string) =>

  str.split('').sort((a, b) => a.localeCompare(b)).join('');

export const getUrlParameters = (url: string) =>

  url.match(/([^?=&]+)(=([^&]*))/g).reduce(

    (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}

  );

export const deleteEmptyProperty = (object: object) => {
  // 去除JSON中的空属性
  for (var i in object) {
    var value = object[i];
    if (typeof value === "object") {
      if (Array.isArray(value)) {
        if (value.length == 0) {
          delete object[i];
          continue;
        }
      }
      deleteEmptyProperty(value);
      if (isEmpty(value)) {
        delete object[i];
      }
    } else {
      if (value === "" || value === null || value === undefined) {
        delete object[i];
      }
    }
  }
};

export const isEmpty = (object: object) => {
  for (var name in object) {
    return false;
  }
  return true;
}

export const checkCampusName = (text: string) => {
  // 判断是否含有特殊符号
  let iconRule1 = /[`~!@#$%^&*()_\+=<>?:"{}|,\/;'\\[\]·~！@#￥%……&*（）——\+={}|《》？：“”【】、；‘’，。、]/im;
  // 判断是否含有emoji表情
  let iconRule2 = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi;
  // 如果为true，字符串含有emoji表情 ，false不含
  let result = null;
  result = iconRule1.test(text)
    ? iconRule1.test(text)
    : iconRule2.test(text)
      ? iconRule2.test(text)
      : false;
  return result;
};

// export const dataURLtoBlob = (dataurl: string) => {
//   const arr = dataurl.split(','),
//     mime = arr[0].match(/:(.*?);/)[1],
//     bstr = atob(arr[1]),
//     u8arr = new Uint8Array(n)
//   let n = bstr.length
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n)
//   }
//   return new Blob([u8arr], {
//     type: mime
//   })
// }

export const intToHours = (number: number) => {
  //如果的整数
  let hours
  let minutes
  if (number % 1 == 0) {
    hours = Math.floor(number / 60)
    minutes = number % 60
  }
  hours = hours < 10 ? '0'.concat(hours) : hours
  minutes = minutes < 10 ? '0'.concat(minutes) : minutes

  return hours + ':' + minutes
}

export const convertBase64ToBlob = function (base64: string) {
  var base64Arr = base64.split(',')
  var imgtype = ''
  var base64String = ''
  if (base64Arr.length > 1) {
    //如果是图片base64，去掉头信息
    base64String = base64Arr[1]
    imgtype = base64Arr[0].substring(
      base64Arr[0].indexOf(':') + 1,
      base64Arr[0].indexOf(';')
    )
  }
  // 将base64解码
  var bytes = atob(base64String)
  //var bytes = base64;
  var bytesCode = new ArrayBuffer(bytes.length)
  // 转换为类型化数组
  var byteArray = new Uint8Array(bytesCode)

  // 将base64转换为ascii码
  for (var i = 0; i < bytes.length; i++) {
    byteArray[i] = bytes.charCodeAt(i)
  }

  // 生成Blob对象（文件对象）
  return new Blob([bytesCode], { type: imgtype })
}

export const disposeMoney = (str: any) => {  // 金额处理
  str = String(str / 100);
  var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  var val = str.replace(reg, "$1,");
  return val
}

export const sortVersion = (list: string[]) => {
  return list.sort((a: string, b: string) => {
    let aa = a.split('.');
    let bb = b.split('.');
    let length = aa.length > bb.length ? aa.length : bb.length
    for (var i = 0; i < length; i++) {
      const x: any = aa[i] || 0
      const y: any = bb[i] || 0
      if (x - y !== 0) {
        return x - y
      }
    }
  })
}

export const compose = (...params: Function[]) => {
  var args = [].slice.call(params);
  return function (initArg: any) {
    return args.reduceRight(function (init: Function, current: Function) {
      return current(init);
    }, initArg)
  }
};

// export const curry = (fn) => { // 形参是fn应该有的参数 在这里就是getSum中的(a,b,c)3个
//   // 此处返回的是函数声明而非匿名函数 为的是在传参不足的时候 递归调用自己
//   return function curriedFn(...args1) { // 实参是调用时候真正传的参数 有可能是1个 2个或者3个
//     console.log(args1);
//     // 判断实参和形参的个数
//     if (args1.length < fn.length) { // 如果参数不够 返回一个匿名函数出去 当这个匿名函数再次调用的时候 
//       // 会将再次调用传的参数和上次调用传的参数合并后再调用函数声明 
//       return function (...args2) {
//         // 由于这里的args1是匿名函数外的数据 形成了一个闭包 所以匿名函数在执行时args1都是独立的 不会互相影响
//         console.log(args1);
//         console.log(args2);
//         return curriedFn(...args1, ...args2); // 将此次和上次的参数合并再次递归 curriedFn 结果作为返回值
//         // 如果args1和args2的长度已经>=形参数 显然再次递归的时候 返回值是 fn(合并后的参数) 也就是fn执行结果作为返回值
//         // 如果args1和args2的长度还是<形参的长度 就再返回一个匿名函数作为返回值等待更多的参数传入
//       }
//     }
//     return fn(...args1);
//   }
// }

export const twoSum = (numbers: number[], target: number) => {
  let l = 0, r = numbers.length - 1;
  while (l < r) {
    let sum = numbers[l] + numbers[r];
    if (sum === target) { // 若双指针的和等于targe 那么对应下标就是要找的
      return [l + 1, r + 1];
    } else if (sum > target) r--; // 如果双指针的和>目标值 那么右侧减一
    else l++; // 双指针的和<目标值 左侧加一
  }
}

const getResult = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    return
  if (!arr1.length)
    return arr2
  if (!arr2.length)
    return arr1
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push(String(arr1[i]) + String(arr2[j]))
    }
  }
  console.log(result);
  return result
}

const findAll = arr => {
  arr.reduce((pre, cur) => {
    console.log(pre);
    return getResult(pre, cur)
  }, [])
}

export const isPrime = (number: number) => {
  // 1.获取算数平方根，并取整
  let sqrt = Math.floor(Math.sqrt(number))

  // 2.从2开始遍历到算数平方根
  for (let i = 2; i <= sqrt; i++) {
    // 2.1 能被整除，返回 false
    if (number % i === 0) return false;
  }
  // 2.2 不能被整除，返回 true
  return true
}


export const toPrime = (number: number) => {

  while (!isPrime(number)) {
    number++
  }
  return number
}

export const isIsomorphic = (firstString: string, secondString: string) => {

  // 检查长度是否相等，如果不相等, 它们不可能是同构的
  if (firstString.length !== secondString.length) return false

  var letterMap = {};

  for (var i = 0; i < firstString.length; i++) {
    var letterA = firstString[i],
      letterB = secondString[i];

    // 如果 letterA 不存在, 创建一个 map，并将 letterB 赋值给它
    if (letterMap[letterA] === undefined) {
      letterMap[letterA] = letterB;
    } else if (letterMap[letterA] !== letterB) {
      // 如果 letterA 在 map 中已存在, 但不是与 letterB 对应，
      // 那么这意味着 letterA 与多个字符相对应。
      return false;
    }
  }
  // 迭代完毕，如果满足条件，那么返回 true。
  // 它们是同构的。
  return true;
}

/**
 * @method debounce 防抖
 * @param { Function } func 需要防抖的函数
 * @param { Number } wait 防抖时间戳
 * @param { Number } immediate 是否立即执行
 * @returns { Function }  返回立即执行的函数
 * 返回类型
 */
export const debounce = (func: Function, wait: number, immediate: boolean): Function => {

  let timeout: any, result: Function;

  return function () {
    const args = arguments;
    // 如果timeout存在，清空
    if (timeout) {
      clearTimeout(timeout);
    }
    // 立即执行
    if (immediate) {
      // 如果已经执行过，不再执行
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait)
      if (callNow) {
        result = func.apply(this, args)
      }
    }
    // 延迟执行
    else {
      timeout = setTimeout(() => {
        func.apply(this, args)
      }, wait);
    }
    return result;
  }
}

export const findLastIndex = (nums: number[], target: number) => {
  const len = nums.length;
  if (len < 1) return -1;
  let l = 0,
    r = len;
  while (l < r) {
    const mid = (l + r) >> 1;
    target < nums[mid] ? (r = mid) : (l = mid + 1);
  }
  return l - 1;
}

export const flattenDeep = (arr: number[]) => Array.isArray(arr)
  ? arr.reduce((a: any, b: any) => [...a, ...flattenDeep(b)], [])
  : [arr]


