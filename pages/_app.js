import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Map from "../components/resumeComponent/Map";



function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Map className="mapboxgl-map" style = {{
    width: "29%",
    height: "124%",
    marginLeft: "574px",
    backgroundColor: "red",
    marginTop: "-109px"
    }}/>
    </Provider>
    
  );
}

export default MyApp;






