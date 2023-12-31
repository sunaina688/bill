//Create an API route to fetch plans:

// pages/api/plans.js

import Plan from '../../models/Plan';
import dbConnect from '../../utils/dbConnect';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const plans = await Plan.find({});
    res.status(200).json({ plans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch plans' });
  }
}

