
#pip install flask

from flask import Flask, render_template, request
from banco import conectar
from validacoes import validar_cadastro

app = Flask (__name__)

@app.route("/aventureiro")
def reg_aventureiro():
    return render_template("form_aventureiro.html")

@app.route("/")
def inicio():
    return render_template("index.html")

@app.route("/cadastrar", methods=["POST"])
def cadastrar_aventureiro():
    sql = request.form["sql"]
    valido, mensagem = validar_cadastro(sql)
    if valido == False:
        return render_template(
            "form_aventureiro.html", msg= mensagem
        )

app.run()