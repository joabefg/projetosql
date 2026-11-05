from banco import cadastrar_aventureiro
def validar_cadastro(sql):
    sql = sql.lower()

    # erros
    if "insert" not in sql:
        return False, "Você precisa utilizar INSERT"
    if "into" not in sql:
        return False, "Você precisa utilizar INTO"
    if "aventureiro" not in sql:
        return False, "Falta o nome correto da tabela"
    return True, "SELECT válido"
    
    # acertos   
    cadastrar_aventureiro(sql)