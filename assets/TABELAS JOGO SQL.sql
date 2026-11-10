CREATE DATABASE IF NOT EXISTS surviveqarolgame;
USE surviveqarolgame;

/*Os cômodos da casa, na qual a Carol vai sair explorando com o nome e a localização, se fica no 1º andar ou 2º andar.*/
CREATE TABLE comodo (
	id_comodo INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    localizacao VARCHAR(100),
    status BOOLEAN);
    
/*O inventario será a bolsa da Carol, na qual colocará os itens essenciais para sair da casa, com o FK do item, se você já usou o item ou não e o desgaste dos itens, ou seja, o estado.*/
CREATE TABLE inventario (
	id_inventario INT PRIMARY KEY AUTO_INCREMENT,
    item INT,
    uso BOOLEAN,
    estado VARCHAR(35),
    FOREIGN KEY(item) REFERENCES item(id_item));
    
/*A tabela de itens, quais itens estão disponiveis, qual nome, se você já usou o item e o estado*/
CREATE TABLE item (
	id_item INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    uso BOOLEAN,
    Estado VARCHAR(50)
    );

/*Aqui é a junção dos cômodos e os itens, dependendo de qual cômodo estiver, vai pegar o item pela respectiva sala, transferindo para o inventário.*/
CREATE TABLE salas_item (
	id_qi INT PRIMARY KEY AUTO_INCREMENT,
    id_comodo INT,
    id_item INT,
    FOREIGN KEY (id_comodo) REFERENCES comodo(id_comodo),
    FOREIGN KEY (id_item) REFERENCES item(id_item));
    
