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

    }
}


export default Login;