import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { doc, getDoc } from "firebase/firestore";

interface items {
  name: string
}

const App: React.FC = () => {

  const [data, setData] = useState<items>({name: 'a_items'});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "items", "a");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data() as items);
          console.log("DB connecting success")
        } else {
          console.log("No DB");
        }
      } catch (error) {
        console.error("DB connecting fail", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>{data.name}</p>
    </div>
  );
}

export default App
