"use client";

import { fabric } from "fabric";
import LeftSidebar from "@/components/LeftSidebar";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/users/RightSidebar";
import { useEffect, useRef } from "react";
import { handleCanvasMouseDown, initializeFabric } from "@/lib/canvas";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null); // will use to initialise the fabric canvas
  const fabricRef = useRef<fabric.Canvas | null>(null); // will allow us to perform operations on the canvas
  const isDrawing = useRef(false); // will be used to check if the user is drawing or not

  useEffect(() => {
    const canvas = initializeFabric({ canvasRef, fabricRef });

    canvas.on("mouseLdown", (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        isDrawing,
      });
    });
  });

  return (
    <main className="h-screen overflow-hidden">
      <Navbar />
      <section className="flex h-full flex-row">
        <LeftSidebar />
        <Live />
        <RightSidebar />
      </section>
    </main>
  );
}
