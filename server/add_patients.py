import applications.patients.app_db as patients
ur = patients.PatientsRepository()

doctors = '''1 Грипп Иванова А.А. Женщ. 32 1991-07-15
2 Пневмония Смирнов В.И. Муж. 45 1978-03-23
3 Астма Петрова О.Н. Женщ. 28 1995-11-02
4 Диабет Козлов Д.С. Муж. 57 1966-09-10
5 Артрит Соколова Е.М. Женщ. 64 1959-05-18
6 Ожирение Лебедева М.И. Женщ. 41 1982-12-07
7 Ангина Иванов П.А. Муж. 39 1984-08-30
8 Гастрит Смирнова Л.С. Женщ. 50 1973-02-13
9 Мигрень Петров Д.М. Муж. 34 1989-06-26
10 Аллергия Козлова Е.А. Женщ. 21 2002-09-05
11 Онкология Соколов И.В. Муж. 60 1963-04-02
12 Артрит Лебедева М.И. Женщ. 55 1968-11-20
13 Грипп Иванова А.А. Женщ. 44 1979-07-08
14 Пневмония Смирнов В.И. Муж. 37 1986-03-16
15 Астма Петрова О.Н. Женщ. 29 1994-10-31
16 Диабет Козлов Д.С. Муж. 52 1971-09-09
17 Артрит Соколова Е.М. Женщ. 62 1961-05-17
18 Ожирение Лебедева М.И. Женщ. 49 1974-01-08
19 Ангина Иванов П.А. Муж. 36 1987-08-24
20 Гастрит Смирнова Л.С. Женщ. 51 1972-03-11
21 Мигрень Петров Д.М. Муж. 33 1990-06-23
22 Аллергия Козлова Е.А. Женщ. 25 1998-09-10
23 Онкология Соколов И.В. Муж. 63 1960-03-28
24 Артрит Лебедева М.И. Женщ. 58 1965-10-15
25 Грипп Иванова А.А. Женщ. 46 1977-06-07
26 Пневмония Смирнов В.И. Муж. 38 1985-02-15
27 Астма Петрова О.Н. Женщ. 30 1993-11-01
28 Диабет Козлов Д.С. Муж. 55 1968-09-09
29 Артрит Соколова Е.М. Женщ. 66 1957-05-27
30 Ожирение Лебедева М.И. Женщ. 42 1981-12-17'''

print(doctors.split("\n"))

for doctor in doctors.split("\n"):
    doctor = doctor.split(" ")
    print(doctor)
    ur.add(
        diagnosis=doctor[1],
        doctor=doctor[2] + " " + doctor[3],
        gender=doctor[4],
        age= doctor[5],
        birthday= doctor[6]
    )
    pass