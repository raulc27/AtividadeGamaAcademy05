import baseURL from '../../service/baseURL.js';

let Login = {
    render: async () => {
        let view = `
        <div class="row justify-content-center mt-5">
        <div class="col-5 ">
            <img src="https://pbs.twimg.com/profile_banners/32018803/1502307622/1500x500" class="img rounded img-responsive" width=100% height=300px />
      
            <p class="lead text-justify">Olá, essa é a nossa plataforma, somos especialistas em resolver problemas que você não tinha antes de nos conhecer.</p>
      
            </div>
      

        <div class="col-5 ">
        

        <p class="lead mt-2">Faça o seu login</p>

        <form class="mt-5 ">
        
        <input type="text" id="username" placeholder="USERNAME" class="form-control mt-3"/>
        <input type="password" id="password" placeholder="password" class="form-control mt-1" />

        <button class="btn btn-outline-dark form-control mt-5" type-"button"><b>Fazer login</b></button>
        </for>
    
    </div>
        `

        return view
    },
    after_render: async ()=>{

        document.getElementById('login_start').addEventListener('click',()=>{
            let nameUser = document.getElementById('username').value,
            userPass = document.getElementById('passlogin').value



            if(nameUser.length>=4 && userPass.length>=4 ){


                axios.post(`${baseURL}login`,{
                    usuario:nameUser,
                    senha:userPass
                },{
                    headers:{"Content-Type":"application/json"}
                })
                .then(res => {

                    if(res.status===200){

                        console.log(res.data)
                    window.location.replace('#/dashboard')
                    localStorage.setItem('@token', res.data.token)
                    //sessionStorage.setItem('@token', res.data.token)
                   // Cookies.set('@token', res.data.token, {expires: 1})
                    localStorage.setItem('userDataAccount',JSON.stringify(res.data))
                

                    }
                    })

            } 


        })

    }
}


export default Login;