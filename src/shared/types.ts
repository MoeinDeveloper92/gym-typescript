import { JSX } from 'react';

export enum SelectedPage {
  HOME = 'home',
  BENEFITS = 'benefits',
  OURCLASSES = 'our classes',
  CONTACTUS = 'contactus',
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
