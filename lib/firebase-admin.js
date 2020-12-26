import admin from 'firebase-admin';

const serviceAccount = require('/Users/viganzeqiri/Downloads/ff.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin.firestore();
