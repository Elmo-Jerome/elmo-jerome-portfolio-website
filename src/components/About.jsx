import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          dignissimos repellat at, quod dolor earum mollitia itaque rem
          voluptate repellendus alias aut, ratione temporibus. Nostrum expedita
          voluptatibus odio! Ad fuga officia odit accusamus necessitatibus
          facere explicabo repellat. Excepturi dolorem facere omnis officia
          neque magni, inventore aspernatur tempora similique possimus ratione.
        </p>

        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          dolorem culpa consequuntur nesciunt ut, laudantium iure minima
          accusantium laboriosam repellat eos nostrum vitae corrupti doloremque
          ex odio. Odit id eaque excepturi molestias illum libero vel ex.
          Molestiae earum corrupti culpa aperiam ullam atque nobis alias, magnam
          aut accusantium natus eligendi.
        </p>
      </div>
    </div>
  );
};

export default About;
