const PROXY_CONFIG = [
    {
    context: ["/cuttle/assets"],
    target: "localhost:4200",
    secure: false,
    pathRewrite: {
    "/cuttle/assets": "/assets"
    }
}
]

module.exports = PROXY_CONFIG;