# def countDown(n):
#     if n == 0:
#         print("Fim")
#     else:
#         print(n)
#         countDown(n - 1)


# countDown(5)


def iterative_countdown(n):
    while n > 0:
        print(n)
        n = n - 1
    print("FIM!")


iterative_countdown(5)


def iterative_factorial(n):
    fact = 1

    for i in range(1, n + 1):
        fact = fact * i

    return fact


iterative_factorial(5)
