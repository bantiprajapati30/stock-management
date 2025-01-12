'use client'
import { Provider } from "react-redux";
import "../Styles/globals.css";
import Layout from "./_component/Layout";
import { store } from "@/redux/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Provider store={store}>
        <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
