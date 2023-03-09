// import ComState from "./hooks/use-state/ComState";
// import ComRef from "./hooks/use-ref/ComRef";
// import ComEffect from "./hooks/use-effect/ComEffect";
// import ComContext from "./hooks/use-context/ComContext";
// import ComCustomHook from "./hooks/use-custom-hook/ComCustomHook";
// import ComCallback from "./hooks/use-callback/ComCallback";
// import { ComMemo } from "./hooks/use-memo/ComMemo";
// import ComReducer from "./hooks/use-reducer/ComReducer";

// ------------ pattern --------------

// import ComHOC from "./pattern/HOC/ComHOC";
import ComCP from "./pattern/ComponentCompound/ComCP";
// import ComGlobal from "./pattern/GlobalContext/ComGlobal";

function App() {
  return (
    <div>
      {/* <ComState /> */}
      {/* <ComRef /> */}
      {/* <ComEffect /> */}
      {/* <ComContext /> */}
      {/* <ComCallback /> */}
      {/* <ComMemo /> */}
      {/* <ComReducer /> */}
      {/* <ComCustomHook /> */}

      {/* ----- Pattern ------- */}
      {/* <ComHOC /> */}
      {/* <ComGlobal /> */}
      <ComCP />
    </div>
  );
}

export default App;
