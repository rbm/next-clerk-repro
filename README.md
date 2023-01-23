This is a minimal Next.js + Clerk.dev setup to reproduce an issue related to Next middleware and Clerk authentication.

# Repro Steps
- Check out the repository
- Create a fresh Clerk development instance w/ only email verification code auth enabled
- Add Clerk credentials (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`) to `.env.local` from Clerk "API Keys" page
- `npm install`
- `npm run build`
- `npm run start`
- Open URL in fresh incognito window
- Observe logged-out state with a link to protected page
- Click on either "Sign Up" link
- Sign up with a Clerk test email (https://clerk.dev/docs/testing/e2e-testing#how-to-use-test-mode)
- Observe redirect back to homepage
- Click "Protected Page"
- Observe redirect thru sign in page and back to home page
- Hard refresh the page
- Click "Protected Page"
- Observe it loads