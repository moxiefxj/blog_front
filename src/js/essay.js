var marked = require('marked')
class essay{
    // 修改文章样式
    totext(mdtext){
        let html = marked(mdtext)
        let result = html.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,' ').replace(/ /g,' ').replace(/>/g,' ');  
        if(result.length >150){
            result = result.substring(0,150)+'...'
        }
        return result
    }
    // 修改时间样式
    totime(send_time){
        let d = new Date(send_time)
        let year = d.getFullYear()
        let month = d.getMonth() + 1
        let day = d.getDate()
        let hour = d.getHours()
        let m = d.getMinutes()
        month = this.checktime(month)
        day = this.checktime(day)
        hour = this.checktime(hour)
        m = this.checktime(m)
        return year + '-' + month + '-' + day + ' ' + hour + ':' + m
    }
    checktime(time){
        if(time<10){
            return '0'+time
        }
        return time
    }
}
export default essay;