import io
import ssl
import datetime
import torchvision.transforms as transforms
from torchvision import models
from PIL import Image
import json

# Fix SSL certificate verification issue
ssl._create_default_https_context = ssl._create_unverified_context

#models
model = models.densenet121(weights='IMAGENET1K_V1')
model.eval()

#imagenet classes - fix the file path
imagenet_class_index = json.load(open('static/imagenet_class_index.json'))

def transform_image(image_bytes):
    my_transforms = transforms.Compose([transforms.Resize(255),
                                        transforms.CenterCrop(224),
                                        transforms.ToTensor(),
                                        transforms.Normalize(
                                            [0.485, 0.456, 0.406],
                                            [0.229, 0.224, 0.225])])
    image = Image.open(io.BytesIO(image_bytes))
    return my_transforms(image).unsqueeze(0)

def get_prediction(image_bytes):
    tensor = transform_image(image_bytes=image_bytes)
    outputs = model(tensor)
    _, y_hat = outputs.max(1)
    predicted_index = str(y_hat.item())
    return imagenet_class_index[predicted_index]

def get_result(image_file):
    start_time = datetime.datetime.now()
    image_bytes = image_file.file.read()
    class_id,class_name = get_prediction(image_bytes)
    end_time = datetime.datetime.now()
    time_diff = (end_time - start_time)
    execution_time = f'{round(time_diff.total_seconds() * 1000)}ms'
    print(f"Class ID: {class_id}\nClass Name: {class_name}")
    result = {
        "Inference_Time": execution_time,
        "Prediction": {       
            "Predicted_Class_ID": class_id,
            "Predicted_Class_Name": class_name,
            }
        }
    print(f"Result:\n{result}")

    return result