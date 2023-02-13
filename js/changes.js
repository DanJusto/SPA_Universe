export default function Changes ({
    home,
    universe,
    explorer
}) {
    const main = document.querySelector('main')
    const body = document.querySelector('body')
    
    function markLinkSelected(page) {
        switch(page) {
            case 'home':
                if(home.classList.contains('selected')) {
                    break
                } else {
                    home.classList.add('selected')
                    universe.classList.remove('selected')
                    explorer.classList.remove('selected')
                }
                break
            case 'universe':
                if(universe.classList.contains('selected')) {
                    break
                } else {
                    universe.classList.add('selected')
                    home.classList.remove('selected')
                    explorer.classList.remove('selected')
                }
                break
            case 'explorer':
                if(explorer.classList.contains('selected')) {
                    break
                } else {
                    explorer.classList.add('selected')
                    universe.classList.remove('selected')
                    home.classList.remove('selected')
                }
                break
            default:
                break
        }
    }
    
    function checkHomepage(page) {
        switch(page) {
            case 'home':
                if(main.classList.contains('home')) {
                    break
                } else {
                    main.classList.add('home')
                }
                break
            case 'universe':
                main.classList.remove('home')
                break
            case 'explorer':
                main.classList.remove('home')
                break
            default:
                break
        }
    }
    
    function changeBG(page) {
        switch(page) {
            case 'home':
                body.classList.remove('universe')
                body.classList.remove('explorer')
                break
            case 'universe':
                if(body.classList.contains('universe')) {
                    break
                } else {
                    body.classList.add('universe')
                    body.classList.remove('home')
                    body.classList.remove('explorer')
                }
                break
            case 'explorer':
                if(body.classList.contains('explorer')) {
                    break
                } else {
                    body.classList.add('explorer')
                    body.classList.remove('home')
                    body.classList.remove('universe')
                }
                break
            default:
                break
        }
    }

    function checkLastPage() {
        if(window.location.pathname === '/') {
            markLinkSelected('home')
            checkHomepage('home')
            changeBG('home')
        } else if(window.location.pathname === '/universe') {
            markLinkSelected('universe')
            checkHomepage('universe')
            changeBG('universe')
        } else if(window.location.pathname === '/explorer') {
            markLinkSelected('explorer')
            checkHomepage('explorer')
            changeBG('explorer')
        }
    }
    
    return {changeBG, checkHomepage, markLinkSelected, checkLastPage}
}