const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
const SGMail = require('@sendgrid/mail');
const cors = require('cors');
const bodyParser = require('body-parser');
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const app = express();
app.use(cors({origin: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/offer', (req, res) => {
    if(validateEmail(req.body.email)) {
        SGMail.setApiKey("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");
        const msg = {
            to: req.body.email,
            from: 'info@delbee.mn',
            subject: 'Дэлбээ брэнд үнийн санал',
            html: `
            <html xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
<head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Дэлбээ брэнд</title>


    <style type="text/css">
        img {
            max-width: 100%;
        }
        body {
            -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;
        }
        body {
            background-color: #f6f6f6;
        }
        @media only screen and (max-width: 640px) {
            body {
                padding: 0 !important;
            }
            h1 {
                font-weight: 800 !important; margin: 20px 0 5px !important;
            }
            h2 {
                font-weight: 800 !important; margin: 20px 0 5px !important;
            }
            h3 {
                font-weight: 800 !important; margin: 20px 0 5px !important;
            }
            h4 {
                font-weight: 800 !important; margin: 20px 0 5px !important;
            }
            h1 {
                font-size: 22px !important;
            }
            h2 {
                font-size: 18px !important;
            }
            h3 {
                font-size: 16px !important;
            }
            .container {
                padding: 0 !important; width: 100% !important;
            }
            .content {
                padding: 0 !important;
            }
            .content-wrap {
                padding: 10px !important;
            }
            .invoice {
                width: 100% !important;
                text-align: right;
            }
        }
    </style>
</head>

<body itemscope itemtype="http://schema.org/EmailMessage" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">

<table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
        <td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;" valign="top">
            <div class="content" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
                <table class="main" width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;" bgcolor="#fff"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="alert alert-warning" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 16px; vertical-align: top; color: #fff; font-weight: 500; text-align: center; border-radius: 3px 3px 0 0; background-color: #51afc0; margin: 0; padding: 20px;" align="center" bgcolor="#2f353f" valign="top">
                            <strong><img src="https://delbee.mn/assets/images/logo_white.png" width="100px"><br> үнийн санал<br></strong>
                        </td>
                    </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;" valign="top">
                            <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                    <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                        <strong>Дэлбээ брэндийг</strong> сонгон үйлчлүүлж буй танд баярлалаа
                                    </td>
                                </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                        <b>Үнийн саналыг PDF өргөтгөлтэй доор хавсаргав.</b>
                                        <p>https://drive.google.com/file/d/17X6ROgn8GIK6L0e9i6RPLHeevADAtKHE/view?usp=sharing</p>

                                        <br>
                                            <img src="https://delbee.mn/assets/images/logo_white.png" width="40px" style="margin-right: 30px">
                                            <br>"Алтангарьд" ХХК<br>Хаяг: СХД, 20-р хороо, Сонсголон товчоо 26<br>
                                            Утас: 21-254144, 96653161, 96037244, 91887244
                                            <br></p>
                                    </td>
                                </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                    </td>
                                </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="text-align: center;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                    </td>
                                </tr></table></td>
                    </tr></table><div class="footer" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;">
                    <table width="100%" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="aligncenter content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top"><a href="#" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;">www.delbee.mn</a></td>
                        </tr></table></div></div>
        </td>
        <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
    </tr></table></body>
</html>
            `,
        };
        SGMail.send(msg).then(() => console.log("Success")).catch((e) => console.log(e));
        res.status(200).send("success");
    }
    res.status(500)
});

app.post('/invoice', (req, res) => {
    console.log(req.body.user.email);
    SGMail.setApiKey("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");
    let list = '';
    req.body.data.map(item => {
        list = list + '<tr style="border-bottom: 1px solid #ddd;color: gray;padding: 8px;">'
            + '<td style="border-bottom: 1px solid #ddd;padding: 8px;"> ' + item.id + ' </td>'
            + '<td style="border-bottom: 1px solid #ddd;padding: 8px;"> ' + item.name + '</td>'
            + '<td style="border-bottom: 1px solid #ddd;padding: 8px;"> ' + item.pack.name + ' </td>'
            + '<td style="border-bottom: 1px solid #ddd;padding: 8px;"> ' + item.quantity + ' </td>'
            + '<td style="border-bottom: 1px solid #ddd;padding: 8px;"> ' + item.price + ' </td>'
            +'</tr>'
    });

    const msg = {
        to: req.body.user.email,
        from: 'info@delbee.mn',
        subject: 'Дэлбээ брэнд захиалга',
        html: ` <html xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
<head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Дэлбээ брэнд</title>


    <style type="text/css">
        img {
            max-width: 100%;
        }
        body {
            -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;
        }
        body {
            background-color: #f6f6f6;
        }
        @media only screen and (max-width: 640px) {
            body {
                padding: 0 !important;
            }
            h1 {
                font-weight: 800 !important; margin: 20px 0 5px !important;
            }
            h2 {
                font-weight: 800 !important; margin: 20px 0 5px !important;
            }
            h3 {
                font-weight: 800 !important; margin: 20px 0 5px !important;
            }
            h4 {
                font-weight: 800 !important; margin: 20px 0 5px !important;
            }
            h1 {
                font-size: 22px !important;
            }
            h2 {
                font-size: 18px !important;
            }
            h3 {
                font-size: 16px !important;
            }
            .container {
                padding: 0 !important; width: 100% !important;
            }
            .content {
                padding: 0 !important;
            }
            .content-wrap {
                padding: 10px !important;
            }
            .invoice {
                width: 100% !important;
                text-align: right;
            }
        }
    </style>
</head>

<body itemscope itemtype="http://schema.org/EmailMessage" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">

<table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
        <td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;" valign="top">
            <div class="content" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
                <table class="main" width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;" bgcolor="#fff"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="alert alert-warning" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 16px; vertical-align: top; color: #fff; font-weight: 500; text-align: center; border-radius: 3px 3px 0 0; background-color: #51afc0; margin: 0; padding: 20px;" align="center" bgcolor="#2f353f" valign="top">
                            <strong><img src="https://delbee.mn/assets/images/logo_white.png" width="100px"><br> үнийн санал<br></strong>
                        </td>
                    </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;" valign="top">
                            <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                    <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                        <strong>Дэлбээ брэндийг</strong> сонгон үйлчлүүлж буй танд баярлалаа
                                    </td>
                                </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                       
                                     <table class="invoice"  width="100%" style="text-align: left" >
                                            <tr style="border: 1px solid #ddd;padding: 8px;color: darkgrey">
                                                <td style="border-bottom: 1px solid #ddd;padding: 8px;">#</td>
                                                <td style="border-bottom: 1px solid #ddd;padding: 8px;">Бүтээгдэхүүн</td>
                                                <td style="border-bottom: 1px solid #ddd;padding: 8px;">Багц</td>
                                                <td style="border-bottom: 1px solid #ddd;padding: 8px;">Ширхэг</td>
                                                <td style="border-bottom: 1px solid #ddd;padding: 8px;">Үнэ</td>
                                            </tr>
                                            
                                            ${list}

                                        </table>
                                      <p style="text-align: right; margin-right: 8px; font-size: 14px;color: gray">Нийт(НӨАТ-тай): ${req.body.user.price}₮</p><br>
                                        <p style="text-align: left; margin-left: 8px; font-size: 14px; color: gray">Та Хаан банкны 5720680999 дансанд мөнгөө тушаана уу. Гүйлгээний утга дээр "${req.body.user.register} ${req.body.user.name}" буюу компаний регистрийн дугаар болон компаний нэрээ бичиж илгээнэ үү</p>
                                        <p style="text-align: right; margin-right: 8px; font-size: 14px;color: gray">
                                            <img src="{{asset('assets/images/logodelbee.png')}}" width="40px" style="margin-right: 30px">
                                            <br>"Алтангарьд" ХХК<br>Хаяг: СХД, 20-р хороо, Сонсголон товчоо 26<br>
                                            Утас: 21-254144, 96653161, 96037244, 91887244
                                            <br></p>
                                    </td>
                                </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                    </td>
                                </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="text-align: center;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                    </td>
                                </tr></table></td>
                    </tr></table><div class="footer" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;">
                    <table width="100%" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="aligncenter content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top"><a href="#" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;">www.delbee.mn</a></td>
                        </tr></table></div></div>
        </td>
        <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
    </tr></table></body>
</html>`,
    };
    SGMail.send(msg).then(() => console.log("Success")).catch((e) => console.log(e));
    res.status(200).send("success");
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
exports.widgets = functions.https.onRequest(app);
