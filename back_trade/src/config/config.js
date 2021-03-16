const context = require.context('./settings/', true, /\.js$/);
let plugins = {};
context.keys().forEach(item => {
    Object.assign(plugins, context(item).default);
});
export default plugins;
