import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${body.name}`,
      html: `
        <h2>Nuevo mensaje del portafolio</h2>

        <p>
          <strong>Nombre:</strong>
          ${body.name}
        </p>

        <p>
          <strong>Email:</strong>
          ${body.email}
        </p>

        <p>
          <strong>Mensaje:</strong>
          ${body.message}
        </p>
      `,
    })

    return Response.json(
      { success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)

    return Response.json(
      { success: false },
      { status: 500 }
    )
  }
}