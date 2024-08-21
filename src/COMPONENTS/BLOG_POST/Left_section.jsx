import React from "react";
import H5 from "./H5";

const Left_section = () => {
  return (
    <div className="col-span-3 space-y-16 px-2">
      <div className="space-y-6">
        <H5 text="How did you start out in the food industry?" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce
          id mollis ex. Praesent feugiat elementum ex ut suscipit.
        </p>
      </div>

      <div className="space-y-6">
        <H5 text="What do you like most about your job?" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce
          id mollis ex. Praesent feugiat elementum ex ut suscipit.
        </p>
      </div>

      <div className="space-y-6">
        <H5 text="Do you cook at home on your days off?" />
        <img src="./IMAGES/directions.png" alt="image" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce
          id mollis ex. Praesent feugiat elementum ex ut suscipit.
        </p>
      </div>

      <div className="space-y-6">
        <H5
          text="What would your advice be to young people looking to get their foot in
          the door?"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce
          id mollis ex. Praesent feugiat elementum ex ut suscipit.
        </p>
      </div>

      <div className="bg-gradient-to-r from-black/5 to-black/2">
        <p className="text-xl lg:text-4xl font-medium px-10 py-12">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio.”
        </p>
      </div>

      <div className="space-y-6">
        <H5
          text="What is the biggest misconception that people have about being a
          professional chef?"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce
          id mollis ex. Praesent feugiat elementum ex ut suscipit.
        </p>
      </div>
    </div>
  );
};

export default Left_section;
