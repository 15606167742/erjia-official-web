import {
	requestMain
} from '@/network/request.js';

export function xinWenJuJiao(params) {
	return requestMain({
		url: '/api/cms/xinWenJuJiao/getListOfPage',
		method: 'get',
		params,
	})
}

export function xinWenJuJiaoDetail(params) {
	return requestMain({
		url: '/api/cms/xinWenJuJiao/getById',
		method: 'get',
		params,
	})
}

export function xinWenJuJiaoDetailPrev(params) {
	return requestMain({
		url: '/api/cms/xinWenJuJiao/getLastId',
		method: 'get',
		params,
	})
}

export function xinWenJuJiaoDetailNext(params) {
	return requestMain({
		url: '/api/cms/xinWenJuJiao/getNextId',
		method: 'get',
		params,
	})
}

export function sheQunHuoDong(params) {
	return requestMain({
		url: '/api/cms/sheQunHuoDong/getListOfPage',
		method: 'get',
		params,
	})
}

// export function cashOutService(params) {
// 	return requestMain({
// 		url: '/app/cashOut/addProfitCashout',
// 		method: 'post',
// 		params,
// 	})
// }

// export function cashOutTask(params) {
// 	return requestMain({
// 		url: '/app/cashOut/addTaskCashout',
// 		method: 'post',
// 		params,
// 	})
// }
