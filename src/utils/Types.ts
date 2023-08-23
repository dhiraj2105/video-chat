export interface BreadCrumbsType {
    text: string,
    href?: string,
    onclick?: () => void;
}

export interface UserType {
    email: string;
    name: string;
    uid: string;
    label?: string;
}