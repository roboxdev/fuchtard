#COPY ./ ./
FROM django:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ONBUILD COPY requirements.txt /usr/src/app/
ONBUILD COPY . /usr/src/app
ONBUILD RUN pip install --no-cache-dir -r requirements.txt


RUN apt-get update && apt-get install -y \
		gcc \
		gettext \
#		mysql-client libmysqlclient-dev \
		postgresql-client libpq-dev \
		sqlite3 \
	--no-install-recommends && rm -rf /var/lib/apt/lists/*

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

#COPY requirements/base.txt requirements/base.txt


#
#RUN apt-get update && apt-get install -y \
#		gcc \
#		gettext \
#		mysql-client libmysqlclient-dev \
#		postgresql-client libpq-dev \
#		sqlite3 \
#	--no-install-recommends && rm -rf /var/lib/apt/lists/*
#
#ENV DJANGO_VERSION 1.9.6
#
#RUN pip install mysqlclient psycopg2 django=="$DJANGO_VERSION"