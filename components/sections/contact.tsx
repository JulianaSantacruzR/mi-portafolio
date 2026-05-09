import nodemailer from "nodemailer"

export async function POST(
  req: Request
) {
  try {
    const body = await req.json()

    console.log("BODY:", body)

    const transporter =
      nodemailer.createTransport({
        service: "gmail",

        auth: {
          user:
            process.env.EMAIL_USER,

          pass:
            process.env.EMAIL_PASS,
        },
      })

    await transporter.sendMail({
      from:
        process.env.EMAIL_USER,

      to:
        process.env.EMAIL_USER,

      subject: `Portfolio Message from ${body.name}`,

      html: `
        <h2>New Contact Message</h2>

        <p>
          <strong>Name:</strong>
          ${body.name}
        </p>

        <p>
          <strong>Email:</strong>
          ${body.email}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <p>${body.message}</p>
      `,
    })

    console.log("EMAIL SENT SUCCESSFULLY")

    return Response.json({
      success: true,
    })
  } catch (error: any) {
    console.error(
      "EMAIL ERROR:",
      error
    )

    return Response.json(
      {
        success: false,
        error:
          error?.message ||
          "Unknown error",
      },
      {
        status: 500,
      }
    )
  }
}