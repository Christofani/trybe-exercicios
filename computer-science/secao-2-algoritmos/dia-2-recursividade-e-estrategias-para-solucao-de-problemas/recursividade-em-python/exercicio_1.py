def soma(number):
    if number == 0:
        return 0
    else:
        print(number)
        return number + soma(number - 1)


print(soma(4))
