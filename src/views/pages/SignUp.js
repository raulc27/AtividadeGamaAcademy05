import baseURL from '../../service/baseURL.js';

let postRegisterNewUser = async () => {
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
            <div>
                <h1>View de nossa SignUp</h1>
            </div>
        `

        return view
    },
    after_render: async ()=>{

    }
}


export default SignUp;