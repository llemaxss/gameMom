const LOG_TYPES = {
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR'
};

const STORAGE_KEY = 'mail_sorter_log';

const MAX_DAY_LOG_SIZE = 10;

export function logInfo(message) {
    log(message, LOG_TYPES.INFO);
}

export function logWarn(message) {
    log(message, LOG_TYPES.WARN);
}

export function logError(message) {
    log(message, LOG_TYPES.ERROR);
}

function log(message, type) {
    switch (type) {
        case LOG_TYPES.INFO:
            console.info(message);
            break;
        case LOG_TYPES.WARN:
            console.warn(message);
            break;
        case LOG_TYPES.ERROR:
            console.error(message);
            break;
    }

    logIntoStorage(message, type);
}

function logIntoStorage(message, type) {
    const date = new Date(),
        dateAsString = getDateAsString(date);

    const preparedMessage = prepareMessage(date, message, type);

    let logList = getLogList();

    if (
        !logList
        || logList.length === 0
        || logList.length > MAX_DAY_LOG_SIZE
    ) {
        logList = [
            {
                date: dateAsString,
                messages: []
            }
        ];
    }

    const currentDayLogIndex = logList.findIndex(log => {
        return log.date === dateAsString;
    });

    if (currentDayLogIndex > -1) {
        logList[currentDayLogIndex].messages.push(preparedMessage);
    } else {
        logList.push({
            date: dateAsString,
            messages: [
                preparedMessage
            ]
        });
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(logList));
}

function prepareMessage(message, type) {
    return '['
        + type
        + ']'
        + ' - '
        + message;
}

function getDateAsString(date) {
    return `${date.getFullYear()}`
        + `-`
        + `${date.getMonth() + 1}`
        + `-`
        + `${date.getDate()}`;
}

function getLogList() {
    const logListString = localStorage.getItem(STORAGE_KEY);

    return JSON.parse(logListString);
}