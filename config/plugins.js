module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('NODEMAILER_SMTP_HOST'),
          port: env('NODEMAILER_SMTP_PORT', 587),
          auth: {
            user: env('NODEMAILER_SMTP_USERNAME'),
            pass: env('NODEMAILER_SMTP_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: env('NODEMAILER_FROM'),
          defaultReplyTo: env('NODEMAILER_REPLYTO'),
        },
      },
    },
    // ...
  });
  