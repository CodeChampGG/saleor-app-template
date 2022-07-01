import {useContext, useEffect, useState} from "react";

import { AppContext } from "../providers/AppBridgeProvider";

const useApp = () => {
  const { app } = useContext(AppContext);
  const [_, setState] = useState(0);

  const update = ()=>{
    setState(Math.random())
  }

  useEffect(()=>{
    app?.subscribe("handshake",update);
    app?.subscribe("theme",update);
    app?.subscribe("response",update);
    app?.subscribe("response",update);
  },[])

  return app;
};

export default useApp;
