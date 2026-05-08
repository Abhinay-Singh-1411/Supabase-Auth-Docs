# Get started with Supabase Auth

Supabase Auth provides complete user authentication system which can be used to register users, manage sessions, and secure your Postgres database without building authentication login from scratch yourself.

## Before you begin

* Search Supabase and create an [account](https://supabase.com/dashboard)
* Install version 18 or higher of [Node.js](https://nodejs.org/) in your system.
* Keep a JavaScript project folder ready with a `package.json` file and if you don't have one, run `npm init -y` in an empty folder

## Create a Supabase project

1. Go to [Supabase Dashboard](https://supabase.com/dashboard) and sign in.
2. Click on **New Project**. An interface will open for you to fill the requirements.
3. Select your organization.
4. Enter project name and a strong database password. You cannot recover the password later so save it.
5. Select the region closest to your users.
6. Click **Create new project**. Wait for at least two minutes for the project to initialize.

## Install the Supabase client

Run this command in your terminal:

```bash
npm install @supabase/supabase-js
```

Then add import the client at the top of your application file:

```javascript
import { createClient } from '@supabase/supabase-js'
```

## Initialize the Supabase client

You need to have two values from your Supabase project-
  -The **Project URL**
  -Anon public key
You will find both on your dashboard under your project title to copypaste.

> **Reminder: Never hardcode API keys directly in your source files.** Anyone can access your project if you push hardcoded keys to GitHub. You can store them as your environment variable and use gitignore to hide them from push.

You can create a `env` file in your project root or any other folder if using for test purpose, then add your credentials:

```bash
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

Then add `.env` to your `.gitignore` file so it doesn't get committed:

```bash
echo ".env" >> .gitignore
```

Now initialize the client in your application:

```javascript
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
```

## Sign up your first user

The `signUp()` method will create new user in your Supabase project.

```javascript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'StrongPassword123!',
})

if (error) {
  console.error('Sign-up failed:', error.message)
} else {
  console.log('Sign-up successful:', data)
}
```

The response contains two objects:
  
* `data.user` — Contains the new user's details, including `id`, `email`, and `created_at`.

* `data.session` — It returns `null` by default. The user need to do email confirmation before creating a session. They must click the link before they can sign in which they will recieve on their email. To disable email confirmation, go to **Authentication-> Providers--> User Sign-in** in your project dashboard and turn off **Confirm email**.

* `error` — This will contain the error message if the sign-up fails. So, always check this before using `data`.

> **Note:** Use `user@example.com` as a placeholder email in your tests. The `example.com` domain is reserved for documentation and testing — it will never receive real emails.

## What's next

* [Understand how Supabase Auth works](./concepts/how-supabase-auth-works.md) — Learn about JWTs, sessions, and token refresh.
* [Explore the signUp() API reference](../api-reference/sign-up.md) — See all parameters, return values, and error codes.
* [Read the official Supabase Auth documentation](https://supabase.com/docs/guides/auth) — Go deeper with social login, MFA, and Row Level Security.
