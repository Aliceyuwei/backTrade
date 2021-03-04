// import { getStore } from 'common/func';

const context = require.context('./getters/', true, /\.js$/);
let plugins = {};
context.keys().forEach(item => {
    Object.assign(plugins, context(item));
});
export default plugins;
