/** @format */

export type RootStackParamList = {
	Splash: undefined;
	Home: undefined;
	Service: {
		_id: number | string;
	};
	ServiceDetails: {
		serviceID: number | string;
		serviceTypeID: number | string;
	};
	TransparentModal: {
		content: React.ReactElement;
		bgColor?: string;
		fullScreen?: boolean;
	};
	OrderCart: undefined;
};
