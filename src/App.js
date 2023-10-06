import React from "react";
import { Home } from "./components/Home";
import {Card,CardContent} from "@mui/material"



function App() {
  return (
    <Card>
      <CardContent>
        <Home />
      </CardContent>
    </Card>
  );
}

export default App;
