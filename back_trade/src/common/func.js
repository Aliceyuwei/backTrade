/**
 * 金額格式化 - 每千位數加逗號
 * @param  {Number|String} num 欲格式化的數字
 * @param  {boolean} hasSymbol 是否有正號
 * @return {String}            格式化結果
 */
export function formatMoney (num = 0, hasSymbol = false) {
    if (isNaN(+num)) return num;
    const _symbol = +num > 0 ? '+' : '';
    const _num = `${num}`.split('.');
    return `${hasSymbol ? _symbol : ''}${`${_num[0]}`.replace(
        /(\d)(?=(\d{3})+(?!\d))/g,
        '$1,'
    )}${_num[1] ? '.' + _num[1] : ''}`;
}
/**
 * 小數點到第二位
 * @param  {Number|String} num 欲格式化的數字
 * @return {String}            格式化結果
 */
export function formatOdds (num) {
    if (typeof num === 'string') return num;
    return num.toFixed(2);
}
/**
 * 檢查localStorage中的資料
 * 把過期的資料刪除
 */
export function checkStorageItem () {
    const now = new Date().getTime();
    Object.keys(localStorage).forEach(item => {
        try {
            const storageItemExpire = JSON.parse(localStorage.getItem(item))
                .expire;
            if (storageItemExpire && now > storageItemExpire) {
                localStorage.removeItem(item);
            }
        } catch (e) {e;}
    });
}