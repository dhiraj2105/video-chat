import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { query, where } from "firebase/firestore";
import { userRef } from "../utils/FirebaseConfig";

function useFetchUsers() {
  const [users, setUsers] = useState([]);

  const uid = useAppSelector((zoom) => zoom.auth.userInfo?.uid);

  useEffect(() => {
    if (uid) {
      const getUsers = async () => {
        const firestoreQuery = query(userRef, where("uid", "!=", uid));
      };
      getUsers();
    }
  }, [uid]);
}

export default useFetchUsers;
