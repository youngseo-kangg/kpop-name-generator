import { nameTypeDetails } from "@/app/const/nameType";
import { NameType } from "@/app/types";

export function getNameTypeDetails(type: NameType): typeof nameTypeDetails[NameType] {
    return {...nameTypeDetails[type]}
}