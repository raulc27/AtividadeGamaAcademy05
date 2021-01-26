let isAuthenticated = async (token, redirect)=>{
    if(token){
        window.location.replace(`#/${redirect}`)
    }
}


export default isAuthenticated;