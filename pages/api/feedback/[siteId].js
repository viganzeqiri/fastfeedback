import { getAllFeedback } from '@lib/firestore-admin';

export default async (req, res) => {
  const {
    query: { siteId },
  } = req;

  const { feedback, error } = await getAllFeedback(siteId);

  if (error) {
    return res.status(500).json({ error });
  }

  res.status(200).json({ feedback });
};
