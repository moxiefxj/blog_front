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
    
}
export default essayreq