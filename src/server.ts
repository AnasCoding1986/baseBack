import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";
import { createServer } from "http";

async function main() {
 try {
  await mongoose.connect(config.database_url as string);

  const startServer = (port: number): Promise<number> => {
    return new Promise((resolve, reject) => {
      const server = createServer(app);
      server.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
        resolve(port);
      }).on('error', (err: any) => {
        if (err.code === 'EADDRINUSE') {
          resolve(startServer(port + 1));
        } else {
          reject(err);
        }
      });
    });
  };

  await startServer(config.port as number);
 } catch (error) {
  console.log(error);
 }
};

main();