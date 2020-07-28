let express=require("express")
let http=require("http")
let body_parser=require("body-parser")
let app=express()

class Application{
    constructor(){
        this.SetUpConfig()
        this.SetUpRoute()
        this.SetUpServer()
    }
    SetUpConfig(){
        app.use(body_parser.json())
        app.use(body_parser.urlencoded({extended:true}))
    }
    
    SetUpServer(){
        const server=http.createServer(app)

        server.listen(process.env.PORT,()=>{
            console.log(`Connect To Server With Port:${process.env.PORT}`)
        })
    }
   SetUpRoute(){
        app.get("/",(req,res)=>{
            res.send("Hello")
        })
        app.use(require("./Routes/loader-Route"))
        console.log(`Setup Route SeccussFully`)
    }
}
module.exports=Application