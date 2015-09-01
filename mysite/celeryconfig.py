# Celery configuration file
BROKER_URL = 'amqp://guest@localhost//'
CELERY_RESULT_BACKEND = 'amqp://'

CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = 'America/Los_Angeles'
CELERY_ENABLE_UTC = True

CELERY_IMPORTS = ("mysite.apps.douban.tasks",)
