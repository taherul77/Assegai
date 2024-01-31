import React from 'react';

const Introduction = () => {
    return (
        <div className="py-20 px-5 ">
        <h1 className="text-4xl text-center font-extrabold text-[#990000] ">
          ABC INTERNATIONAL LIMITED
        </h1>
        <br />
        <div
          style={{ flex: 1, height: "2px", backgroundColor: "rgb(153, 0,0)" }}
          className=" lg:mx-[450px] mx-12"
        ></div>
        <h2 className="text-xl text-center font-bold text-[#990000] pt-2 pb-5">
          Better Life Through Better Medicine
        </h2>
        <p className="lg:px-40 text-xl text-justify">
          ABC International Limited was incorporated under the Registrar of Joint
          Stock Companies in 1974 as a Private Limited Company. The company
          commenced formulation and production in 1983 and emerged as a pioneer in
          Bangladesh for adding a state of the art oral solid dosage plant. Since
          inception, ABC International Limiteds primary objective has been to
          meet guidelines provided by major global regulatory bodies such as the
          World Health Organization Good Manufacturing Practices (WHO cGMP)
          guidelines.
        </p>
      </div>
    );
};

export default Introduction;