import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const runtime = useRuntimeConfig()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    setResponseStatus(event, 400)

    return { message: 'Email inválido!' }
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: runtime.email,
      pass: runtime.password,
    },
  })

  const mailOptions = {
    from: runtime.email,
    to: runtime.email,
    subject: '[Portfólio] Novo contato do formulário',
    html: `
<p>Um novo contato foi feito no formulário:</p>
<p><b>Nome completo</b>: ${body.fullName}</p>
<p><b>Email</b>: ${body.email}</p>
<p><b>Mensagem</b>:</p>
<p>${body.message}</p>
`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { message: 'E-mail enviado com sucesso!' }
  }
  catch (error) {
    setResponseStatus(event, 500)

    console.error(error)

    return { message: 'Erro ao enviar e-mail!' }
  }
})
