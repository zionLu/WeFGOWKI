//使用koa复写入口文件
const Koa = require('koa');
const Router = require('koa-router');
// const koaBody = require('koa-body');
const views = require('koa-views');
// const serve = require('koa-static');

const app = new Koa();
const router = new Router();

// app.use(serve(__dirname));
//配置模板引擎
app.use(views(__dirname + '/view',{
    extension: 'html'
}))
//使用koa-router
app.use(router.routes());



//设置路由
router.get('/', async(ctx, next) => {
    await ctx.render("index",{
        title:"首页"
    })
});
app.listen(3000);