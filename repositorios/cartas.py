cadastrar_carta{
from repositorio.conexao import conectar

def cadastrar_carta(
        nome,
        descricao,
        efeito,
        ataque,
        defesa,
        critico
):
    conectar()
    sql = """
    INSERT INTO cartas (nome, descricao, efeito, ataque, defesa, critico)
    VALUES (%s, %s, %s, %s, %s, %s)
    """
cadastrar_carta(
    "carta ex",
    "descricao ex",
    "efeito ex",
    10,
    20,
    100)
}