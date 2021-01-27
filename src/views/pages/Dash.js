import isAuthenticated from '../../service/isAuth.js';
import baseURL from '../../service/baseURL';


const RequestDataAccount = async () => {


    let dataUser = JSON.parse(localStorage.getItem('userDataAccount'))

    let {token,usuario:{login}}=dataUser 

    let headersDefault = {
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        }
    }



}

const response = await axios.get(`${baseURL}lancamentos/planos-conta?login=${login}`, headersDefault)
let Dash = {
    render: async () => {

        let userData = JSON.parse(localStorage.getItem('userDataAccount'));
        const {usuario,conta} = userData 
        let IsAuth = await isAuthenticated(!localStorage.getItem('@token'),'login');

        let view = `
            <div>
                <h1>View de nossa DASH</h1>
                <h3>Olá, ${usuario.nome}</h3>
                <p>${conta.saldo.toLocaleString('pt-br',{style:'currency', currency: 'BRL'})}</p>
            </div>
        `

        return view
    },
    after_render: async ()=>{
        console.log()
    }
}



export default Dash;