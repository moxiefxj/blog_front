class comment{
    async getList(http,id){
        return http.get('/comment/list',{
            params:{
                toid:id
            }
        })
    }
    async getHeader(http){
        return http.get('/comment/header')
    }
}

export default comment