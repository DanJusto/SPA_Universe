import { Router } from "./router.js"
import Changes from "./changes.js"

const home = document.querySelector('#homepage')
const universe = document.querySelector('#universepage')
const explorer = document.querySelector('#explorerpage')

const router = new Router()
const change = Changes({
    home,
    universe,
    explorer
})

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explorer", "/pages/explorer.html")
router.add(404, "/pages/404.html")

router.handle()
window.onpopstate = () => {
    router.handle()
    change.checkLastPage()
}
window.route = () => router.route()
window.changes = () => {
    change.markLinkSelected('universe')
    change.checkHomepage('universe')
    change.changeBG('universe')
}

home.addEventListener('click', function() {
    change.markLinkSelected('home')
    change.checkHomepage('home')
    change.changeBG('home')
})

universe.addEventListener('click', function() {
    change.markLinkSelected('universe')
    change.checkHomepage('universe')
    change.changeBG('universe')
})

explorer.addEventListener('click', function() {
    change.markLinkSelected('explorer')
    change.checkHomepage('explorer')
    change.changeBG('explorer')
})