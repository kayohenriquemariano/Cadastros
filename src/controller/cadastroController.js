import cadastroRepository from "../repositores/cadastroRepository.js"

class cadastroController {
  async index(req, res) {
    const row = await cadastroRepository.findAll()
    res.json(row)
  }

  async show(req, res) {
    const id = req.params.id
    const row = await cadastroRepository.findById(id)
    res.json(row)
  }

  async store(req, res) {
    const cadastro = req.body
    const row = await cadastroRepository.creat(cadastro)
    res.json(row)
  }

  async update(req, res) {
    const id = req.params.id
    const cad = req.body
    console.log(req.body, "textpo")
    const row = await cadastroRepository.update(cad, id)
    res.json(row)
  }

  async delete(req, res) {
    const id = req.params.id
    const row = await cadastroRepository.delete(id)
    res.json(row)
  }

}

export default new cadastroController()
