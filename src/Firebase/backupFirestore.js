const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');
const serviceAccount = require('./serviceAccountKey.json'); // Caminho para o arquivo de credenciais

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function backupFirestore() {
  try {
    const snapshot = await db.collection('collectionName').get();
    const data = {};

    snapshot.forEach(doc => {
      data[doc.id] = doc.data();
    });

    const backupPath = path.join(__dirname, '../backups', `backup-${Date.now()}.json`);
    fs.writeFileSync(backupPath, JSON.stringify(data, null, 2));

    console.log('Backup completed successfully:', backupPath);
  } catch (error) {
    console.error('Error getting documents', error);
  }
}

backupFirestore();
