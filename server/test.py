import json
from time import time as t
a = {
    "data":{
        "status":"Clear",
        "time":t()
    }
}


print(json.dumps(a))