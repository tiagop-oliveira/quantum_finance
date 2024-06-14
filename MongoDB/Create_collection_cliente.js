db.createCollection('clientes', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'clientes',
      required: ['nome', 'sobrenome', 'idade', 'cpf', 'ativo', 'datanascimento', 'pais', 'foto', 'assinatura', 'endereco', 'emails', 'telefones'],
      properties: {
        nome: {
          bsonType: 'string'
        },
        sobrenome: {
          bsonType: 'string'
        },
        idade: {
          bsonType: 'double'
        },
        cpf: {
          bsonType: 'string'
        },
        ativo: {
          bsonType: 'bool'
        },
        datanascimento: {
          bsonType: 'string'
        },
        pais: {
          bsonType: 'string'
        },
        foto: {
          bsonType: 'string'
        },
        assinatura: {
          bsonType: 'string'
        },
        endereco: {
          bsonType: 'object',
          title: 'object',
          required: ['rua', 'numero', 'bairro', 'cidade', 'cep'],
          properties: {
            rua: {
              bsonType: 'string'
            },
            numero: {
              bsonType: 'double'
            },
            bairro: {
              bsonType: 'string'
            },
            cidade: {
              bsonType: 'string'
            },
            cep: {
              bsonType: 'string'
            }
          }
        },
        emails: {
          bsonType: 'array',
          items: {
            bsonType: 'string'
          }
        },
        telefones: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['ddd', 'numero', 'ramais'],
            properties: {
              ddd: {
                bsonType: 'string'
              },
              numero: {
                bsonType: 'string'
              },
              ramais: {
                bsonType: 'array',
                items: {
                  bsonType: 'string'
                }
              }
            }
          }
        }
      }
    }
  },
  size: 0,
  max: 0
});