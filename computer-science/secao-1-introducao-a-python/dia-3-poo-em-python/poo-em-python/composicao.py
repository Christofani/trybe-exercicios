class Pet:
    def __init__(self, nome, especie, idade, humano):
        self.name = nome
        self.especie = especie
        self.idade = idade
        self.humano = humano

    def __str__(self):
        return f"""
         - Espécie: {self.especie}
         - Nome: {self.name}
         - Idade: {self.idade}
         - Pessoa responsável: {self.humano}    
        """


thor = Pet("Bill", "Cachorro", 2, "Bia")

print(thor)
