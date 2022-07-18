import express from "express";

main();

/**
 * main function
 * @returns void
 */
function main(): void {
	const app = createApp();

	app.listen(3000);
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
