import { db } from './firebase';
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';

export async function addAssignment(assignmentData) {
  try {
    const docRef = await addDoc(collection(db, 'assignments'), assignmentData);
    return docRef.id;
  } catch (error) {
    console.error('Error adding assignment:', error);
    throw error;
  }
}

export async function getAssignments() {
  try {
    const snapshot = await getDocs(collection(db, 'assignments'));
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (error) {
    console.error('Error fetching assignments:', error);
    return [];
  }
}

export async function addResourceLink(assignmentId, link) {
  try {
    const assignmentRef = doc(db, 'assignments', assignmentId);
    await updateDoc(assignmentRef, { link: link });
  } catch (error) {
    console.error('Error adding resource:', error);
    throw error;
  }
}
export async function addResource(resourceData) {
  try {
    const docRef = await addDoc(collection(db, 'resources'), resourceData);
    return docRef.id;
  } catch (error) {
    console.error('Error adding resource:', error);
    throw error;
  }
}

export async function getResources() {
  try {
    const snapshot = await getDocs(collection(db, 'resources'));
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (error) {
    console.error('Error fetching resources:', error);
    return [];
  }
}
export async function deleteAssignment(id) {
  try {
    await deleteDoc(doc(db, 'assignments', id));
  } catch (error) {
    console.error('Error deleting assignment:', error);
    throw error;
  }
}

export async function deleteResource(id) {
  try {
    await deleteDoc(doc(db, 'resources', id));
  } catch (error) {
    console.error('Error deleting resource:', error);
    throw error;
  }
}