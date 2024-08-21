import React from "react";

const Directions = () => {
  return (
    <div className="md:mb-6 lg:mb-10">
      <div className="pt-12">
        <h4 className="text-4xl font-semibold">Directions</h4>
      </div>

      <div>
        {/* List-1 */}
        <div className="py-12 border-b space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 border border-black/60 rounded-full"></div>
            <h4 className="text-2xl font-semibold space-x-2">
              <span>1. </span>
              <span>Lorem ipsum dolor sit amet</span>
            </h4>
          </div>

          <div className="pl-12">
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>

            <img className="my-12" src="./IMAGES/directions.png" alt="image" />

            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </div>

        {/* List-2 */}

        <div className="py-12 border-b space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 border border-black/60 rounded-full"></div>
            <h4 className="text-2xl font-semibold space-x-2">
              <span>2. </span>
              <span>Lorem ipsum dolor sit amet</span>
            </h4>
          </div>

          <div className="pl-12">
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </div>

        {/* List-3 */}

        <div className="py-12 border-b space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 border border-black/60 rounded-full"></div>
            <h4 className="text-2xl font-semibold space-x-2">
              <span>3. </span>
              <span>Lorem ipsum dolor sit amet</span>
            </h4>
          </div>

          <div className="pl-12">
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Directions;
