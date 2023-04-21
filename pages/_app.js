import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Provider } from 'react-redux';
import "@/styles/globals.css";
import store from "../store";
import { useEffect,useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from 'react-top-loading-bar'
export default function App({ Component, pageProps }){
  const [progress, setProgress] = useState(0)
  const router = useRouter();
  const [user, setUser] = useState({value:null});
  useEffect(() => {
    router.events.on('routeChangeStart',()=>{
      setProgress(40);
    });
    router.events.on('routeChangeComplete',()=>{
      setProgress(100);
    });
    const token = localStorage.getItem("token");
    if (token) {
      setUser({value:token});
    }else{
      setUser({value:null});
    }
  }, [router.query])
  return (
    <>
    <Provider store={store}>
    <Navbar user={user} />
    <LoadingBar
        color='#f11946'
        waitingTime={300}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component {...pageProps} />
      <Footer />
      </Provider>
    </>
  );
}
