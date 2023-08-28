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

export const getOneonOneMeetingBreadCrumbs = (navigate: NavigateFunction) : Array<BreadCrumbsType> =>[
  {
    text: "Dashboard",
    href: "/",
    onclick: () => {
      navigate("/");
    },
  },
  { text: "Create Meeting" ,
  href: "/",
    onclick: () => {
      navigate("/create");
    },
  },
  {text: "Create One on One Meeting"}
];

export const getVideoConferenceBreadCrumbs = (navigate: NavigateFunction) : Array<BreadCrumbsType> =>[
  {
    text: "Dashboard",
    href: "/",
    onclick: () => {
      navigate("/");
    },
  },
  { text: "Create Meeting" ,
  href: "/",
    onclick: () => {
      navigate("/create");
    },
  },
  {text: "Create Video Conference"}
];

export const getMyMeetingsBreadcrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => [
  {
    text:"Dashboard",
    href:'/',
    onclick:() => {
        navigate('/');
    },
  },
  {
    text:"My Meetings",
  },
];

export const getMeetingsBreadcrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => [
  {
    text:"Dashboard",
    href:'/',
    onclick:() => {
        navigate('/');
    },
  },
  {
    text:"Meetings",
  },
];