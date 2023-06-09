import applications.doctors.app_db as doctors
ur = doctors.DoctorsRepository()

doctors = '''1 Иванов Иван Иванович Кардиолог
2 Петров Петр Петрович ЛОР
3 Смирнова Анна Васильевна Невролог
4 Козлова Елена Игоревна Кардиолог
5 Соколов Александр Алексеевич ЛОР
6 Михайлова Ольга Владимировна Невролог
7 Новиков Дмитрий Николаевич Кардиолог
8 Васильева Анастасия Александровна ЛОР
9 Григорьева Екатерина Сергеевна Невролог
10 Романов Игорь Валерьевич Кардиолог
11 Савельева Мария Дмитриевна ЛОР
12 Кузнецова Елена Петровна Невролог
13 Лебедев Иван Алексеевич Кардиолог
14 Ковалева Анна Сергеевна ЛОР
15 Жукова Ольга Николаевна Невролог
16 Морозов Павел Викторович Кардиолог
17 Беляева Ирина Александровна ЛОР
18 Титова Елена Владимировна Невролог
19 Антонова Анастасия Васильевна Кардиолог
20 Чернов Максим Михайлович ЛОР
21 Семенова Татьяна Сергеевна Невролог
22 Иванова Ольга Алексеевна Кардиолог
23 Козлов Владимир Дмитриевич ЛОР
24 Соколова Екатерина Викторовна Невролог
25 Петрова Марина Ивановна Кардиолог
26 Смирнов Дмитрий Сергеевич ЛОР
27 Николаева Алена Александровна Невролог
28 Григорьев Игорь Владимирович Кардиолог
29 Михайлова Оксана Анатольевна ЛОР
30 Васильева Наталья Петровна Невролог'''

print(doctors.split("\n"))

for doctor in doctors.split("\n"):
    doctor = doctor.split(" ")
    print(doctor)
    ur.add(
        fullname=doctor[1] + " " + doctor[2] + " " + doctor[3],
        speciality=doctor[4]
    )
    pass