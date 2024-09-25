import Loader from "@/components/loader";
import NotFoundModel from "@/components/models3D/404";
import Cube from "@/components/models3D/cube";
import HeroSection from "@/modules/quickAccess/hero/components/hero";
import { DockDemo } from "@/modules/quickAccess/quick";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Loader /> */}
      {/* <NotFoundModel /> */}
      {/* <DockDemo /> */}
      {/* <Cube /> */}
      <HeroSection />
    </>
  );
}
