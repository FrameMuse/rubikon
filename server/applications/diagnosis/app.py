from flask import Flask, request, jsonify
from akai.const import Settings
from applications.diagnosis.app_db import DiagnosisRepository
from random import randint
import uuid

APP_PREFIX = Settings.API_VERSION + "diagnosis/"



def run_app(app:Flask):
    
    @app.route(APP_PREFIX + 'diagnosis', methods=['GET', 'POST'])
    def diagnosis():
        diagnosisRepository = DiagnosisRepository()
        if request.method == "GET":
            res = {
                "diagnosis":[]
            }

            diagnosis_items = diagnosisRepository.get_all()
            print(diagnosis_items[0].__dict__)
            for i in diagnosis_items:
                res["diagnosis"].append(
                    {
                        "id":i.id,
                        "number": i.number.replace("\n","",5),
                        "birthday": i.birthday.replace("\n","",5),
                        "gender": i.gender.replace("\n","",5),
                        "icd10code": i.icd10code.replace("\n","",5),
                        "diagnosis": i.diagnosis.replace("\n","",5),
                        "speciality": i.speciality.replace("\n","",5),
                        "data": i.data.replace("\n","",5),
                        "appointment": i.appointment.replace("\n","",5),
                    }
                )

            return res
        
    @app.route(APP_PREFIX + 'diagnosi', methods=['GET', 'POST'])
    def diagnosi():
        diagnosisRepository = DiagnosisRepository()
        if request.method == "GET":
            id = request.args.get('id')
            diagnosi_item = diagnosisRepository.get_by_id(id)
            res = {
                        "id":diagnosi_item.id,
                        "number": diagnosi_item.number.replace("\n","",5),
                        "birthday": diagnosi_item.birthday.replace("\n","",5),
                        "gender": diagnosi_item.gender.replace("\n","",5),
                        "icd10code": diagnosi_item.icd10code.replace("\n","",5),
                        "diagnosis": diagnosi_item.diagnosis.replace("\n","",5),
                        "speciality": diagnosi_item.speciality.replace("\n","",5),
                        "data": diagnosi_item.data.replace("\n","",5),
                        "appointment": diagnosi_item.appointment.replace("\n","",5),
                    }
            
            return res

