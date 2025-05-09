
import { Pioneer } from "./types";
import { earlyComputingPioneers } from "./early-computing";
import { programmingLanguagePioneers } from "./programming-languages";
import { osAndSystemsPioneers } from "./os-and-systems";
import { internetPioneers } from "./internet-pioneers";
import { computerScienceTheorists } from "./computer-science-theorists";
import { scienceAndEngineeringPioneers } from "./science-and-engineering";

// Combine all pioneers into a single array
export const pioneers: Pioneer[] = [
  ...earlyComputingPioneers,
  ...programmingLanguagePioneers,
  ...osAndSystemsPioneers,
  ...internetPioneers,
  ...computerScienceTheorists,
  ...scienceAndEngineeringPioneers
];

// Re-export the Pioneer interface
export type { Pioneer };
