import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// SENDS EITHER TEXT EMAIL OR TEMPLATE EMAIL NO GROUP EMAIL BEING SENT YET.
// NEEDS TO HANDLE ERRORS PROPERLY
async function sendEmail(req, res) {
  const { email, emailSubject, emailType } = req.body;

  if (emailType !== 'template') {
    try {
      const result = await sendgrid.send({
        to: email,
        from: process.env.SENDGRID_FROM_EMAIL,
        subject: emailSubject,
        html: `<div> Thanks for subscribing, we promise we'll never send you spam! </div>`,
      });
      if (result.ok) {
        console.log('email sent successfully', result);
      }
      // console.log('result from senging an email', result.ok);
    } catch (error) {
      console.log('error from sending an email', error);
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  } else {
    try {
      const result = await sendgrid.send({
        to: email,
        from: process.env.SENDGRID_FROM_EMAIL,
        subject: emailSubject,
        templateId: 'd-ed2e0070567349cd9433b175d3c57ff4',
        dynamic_template_data: {
          subject: emailSubject,
        },
      });
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
