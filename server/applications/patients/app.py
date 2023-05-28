from flask import Flask, request, jsonify
from akai.const import Settings
from applications.patients.app_db import PatientsRepository
from random import randint
import uuid

APP_PREFIX = Settings.API_VERSION + "patients/"



def run_app(app:Flask):
    
    @app.route(APP_PREFIX + 'patients', methods=['GET', 'POST'])
    def patients():
        patientsRepository = PatientsRepository()
        if request.method == "GET":
            res = {
                "patients":[]
            }

            patients_items = patientsRepository.get_all()
            print(patients_items[0].__dict__)
            for i in patients_items:
                res["patients"].append(
                    {
                        "diagnosis":i.diagnosis,
                        "doctor": i.doctor,
                        "gender": i.gender,
                        "age": i.age,
                        "birthday": i.birthday,
                    }
                )


            # print(patientsRepository.get_all())
            # return patientsRepository.get_all()
            return res
        
    @app.route(APP_PREFIX + 'patient', methods=['GET', 'POST'])
    def patient():
        patientsRepository = PatientsRepository()
        if request.method == "GET":
            id = request.args.get('id')
            patient_item = patientsRepository.get_by_id(id)
            res = {
                "patient":{
                        "diagnosis":patient_item.diagnosis,
                        "doctor": patient_item.doctor,
                        "gender": patient_item.gender,
                        "age": patient_item.age,
                        "birthday": patient_item.birthday,
                    }
            }
            
            return res

