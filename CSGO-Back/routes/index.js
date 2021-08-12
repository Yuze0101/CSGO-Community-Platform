const router = require("koa-router")()

// NOTE 封装数据库sql语句以及使用
const { SELECT_TABLE } = require("../utils/sql")
const { query } = require("../utils/query")
// query(CREATE_TABLE);

router.get("/", async (ctx, next) => {
	await ctx.render("index", {
		title: "Hello Koa 2!",
	})
})

router.get("/string", async (ctx, next) => {
	console.log("请求string")
	const res = await query(SELECT_TABLE("Data_Admin"))
	console.log("res :>> ", res)
	ctx.body = {
		message: res,
	}
})

router.get("/json", async (ctx, next) => {
	ctx.body = {
		title: "koa2 json",
	}
})

module.exports = router
