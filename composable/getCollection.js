import { db } from "@/firebase/config";

import { collection, doc, setDoc } from "firebase/firestore";

import { ref } from "vue";
const useCollection = () => {
  const error = ref(null);

  const adding = async (data) => {
    error.value = null;
    const chats = collection(db, "IUBH");
    try {
      await setDoc(doc(chats), data);
      console.log("created");
    } catch (err) {
      console.log(err.message);
    }
  };
  return { adding, error };
};
export default useCollection;
