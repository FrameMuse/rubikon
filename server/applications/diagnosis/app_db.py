from akai.repository import Repository
import uuid

class DiagnosisRepository(Repository):
    def __init__(self):
        super().__init__(
            "diagnosis",
            {
                "id": "INTEGER PRIMARY KEY",
                "number": "TEXT",
                "birthday": "TEXT",
                "gender": "TEXT",
                "icd10code": "TEXT",
                "diagnosis": "TEXT",
                "speciality": "TEXT",
                "data": "TEXT",
                "appointment": "TEXT"
            }
        )

    def add(self, number, birthday, gender, icd10code, diagnosis, speciality, data, appointment) -> None:

        patient = {
            
            "number": number,
            "birthday": birthday,
            "gender": gender,
            "icd10code": icd10code,
            "diagnosis": diagnosis,
            "speciality": speciality,
            "data": data,
            "appointment": appointment
        }

        self._add_row(patient)

        

        return patient

    def get_all(self):
        return self._get_all()
    
    def get_by_id(self,id):
        return self._get_by_id(id)
