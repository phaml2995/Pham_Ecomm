import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	
    apiKey: "AIzaSyBqS3Krwm7v8xskNzwbrlyHiXE8zSsLiFw",
    authDomain: "e-comme-db.firebaseapp.com",
    databaseURL: "https://e-comme-db.firebaseio.com",
    projectId: "e-comme-db",
    storageBucket: "e-comme-db.appspot.com",
    messagingSenderId: "71321464623",
    appId: "1:71321464623:web:dbf7bb0c568a598bc0fbda",
    measurementId: "G-9WDDE9KQ2R"
  }

firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return ;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get(); //Geting snapshot obj
	if (!snapShot.exists) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user',error.message);
		}
	}

	return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey); 
  console.log(collectionRef)

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj);
  });
  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(docSnapshot => {
    const { title,items } = docSnapshot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items
    }
  });
  return transformedCollection.reduce((accumulator,collection)=> {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle =  () => auth.signInWithPopup(provider);

export default firebase;
