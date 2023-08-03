import classNames from "classnames";
import { useState } from "react";

type DropAreaProps = {
  onDrop: () => void;
};

export const DropArea = ({ onDrop }: DropAreaProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showArea = () => {
    setIsVisible(true);
  };

  const hideArea = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={classNames(
        "relative h-2 transition-[padding,opacity] before:absolute before:inset-2 before:rounded-xl before:border-2 before:border-dashed before:border-gray-500 before:bg-gray-600 only:h-32",
        isVisible && "py-8 opacity-100",
        !isVisible && "opacity-0",
      )}
      onDragEnter={showArea}
      onDragLeave={hideArea}
      onDrop={() => {
        onDrop();
        hideArea();
      }}
      onDragOver={(ev) => ev.preventDefault()}
    />
  );
};
