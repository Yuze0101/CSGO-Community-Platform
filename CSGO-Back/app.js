const Koa = require("koa")
const websocket = require("koa-websocket")
const app = websocket(new Koa())

const views = require("koa-views")
const json = require("koa-json")
const onerror = require("koa-onerror")
const bodyparser = require("koa-bodyparser")
const logger = require("koa-logger")
const router = require("koa-router")()


const index = require("./routes/index")
const users = require("./routes/users")
const chat = require("./routes/chat")



// error handler
onerror(app)
app.listen("5001", () => {
	console.log("app listen on port 5001")
})

// NOTE	处理跨域请求
app.use(async (ctx, next) => {
	ctx.set("Access-Control-Allow-Origin", "*")
	await next()
})

// middlewares
app.use(
	bodyparser({
		enableTypes: ["json", "form", "text"],
	})
)
app.use(json())
app.use(logger())
app.use(require("koa-static")(__dirname + "/public"))

app.use(
	views(__dirname + "/views", {
		extension: "pug",
	})
)

// logger
app.use(async (ctx, next) => {
	const start = new Date()
	await next()
	const ms = new Date() - start
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.ws.use(chat.routes()).use(chat.allowedMethods())

// error-handling
app.on("error", (err, ctx) => {
	console.error("server error", err, ctx)
})

module.exports = app
