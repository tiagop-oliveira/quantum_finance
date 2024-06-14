db.createCollection('servicos', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'servicos',
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
            data_inicio: {
              bsonType: 'string'
            },
            data_vencimento: {
              bsonType: 'string'
            },
            taxa_Juros: {
              bsonType: 'string'
            },
            rendimento_dividendos: {
              bsonType: 'string'
            },
            premio: {
              bsonType: 'string'
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
            },
            valor_cobertura: {
              bsonType: 'string'
            },
            valor_emprestimo: {
              bsonType: 'string'
            },
            saldo: {
              bsonType: 'string'
            },
            pagamento_mensal: {
              bsonType: 'string'
            },
            moeda: {
              bsonType: 'string'
            }
          }
        }
      }
    }
  }
});