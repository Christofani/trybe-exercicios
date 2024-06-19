def numberUp(num1, num2):
    if num1 > num2:
        print(num1)
    else:
        print(num2)


numberUp(10, 9)

lista = [10, 8, 7, 6, 5]


def mean(numbers):
    total = 0
    for number in numbers:
        total += number
        return total / len(numbers)


print(mean([5, 6, 8, 9, 10, 8]))


def draw_square(n):
    for row in range(n):
        print(n * "*")


draw_square(6)


def find_name(names):
    big_name = names[0]
    for name in names:
        if len(name) > len(big_name):
            big_name = name
    return big_name


print(find_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))


def paint_walls(area):
    can_price = 80
    required_l = area / 3
    required_cans = required_l // 18
    if required_l % 18:
        required_l += 1
    return required_cans, required_cans * can_price


def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3 and side2 + side3 > side1 and side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"
