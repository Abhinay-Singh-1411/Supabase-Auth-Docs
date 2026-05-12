import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Supabase Auth Docs"
      description="Clear API documentation for Supabase Auth">
      <main style={{padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto'}}>
        <h1>Supabase Auth Documentation</h1>
        <p style={{fontSize: '1.2rem', color: '#666', marginBottom: '2rem'}}>
          A technical writing portfolio demonstrating professional API 
          documentation for the Supabase Auth library.
        </p>
        <h2>Documents</h2>
        <ul style={{lineHeight: '2.5'}}>
          <li>
            <Link to="/docs/getting-started">
              Get started with Supabase Auth
            </Link>
            {' '}— Set up your project and make your first signUp() call
          </li>
          <li>
            <Link to="/docs/concepts/how-supabase-auth-works">
              How Supabase Auth works
            </Link>
            {' '}— JWTs, sessions, and token refresh explained
          </li>
          <li>
            <Link to="/docs/api-reference/sign-up">
              signUp() API reference
            </Link>
            {' '}— Parameters, return values, and error codes
          </li>
        </ul>
      </main>
    </Layout>
  );
}