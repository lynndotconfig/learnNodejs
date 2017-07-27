import itchat
import requests

def get_response(msg):
    api_url = 'http://www.tuling123.com/openapi/api'
    data = {
        'key': 'e45cf5207b2b4b87a4eaf45b235feb47',
        'info': msg,
        'userid': 'www'
    }
    try:
        r = requests.post(api_url, data=data).json()
        return r.get('text')
    except:
        return


@itchat.msg_register(itchat.content.TEXT)
def tuling_reply(msg):

    default_reply = 'I received: ' + msg['Text']
    reply = get_response(msg['Text'])
    print 'reply: ' + reply
    return reply or default_reply

itchat.auto_login(hotReload=True)
itchat.send('test send mssage', 'filehelper')
itchat.run()
