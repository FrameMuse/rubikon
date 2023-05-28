import applications.users.app_db as users

tr = users.TokensRepository()
ur = users.UsersRepository()
tr._create_table()
ur._create_table()
# users.TokensRepository._create_table()
# users.UsersRepository._create_table()