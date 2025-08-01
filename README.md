# Image Recognition with FastAPI & PyTorch

A modern web application for image classification using PyTorch and FastAPI. Upload images and get instant AI-powered predictions with a beautiful, responsive interface. **Now containerized with Docker for easy deployment anywhere!**

## 🚀 Features

- **AI-Powered Classification**: Uses pre-trained DenseNet121 model for accurate image recognition
- **Beautiful UI**: Modern, responsive design with drag-and-drop functionality
- **Real-time Processing**: Fast inference with processing time display
- **Multiple Formats**: Supports JPG, PNG, and WEBP images
- **Mobile Responsive**: Works perfectly on desktop and mobile devices

## 📋 Prerequisites

- pip (Python package installer)

## 🛠️ Installation

### Option 1: Docker (Recommended)

#### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd Image_Recognition_with_FastAPI_&_PyTorch
```

#### 2. Build and Run with Docker
```bash
#login
docker login

# Build the Docker image
docker build -t image-recognition-app .

# Run the container
docker run -p 8000:8000 image-recognition-app
```

#### 3. Access Your Application
- **Web Interface**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

### Option 2: Docker Hub (Pre-built Image)

#### 1. Pull from Docker Hub
```bash
# Pull the pre-built image
docker pull bistrel/image-recognition-app:v2

# Run the container
docker run -p 8000:8000 bistrel/image-recognition-app:v2
```

#### 2. Access Your Application
- **Web Interface**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

### Option 3: Docker Desktop (GUI)

#### 1. Open Docker Desktop
- Launch Docker Desktop application
- Ensure it's running (green icon in menu bar)

#### 2. Pull and Run
- Go to **"Images"** tab
- Click **"Pull"** and enter: `bistrel/image-recognition-app:v2`
- Click **"Run"** button

#### 3. Access Your Application
- Click visit: http://localhost:8000 Port from Containers

### Option 4: Local Development

#### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd Image_Recognition_with_FastAPI_&_PyTorch
```

#### 2. Create Virtual Environment
```bash
# Create virtual environment
python -m venv .venv

# Activate virtual environment
# On macOS/Linux
source .venv/bin/activate

# On Windows
.venv\Scripts\activate
```

#### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

#### 4. Local Development
```bash
# Start the development server
uvicorn main:app --reload

# Open your browser and go to
http://localhost:8000
```

## 📁 Project Structure

```
Image_Recognition_with_FastAPI_&_PyTorch/
├── main.py                 # FastAPI application entry point
├── utils.py                # Image processing and ML utilities
├── requirements.txt        # Python dependencies
├── README.md              # This file
├── test_main.py           # Test suite
├── Procfile               # Production deployment configuration
├── Dockerfile             # Docker container configuration
├── .dockerignore          # Docker build exclusions
├── template/
│   └── index.html         # Main HTML template
└── static/
    ├── css/
    │   └── style.css      # CSS styles
    ├── js/
    │   └── app.js         # JavaScript functionality
    ├── images/            # Sample images
    │   ├── fox.jpeg
    │   ├── fox.jpg
    │   └── tiger.jpg
    └── imagenet_class_index.json  # ImageNet class labels
```

## 🧪 Testing

Run the comprehensive test suite:

```bash
# Run tests
python -m pytest test_main.py -v
```
OR

```bash
# Run tests
 pytest  -vv
```


## 🌐 API Endpoints

### GET `/`
- **Description**: Main application page with upload interface
- **Response**: HTML page with drag-and-drop file upload

### POST `/`
- **Description**: Upload and classify image (form submission)
- **Parameters**: `file` (image file)
- **Response**: HTML page with classification results

### POST `/predict`
- **Description**: API endpoint for image classification
- **Parameters**: `file` (image file)
- **Response**: JSON with prediction results including:
  - `Inference_Time`: Processing time in milliseconds
  - `Prediction`: Object containing:
    - `Predicted_Class_ID`: ImageNet class ID
    - `Predicted_Class_Name`: Human-readable class name

## 🔧 Configuration

### Model Configuration
The application uses the DenseNet121 model pre-trained on ImageNet. You can modify the model in `utils.py`:

### SSL Configuration
The app includes SSL context handling for macOS compatibility:

```python
# Fix SSL certificate verification issue
ssl._create_default_https_context = ssl._create_unverified_context
```

## 🐛 Troubleshooting

### Common Issues

1. **Numpy Compatibility Error**
   - **Solution**: Ensure numpy version 1.26.0 is installed (already in requirements.txt)
   - **Command**: `pip install numpy`

2. **SSL Certificate Error**
   - **Solution**: The app includes SSL context handling for macOS

3. **Model Download Issues**
   - **Solution**: Check internet connection and try again

4. **Port Already in Use**
   - **Solution**: Change port in uvicorn command
   - **Example**: `uvicorn main:app --reload --port 8001`



## 🧪 Testing Examples

The test suite includes:

```python
def test_read_main():
    # Tests the main page loads correctly
    response = client.get("/")
    assert response.status_code == 200

def test_predict_route():
    # Tests image prediction functionality
    file_name = 'static/images/fox.jpg'
    response = client.post(
        "/predict",
        files={"file": ("fox_image", open(file_name, "rb"), "image/jpeg")}
    )
    assert response.status_code == 200
```

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [FastAPI](https://fastapi.tiangolo.com/) for the web framework
- [PyTorch](https://pytorch.org/) for machine learning capabilities
- [ImageNet](https://image-net.org/) for the pre-trained model
- [Uvicorn](https://www.uvicorn.org/) for the ASGI server
- [Docker](https://www.docker.com/) for containerization and deployment

---

**Made with ❤️ for AI Image Classification** 