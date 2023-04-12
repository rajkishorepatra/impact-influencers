import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase_config";

const DbContext = createContext();

export function DbContextProvider({ children }) {
  return (
    <DbContext.Provider value={{}}>
      {children}
    </DbContext.Provider>
  );
}

export function DbMethods() {
  return useContext(DbContext);
}
