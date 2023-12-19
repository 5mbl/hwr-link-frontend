import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Header from "@/components/Header";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      {getLayout(
        <>
          <Layout>
            <Header />
            <Component {...pageProps} />

          </Layout>
        </>
      )}
    </SessionProvider>
  );
}
