# import random
# def escada_invertida(nome):
#     for i in range(len(nome), 0, -1):
#         print(nome[:i])


# nome = input("Digite um nome: ")
# escada_invertida(nome)

# Path: exercicio_2.py

import random


def jogo_palavra_embaralhada():
    with open("palavras.txt", "r") as f:
        lista_palavras = [linha.strip() for linha in f.readlines()]

    palavra_escolhida = random.choice(lista_palavras)
    palavra_embaralhada = "".join(
        random.sample(palavra_escolhida, len(palavra_escolhida))
    )

    print("A palavra embaralhada é: ", palavra_embaralhada)

    for tentativa in range(3, 0, -1):
        palpite = input(f"Você tem {tentativa} tentativas. Qual é a palavra? ")
        if palpite == palavra_escolhida:
            print("Parabéns, você ganhou!")
            return
        else:
            print("Infelizmente, essa não é a palavra correta.")

    print("Você perdeu. A palavra era: ", palavra_escolhida)


jogo_palavra_embaralhada()
