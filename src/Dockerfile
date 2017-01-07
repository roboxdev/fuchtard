############################################################
# Dockerfile to run a Django-based web application
# Based on an Ubuntu Image
FROM python:3.5

# Set the file maintainer (your name - the file's author)
MAINTAINER robox

ENV DJANGO_WORKDIR=/usr/web/src

#RUN sudo apt-get update sudo apt-get upgrade
#RUN sudo apt-get install gcc python-dev python3.5-dev python3-venv supervisor nginx git-core postgresql postgresql-contrib libpq-dev nodejs npm nodejs-legacy
#RUN sudo apt-get build-dep python-imaging # sudo apt-get install libjpeg8 libjpeg62-dev libfreetype6 libfreetype6-dev

ENV PYTHONUNBUFFERED 1
RUN mkdir -p $DJANGO_WORKDIR
WORKDIR $DJANGO_WORKDIR

ADD requirements/base.txt /tmp/requirements/base.txt
ADD requirements.txt /tmp/.
RUN pip install -r /tmp/requirements.txt

ADD . $DJANGO_WORKDIR/.

RUN mkdir -p ../temp1

RUN ls -la ../

RUN mkdir -p ../static_content/static ../static_content/media

ENV PYTHONPATH=$DJANGO_WORKDIR/fuchtard

#RUN python3 fuchtard/manage.py collectstatic --noinput

ENTRYPOINT ["python", "fuchtard/manage.py"]
CMD ["runserver", "0.0.0.0:8000", "--settings=fuchtard.settings.dev"]


