#import here applications

import applications.users.app
import applications.diagnosis.app
import applications.doctors.app
import applications.patients.app
applications = [applications.diagnosis.app,
                applications.doctors.app,
                applications.patients.app,
                applications.users.app
                ]


def initialize(app,):
    for application in applications:
        application.run_app(app)

