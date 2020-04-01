var marked = require('marked')
// 修改文章样式
function totext(mdtext){
    let html = marked(mdtext)
    let result = html.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,' ').replace(/ /g,' ').replace(/>/g,' ');  
    if(result.length >150){
        result = result.substring(0,150)+'...'
    }
    return result
}

// 修改时间样式
function totime(send_time){
    let d = new Date(send_time)
    let year = d.getFullYear()
    let month = d.getMonth() + 1
    let day = d.getDate()
    let hour = d.getHours()
    let m = d.getMinutes()
    month = checktime(month)
    day = checktime(day)
    hour = checktime(hour)
    m = checktime(m)
    return year + '-' + month + '-' + day + ' ' + hour + ':' + m
}
function checktime(time){
    if(time<10){
        return '0'+time
    }
    return time
}

export {
    totext,totime
}