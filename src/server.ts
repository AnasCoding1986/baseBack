NODE_ENV=development
PORT=5001
DATABASE_URL=mongodb+srv://user1988:9rWGlnjH8rWaBhe9@cluster0.zdajqzn.mongodb.net/first-project?retryWrites=true&w=majority&appName=Cluster0import app from "./app";
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

  await startServer(config.port);
 } catch (error) {
  console.log(error);
 }
};

main();import app from "./app";
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

  await startServer(config.port);
 } catch (error) {
  console.log(error);
 }
}

main();import app from "./app";
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

  await startServer(config.port);
 } catch (error) {
  console.log(error);
 }
}

main();import app from "./app";
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

  await startServer(config.port);
 } catch (error) {
  console.log(error);
 }
}

main();import app from "./app";
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

  await startServer(config.port);
 } catch (error) {
  console.log(error);
 }
}

main();import app from "./app";
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

  await startServer(config.port);
 } catch (error) {
  console.log(error);
 }
}

main();import app from "./app";
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

  await startServer(config.port);
 } catch (error) {
  console.log(error);
 }
}

main();import app from "./app";
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
        console.log(`Server successfully started on port ${port}`);
        resolve(port);
      }).on('error', (err: any) => {
        console.error(`Error starting server on port ${port}:`, err);
        if (err.code === 'EADDRINUSE') {
          console.log(`Port ${port} is in use, trying next port...`);
          resolve(startServer(port + 1));
        } else {
          reject(err);
        }
      });
    });
  };

  const finalPort = await startServer(config.port);
  console.log(`Final server port: ${finalPort}`);
 } catch (error) {
  console.error('Failed to start server:', error);
 }
}

main();import app from "./app";
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
        console.log(`Server successfully started on port ${port}`);
        resolve(port);
      }).on('error', (err: any) => {
        console.error(`Error starting server on port ${port}:`, err);
        if (err.code === 'EADDRINUSE') {
          console.log(`Port ${port} is in use, trying next port...`);
          resolve(startServer(port + 1));
        } else {
          reject(err);
        }
      });
    });
  };

  const finalPort = await startServer(config.port);
  console.log(`Final server port: ${finalPort}`);
 } catch (error) {
  console.error('Failed to start server:', error);
 }
}

main();import app from "./app";
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

  await startServer(config.port);
 } catch (error) {
  console.log(error);
 }
};

main();
