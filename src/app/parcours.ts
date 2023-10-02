import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Parcours {
	icon: IconDefinition;
	entreprise: string;
	place?: string;
	list: string[];
	time: string;
	title: string;
	desc: string;
}