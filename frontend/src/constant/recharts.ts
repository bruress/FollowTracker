import type { TranslationKey } from "../i18n/translations";

interface DataPoint {
  dayKey: TranslationKey;
  engagement_drop: number;
  toxic_content: number;
  unwanted_content: number;
  content_engagement: number;
  emotional_tone: number;
  uniqueness: number;
  day?: string;
}

export const data_1: DataPoint[] = [
  {
    dayKey: "graphDay1",
    engagement_drop: 25,
    toxic_content: 5,
    unwanted_content: 2,
    content_engagement: 60,
    emotional_tone: 40,
    uniqueness: 55,
  },
  {
    dayKey: "graphDay2",
    engagement_drop: 30,
    toxic_content: 8,
    unwanted_content: 1,
    content_engagement: 58,
    emotional_tone: 42,
    uniqueness: 50,
  },
  {
    dayKey: "graphDay3",
    engagement_drop: 28,
    toxic_content: 10,
    unwanted_content: 0,
    content_engagement: 52,
    emotional_tone: 35,
    uniqueness: 48,
  },
  {
    dayKey: "graphDay4",
    engagement_drop: 35,
    toxic_content: 15,
    unwanted_content: 3,
    content_engagement: 45,
    emotional_tone: 30,
    uniqueness: 43,
  },
  {
    dayKey: "graphDay5",
    engagement_drop: 32,
    toxic_content: 12,
    unwanted_content: 1,
    content_engagement: 50,
    emotional_tone: 33,
    uniqueness: 45,
  },
  {
    dayKey: "graphDay6",
    engagement_drop: 40,
    toxic_content: 18,
    unwanted_content: 4,
    content_engagement: 42,
    emotional_tone: 28,
    uniqueness: 40,
  },
  {
    dayKey: "graphDay7",
    engagement_drop: 38,
    toxic_content: 20,
    unwanted_content: 2,
    content_engagement: 38,
    emotional_tone: 25,
    uniqueness: 38,
  },
  {
    dayKey: "graphDay8",
    engagement_drop: 34,
    toxic_content: 15,
    unwanted_content: 1,
    content_engagement: 50,
    emotional_tone: 30,
    uniqueness: 42,
  },
  {
    dayKey: "graphDay9",
    engagement_drop: 28,
    toxic_content: 10,
    unwanted_content: 0,
    content_engagement: 55,
    emotional_tone: 35,
    uniqueness: 45,
  },
  {
    dayKey: "graphDay10",
    engagement_drop: 22,
    toxic_content: 8,
    unwanted_content: 0,
    content_engagement: 60,
    emotional_tone: 38,
    uniqueness: 48,
  },
  {
    dayKey: "graphDay11",
    engagement_drop: 18,
    toxic_content: 5,
    unwanted_content: 0,
    content_engagement: 65,
    emotional_tone: 40,
    uniqueness: 50,
  },
  {
    dayKey: "graphDay12",
    engagement_drop: 15,
    toxic_content: 3,
    unwanted_content: 0,
    content_engagement: 70,
    emotional_tone: 45,
    uniqueness: 55,
  },
  {
    dayKey: "graphDay13",
    engagement_drop: 10,
    toxic_content: 2,
    unwanted_content: 0,
    content_engagement: 75,
    emotional_tone: 50,
    uniqueness: 60,
  },
];

interface TitleItem {
  labelKey: TranslationKey;
}

export const titles: Record<string, TitleItem> = {
  engagement_drop: { labelKey: "graphEngagementDrop" },
  toxic_content: { labelKey: "graphToxicContent" },
  unwanted_content: { labelKey: "graphUnwantedContent" },
  content_engagement: { labelKey: "graphContentEngagement" },
  emotional_tone: { labelKey: "graphEmotionalTone" },
  uniqueness: { labelKey: "graphUniqueness" },
};
