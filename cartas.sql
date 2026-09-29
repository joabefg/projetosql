USE cardgame; 
-- DDL Mexer na estrutura do banco de dados criacao da tabela--
CREATE TABLE IF NOT EXISTS carta(
    cod INT AUTO_INCREMENT PRIMARY KEY, --isso significa que toda vez que inserir uma nova carta ele vai pegar e salvar
    nome  VARCHAR (100) NOT NULL, 
    descricao VARCHAR(255),
    efeitos VARCHAR(255),
    ataque INT, 
    defesa INT,
    critico INT
)