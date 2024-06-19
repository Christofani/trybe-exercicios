PI = 3.14


def square(side):
    """Calculate area of square"""
    return side * side


def rectangle(length, wwight):
    """Calculate area of rectangle"""
    return length * wwight


def circle(radius):
    """Calculate area of circle"""
    return PI * radius * radius


if __name__ == "__main__":
    print("Area of square: ", square(10))
    print("Area of rectangle: ", rectangle(2, 2))
    print("Area of circle: ", circle(3))
