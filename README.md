# NLW4_NODE
Sistema back-end para avaliação de serviços, atendimentos e empresas via e-mail.


Sistema usando TYPESCRIPT e EXPRESS, envia um e-mail (para o cliente que possui um usuário cadastrado) perguntando qual nota ele classifica o serviço. Armazena os dados das 
avaliações no banco de dados SQLITE, tanto os ids se users e surveys como a nota enviada.
O sistema consta com uma nps que avalia a porcentagem da empresa ou atendimento ou serviço, podendo ver os promotores, detetores, passivos, total de pessoas que votaram e a 
porcentagem final de acordo com as classificações.
Para testes, foram utilizadas aplicações como INSOMNIA e BEEKEEPER.
Os testes de e-mail foram realizados com ETHEREAL, que forneceu e-mail fakes para os testes da aplicação.
Para rodar o projeto, transporte as pastas para o seu editor de preferência e dê 'yarn dev' para iniciar o banco de dados da aplicação.
