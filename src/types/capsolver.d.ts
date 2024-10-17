export interface CapSolverOptions {
	pollingInterval: number;
	retries: number;
}

export interface CapSolverApiBaseResult {
	errorID: number;
	errorCode: string;
}

export interface CapSolverApiCreateTaskResult extends CapSolverApiBaseResult {
	taskId: number;
}

export interface CapSolverApiGetTaskResultResult extends CapSolverApiBaseResult {
	status: "idle" | "processing" | "ready";
	solution?: { gRecaptchaResponse: string };
}

export interface CapSolverApiBalanceResult extends CapSolverApiBaseResult {
	balance: number;
}
