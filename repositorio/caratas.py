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
    