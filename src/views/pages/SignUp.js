import baseURL from '../../service/baseURL.js';

document.postRegisterNewUser = async () => {
    const options = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringfy(RegisterData)
        
    };

    try{
        const RegisterData = {
            cpf: document.getElementById('cpf').value,
            name: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        const response = await fetch(baseURL,RegisterData, options)
    }catch(err){
        console.log('Ocorreu um erro',err)
    }
}

let SignUp = {
    render: async () => {

        let view = `
        <div class="row justify-content-center mt-5">
        <div class="col-5 ">
            <img src="https://pbs.twimg.com/profile_banners/32018803/1502307622/1500x500" class="img rounded img-responsive" width=100% height=300px />
      
            <p class="lead text-justify">Olá, essa é a nossa plataforma, somos especialistas em resolver problemas que você não tinha antes de nos conhecer.</p>
      
            </div>
      

        <div class="col-5 bg-secondary">
        

        <p class="lead mt-2">Cadastre-se</p>

        <form class="mt-5 ">
        <input type="text" id="cpf" placeholder="C.P.F" class="form-control cpf-mask mt-1" />
        <input type="text" id="username" placeholder="USERNAME" class="form-control mt-1" />
        <input type="text" id="name" placeholder="o seu nome" class="form-control mt-1" />
        <input type="email" id="email" placeholder="EMAIL" class="form-control mt-1"/>
        <input type="password" id="password" placeholder="password" class="form-control mt-1" />

        <button class="btn btn-outline-light form-control mt-5" id="submit_new_register" type-"button"><b>Cadastrar</b></button>
        </for>
    
    </div>
        `

        return view
    },
    after_render: async ()=>{
        document.getElementById('submit_new_register').addEventListener('click', () => {
          let  cpfVal = document.getElementById('cpf').value
          let  nameVal= document.getElementById('username').value
          let  emailVal= document.getElementById('email').value
          let  passwordVal= document.getElementById('password').value
          let CPF = document.getElementById('cpf').value.replace(/[^\d]/g, "")
          console.log(CPF)

        



          if(nameVal!='' && emailVal!='' && passwordVal!=''){

            
              axios.post(`${baseURL}usuarios`,{

                cpf:CPF,
                login:username,
                senha:passwordVal,
                nome:nameVal

              },{
            
                    headers:{
                        'Content-Type':'application/json'
                    }
            
            })

            .then( res=>{ 
                if( res.status === 200){
                    window.location.replace('#/login')
                }
            })

            }else{
                alert('confira sua senha!')
            }

        })
    }
}


export default SignUp;
