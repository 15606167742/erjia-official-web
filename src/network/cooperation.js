import {
	requestMain
} from '@/network/request.js';

export function submitTouGao(data) {
	return requestMain({
		url: '/api/cms/submitTouGao',
		method: 'post',
		data
	})
}

export function enterpriseList() {
	return requestMain({
		url: '/api/cms/getHeZuoList',
		method: 'get',
	})
}
