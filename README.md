Sure! Here's the entire content from the previous message as a `.md` file content:

---

```markdown
# react-django

A simple full-stack CRUD application using **React (Vite)** on the frontend and **Django + Django REST Framework** on the backend.

## 📁 Project Structure

```

react-django/
├── client/     # React + Vite frontend
└── server/     # Django + DRF backend

````

---

## ⚙️ Tech Stack

- **Frontend:** React, Vite, JavaScript
- **Backend:** Django, Django REST Framework
- **Database:** SQLite (default), but can be configured

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-django.git
cd react-django
````

---

### 2. Setup the Backend (Django)

```bash
cd server
python -m venv env
source env/bin/activate  # or env\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

> 📝 Don't forget to install:
>
> ```bash
> pip install django djangorestframework django-cors-headers
> ```

---

### 3. Setup the Frontend (React + Vite)

```bash
cd client
yarn        # or npm install
yarn dev    # or npm run dev
```

---

## 🔄 API Endpoints

Example (Books API):

* `GET /api/books/` – List all books
* `POST /api/books/` – Create a book
* `PUT /api/books/:id/` – Update a book
* `DELETE /api/books/:id/` – Delete a book

Make sure your Django app uses a router like:

```python
# server/api/urls.py
from rest_framework.routers import DefaultRouter
from .views import BookViewSet

router = DefaultRouter()
router.register(r'books', BookViewSet)
urlpatterns = router.urls
```

---

## 🔐 CORS Configuration

To allow your frontend to access the backend API, install and configure `django-cors-headers`:

```bash
pip install django-cors-headers
```

Then in `server/settings.py`:

```python
INSTALLED_APPS = [
    ...
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]
```

---

## ✅ Features

* CRUD operations for a simple model (e.g., Book)
* Separation of concerns: backend (API) and frontend (UI)
* Clean and minimal setup for learning or prototyping

---

## 📄 License

MIT License.

```

---

You can now copy and save this into a file named `README.md` inside your project root. Let me know if you want to include example screenshots, routes, or .env setup.
```
