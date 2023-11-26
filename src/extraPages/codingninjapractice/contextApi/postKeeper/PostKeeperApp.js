import React from 'react'

import { Navbar } from "./Navbar";
import { List } from "./List";
import { PostContextProvider } from "./postContext";

export default function PostKeeperApp() {
  return (
    <div >
      <PostContextProvider>
        <Navbar />
        <List />
      </PostContextProvider>
    </div>
  );
}


