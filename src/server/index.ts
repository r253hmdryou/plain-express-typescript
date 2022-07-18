import http from "http";
import express from "express";

main();

/**
 * main function
 * @returns void
 */
function main(): void {
	const app = createApp();

	const server = app.listen(3000);

	process
		.on("SIGINT", () => {
			gracefulShutdown(server);
		})
		.on("SIGTERM", () => {
			gracefulShutdown(server);
		});
}

/**
 * createApplication function
 * @returns express application
 */
function createApp(): express.Express {
	return express()
		.set("json spaces", 2)
		.use(express.json({strict: true}))
		.use(express.urlencoded({extended: true}))

		.get("/", (_req, res) => {
			res.send("Hello World!");
		});
}

/**
 * gracefulShutdown function
 * @param server http server
 * @returns void
 */
function gracefulShutdown(server: http.Server): void {
	server.close();
	process.exit(0);
}
