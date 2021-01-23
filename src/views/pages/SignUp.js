import baseURL from '../../service/baseURL.js';

document.postRegisterNewUser = async () => {
    const options = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }
    };

    try{
        const RegisterData = {
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
        <input type="text" id="username" placeholder="USERNAME" class="form-control mt-1" />
        <input type="email" id="email" placeholder="EMAIL" class="form-control mt-1"/>
        <input type="password" id="password" placeholder="password" class="form-control mt-1" />

        <button class="btn btn-outline-light form-control mt-5" type-"button"><b>Cadastrar</b></button>
        </for>
    
    </div>
        `

        return view
    },
    after_render: async ()=>{
        document.getElementById('submit_new_register').addEventListener('click'), () => {
          let  nameVal= document.getElementById('username').value
          let  emailVal= document.getElementById('email').value
          let  passwordVal= document.getElementById('password').value
        
          if (passwordVal.length > 6){
              console.log('Mais de 6 caracteres na senha')
          }else{
              alert('confira sua senha!')
          }

        }
    }
}


export default SignUp;
