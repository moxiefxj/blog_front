class operation{
    addBrowse(http,id){
        http.get('/browse/add',{
            params:{
                id:id
            }
        })
    }
    like(http,id){
        return http.get('/like/add',{
            params:{
                id:id
            }
        })
    }
}

export default operation