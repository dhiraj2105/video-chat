import { NavigateFunction } from "react-router-dom";
import { BreadCrumbsType } from "./Types";

export const getCreateMeetingBreadCrumbs = (navigate: NavigateFunction) : Array<BreadCrumbsType> =>[
  {
    text: "Dashboard",
    href: "/",
    onclick: () => {
      navigate("/");
    },
  },
  { text: "Create Meeting" },
];
