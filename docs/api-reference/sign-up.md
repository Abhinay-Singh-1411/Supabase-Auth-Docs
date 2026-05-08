# signUp()

```javascript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'StrongPassword123!',
  options: {
    emailRedirectTo: 'https://your-app.com/welcome',
    data: { username: 'example_user' },
  },
})
```

The `signUp()` method creates a new user in your Supabase project. It returns a user object immediately. It returns a session object only if email confirmation is disabled in your project settings. By default, `session` is `null` until the user confirms their email.

## Parameters

| Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `email` | `string` | Yes | The email address of the user. Must be a valid email format. |
| `password` | `string` | Yes | The password for the user account. Must meet your project's password strength policy. The default minimum is 6 characters. |
| `options.emailRedirectTo` | `string` | No | The URL to redirect the user to after they confirm their email. Defaults to your project's Site URL if not specified. |
| `options.data` | `object` | No | A custom object containing additional user metadata, such as a username or avatar URL. Stored in `user_metadata`. |

## Returns

The method returns an object with two fields: `data` and `error`. Exactly one of them contains a value at any time — when the request succeeds, `error` is `null`. When it fails, `data.user` and `data.session` are `null`.

### Default response (email confirmation enabled)

By default, Supabase requires the user to confirm their email before creating a session. You receive the user object immediately but `session` is `null`.

```json
{
  "data": {
    "user": {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "email": "user@example.com",
      "user_metadata": { "username": "example_user" },
      "created_at": "2026-01-01T00:00:00.000Z"
    },
    "session": null
  },
  "error": null
}
```

### Response when email confirmation is disabled

If you disable email confirmation under **Authentication → Providers → Email** in your project dashboard, `session` returns immediately with tokens.

```json
{
  "data": {
    "user": {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "email": "user@example.com",
      "user_metadata": { "username": "example_user" },
      "created_at": "2026-01-01T00:00:00.000Z"
    },
    "session": {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refresh_token": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      "expires_in": 3600,
      "token_type": "bearer"
    }
  },
  "error": null
}
```

### Response fields

| Field | Type | Description |
| :--- | :--- | :--- |
| `data.user` | `object` | The new user's identity information including `id`, `email`, `user_metadata`, and `created_at`. |
| `data.session` | `object` or `null` | Session tokens including `access_token` and `refresh_token`. Returns `null` until the user confirms their email. |
| `error` | `object` or `null` | Error details if the request fails. `null` on success. |

## Error codes

| Code | Meaning | How to resolve |
| :--- | :--- | :--- |
| `user_already_exists` | A user with this email is already registered. | Redirect the user to your sign-in page instead. |
| `weak_password` | The password does not meet your project's strength requirements. | Require a minimum of 8 characters with a mix of letters and numbers. |
| `invalid_email` | The email format is incorrect. | Validate the email format on the client side before calling `signUp()`. |
| `email_not_confirmed` | The user exists but has not confirmed their email. | Instruct the user to check their inbox. You can resend the confirmation email using `resend()`. |
| `email_rate_limit_exceeded` | Too many sign-up requests in a short period. | Wait one hour before trying again, or disable email confirmation during development. |

## Examples

### JavaScript

```javascript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'StrongPassword123!',
})

if (error) {
  console.error('Sign-up failed:', error.message)
} else if (data.session === null) {
  console.log('Check your email to confirm your account.')
} else {
  console.log('Signed up and logged in:', data.user.email)
}
```

### cURL

```bash
curl -X POST 'https://your-project-id.supabase.co/auth/v1/signup' \
-H "apikey: YOUR_ANON_KEY" \
-H "Content-Type: application/json" \
-d '{
  "email": "user@example.com",
  "password": "StrongPassword123!"
}'
```

## Related methods

- [`signInWithPassword()`](https://supabase.com/docs/reference/javascript/auth-signinwithpassword): Authenticates an existing user with their email and password.
- [`signOut()`](https://supabase.com/docs/reference/javascript/auth-signout): Ends the current user session and invalidates all tokens.
- [`resend()`](https://supabase.com/docs/reference/javascript/auth-resend): Resends a confirmation email to a user who has not yet verified their address.
