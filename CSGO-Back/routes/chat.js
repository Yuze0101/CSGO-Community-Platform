const router = require("koa-router")()

let wsObj = []

// 监听koa/ws路由，是否有连接
router.all("/koa/ws", (ctx) => {
	const { id } = ctx.query
	console.log("id :>> ", id)
	wsObj[id] = ctx
	wsObj[id].websocket.send("连接成功")
	wsObj[id].websocket.on("message", (message) => {
		const uid = JSON.parse(message).uId
		if (!wsObj[uid]) {
			wsObj[id].websocket.send(`${uid}未上线`)
		} else {
			wsObj[uid].websocket.send(message)
		}
	})
})

module.exports = router
