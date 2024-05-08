/** @format */

import { ServiceType } from '../types/services';

export const hitSlop = {
	top: 15,
	bottom: 15,
	left: 15,
	right: 15,
};
export const getTotalReviews = (data: ServiceType) => {
	const { reviews } = data;

	let totalRating = 0;
	let totalReviews = 0;

	// Iterate over each rating category
	Object.entries(reviews).forEach(([rating, reviewsArray]) => {
		const ratingValue = parseInt(rating);
		const numReviews = reviewsArray.length;
		totalRating += ratingValue * numReviews;
		totalReviews += numReviews;
	});

	const averageRating = totalRating / totalReviews;

	return { rating: averageRating.toFixed(1), totalReviews };
};
