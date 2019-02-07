const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    "mode": "development",
    "entry": {
      "kaleidoBackground": path.join(__dirname, "entry.js"),
      "kaleidoBackground.min": path.join(__dirname, "entry.js"),
    },
    "devtool": "source-map",
    "output": {
        "path": path.join(__dirname, '/dist'),
        "filename": "[name].js",
        "libraryTarget": "var",
        "library": "KaleidoBackground"
    },
    "optimization": {
      "minimize": true,
      "minimizer": [new UglifyJsPlugin({
        include: /\.min\.js$/
      })]
    },
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "include": __dirname,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/env"
                        ]
                    }
                }
            }
        ]
    }
}
