"use client";
import React, { useState, useEffect } from "react";

export default function Carrusel() {
  const images = [
    "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664301142625-e1742b2906e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://img.freepik.com/premium-photo/manual-worker-detail-3d-warehouse-background_103577-6316.jpg?w=996",
    "https://plus.unsplash.com/premium_photo-1663011366539-d8a4bbbfe11d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [img, setImg] = useState(0);

  function next() {
    if (img < images.length - 1) setImg(img + 1);
    else setImg(0);
  }

  function back() {
    if (img > 0) setImg(img - 1);
    else setImg(images.length - 1);
  }

  useEffect(() => {
    const time = setTimeout(next, 6000);
    return () => clearTimeout(time);
  }, [img]);

  return (
    <div className="mt-3 mx-2">
      <div className="relative mx-auto bg-[var(--color1)] min-h-[35vw] h-20 max-w-full">
        <img
          key={img}
          src={images[img]}
          className="w-full max-h-[35vw] object-cover mx-auto block transition-opacity duration-2000  rounded"
        />
        <a
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-white font-bold text-lg cursor-pointer transition ease-in-out duration-600 hover:bg-black/80 rounded-r"
          onClick={back}
        >
          &#10094;
        </a>
        <a
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 text-white font-bold text-lg cursor-pointer transition ease-in-out duration-600 hover:bg-black/80 rounded-l"
          onClick={next}
        >
          &#10095;
        </a>
        <div className="absolute top-[90%] left-0 right-0 mx-auto text-center">
          {images.length ? (
            images.map((e, k) => (
              <span
                key={k}
                className={`cursor-pointer h-4 w-4 mx-1 bg-gray-400 rounded-full inline-block transition ease-in-out duration-600 ${
                  img === k ? "bg-gray-600" : ""
                }`}
                onClick={() => setImg(k)}
              ></span>
            ))
          ) : (
            <p>Image not found</p>
          )}
        </div>
      </div>
    </div>
  );
}
