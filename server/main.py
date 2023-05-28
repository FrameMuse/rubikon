#AkaiFramework 2023

from flask import Flask, request
from applications.app_manager import initialize
app = Flask(__name__)

initialize(app)

if __name__ == '__main__':
    app.run()