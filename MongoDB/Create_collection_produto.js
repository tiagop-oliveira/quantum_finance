db.createCollection('produto', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'produto',
      required: ['nome', 'tipo', 'descricao'],
      properties: {
        nome: {
          bsonType: 'string'
        },
        tipo: {
          bsonType: 'string'
        },
        descricao: {
          bsonType: 'string'
        },
        nivel_risco: {
          bsonType: 'string'
        },
        moeda: {
          bsonType: 'string'
        },
        invest_inicial: {
          bsonType: 'string'
        },
        valor_atual: {
          bsonType: 'string'
        },
        data_historico: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              data: {
                bsonType: 'string'
              },
              valor: {
                bsonType: 'string'
              }
            }
          }
        },
        emissor: {
          bsonType: 'object',
          title: 'object',
          properties: {
            nome: {
              bsonType: 'string'
            },
            pais: {
              bsonType: 'string'
            },
            rating: {
              bsonType: 'string'
            }
          }
        },
        termos: {
          bsonType: 'object',
          title: 'object',
          properties: {
            data_vencimento: {
              bsonType: 'string'
            },
            Juros: {
              bsonType: 'string'
            },
            rendimento_dividendos: {
              bsonType: 'string'
            }
          }
        },
        taxas: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              tipo: {
                bsonType: 'string'
              },
              valor_taxa: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    }
  }
});