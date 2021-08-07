import {
	requestMain
} from '@/network/request.js';

export function sheQunHuoDong(params) {
	return requestMain({
		url: '/api/cms/sheQunHuoDong/getListOfPage',
		method: 'get',
		params,
	})
}
