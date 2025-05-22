module.exports = {
    apps: [
      {
        name: "back-gerenciador",
        script: "getfilespr.js",
        env: {
          NODE_ENV: "production",
          HOST: "192.168.1.0",
          PORT: 7000
        }
      }
    ]
  };
  