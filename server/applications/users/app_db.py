from akai.repository import Repository
import uuid

class UsersRepository(Repository):
    def __init__(self):
        super().__init__(
            "users",
            {
                "id": "INTEGER PRIMARY KEY",
                "name":"TEXT",
                "surname":"TEXT",
                "middlename":"TEXT",
                "username": "TEXT",
                "password": "TEXT",
                "token":"TEXT",
                "created_at": "TIMESTAMP",
            }
        )

    def add(self, username: str, password, name, surname, middlename) -> None:

        user = {
            "name" : name,
            "surname" : surname,
            "middlename" : middlename,
            "username": username,
            "password": password,
            "token":uuid.uuid4().hex + uuid.uuid4().hex,
            "created_at": self._timestamp(),
        }

        self._add_row(user)

        

        return self.get_user_by_username(user["username"])

    def get_user_by_username(self, username):
        return self._find_by_column("username", username)
    
    def get_user_by_token(self, token):
        return self._find_by_column("token", token)
    
    def is_username_unique(self, username):
        if self._find_by_column("username", username) != None:
            return False
        else:
            return True
        


class TokensRepository(Repository):
    def __init__(self):
        super().__init__(
            "tokens",
            {
                "id": "INTEGER PRIMARY KEY",
                "user_id": "TEXT",
                "token": "TEXT",
                "created_at": "TIMESTAMP",
            }
        )

    def add(self, user_id: str, token: int) -> None:
        self._add_row({
            "user_id": user_id,
            "token": token,
            "created_at": self._timestamp(),
        })

    def get_user_by_token(self,token:str) -> None:
        ur = UsersRepository()
        
        return ur._get_by_id(self._find_by_column("token",token)["id"])

    # def get_user_by_username(self,username:str) -> 

    