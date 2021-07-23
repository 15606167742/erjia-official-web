import {
	requestMain
} from '@/network/request.js';

export function getWalletInfo() {
	return requestMain({
		url: '/app/account/myWallet',
		method: 'get',
	})
}

export function cashOutService(params) {
	return requestMain({
		url: '/app/cashOut/addProfitCashout',
		method: 'post',
		params,
	})
}

export function cashOutTask(params) {
	return requestMain({
		url: '/app/cashOut/addTaskCashout',
		method: 'post',
		params,
	})
}