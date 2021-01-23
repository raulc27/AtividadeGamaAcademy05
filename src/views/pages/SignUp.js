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
            <div class="col">
                <div class="md-6">
                <input type="text" id="username" placeholder="USERNAME" />
                <input type="email" id="email" placeholder="EMAIL" />
                <input type="password" id="password" placeholder="password" />

                <button type="btn btn-outline-info"><b>Cadastrar</b></button>
           
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
