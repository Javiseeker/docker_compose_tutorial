FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /antares_iot
WORKDIR /antares_iot
COPY ./antares_iot/requirements.txt /antares_iot/
RUN pip install -r requirements.txt
COPY ./antares_iot/ /antares_iot/