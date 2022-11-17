# NextAuth.js Django provider example

The motivation for this project stems from the lack of a complete example of using NextAuth.js with a Django backend using Django Rest Framework and JWT.

This repository contains:

1. [Django](https://www.djangoproject.com/) backend with a Django Rest Framework API supporting authentication using JWT.
2. [NextAuth.js](https://next-auth.js.org/) application with a Django JWT provider.

**Note:** The main inspiration comes from this [thread](https://github.com/nextauthjs/next-auth/discussions/1350) and in particular [this contribution](https://github.com/nextauthjs/next-auth/discussions/1350#discussioncomment-2145362) by [mojtabajahannia](https://github.com/mojtabajahannia).

Not sure if this is the best approach, so all suggestions welcome.

## Django

### Environment

```
cd django
python3 -m venv ./env
source ./env/bin/activate
```

### Installation

```
pip install --upgrade pip
pip install -r ./requirements.txt
```

### Setup

```
python manage.py makemigrations
python manage.py migrate
```

### Admin

Add admin user to demonstrate unrestricted access to all client-side routes.

```
python manage.py createsuperuser
```

### Visitor

Add an ordinary user to demonstrate restricted access to client-side /admin route.

```
python manage.py shell

>>> from django.contrib.auth.models import User
>>> user=User.objects.create_user('visitor', password='visitor')
>>> user.save()
>>> exit()
```

### Start

```
python manage.py runserver
```

## Next.js

Install modules and run development server.

### Installation

```
cd nextjs
npm install
```

### Local environment

```
cp .env.local.example .env.local
```

### Start

```
npm run dev
```

**Note:** Based on the original [next-auth-sample](https://github.com/nextauthjs/next-auth-example) code.
