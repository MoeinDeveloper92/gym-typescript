import React, { JSX } from 'react';
import { BenefitType } from '../shared/types';
import { div } from 'framer-motion/client';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Benefit = ({ benefit }: { benefit: BenefitType }) => {
  return (
    <div className="flex flex-col items-center gap-8 border p-5 mt-5 hover:-translate-y-3 transition-transform duration-300 rounded-lg">
      <div>
        <button className="rounded-full border p-3 bg-primary-100">
          {benefit.icon}
        </button>
      </div>
      <p className="font-bold">{benefit.title}</p>
      <p className="text-center">{benefit.description}</p>
      <AnchorLink
        href="#contactus"
        className="bg-primary-100 px-4 py-2 rounded text-black shadow-xl"
      >
        readmore
      </AnchorLink>
    </div>
  );
};

export default Benefit;
