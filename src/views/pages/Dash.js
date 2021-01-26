import isAuthenticated from '../../service/isAuth.js';

let Dash = {
    render: async () => {

        let userData = JSON.parse(localStorage.getItem('userDataAccount'));
        const {usuario,} = userData 
        let IsAuth = await isAuthenticated(!localStorage.getItem('@toekn'),'login');

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