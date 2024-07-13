import { consulta } from "../database/conexao.js"


class cadastroRepository {

  creat(cadastro) {
    const sql = "INSERT INTO cadastro SET ?"
    return consulta(sql, cadastro, `não foi possivel cadastrar`)

  }

  findAll() {
    const sql = "SELECT * FROM cadastro"
    return consulta(sql, `não foi possivel listar`)
  }

  findById(id) {
    const sql = "SELECT * FROM cadastro WHERE id = ?"
    return consulta(sql, id, `não foi possivel pesquisar`)
  }

  update(cadastro, id) {
    const sql = "UPDATE cadastro SET ? WHERE id = ?"
    return consulta(sql, [cadastro, id], `não foi possivel atualizar`)
  }

  delete(id) {
    const sql = "DELETE  FROM cadastro WHERE id =?"
    return consulta(sql, id, `não foi posisvel deletar`)
  }
}

export default new cadastroRepository()
