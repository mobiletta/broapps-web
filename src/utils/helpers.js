//import { DocumentSnapshot } from './firebase';

const dataFromSnapshot = snapshot => {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();
  return {
    ...data,
    id: snapshot.id,
  };
};
