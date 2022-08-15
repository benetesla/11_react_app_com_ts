export default {
  port: process.env.PORT || 3000,
    dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS }@mongo01project.004rvvf.mongodb.net/?retryWrites=true&w=majority`,
  env: "development",
};
