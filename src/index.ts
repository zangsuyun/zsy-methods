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

export const rgbToHex = (r: number, g: number, b: number) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

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