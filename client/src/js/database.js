import { openDB } from 'idb';

const initdb = async () => {
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
};

export const putDb = async (content) => {
  console.log('putDb: Storing content in the database');
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');

  const allItems = await store.getAll();

  if (allItems.length > 0) {
    await store.put({ id: 1, content });
  } else {
    await store.put({ id: 1, content });
  }

  await tx.complete;
  console.log('putDb: Content stored or updated');
};

export const getDb = async () => {
  console.log('getDb: Retrieving content from the database');
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');

  const item = await store.get(1);
  await tx.complete;

  return item ? item.content : '';
};

initdb();
