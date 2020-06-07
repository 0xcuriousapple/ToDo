
characterData = [
    {
        "task": "asdsad",
        "date": "Set Date",
        "label": "Work",
        "status": "sdf",
        "priority": "low",
        "open": false
    },
    {
        "task": "zxcsadf",
        "date": "Set Date",
        "label": "Personal",
        "status": "new",
        "priority": "low",
        "open": false
    }
]
let filter = {

    status: [
        'new'
    ],

};

buildFilter = (filter) => {
    let query = {};
    for (let keys in filter) {
        if (filter[keys].constructor === Array && filter[keys].length > 0) {
            query[keys] = filter[keys];
        }
    }
    return query;
}

filterData = (data, query) => {
    const filteredData = data.filter((item) => {
        for (let key in query) {
            if (item[key] === undefined || !query[key].includes(item[key])) {
                return false;
            }
        }
        return true;
    });
    return filteredData;
};

const query = buildFilter(filter);
const result = filterData(characterData, query);
console.log(JSON.stringify(result, null, 4));