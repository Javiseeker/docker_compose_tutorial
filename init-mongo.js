db.createUser(
	{
		user: "admin",
		pwd: "admin",
		roles: [
		{
			role: "readWrite",
			db: "antares_mongo"
		}
		]
	}
)
