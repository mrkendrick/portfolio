import formData from 'form-data'
import Mailgun from 'mailgun.js'
import type { NextApiRequest, NextApiResponse } from 'next'

const mailgun = new Mailgun(formData)

const domain = process.env.MAILGUN_DOMAIN ?? 'email.mrkendrick.dev'

const mg = mailgun.client({
  username: 'email.mrkendrick.dev',
  key: process.env.MAILGUN_API_KEY ?? '',
  url: 'https://api.eu.mailgun.net',
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  if (method === 'POST') {
    if (!body.from || !body.to || !body.subject || !body.message)
      return res.status(401).json({ message: 'Bad Request' })

    try {
      const response = await mg.messages.create(domain, {
        from: body.from,
        to: body.to,
        text: body.message,
        subject: body.subject,
      })

      res.status(200).json({ response })
    } catch (error: any) {
      res.status(400).json({ error })
    }
  }
}

export default handler
