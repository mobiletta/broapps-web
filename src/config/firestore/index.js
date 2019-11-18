import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firestoreWithConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  presence: 'presence',
  sessions: 'sessions'
};

export default firestoreWithConfig;

