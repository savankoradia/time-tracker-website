var localData = {};

function saveToStorage() {
    localStorage.setItem("tasks", JSON.stringify(localData));
}

export const fetchAll = () => {
    localData = JSON.parse(localStorage.getItem("tasks") || '{}');   
}

export const createTask = ({name, startTime, endTime}) => {
    var task = {
        id: Date.now(),
        name,
        startTime,
        endTime
    }
    localData[task.id] = task;
    saveToStorage();
    fetchAll();
};

export const getTask = (id) => {
    if (!Object.keys(localData).length) {
        fetchAll();
    }
    return localData[id];
};

export const updateTask = ({id, name, startTime, endTime}) => {
    var task = getTask(id);
    task.name = name;
    task.startTime = startTime;
    task.endTime = endTime;
    localData[id] = task;
    saveToStorage();
    fetchAll();
}

export const getLastEntry = () => {
    if (!Object.keys(localData).length) {
        fetchAll();
    }
    var lastTask = localData[Object.keys(localData).pop()];
    return lastTask;
}