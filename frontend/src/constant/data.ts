import React from "react";
import Graph from "../assets/svg_graph.svg?react";
import Ban from "../assets/svg_ban.svg?react";
import Comm from "../assets/svg_comm.svg?react";
import Empty from "../assets/svg_empty.svg?react";
import Lamp from "../assets/svg_lamp.svg?react";
import Settings from "../assets/svg_system.svg?react";
import type { TranslationKey } from "../i18n/translations";

export const hero_points: { id: number; key: TranslationKey }[] = [
  { id: 1, key: "heroPoint1" },
  { id: 2, key: "heroPoint2" },
  { id: 3, key: "heroPoint3" },
];

export const problems: { id: number; key: TranslationKey }[] = [
  { id: 1, key: "problem1" },
  { id: 2, key: "problem2" },
  { id: 3, key: "problem3" },
];

export const solutions: {
  id: number;
  number: string;
  titleKey: TranslationKey;
  textKey: TranslationKey;
}[] = [
  { id: 1, number: "01", titleKey: "solutionTitle1", textKey: "solutionText1" },
  { id: 2, number: "02", titleKey: "solutionTitle2", textKey: "solutionText2" },
  { id: 3, number: "03", titleKey: "solutionTitle3", textKey: "solutionText3" },
];

export const product_panels: { id: number; image: string }[] = [
  { id: 1, image: "screen1" },
  { id: 2, image: "screen2" },
];

export const opp_items: {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  titleKey: TranslationKey;
  subtitleKey: TranslationKey;
}[] = [
  { id: 1, icon: Graph, titleKey: "oppTitle1", subtitleKey: "oppSubtitle1" },
  { id: 2, icon: Ban, titleKey: "oppTitle2", subtitleKey: "oppSubtitle2" },
  { id: 3, icon: Comm, titleKey: "oppTitle3", subtitleKey: "oppSubtitle3" },
  { id: 4, icon: Empty, titleKey: "oppTitle4", subtitleKey: "oppSubtitle4" },
  { id: 5, icon: Lamp, titleKey: "oppTitle5", subtitleKey: "oppSubtitle5" },
  { id: 6, icon: Settings, titleKey: "oppTitle6", subtitleKey: "oppSubtitle6" },
];
