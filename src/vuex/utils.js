/**
 * 循环对象，把(key, value)都传入 callback 执行
 * @param {*} obj
 * @param {*} callback
 */
export function feach(obj, callback) {
  return Object.keys(obj).forEach(key => callback(key, obj[key]))
}
