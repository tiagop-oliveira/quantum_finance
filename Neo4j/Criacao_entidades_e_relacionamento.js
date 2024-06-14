// Criar Produto de Crédito
CREATE (cp:CreditProduct {
  id: "unique_id",
  name: "Nome do Produto de Crédito",
  type: "Tipo de Produto de Crédito",
  description: "Descrição detalhada do produto de crédito",
  balance: "Saldo Atual"
})

// Criar Provedor
CREATE (p:Provider {
  name: "Nome do Provedor",
  country: "País do Provedor",
  rating: "Rating do Provedor"
})

// Relacionar Produto de Crédito com Provedor
MATCH (cp:CreditProduct {id: "unique_id"}), (p:Provider {name: "Nome do Provedor"})
CREATE (cp)-[:PROVIDED_BY]->(p)

// Criar Termos
CREATE (t:Terms {
  start_date: "Data de Início",
  end_date: "Data de Término",
  credit_limit: "Limite de Crédito",
  interest_rate: "Taxa de Juros",
  monthly_payment: "Pagamento Mensal",
  currency: "Moeda"
})

// Relacionar Produto de Crédito com Termos
MATCH (cp:CreditProduct {id: "unique_id"}), (t:Terms {start_date: "Data de Início"})
CREATE (cp)-[:HAS_TERMS]->(t)

// Criar Taxas e Relacionar com Termos
WITH [
  {type: "Tipo de Taxa 1", amount: "Valor da Taxa 1"},
  {type: "Tipo de Taxa 2", amount: "Valor da Taxa 2"}
] AS fees
UNWIND fees AS fee
CREATE (f:Fee {
  type: fee.type,
  amount: fee.amount
})
//Relacionar termos e data de inicio
MATCH (t:Terms {start_date: "Data de Início"})
CREATE (t)-[:INCLUDES_FEE]->(f)

// Criar Cliente
CREATE (c:Customer {
  customer_id: "ID do Cliente",
  name: "Nome do Cliente",
  email: "Email do Cliente",
  phone: "Telefone do Cliente"
})

// Relacionar Produto de Crédito com Cliente
MATCH (cp:CreditProduct {id: "unique_id"}), (c:Customer {customer_id: "ID do Cliente"})
CREATE (cp)-[:OWNED_BY]->(c)

// Criar Transações e Relacionar com Produto de Crédito e Cliente
WITH [
  {date: "Data da Transação 1", description: "Descrição da Transação 1", amount: "Valor da Transação 1"},
  {date: "Data da Transação 2", description: "Descrição da Transação 2", amount: "Valor da Transação 2"}
] AS transactions
UNWIND transactions AS tx
CREATE (t:Transaction {
  date: tx.date,
  description: tx.description,
  amount: tx.amount
})
MATCH (cp:CreditProduct {id: "unique_id"}), (c:Customer {customer_id: "ID do Cliente"})
CREATE (cp)-[:HAS_TRANSACTION]->(t)
CREATE (c)-[:MADE_TRANSACTION]->(t)
