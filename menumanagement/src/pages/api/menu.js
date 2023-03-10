import { db } from '../../lib/db/db.mjs';
import { menuItems } from '../../lib/models/menuItems.mjs';

export default async function editMenu(req, res) {
  const { method } = req; // GET, POST, PUT, DELETE

  await db();

  switch (method) {
    case 'GET': {
      try {
        const items = await menuItems.find({}); /* find all the data in our database */
        res.status(200).json({ success: true, data: items });
      }
      catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    }
    case 'POST': {
      try {
        const item = await menuItems.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: item });
      }
      catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    }
  }

}