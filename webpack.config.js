module.exports = {
    entry: {
        base: "./src/base.js",
        ect: "./src/ect/main.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }
        ]
    }

}