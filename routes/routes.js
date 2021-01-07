var appRouter = function(app) {
	app.get("/", function(req, res) {
		if (!req.query.number) {
			return res.send({"status": "error", "message": "missing number"});
		} else {
			return res.send ("Number provided is " + req.query.number);
		}
	});

	
}

module.exports = appRouter;