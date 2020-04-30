class login{
    async login1(http,form){
        console.log(form)
        return http.get('/login/login1',{
            params:{
                ...form
            }
        })
    }
}
export default login