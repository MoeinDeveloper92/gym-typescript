import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { BenefitType, SelectedPage } from '../shared/types';
import { motion } from 'framer-motion';
import SharedHeader from '../shared/SharedHeader';
import Benefit from './Benefit';
const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="w-6 h-6" />,
    title: 'State Of the Art facilities',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis  animi possimus natus est, ullam ipsam eveniet inventore earum non   culpa similique nesciunt iusto sunt vitae placeat laborum nulla sint  consectetur!',
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: 'Houndreds of diversed classes',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis  animi possimus natus est, ullam ipsam eveniet inventore earum non   culpa similique nesciunt iusto sunt vitae placeat laborum nulla sint  consectetur!',
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    title: 'Expert and Pro Trainers',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis  animi possimus natus est, ullam ipsam eveniet inventore earum non   culpa similique nesciunt iusto sunt vitae placeat laborum nulla sint  consectetur!',
  },
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="#benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.BENEFITS)}
      >
        {/* Header Section */}
        <div className="md:max-w-[60%] md:my-5">
          <SharedHeader>More Than Just a GEM.</SharedHeader>
          <p className="my-5 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            animi possimus natus est, ullam ipsam eveniet inventore earum non
            culpa similique nesciunt iusto sunt vitae placeat laborum nulla sint
            consectetur!
          </p>
        </div>
        {/* BENEFITS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-5">
          {benefits.map((benefit) => (
            <Benefit benefit={benefit} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
