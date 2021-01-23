let Footer = {
    render : async () => {
        let view = `
        <footer class="footer">
        <div class="container ">
          <span class="text-muted ">by Raul Castro</span>
        </div>
      </footer>
        `

        return view
    },
    after_render: async ()=>{

    }
 }

 export default Footer;