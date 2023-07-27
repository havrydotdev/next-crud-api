import { DocumentData, DocumentSnapshot } from "firebase/firestore";

export const getDataFromDoc = (
  doc: DocumentSnapshot<DocumentData, DocumentData>
) => {
  return {
    id: doc.id,
    ...doc.data(),
  };
};
