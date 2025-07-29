from fastapi import FastAPI
from fastapi.testclient import TestClient

import main
client = TestClient(main.app)



def test_read_main():
    response = client.get("/")
    assert response.status_code == 200

def test_predict_route():
    file_name = 'static/images/fox.jpg'
    response = client.post(
        "/predict",files={"file":("fox_image", open(file_name, "rb"), "image/jpeg")}
        )
    assert response.status_code == 200
    
    