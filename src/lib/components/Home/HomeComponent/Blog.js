import React from 'react';
import "./blog.css"
const Blog = () => {
    return (
        <div className='featured-item bg-fixed py-16'>
        <div className="lg:mx-28 mx-5 ">
         <div className="grid lg:grid-cols-2 gap-10  ">
           <div className=" bg-[#122E28] bg-opacity-70 py-5">
             <h1 className="font-extrabold text-3xl text-white px-5 lg:pb-1 pb-2">
               Who we are
             </h1>
             <div
               style={{ flex: 1, height: "4px", backgroundColor: "rgb(153, 0,0)" }}
               className="lg:ms-[20px] lg:me-[340px] ms-[20px] me-[150px]"
             ></div>
             <p className="text-white px-5 text-lg py-6 text-justify">
               We were the first company in Bangladesh to formulate medicines in
               soft capsule form for the purpose of maximizing absorption and
               retention properties of some particular medicines such as vitamins.
               We continue to lead in the field of soft gelatin capsule manufacture
               in Bangladesh. We were also the first in the country to produce a
               soft gelatin capsule vaginal suppository with anti-bacterial and
               anti-fungal properties branded under the name of GYNOMIX. Presently,
               we use our refined and modern production processes to export
               pharmaceutical products to many countries around the world.
             </p>
           </div>
           <div className=" bg-[#122E28] bg-opacity-70 py-5">
             <h1 className="font-extrabold text-3xl text-white px-5 lg:pb-1 pb-2">
               What we do
             </h1>
             <div
               style={{ flex: 1, height: "4px", backgroundColor: "rgb(153, 0,0)" }}
               className="lg:ms-[20px] lg:me-[100px] ms-[20px] me-[100px]"
             ></div>
             <p className="text-white px-5 text-lg py-6 text-justify">
             We formulate drugs for all age groups and genders in different dosage forms including capsules, tablets, syrups, suspensions, injectables, soft gelatin capsules, suppositories, creams, and ointments. We maintain two principles of unique supply chain management: formulating optimized versions of medicines for specific patient groups and adopting policies for market release immediately after production. These policies benefit both the patients and the pharmacies as the medicine delivery system extends the product’s lifecycle. Our formulating principles have always revolved around the health and welfare of patients. We constantly strive to improve the quality of life of our patients and customers.
             </p>
           </div>
         </div>
       </div>
      </div>
    );
};

export default Blog;