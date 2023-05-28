from akai.repository import Repository
import uuid
import sys
print(sys.setrecursionlimit(2000))
class PatientsRepository(Repository):
    def __init__(self):
        super().__init__(
            "patients",
            {
                "id": "INTEGER PRIMARY KEY",
                "diagnosis": "TEXT",
                "doctor": "TEXT",
                "gender": "TEXT",
                "age": "TEXT",
                "birthday": "TEXT",
            }
        )

    def add(self, diagnosis, doctor, gender, age, birthday) -> None:

        patient = {
            
            "diagnosis": diagnosis,
            "doctor": doctor,
            "gender": gender,
            "age": age,
            "birthday": birthday,
        }

        self._add_row(patient)

        

        return patient

    def get_all(self):
        return self._get_all()
    
    def get_by_id(self,id):
        return self._get_by_id(id)
    
