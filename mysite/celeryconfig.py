# -*- coding: utf-8 -*-

from kombu import Exchange, Queue

RABBITMQ_USER = 'rabbitmq'
RABBITMQ_PASS = 'rabbitmq'
RABBITMQ_PORT = '5672'

BROKER_URL = 'amqp://{0}:{1}@localhost:{2}/vhost'.format(
    RABBITMQ_USER,
    RABBITMQ_PASS,
    RABBITMQ_PORT)

CELERY_IGNORE_RESULT = True

CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = 'Asia/Shanghai'
CELERY_ENABLE_UTC = True

CELERY_IMPORTS = ("mysite.apps.douban.tasks",)

CELERY_QUEUES = (
    Queue('default', Exchange('default'), routing_key='default'),
)
