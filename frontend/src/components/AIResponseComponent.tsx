import React from "react";
import Typewriter from "typewriter-effect";

export type AIResponseComponentProps = {
  aiResponse: string;
};

export const AIResponseComponent: React.FC<AIResponseComponentProps> = ({
  aiResponse,
}) => {
  return (
    <h1 className="">
      <Typewriter
        key={aiResponse}
        onInit={(typewriter) => {
          typewriter.changeDelay(25).typeString(aiResponse).start();
        }}
      />
    </h1>
  );
};
