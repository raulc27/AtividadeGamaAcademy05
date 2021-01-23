const Utils = {
    //parser URL
    parseRequestURL: () => {
        let url = location.hash.slice(1).toLocaleLowerCase() || '/'
        let r=url.split('/') 
        let request = {
            request:null,
            id:null,
            verb: null
        }
        request.resource = r[1]
        request.id = r[2]
        request.verb = r[3]

        return request
    },
    // Implementação de sleep
    sleep:(ms) => {
        return new Promise(resolve => setTimeout(resolve, ms) )
    }
   
}

export default Utils;