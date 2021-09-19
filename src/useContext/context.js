import React, { useState } from "react";
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

export const AppsContext = React.createContext({});
export default function App() {
  const [apps] = useState({
    username: "Noval Christian",
    description: "Noval Christian adalah seorang software programmer",
    contact: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/noval.chrstian/"
      },
      {
        label: "Github",
        url: "https://github.com/novalchristian"
      }
    ]
  });

  return (
    <AppsContext.Provider value={{ apps }}>
      <Header />
      <Content />
      <Footer />
    </AppsContext.Provider>
  );
}