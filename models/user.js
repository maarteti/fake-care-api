const User = (id, name, tel, address, isMe) => {
	return {
		id,
		name,
		tel,
		address,
		isMe
	}
}


const users = [
	User(1, '정대만', '010-FIRE-FIRE', '거기 산다', true),
	User(2, '강백호', '010-0000-0001', '길거리 어딘가', false),
	User(3, '채소연', '010-0000-0003', '채치수네 집', false),
	User(4, '채치수', '010-0000-0006', '채소연네 집', false),
	User(5, '뽀로로', '010-0001-0033', '거기', false),
];

const getUser = (id) => {
	return users.filter((user) => `${user.id}` === `${id}`)[0];
}

exports.users = users;
exports.getUser = getUser;