'use strict';

// Прототип функції для групування користувачів за містом:

UsersService.prototype.groupUsersByCity = async function(users) {
	const usersByCity = users.reduce((acc, user) => {
			const { id, name, email, phone, company } = user;
			const city = user.address.city;
			const userInfo = { id, name, email, phone, companyName: company.name };

			if (!acc[city]) {
					acc[city] = [];
			}
			acc[city].push(userInfo);

			return acc;
	}, {});

	console.log('New object sorted by city-keys: ',usersByCity);
};

// Прототип функції для сортування користувачів за іменем:

UsersService.prototype.sortUsersByName = async function(users) {
	const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
	console.log('User list sorted by names: ' ,sortedUsers);
};

// Прототип функції для створення користувачів з айді, іменем і номером:
UsersService.prototype.selectUserFields = async function(users) {
	const usersWithSelectedFields = users.map(({ id, name, phone }) => ({ id, name, phone }));
	console.log('New users list with id, name and phone: ', usersWithSelectedFields);
};


const userService = new UsersService(
  "https://jsonplaceholder.typicode.com/users",
);

function App() {
	userService.getUsers().then(list => {
    userService.userInfo(list);
		userService.groupUsersByCity(list);
    userService.sortUsersByName(list);
    userService.selectUserFields(list);
  }).catch(error => {
    console.error(error);
  });
};

App();