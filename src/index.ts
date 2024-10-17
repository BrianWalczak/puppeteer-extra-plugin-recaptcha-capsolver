import * as CapSolver from "./provider/capsolver";

import * as types from "./types/plugin";

class Plugin {
	static use(providers: types.SolutionProvider[]) {
		providers.push({ id: CapSolver.PROVIDER_ID, fn: CapSolver.getSolutions });
	}
}

export default Plugin;
