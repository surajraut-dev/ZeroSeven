import Image from "next/image";
import Header from "../src/components/header";
import Carousel from "@/src/components/Carousel";
import AnimatedOverlay from '@/src/components/Animatedtitle';
import MovingText from '@/src/components/MovingText';
import BrandCaption from '@/src/components/BrandCaption';

export default function Home() {
  return (
    <div>
    <AnimatedOverlay/>
    <Header/>
    <Carousel/>
    <MovingText/>
    <BrandCaption/>
    </div>
  );
}
