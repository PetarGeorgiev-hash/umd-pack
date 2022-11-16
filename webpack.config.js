// webpack.config.js
module.exports = {
    entry: "./src/add.js",
    output: {
        filename: "add.js",
        library: {
            type: "umd",
            name: "dateAndTime",
        },
        // prevent error: `Uncaught ReferenceError: self is not define`
        globalObject: "this",
    },
};
