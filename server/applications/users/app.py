from flask import Flask, request
from akai.const import Settings
from applications.users.app_db import TokensRepository, UsersRepository
from random import randint
import uuid

APP_PREFIX = Settings.API_VERSION + "users/"

#/api/v1/users/user

def run_app(app:Flask):

    @app.route(APP_PREFIX + 'user', methods=['GET', 'POST'])
    def user():
        
        if request.method == "GET":
            usersRepository = UsersRepository()
            token = request.headers.get('token')
            current_user = usersRepository.get_user_by_token(token=token)

            if current_user:

                return {
                        "status":"created",
                        "user":{
                            "id":current_user.id,
                            "name":current_user.name,
                            "surname":current_user.surname,
                            "middlename":current_user.middlename,
                            "speciality":"main",
                            "type":"admin",
                            "avatar":"https://i.imgur.com/vYjv0ID.png",
                            "username":current_user.username,
                            "token":current_user.token
                        },
                    }
            
            else:

                return {
                    "error":"user with that token doesn`t exists"
                }

            # if user:
            #     return {
            #         "user":user
            #     }
            # else:
            #     return {
            #         "Error":{
            #             "Reason:":"This user with given Token does not exists"
            #         }
            #     }
        
        if request.method == "POST":
            
            usersRepository = UsersRepository()
            if request.form.get("username") and request.form.get("password") and request.form.get("name") and request.form.get("surname") and request.form.get("middlename"):
                
                if usersRepository.is_username_unique(request.form.get("username")) != True:
                    return {
                        "error":"User with that username is exists"
                    }

                current_user = usersRepository.add(
                                    username=request.form.get("username"),
                                    password=request.form.get("password"),
                                    name=request.form.get("name"),
                                    surname=request.form.get("surname"),
                                    middlename=request.form.get("middlename"),
                                    )


                return {
                    "status":"created",
                    "user":{
                        "id":current_user.id,
                        "name":current_user.name,
                        "surname":current_user.surname,
                        "middlename":current_user.middlename,
                        "speciality":"main",
                        "type":"admin",
                        "avatar":"https://i.imgur.com/vYjv0ID.png",
                        "username":current_user.username,
                        "token":current_user.token
                    },
                }
    pass