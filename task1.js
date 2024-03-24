'use strict';

function UsersService(baseUrl) {
  this.baseUrl = baseUrl;
}

// Прототип функції для отримання списку користувачів:

UsersService.prototype.getUsers = async function() {
	try {
		const response = await fetch(this.baseUrl);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			throw new Error(`Something went wrong... Reason: ${response.status}`);
		};
	} catch (error) {
		console.error(error);
		return [];
	};
}

// Прототип функції для отримання ключів і значень об'єкту:

UsersService.prototype.userInfo = async function(users) {
	users.forEach(user => {
		const keys = Object.keys(user);
		const values = Object.values(user);
		console.log(`ID: ${values[keys.indexOf('id')]}, Ім'я: ${values[keys.indexOf('name')]}, Електронна адреса: ${values[keys.indexOf('email')]}, Адреса: ${values[keys.indexOf('address')].street}, ${values[keys.indexOf('address')].suite}, Місто: ${values[keys.indexOf('address')].city}`);
	});
};
