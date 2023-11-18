import { jwtVerify } from 'jose';
const PUBLIC_FILE = /\.(.*)$/;
import { NextResponse } from 'next/server';
// import { verifyJWT } from './lib/controllers/authUtils';
// import { RequestCookies } from 'edge-runtime/cookies'; // This might be useful when I am running into issues

// remake verifyJWT file. -> in auth file bcrypt can not run on the edge environment, it's not a full node environment that restrict some npm packages in the edge environment. Code for npm packages inside edge runtime must be static.
// this decodes the JWT token and returns the original payload that was used to make the token. The JWT secret must be passed in as the second argument because it will be used as the key to the second has function.
const verifyJWT = async jwt => {
  const payload = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET), // we pass in the secret to verify JWT.
  );

  // console.log('what ist he payload after verifying', payload); payload.payload gives you the email.

  return payload;
};

// TODO: A function that takes in the current path name and returns (possibly to be memoized) the path

// Intercepts all requests and checks if the user is logged in. Logged in Users have
export default async function middleware(req, res) {
  const { pathname } = req.nextUrl;

  // public fils will always return true:
  if (
    pathname.startsWith('/_next') || // development next builds to this folder
    pathname.startsWith('/api') ||
    pathname.startsWith('/menu') ||
    pathname.startsWith('/about') ||
    pathname.startsWith('/contact') ||
    pathname.startsWith('/catering') ||
    pathname.startsWith('/auth') ||
    pathname.startsWith('static') ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/logout') ||
    pathname.startsWith('/signup') ||
    pathname === '/'
  ) {
    return NextResponse.next();
  }

  // retrieves the jwt token from the cookie
  const jwt = req.cookies.get(process.env.JWT_COOKIE_NAME);

  // console.log('in middleware, jwt: ', jwt);

  if (!jwt) {
    req.nextUrl.pathname = '/login';
    return NextResponse.redirect(req.nextUrl);
  }

  // Get data that is signed into the JWT Token
  try {
    const payload = await verifyJWT(jwt.value);

    // If user is not authorized for the page, throw error and redirect, more sections of the webpage may be added as we add more sections to the page.
    if (pathname.startsWith('/internal') && payload.aud !== 'Manager') {
      throw new Error('User is not authorized to view this page');
    }

    return NextResponse.next();
  } catch (e) {
    //TODO: SHOULD REDIRECT TO LOGIN PAGE WITH THE PROPER MESSAGE PROVIDED.
    // TODO: Determine the verification failure reason and log reason (for example, token failure, or change in process.env.JWT_SECRET)
    req.nextUrl.pathname = '/login';
    return NextResponse.redirect(req.nextUrl);
  }
}
