const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

let port = process.env.PORT || 3001;

const models = require("./models");

let cliente = models.Cliente;
let cartao = models.Cartao;
let compra = models.Compra;
let empresa = models.Empresa;
let promocao = models.Promocao;

app.get("/", (req, res) =>{
    res.send("Hello World");
});

app.listen(port,(req,res) =>{
    console.log("Servidor Ativo: http://localhost:3001");
});

app.post("/inserirCliente", async(req, res) =>{
    await cliente.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Cliente inserido com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar"
        });
    });
});

app.post("/inserirEmpresa", async(req, res) =>{
    await empresa.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Empresa inserida com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar"
        });
    });
});

app.post("/inserirCartao", async(req, res) =>{
    await cartao.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Cartao inserido com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar"
        });
    });
});

app.post("/inserirCompra", async(req, res) =>{
    await compra.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Compra inserida com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar"
        });
    });
});

app.post("/inserirPromocao", async(req, res) =>{
    await promocao.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Promocao inserida com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar"
        });
    });
});

app.get("/listarClientes", async(req, res) =>{
    await cliente.findAll({
        raw: true
    }).then(function(clientes){
        res.json({clientes})
    });
});

app.get("/listarEmpresas", async(req, res) =>{
    await empresa.findAll({
        raw: true
    }).then(function(Empresas){
        res.json({Empresas})
    });
});

app.get("/listarCartoes", async(req, res) =>{
    await cartao.findAll({
        raw: true
    }).then(function(Cartoes){
        res.json({Cartoes})
    });
});

app.get("/listarPromocoes", async(req, res) =>{
    await promocao.findAll({
        raw: true
    }).then(function(Promocoes){
        res.json({Promocoes})
    });
});

app.get("/listarCompras", async(req, res) =>{
    await compra.findAll({
        raw: true
    }).then(function(Compras){
        res.json({Compras}) 
    });
});

app.put("/atualizarCliente", async(req, res) =>{
    await cliente.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente atualizado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Houve erro na alteração do serviço"
        });
    });
});

app.put("/atualizarEmpresa", async(req, res) =>{
    await empresa.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Empresa atualizada com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Houve erro na alteração do serviço"
        });
    });
});

app.put("/atualizarCartao", async(req, res) =>{
    await cartao.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cartao atualizado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Houve erro na alteração do serviço"
        });
    });
});

app.put("/atualizarCompra", async(req, res) =>{
    await compra.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Compra atualizada com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Houve erro na alteração do serviço"
        });
    });
});

app.put("/atualizarPromocao", async(req, res) =>{
    await promocao.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Promocao atualizado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Houve erro na alteração do serviço"
        });
    });
});

app.get("/excluirCliente", async(req, res) =>{
    await cliente.destroy({
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente foi excluído com  sucesso"
        });
        }).catch(function(erro){
            return res.status(400).json({
                error: true,
                message: "Erro ao excluir o cliente"
        }); 
    });
});

app.get("/excluirEmpresa", async(req, res) =>{
    await empresa.destroy({
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Empresa foi excluída com  sucesso"
        });
        }).catch(function(erro){
            return res.status(400).json({
                error: true,
                message: "Erro ao excluir a empresa"
        }); 
    });
});

app.get("/excluirCompra", async(req, res) =>{
    await compra.destroy({
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Compra foi excluída com  sucesso"
        });
        }).catch(function(erro){
            return res.status(400).json({
                error: true,
                message: "Erro ao excluir a empresa"
        }); 
    });
});

app.get("/excluirPromocao", async(req, res) =>{
    await promocao.destroy({
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Promocao foi excluída com  sucesso"
        });
        }).catch(function(erro){
            return res.status(400).json({
                error: true,
                message: "Erro ao excluir a empresa"
        }); 
    });
});

app.get("/excluirCartao", async(req, res) =>{
    await cartao.destroy({
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cartao foi excluído com  sucesso"
        });
        }).catch(function(erro){
            return res.status(400).json({
                error: true,
                message: "Erro ao excluir a empresa"
        }); 
    });
});