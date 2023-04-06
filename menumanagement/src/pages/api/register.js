import { db } from '../../lib/db/db';
import { users } from '../../lib/models/users';
import { createJWT, hashPassword } from '../../lib/controllers/authUtils';
import { serialize } from 'cookie';

export default async function register(req, res) {
  const  { method } = req; // GET, POST, PUT, DELETE

  await db();

  if (method === 'POST') {
    const user = await users.create({
      email: req.body.email,
      password: await hashPassword(req.body.password), //bcrypt
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    })

    if (!user) {
      console.log(new Error('User not created'));
      console.log(user)
    }

    //TODO:MONGOOSE QUERY SHOULD RETURN ERROR WHEN SAVE HAPPENS IF DUPLICATE OR OTHERWISE,
    //WE SHOULD RETURN THAT ERROR AS A RESPONSE TO THE USER.

    const jwt = await createJWT(user);
    res.setHeader(
      'Set-Cookie',
      serialize(process.env.JWT_COOKIE_NAME, jwt, {
          httpOnly: true, // can't access cookies via javascript
          path: '/', // cookie is valid for all pages
          maxAge: 60 * 60 * 24 * 7, // valid for 7 days
      }));

    res.status(201);
    res.send({data: user});

  } else {
    res.status(402);
    res.end();
  }
}