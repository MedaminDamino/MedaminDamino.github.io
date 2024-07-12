import os
import resend
def send_email(from_sender,subject,msg):

    API_KEY="re_UmB6NbFU_87xg4A8fc2rnz8tWZ9GqM18z"
    resend.api_key = API_KEY

    params: resend.Emails.SendParams = {
        "from": from_sender,
        "to": ["medamin.abdelkafi753@gmail.com"],
        "subject": subject,
        "html": msg,
    }

    email = resend.Emails.send(params)
    return email



