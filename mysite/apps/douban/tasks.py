from mysite.celeryapp import app


@app.task(queue='default')
def add(x, y):
    return x + y
