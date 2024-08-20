import React from "react";
import Section_7 from "../COMPONENTS/HOME/SECTION_7/Section_7";
import CheckOutRecipes from "../COMPONENTS/CheckOutRecipes";
import TitleSection from "../COMPONENTS/TitleSection";
import Button from "../COMPONENTS/BUTTON/Button";

function Contact() {
  return (
    <div className="px-20">
      {/* section 1 */}
      <div>
        <div className="text-center my-20">
          <TitleSection>Contact us</TitleSection>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-1">
            <img src="./IMAGES/contact_image.png" alt="image" />
          </div>
          <div className="col-span-2 text-black/60">
            <form onSubmit={(e)=>e.preventDefault()} className="space-y-10">
              <div className="flex items-center gap-10">
                <div className="w-full flex flex-col">
                  <label htmlFor="name">NAME</label>
                  <input
                    className="border outline-none h-[60px] rounded-2xl px-5"
                    type="text"
                    id="name"
                    placeholder="Enter your name..."
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input
                    className="border outline-none h-[60px] rounded-2xl px-5"
                    type="email"
                    id="email"
                    placeholder="Your email address..."
                  />
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="w-full flex flex-col">
                  <label htmlFor="subject">SUBJECT</label>
                  <input
                    className="border outline-none h-[60px] rounded-2xl px-5"
                    type="text"
                    id="subject"
                    placeholder="Enter subject..."
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label htmlFor="enquiry">ENQUIRY TYPE</label>
                  <input
                    className="border outline-none h-[60px] rounded-2xl px-5"
                    type="text"
                    placeholder="Advertising"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">MASSAGE</label>
                <textarea
                  className="border rounded-2xl h-[200px]"
                  id="message"
                />
              </div>
              <div>
                <Button>Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div>
        <Section_7 />
      </div>

      {/* section 2 */}
      <div>
        <CheckOutRecipes title="Check out the delicious recipe" />
      </div>
    </div>
  );
}

export default Contact;
