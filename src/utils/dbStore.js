const indexedDB = window.indexedDB;
const databaseName = "timerAppDb";
const version = 1;
var localStorage = {};
const storageKeys = {
  "getAllTasks": "getAllTasks"
};

function clearEverything () {
  localStorage = {};
}

// initialize the database
export const init = () => {
  clearEverything();
  const dbPromise = indexedDB.open(databaseName, version);
  dbPromise.onupgradeneeded = (event) => {
    const db = event.target.result;

    if (!db.objectStoreNames.contains("timeTable")) {
      const objectStore = db.createObjectStore("timeTable", {
        keyPath: "id",
        autoIncrement: true,
      });
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("startTime", "startTime", { unique: false });
      objectStore.createIndex("endTime", "endTime", { unique: false });
    }
  };

  dbPromise.onsuccess = () => {
    // console.log('Database created successfully.');
  };

  dbPromise.onerror = (event) => {
    console.error("Error creating database:", event.target.error);
  };
};

//create a new task to the database
export const createTask = ({ name, startTime, endTime }) => {
  // init();
  const dbPromise = indexedDB.open(databaseName, version);
  dbPromise.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction("timeTable", "readwrite");
    const objectStore = transaction.objectStore("timeTable");

    const newEntry = {
      name,
      startTime,
      endTime,
    };

    objectStore.add(newEntry);

    transaction.oncomplete = () => {
      // console.log('Entry added successfully.');
    };

    transaction.onerror = (event) => {
      console.error("Error adding entry:", event.target.error);
    };
  };

  dbPromise.onerror = (event) => {
    console.error("Error opening database:", event.target.error);
  };
};

//get all the tasks from the database
export const getAllTasks = () => {
  const storageKey = storageKeys["getAllTasks"];
  // init();
  const dbPromise = indexedDB.open(databaseName, version);

  return new Promise((resolve, reject) => {
    if (localStorage[storageKey]) {
      resolve(localStorage[storageKey]);
    } else {
      dbPromise.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction("timeTable", "readonly");
        const objectStore = transaction.objectStore("timeTable");

        const request = objectStore.getAll();

        request.onsuccess = (event) => {
          const entries = event.target.result;
          localStorage[storageKey] = entries;
          resolve(entries);
        };

        request.onerror = (event) => {
          reject(new Error("Error retrieving entries:", event.target.error));
        };
      };

      dbPromise.onerror = (event) => {
        reject(new Error("Error opening database:", event.target.error));
      };
    }
  });
};

//get last entry from the database to determin if task is running
export const getLastEntry = () => {
  init();
  const dbPromise = indexedDB.open(databaseName, version);

  return new Promise((resolve, reject) => {
    dbPromise.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction("timeTable", "readonly");
      const objectStore = transaction.objectStore("timeTable");

      const request = objectStore.openCursor(null, "prev");

      request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          var lastEntry = cursor.value;
          resolve(lastEntry);
        } else {
          // console.log("no entries found");
          resolve(null);
        }
      };

      request.onerror = (event) => {
        reject(new Error("Error retrieving entries:", event.target.error));
      };
    };

    dbPromise.onerror = (event) => {
      reject(new Error("Error opening database:", event.target.error));
    };
  });
};

//update the task
export const updateTask = ({ id, name, startTime, endTime }) => {
  const dbPromise = indexedDB.open(databaseName, version);
  return new Promise((resolve, reject) => {
    dbPromise.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction("timeTable", "readwrite");
      const objectStore = transaction.objectStore("timeTable");

      const request = objectStore.put({
        name: name,
        startTime: startTime,
        endTime: endTime,
        id: id,
      });

      request.onsuccess = () => {
        // console.log(`Entry with ID ${pkId} updated successfully.`);
        resolve(true);
      };

      request.onerror = (event) => {
        console.error(
          `Error updating entry with ID ${id}:`,
          event.target.error
        );
        resolve(false);
      };
    };

    dbPromise.onerror = (event) => {
      reject(new Error("Error opening database:", event.target.error));
    };
  });
};
