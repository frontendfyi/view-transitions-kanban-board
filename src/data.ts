import { CardsState, Columns } from "./types";

export const initialCardsPosition: CardsState = {
  [Columns.IDEAS]: [
    {
      id: "FYI-234",
      title: "Research new frontend stuff",
      tags: ["Research"],
      users: ["Jeroen", "Mom"],
    },
    {
      id: "FYI-344",
      title: "Create a list of possible PRO videos",
      tags: ["Videos"],
      users: ["Jeroen"],
    },
    {
      id: "FYI-345",
      title: "Record PRO videos",
      tags: ["Videos"],
      users: ["Jeroen"],
    },
    {
      id: "FYI-03",
      title: "Keep improving the website",
      tags: [],
      users: ["Jeroen"],
    },
  ],
  [Columns.IN_PROGRESS]: [
    {
      id: "FYI-567",
      title: "Make a video about view transitions",
      tags: ["Videos"],
      users: ["Mom"],
    },
    {
      id: "FYI-09",
      title: "Take a break",
      tags: [],
      users: ["Jeroen"],
    },
  ],
  [Columns.DONE]: [
    {
      id: "FYI-230",
      title: "Tweet about blog form content for fe.fyi",
      tags: ["Socials"],
      users: ["Jeroen"],
    },
  ],
};
