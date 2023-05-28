from akai.repository import Repository
import uuid

class DoctorsRepository(Repository):
    def __init__(self):
        super().__init__(
            "doctors",
            {
                "id": "INTEGER PRIMARY KEY",
                "fullname": "TEXT",
                "speciality": "TEXT",
            }
        )

    def add(self, fullname, speciality,) -> None:

        doctor = {
            
            "fullname": fullname,
            "speciality": speciality,

        }

        self._add_row(doctor)

        

        return doctor

    def get_all(self):
        return self._get_all()
    
    def get_by_id(self,id):
        return self._get_by_id(id)
