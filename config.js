module.exports = {
  dialect: "mysql",
  username: process.env.DB_USER || "b3b0046a6ded4d",
  password: process.env.DB_PASS || "b8460835",
  database: process.env.DB_NAME || "heroku_d454e65f8c31bc7",
  host: process.env.DB_HOST || "us-cdbr-east-03.cleardb.com",
  define: {
    paranoid: false,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  },
  timezone: "-03:00",
};
