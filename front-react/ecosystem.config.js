module.exports = {
    apps: [
      {
        name: "gerenciador-front",
        script: "C:/Users/ronaldo.bonifacio/AppData/Roaming/npm/serve",
        args: "build -s -l 5000",
        watch: false,
        env: {
          NODE_ENV: "production"
        }
      }
    ]
  };
  