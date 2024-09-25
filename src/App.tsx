import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

function App() {
  return (
    <main>
      <h1>Welcome to my Resume Page!</h1>
      <div>
        This webpage is currently under development.
        This wepage is made through Vite, React and TypeScript.
        Check out the latest commits through https://github.com/chenjohnny-cs
        <br />
      </div>
    </main>
  );
}

export default App;
