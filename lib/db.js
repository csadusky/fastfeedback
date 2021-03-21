import firebase from './firebase';

const firestore = firebase.firestore();
console.log(firestore);
export function createUser(uid, data) {
  console.log(uid, data);
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}