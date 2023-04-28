import { jwtVerify } from 'jose';
const PUBLIC_FILE = /\.(.*)$/;
import { NextResponse } from 'next/server';
// import { verifyJWT } from './lib/controllers/authUtils';
// import { RequestCookies } from 'edge-runtime/cookies'; // This might be useful when I am running into issues

// remake verifyJWT file. -> in auth file bcrypt can not run on the edge environment, it's not a full node environment that restrict some npm packages in the edge environment. Code for npm packages inside edge runtime must be static.
const verifyJWT = async jwt => {
  const payload = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET), // we pass in the secret to verify JWT.
  );

  console.log('what ist he payload after verifying', payload);

  return payload.payload;
};

export default async function middleware(req, res) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/_next') || // development next builds to this folder
    pathname.startsWith('/api') ||
    pathname.startsWith('/menu') ||
    pathname.startsWith('/auth') ||
    pathname.startsWith('static') ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/logout') ||
    pathname.startsWith('/signup') ||
    pathname === '/'
  ) {
    return NextResponse.next();
  }

  const jwt = req.cookies.get(process.env.JWT_COOKIE_NAME);

  console.log('in middleware, jwt: ', jwt);

  if (!jwt) {
    req.nextUrl.pathname = '/login';
    return NextResponse.redirect(req.nextUrl);
  }

  try {
    await verifyJWT(jwt.value);
    return NextResponse.next();
  } catch (e) {
    req.nextUrl.pathname = '/login';
    return NextResponse.redirect(req.nextUrl);
  }
}
