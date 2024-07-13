import { rejects } from "assert"
import mysql from "mysql"

const conexao = mysql.createConnection({

  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSAWORD,
  database: process.env.DATABASE


})

/**
 * @param {string} sql
 * @param {string = id || [cadastro, id]} valores
 * @param {string} mensagemReject
 * @returns  
 */



conexao.connect()

export const consulta = (sql, valores = " ", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (erro, result) => {
      console.log(sql, valores)
      if (erro){

       
       return reject(`erro na hora de ${mensagemReject}`)
      }
      const linha = JSON.parse(JSON.stringify(result))
      return resolve(linha)
    })

  })
}

export default conexao