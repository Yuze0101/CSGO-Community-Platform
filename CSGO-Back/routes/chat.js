const router = require("koa-router")()

let wsObj = []

// 监听koa/ws路由，是否有连接
router.all("/koa/ws", (ctx) => {
	// 给客户端发送链接成功信息
	ctx.websocket.send("连接成功")
	// 监听客户端发送过来的信息

	ctx.websocket.on("message", (message) => {
		console.log(message)
		let msg = JSON.parse(message)
		wsObj.push(msg.id)
	})
	console.log("wsObj :>> ", wsObj)
})

module.exports = router
