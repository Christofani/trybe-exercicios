import area

PEOPLE_AREA = 2
FIELD_LENGTH = 60
FIELD_WIDTH = 45

people_concert = area.rectangle(FIELD_LENGTH, FIELD_WIDTH) * PEOPLE_AREA

print("Estão presentes no show aproximadamente", people_concert, "pessoas.")
