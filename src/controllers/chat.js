const processData = fileData => {
	const msgs = fileData.toString('utf-8').split(/\r\n|\n|\r/);

	const pattern = /^\[?(\d+[./]\d+[./]\d+),\s+[^\]-]+[\]-]?\s([^:]+):\s*(.*)/;

	const data = [];

	let prevday;
	msgs.forEach(line => {
		const match = pattern.exec(line);
		if (!match) return;
		const [, date, name] = match;

		if (prevday && prevday.date === date) {
			if (name in prevday.recipients) prevday.recipients[name] += 1;
			else prevday.recipients[name] = 1;
		} else {
			prevday = {
				date,
				recipients: {},
			};
			prevday.recipients[name] = 1;
			data.push(prevday);
		}
	});
	return data;
};

// const parseFile = stream => {};

const chat = (req, res) => {
	const data = processData(req.files.chat.data);
	res.json({
		status: 'success',
		data,
	});
};

export default chat;
