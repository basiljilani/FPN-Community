import { BrainCircuit, Banknote, Scale, Users } from 'lucide-react';

export const iconMap = {
  BrainCircuit,
  Banknote,
  Scale,
  Users
} as const;

export type IconName = keyof typeof iconMap;