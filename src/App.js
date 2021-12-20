import { UseState } from "./components/UseState/UseState";
import { UseReducer } from "./components/UseReducer/UseReducer";
import { ObjectUseState } from "./components/ImmutableState/ObjectUseState";
import { ArrayUseState } from "./components/ImmutableState/ArrayUseState";
import { ObjectUseReducer } from "./components/ImmutableState/ObjectUseReducer";
import { ArrayUseReducer } from "./components/ImmutableState/ArrayUseReducer";
import { Parent } from "./components/ParentChild/Parent";
import { ParentOne } from "./components/Optimization/ParentOne";
import { OptimizedParentOne } from "./components/Optimization/OptimizedParentOne";
import { ChildOne } from "./components/Optimization/ChildOne";
import { GrandParent } from "./components/Optimization/GrandParent";
import { ParentTwo } from "./components/Optimization/ParentTwo";
import { ParentThree } from "./components/IncorrectOptimization/ParentThree.js";
import { ParentFour } from "./components/IncorrectOptimization/ParentFour.js";

function App() {
  console.log("Root component Render");
  return (
    <>
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseReducer /> */}
      {/* <ArrayUseReducer /> */}
      {/* <Parent /> */}
      {/* <ParentOne /> */}
      {/* <OptimizedParentOne>
        <ChildOne />
      </OptimizedParentOne> */}
      {/* <GrandParent /> */}
      {/* <ParentTwo /> */}
      {/* <ParentThree /> */}
      <ParentFour />
      {/* <ContextParent /> */}
    </>
  );
}

export default App;
