import csv
import chardet
import applications.diagnosis.app_db as Diagnosis
ur = Diagnosis.DiagnosisRepository()

with open('Dataset.csv', 'rb') as f:
    result = chardet.detect(f.read())
    encoding = result['encoding']
i = 0
with open('Dataset.csv', 'r', encoding=encoding) as f:
    reader = csv.reader(f)
    for row in reader:
        if i != 0:
            
        
            ur.add(number = row[2],
                birthday = row[1],
                gender = row[0],
                icd10code = row[3],
                diagnosis = row[4],
                speciality = row[6],
                data = row[5],
                appointment = row[7])
            
        i+=1
        print(row)