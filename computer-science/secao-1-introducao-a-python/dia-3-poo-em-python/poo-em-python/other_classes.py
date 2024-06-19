from heranca import Eletrodomestico


class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


class MaquinaDeLavar(Eletrodomestico):
    pass


secador = Secador("Branco", "450", "127", "400")
batedeira = Batedeira("Prata", "200", "127", "290")
maquina_de_lavar = MaquinaDeLavar("Preta", "6000", "127", "1300")

print(f"O secador {secador.cor} custa {secador.preco}.")
print(f"A batedeira {batedeira.cor} custa {batedeira.preco}.")
print(f"A máquina de lavar {maquina_de_lavar.cor} " f"custa {maquina_de_lavar.preco}.")
