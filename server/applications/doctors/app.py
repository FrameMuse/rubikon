from flask import Flask, request, jsonify
from akai.const import Settings
from applications.doctors.app_db import DoctorsRepository
from random import randint
import uuid

APP_PREFIX = Settings.API_VERSION + "doctors/"



def run_app(app:Flask):
    
    @app.route(APP_PREFIX + 'doctors', methods=['GET', 'POST'])
    def doctors():
        doctorsRepository = DoctorsRepository()
        if request.method == "GET":
            res = {
                "doctors":[]
            }

            doctors_items = doctorsRepository.get_all()
            print(doctors_items[0].__dict__)
            for i in doctors_items:
                res["doctors"].append(
                    {
                        "id":i.id,
                        "fullname": i.fullname,
                        "speciality": i.speciality,
                    }
                )

            return res
        
    @app.route(APP_PREFIX + 'doctor', methods=['GET', 'POST'])
    def doctor():
        doctorsRepository = DoctorsRepository()
        if request.method == "GET":
            id = request.args.get('id')
            doctor_item = doctorsRepository.get_by_id(id)
            res = {
                "doctor":
                    {
                        "id":doctor_item.id,
                        "fullname": doctor_item.fullname,
                        "speciality": doctor_item.speciality,
                    }
            }
            
            return res

