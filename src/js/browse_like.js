async function addBrowse(http,id){
    http.get('http://localhost:3000/browse/add',{
        params:{
            id:id
        }
    }).then(response => {
        
        return response
    }).catch(response => {
        console.log(response)
    })
}
export {
    addBrowse
}