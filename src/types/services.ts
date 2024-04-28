/** @format */

export type Review = {
	profile: string;
	name: string;
	comments: string;
	date: string;
	review?: string;
};

export type ServiceType = {
	_id: string | number;
	profile: string;
	name: string;
	price: string;
	address: string;
	service?: string;
	discountType: string;
	images: string[];
	description: string;
	reviews: { [rating: string]: Review[] };
};

export type ServiceCategory = {
	_id: number;
	service: string;
	serviceIcon: string;
	services: ServiceType[];
};
