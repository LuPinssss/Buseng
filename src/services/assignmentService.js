import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function addAssignment(assignmentData) {
  try {
    const docRef = await addDoc(collection(db, 'assignments'), assignmentData);
    console.log('Assignment added with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding assignment:', error);
    throw error;
  }
}