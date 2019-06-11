function domainName(url){
    if(url.startsWith("http")){
    url = url.slice(url.indexOf("/") + 2)
    }
    if(url.startsWith("www")){
    url = url.slice(url.indexOf(".") + 1)
    }
    return url.slice(0,url.indexOf("."))
}

// Kyu: 5
// Link: https://www.codewars.com/kata/514a024011ea4fb54200004b
