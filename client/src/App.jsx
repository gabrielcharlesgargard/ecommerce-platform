import {
  useEffect
} from "react";
import API from "./services/axios";

function App() {
  useEffect( () => {
    API.get( "/api" )
      .then( ( res ) => console.log( res.data ) )
      .catch( ( err ) => console.error( err ) );
  }, [] );

  return <h1 className="text-2xl"> Connected </h1>
}

export default App;
