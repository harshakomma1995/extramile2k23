module.exports = {
  apps: [
    {
      name: "frontend",
      script: "reactserver.js",
      exec_mode: "cluster",
      instances: 3,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    dev: {
      user: "root",
      host: "164.52.217.45",
      ref: "origin/development",
      repo: "git@github.com:mihirextramile/frontend.git",
      path: "/var/www/extramileplay/frontend",
      "post-deploy":
        "npm install && npm run build && pm2 reload ecosystem.config.js --env production",
    },
  },
};
