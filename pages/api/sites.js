import { getUserSites } from '@lib/firestore-admin';
import { auth } from '@lib/firebase-admin';

export default async (req, res) => {
  const { token } = req.headers;

  try {
    const { uid } = await auth.verifyIdToken(token);
    const sites = await getUserSites(uid);

    res.status(200).json(sites);
  } catch (error) {
    res.status(500).json({ error });
  }
};
