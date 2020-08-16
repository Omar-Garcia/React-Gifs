import React, { useState } from "react";
import { AgregarCategoria } from "./components/AgregarCategoria";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [Categorias, setCategorias] = useState(["One Punch"]);
  return (
    <>
      <h2>GifExpertApp</h2>
      <AgregarCategoria setCategorias={setCategorias} />
      <hr />
      <ol>
        {Categorias.map((c) => (
          <GifGrid key={c} categoria={c} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
