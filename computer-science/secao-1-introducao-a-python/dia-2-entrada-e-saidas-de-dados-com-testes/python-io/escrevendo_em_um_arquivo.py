file = open("meu-arquivo.txt", mode="w")

with open("meu-arquivo.txt", "w") as file:
    file.write("Maria 45\n")
    file.write("Miguel 33\n")

    print("Túlio 22", file=file)

    LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
    file.writelines(LINES)

    print(file.closed)
print(file.closed)


with open("arquivo.txt", "w") as file:
    file.write("Trybe S2")

# leitura
with open("arquivo.txt", "r") as file:
    content = file.read()
    print(content)


# escrita
with open("arquivo.txt", "w") as file:
    LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
    file.writelines(LINES)

# leitura
with open("arquivo.txt", "r") as file:
    for line in file:
        print(line)  # não esqueça que a quebra de linha também é um caractere da linha


file.close()
print(file.closed)
