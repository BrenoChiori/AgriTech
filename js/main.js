import { Router } from "./router.js"

const router = new Router()
router.add('/admin/index.html', "/admin/pages/dash.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()