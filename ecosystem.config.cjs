module.exports = {
  apps: [
    {
      name: "manthan-next",
      cwd: __dirname,
      script: "npm",
      args: "run start:prod",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env_file: ".env",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
