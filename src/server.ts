import DotenvConfig from "./config/env.config";
import app from "./config/app.config";
import { DatabaseConfig } from "./config/database.config";

const PORT = DotenvConfig.PORT || 8080;
async function server() {
  app
    .listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
    .on("error", (err) => {
      console.error(`Server failed to start: ${err.message}`);
    });
  try {
    // Initialize the database connection
    await DatabaseConfig.initialize();
    console.log(`🚀 Database successfully connected`);
  } catch (err: any) {
    // Handle database connection errors
    console.log(`❌ Database connection failure - ${err?.message}`);
  }
}

server();
