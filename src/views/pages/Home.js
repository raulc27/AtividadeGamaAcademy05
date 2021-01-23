let Home = {
    render: async () => {
        let view = `
        
        <div class="row justify-content-center mt-5">
            <div class="col-4 ">
                <img src="https://pbs.twimg.com/profile_banners/32018803/1502307622/1500x500" class="img rounded img-responsive" width=100% />
            </div>
            <div class="col-4">
            <p class="lead text-justify">Olá, essa é a nossa plataforma, somos especialistas em resolver problemas que você não tinha antes de nos conhecer.</p>
            </div>
        </div>
        `

        return view
    },
    after_render: async ()=>{

    }
}


export default Home;