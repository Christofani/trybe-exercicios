# NAME = input("Qual é o seu nome ?")

# for letter in NAME:
#     print(letter)


nums = input("Digite aqui os valores separados por espaço:")

nums_arg = nums.split(" ")

sum = 0
for num in nums_arg:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} é um valor inválido")
    else:
        sum += int(num)

print(f"A soma de todos o valores é {sum}")
