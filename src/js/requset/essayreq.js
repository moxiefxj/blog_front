class essayreq{
    // getlist
    async getessaylist(http){
        return http.get('/essay/list')
    }
    async getkindlist(http,kind_child){
        return http.get('/essay/kind',{
            params:{
                kind_child:kind_child
            }
        })
    }
    async getpage(http,cid){
        return http.get('/essay/page',{
            params:{
                data:cid
            }
        })
    }
    async get_high_quality_essaylist(http){
       return http.get('/essay/high_qualitylist')
    }
    // 写入文章到数据库中
    async writeEssay(http,form){
        console.log("进来了")
        console.log(form)
        return http.get('/essay/write',{
            params:{
                ...form
            }
        })
    }
    // 获取所有的种类
    async getkind(http){
        return http.get('/essay/getkind')
    }
    async get_techlist(http){
        return http.get("/essay/get_techlist")
    }
    async get_notelist(http){
        return http.get("/essay/get_notelist")
    }
    
}
export default essayreq