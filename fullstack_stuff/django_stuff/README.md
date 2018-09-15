### command
Make virtual environment at your place
```
python3 -m venv myvenv
```

You don't install virtual package yet.
You have to install package through below command
```
sudo apt-get install python3-venv
```

Check your pip version
```
pip install --upgrade pip
```

Install django framework
```
pip install django~=1.11.7
```

Start project
```
django-admin startproject mysite .
```

You have to make DB because django is planned to assign at first install
```
python manage.py migrate
```

Make application and add register blog app to mysite/settings.py
```
python manage.py startapp blog
```

If you make models, you have to makemigrations and migrate
```
python manage.py makemigrations blog
python manage.py migrate blog
```
