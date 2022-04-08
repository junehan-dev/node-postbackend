async function createConnection(mongoose, uri) {
	await mongoose.connect(uri);
	return (mongoose);
}

exports.createConnection = createConnection; 
