import bcrypt from 'bcrypt';
import { SignJWT, jwtVerify } from 'jose';
import { db } from '../db/db';
import { users } from '../models/users';

//  must be used on server side only.
export const hashPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const comparePasswords = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);
  return result;
};

// This creates the JWT token that will be stored inside the cookie.
export const createJWT = async user => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24 * 7; // 7 days

  // console.log(user);

  let role = user.authorized ? user.authorized : 'unauthorized-user';

  // use user id and email to find user in database
  // this creates a JWT toke, encrypts it and store sit the cookie. Question: Is jose signJWT HttpOnly under the hood.
  const jwt = new SignJWT({
    id: user._id,
    payload: { email: user.email },
  })
    .setProtectedHeader({ alg: 'HS256', type: 'JWT' })
    .setAudience(role)
    .setIssuedAt(iat)
    .setExpirationTime('2h')
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));

  return jwt;
};

// Validate JWT
export const validateJWT = async token => {
  const result = await jwtVerify(
    token,
    new TextEncoder().encode(process.env.JWT_SECRET),
  );

  return result;
};

// Get User from Cookies  at this point when it is called, we already know who that the user exists.
export const getUserFromCookies = async req => {
  const jwt = cookies.get(process.env.JWT_COOKIE_NAME);

  const { id } = await validateJWT(jwt);

  // DB call to find user. // THIS SHOULD BE DIFFERENT
  const user = await users.findOne({
    email: req.body.email,
  });

  // console.log('user from getUserFromCookies: ', user);

  return user;
};
