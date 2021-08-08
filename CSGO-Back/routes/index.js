const router = require("koa-router")();

router.get("/", async (ctx, next) => {
	await ctx.render("index", {
		title: "Hello Koa 2!",
	});
});

router.get("/string", async (ctx, next) => {
  console.log('请求string')
	ctx.body = {
		message: "Hello Koa 2!",
	};
});

router.get("/json", async (ctx, next) => {
	ctx.body = {
		title: "koa2 json",
	};
});

module.exports = router;
