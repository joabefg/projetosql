from conexao import conectar

def listar_cartas():
    conexao = conectar()
    cursor = conexao.cursor()
    cursor.execute("SELECT * FROM carta")
    cartas = cursor.fetchall()
    print(cartas)
    cursor.close()
    conexao.close()

def excluir_carta(id):
    conexao = conectar()
    cursor = conexao.cursor()
    cursor.execute("DELETE FROM carta WHERE cod = %s", (id,))
    conexao.commit()
    cursor.close()
    conexao.close() 

def buscar_carta_por_id(id):
    conexao = conectar()
    cursor = conexao.cursor()
    cursor.execute("SELECT * FROM carta WHERE cod = %s", (id,))
    carta = cursor.fetchone()
    print(carta)
    cursor.close()
    conexao.close()

   

def cadastrar_carta(nome, desc, eft, atk, de, crit):
    conexao = conectar()
    cursor = conexao.cursor()
    comando = """
    insert into carta(nome, descricao, efeito, ataque, defesa, critico)
    values (%s, %s, %s, %s, %s, %s)
    """
    valores = (nome, desc, eft, atk, de, crit)
    cursor.execute(comando, valores)
    conexao.commit()
    cursor.close()
    conexao.close()

buscar_carta_por_id(4)