# AI Image Classification App

A modern web application for image classification using PyTorch and FastAPI. Upload images and get instant AI-powered predictions with a beautiful, responsive interface.

## 🚀 Features

- **AI-Powered Classification**: Uses pre-trained DenseNet121 model for accurate image recognition
- **Beautiful UI**: Modern, responsive design with drag-and-drop functionality
- **Real-time Processing**: Fast inference with processing time display
- **Multiple Formats**: Supports JPG, PNG, GIF, and WEBP images
- **Error Handling**: Robust error handling and user feedback
- **Mobile Responsive**: Works perfectly on desktop and mobile devices

## 📋 Prerequisites

- Python 3.8 or higher
- pip (Python package installer)
- Git

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ai-image-classifier.git
cd ai-image-classifier
```

### 2. Create Virtual Environment
```bash
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Download Model Files
The application will automatically download the required model files on first run.

## 🚀 Usage

### Local Development
```bash
# Start the development server
python -m uvicorn main:app --reload

# Open your browser and go to
http://localhost:8000
```

### Production Deployment
```bash
# Start the production server
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
```

## 📁 Project Structure

```
ai-image-classifier/
├── main.py                 # FastAPI application entry point
├── utils.py                # Image processing and ML utilities
├── requirements.txt        # Python dependencies
├── README.md              # This file
├── test_app.py            # Test suite
├── template/
│   ├── index.html         # Main HTML template
│   ├── style.css          # CSS styles
│   └── app.js             # JavaScript functionality
└── static/
    ├── images/            # Sample images
    └── imagenet_class_index.json  # ImageNet class labels
```

## 🧪 Testing

Run the comprehensive test suite:

```bash
# Install test dependencies
pip install pytest pytest-asyncio httpx

# Run tests
python -m pytest test_app.py -v
```

## 🌐 API Endpoints

### GET `/`
- **Description**: Main application page
- **Response**: HTML page with upload interface

### POST `/`
- **Description**: Upload and classify image (form submission)
- **Parameters**: `file` (image file)
- **Response**: HTML page with results

### POST `/predict`
- **Description**: API endpoint for image classification
- **Parameters**: `file` (image file)
- **Response**: JSON with prediction results

## 🚀 Deployment Options

### 1. Heroku
```bash
# Create Procfile
echo "web: uvicorn main:app --host=0.0.0.0 --port=\$PORT --workers=2" > Procfile

# Deploy
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

### 2. Railway
```bash
# Connect your GitHub repository to Railway
# Railway will automatically detect and deploy your FastAPI app
```

### 3. Render
```bash
# Create render.yaml configuration
# Connect your repository to Render
# Automatic deployment on push
```

### 4. Docker
```dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file for local development:

```env
# Development settings
DEBUG=True
HOST=0.0.0.0
PORT=8000
```

### Model Configuration
The application uses the DenseNet121 model pre-trained on ImageNet. You can modify the model in `utils.py`:

```python
# Change model architecture
model = models.resnet50(weights='IMAGENET1K_V1')
```

## 🐛 Troubleshooting

### Common Issues

1. **SSL Certificate Error**
   - Solution: The app includes SSL context handling for macOS

2. **Model Download Issues**
   - Solution: Check internet connection and try again

3. **Memory Issues**
   - Solution: Reduce image size or use smaller model

4. **Port Already in Use**
   - Solution: Change port in uvicorn command

### Performance Optimization

- Use `--workers` flag for multiple processes
- Optimize image size before upload
- Consider using smaller models for faster inference

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [FastAPI](https://fastapi.tiangolo.com/) for the web framework
- [PyTorch](https://pytorch.org/) for machine learning capabilities
- [ImageNet](https://image-net.org/) for the pre-trained model
- [Font Awesome](https://fontawesome.com/) for icons

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/ai-image-classifier/issues) page
2. Create a new issue with detailed information
3. Contact: your.email@example.com

---

**Made with ❤️ for AI Image Classification** 