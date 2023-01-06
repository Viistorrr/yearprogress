"use client";
import { useRef, useCallback } from "react";
import { toPng } from "html-to-image";

const Screenshot = ({ children }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        //link.download = "my-image-name.png";
        // window.open(link.href);
        link.href = dataUrl;
        console.log(dataUrl);
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  return (
    <>
      <div ref={ref}>{children}</div>
      <button onClick={onButtonClick}>Click me</button>
    </>
  );
};

export default Screenshot;
