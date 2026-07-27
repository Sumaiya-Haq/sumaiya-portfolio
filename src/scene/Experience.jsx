import { OrbitControls } from "@react-three/drei";
import Terrain from "../world/Terrain";
import VillageRoad from "../world/VillageRoad";
import MainHouse from "../houses/MainHouse";
import CoconutTree from "../world/CoconutTree";
import TeaStall from "../houses/TeaStall";
import River from "../world/River";
import Fence from "../world/Fence";
import Bench from "../world/Bench";
import Lights from "./Lights";


export default function Experience() {
  return (
    <>
      <Lights />

      <Terrain />

      <VillageRoad />

          <MainHouse />
          <Fence />
          <Bench/>

<CoconutTree position={[-8, 0, -18]} />
<CoconutTree position={[8, 0, -18]} />
          <CoconutTree position={[15, 0, -25]} />
        
          <TeaStall />
          <River />

      <axesHelper args={[5]} />

      <OrbitControls
        makeDefault
        target={[0, 0, 0]}
        minDistance={8}
        maxDistance={80}
      />
    </>
  );
}