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