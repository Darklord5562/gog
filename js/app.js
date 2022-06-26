const setCookie = (cname, cval, exdays) => {
    document.cookie = `${cname}=${cval};expires=${exdays?parseInt(exdays)*1000*60*60*24:30*1000*60*60*24}`
}




function getCookie(cname){
    let allCookieArray = document.cookie.split(';')
    
    allCookieArray.forEach(cokiePair => {
        const [key, val] = cokiePair.split('=')
        if(key === cname){
            console.log(val)
            return val
        }
    })
}
console.log(getCookie('name'))
