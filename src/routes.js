import { Router } from "express"
import cadastroController from "./controller/cadastroController.js"

const router = Router()


router.post("/cadastro", (req, res)=>{
  return cadastroController.store(req, res)
})

router.delete("/deletar/:id", cadastroController.delete)

router.put("/atualizar/:id", (req, res)=>{
  console.log(req.body)
  return cadastroController.update(req, res)
})

router.get("/ListaDeCadastros", cadastroController.index)

router.get("/pesquisa/:id", cadastroController.show)

export default router 
