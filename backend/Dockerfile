FROM python:3.6

MAINTAINER robox

ENV DJANGO_WORKDIR=/usr/src/app
ENV PYTHONUNBUFFERED 1

RUN mkdir -p $DJANGO_WORKDIR
WORKDIR $DJANGO_WORKDIR

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt /tmp/.
RUN pip install -r /tmp/requirements.txt

COPY . .

ENV PYTHONPATH=$DJANGO_WORKDIR/src
WORKDIR /usr/src/app/src

ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]


#RUN python3 fuchtard/manage.py collectstatic --noinput

#ENTRYPOINT ["python", "fuchtard/manage.py"]
#CMD ["runserver", "0.0.0.0:8000", "--settings=fuchtard.settings.dev"]


