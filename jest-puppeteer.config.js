require("dotenv/config");

const puppeteer = require("puppeteer-extra");
const { default: RecaptchaPlugin, BuiltinSolutionProviders } = require("puppeteer-extra-plugin-recaptcha");
const CapSolverProvider = require("./dist/index.cjs.js");

CapSolverProvider.use(BuiltinSolutionProviders);

puppeteer.use(
	RecaptchaPlugin({
		provider: {
			id: "capsolver",
			token: process.env.CAPSOLVER_KEY
		},
		visualFeedback: true
	})
);

if (!process.env.CAPSOLVER_KEY) {
	console.error('\nCAPSOLVER_KEY not set in ".env"');
	process.exit();
}

// Change jest-puppeteer "puppeteer" to "puppeteer-extra"
require.cache[require.resolve("puppeteer")] = require.cache[require.resolve("puppeteer-extra")];

module.exports = {};
