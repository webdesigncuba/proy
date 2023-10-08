 * Projeto para Empresa UITEC - Soluções Tecnológicas
--------------------------------------------------
Projeto Feito em Angular: 16.2.8 como Frontend e Laravel Framework 10.26.2 como backend. BD em PostgresSQL.

O sistema iniciará com uma página principal onde serão exibidos dois botões para acessar as categorias e Produtos, ambos exibirão um índice de todos os registros e um botão para adicionar os referidos registros, através de um formulário.
O projeto vem acompanhado de uma pasta onde há um backup do banco de dados, mas opcionalmente você pode criar um banco de dados e executar as migrações e começar a usar o sistema.


* Restaurar banco de dados
----------------------------------------
O banco de dados é desenvolvido em Postgres 16, para restaurá-lo basta utilizar PGadmin4 e restaurá-lo utilizando seu utilitário.

Antes de migrar você precisará copiar o arquivo .env.example e renomeá-lo para .env e editar a seção Banco de dados.
```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE="NOME DE BANCO DE DADOS"
DB_USERNAME="USUARIO DE BANCO DE DADOS"
DB_PASSWORD="SENHA DE USUARIO DE BANCO DE DADOS"
```

*Executando Migrações
--------------------------------------
Usando o console no diretório Backend, execute o seguinte comando
php artisan migrate

Todas as migrações do sistema serão executadas e você estará pronto para trabalhar.



