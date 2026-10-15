from conexao import conectar

def listar_brindes():
    conexao = conectar()
    cursor = conexao.cursor()
    cursor.execute("SELECT * FROM brinde")
    brindes = cursor.fetchall()
    print(brindes)
    cursor.close()
    conexao.close()

def buscar_brinde_por_cod(cod):
    conexao = conectar()
    cursor = conexao.cursor()
    cursor.execute("SELECT * FROM brinde WHERE cod = %s", (cod,))
    brinde = cursor.fetchone()
    print(brinde)
    cursor.close()
    conexao.close()

def excluir_brinde(id):
    conexao = conectar()
    cursor = conexao.cursor()
    cursor.execute("DELETE FROM brinde WHERE cod = %s", (id,))
    conexao.commit()
    cursor.close()
    conexao.close()

def cadastrar_brinde(nome, descricao, qtd_total, qtd_sorteada):
    conexao = conectar()
    cursor = conexao.cursor()
    comando = """
    INSERT INTO brinde 
    (nome, descricao, qtd_total, qtd_sorteada) 
    VALUES (%s, %s, %s, %s)
    """
    valores = (nome, descricao, qtd_total, qtd_sorteada)
    cursor.execute(comando, valores)
    conexao.commit()
    cursor.close()
    conexao.close()

cadastrar_brinde("brinde1", "descricao do brinde 1", 10, 0)