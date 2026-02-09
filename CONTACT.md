# Contact Flow

## Form Validation
- Required fields are validated client-side with clear errors.
- Consent is required before submission.
- A hidden honeypot field and form duration check reduce spam.

## API Endpoint
- Route: `POST /api/lead`
- Storage: Supabase table `lead_intakes`
- Rate limiting: in-memory, 5 requests per IP per 15 minutes.

## Email Provider (Optional)
The API can send notification emails using a provider abstraction.

Supported providers:
- `resend`
- `postmark`

Environment variables:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `LEAD_EMAIL_PROVIDER` (set to `resend` or `postmark`)
- `LEAD_EMAIL_TO`
- `LEAD_EMAIL_FROM`
- `RESEND_API_KEY` (if using Resend)
- `POSTMARK_SERVER_TOKEN` (if using Postmark)

If no provider is configured, the API will still store the lead in Supabase.
