import { db } from '../../lib/db/db';
import { users } from '../../lib/models/users';
import { comparePasswords, createJWT } from '../../lib/controllers/authUtils';
import { serialize } from 'cookie';

// check whether the user is logged in, if it is, check to see if the password that is sent is correct. If it is, send a new JWT to cookies.
export default async function login(req, res) {
  const { method } = req; // GET, POST, PUT, DELETE

  if (method !== 'POST') {
    res.status(405);
    res.end();
    return;
  }

  //TODO: VERIFY INPUTS FROM REQUEST ARE VALID TO PREVENT ERRORS GOING INTO DB OR AUTHENTICATION
  //TODO: CREATE FALLBACKS IF INPUTS ARE NOT VALID
  //TODO: CREATE RESPONSE IF INPUTS ARE NOT VALID

  if (method === 'POST') {
    await db(); // connect to the database

    const user = await users.findOne({
      email: req.body.email,
    });

    if (!user) {
      res.status(401);
      res.json({ error: 'Cannot find user with this email' });
      return;
    }

    // console.log('after finding user', user);
    // console.log(user.authorized);
    // console.log(user.password);
    // console.log('can i access authorized from user?', user.authorized);
    // console.log('typeof user', typeof user);

    if (
      user.authorized !== 'Manager' ||
      user.authorized === undefined ||
      user.authorized === false
    ) {
      // console.log(
      //   'user is not authorized am i setting header before i send to client?',
      // );
      res.status(401);
      res.json({
        error: 'User does not the right permissions to log into this portal',
      });
      return;
    }

    const isUser = await comparePasswords(req.body.password, user.password);

    if (isUser) {
      const jwt = await createJWT(user);
      res.setHeader(
        'Set-Cookie',
        serialize(process.env.JWT_COOKIE_NAME, jwt, {
          httpOnly: true,
          path: '/',
          maxAge: 60 * 60 * 24 * 7, // 7 days
        }),
      );

      // this successfully sets header and sends response
      res.status(201);
      res.end();
    } else {
      res.status(401);
      res.json({ error: 'Invalid password' });
    }
  }
}
