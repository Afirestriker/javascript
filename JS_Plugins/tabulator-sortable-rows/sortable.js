let tableData  = [];
let tableObject = null;
let isViewMode = true;

const savedDataProp = [
    {
        "key": "p1__eastTulsi",
        "visibility": 1,
        "title": "Tulsi (East)"
    },
    {
        "key": "p1__westCoconut",
        "visibility": 1,
        "title": "Coconut (West)"
    },
    {
        "key": "p1__northBanyanTree",
        "visibility": 1,
        "title": "Banyan Tree (North)"
    },
    {
        "key": "p1__sourthSuperWhite",
        "visibility": 1,
        "title": "Super White (South)"
    },
    {
        "key": "p1__westAreca",
        "visibility": 1,
        "title": "Areca (West)"
    },
    {
        "key": "p1__northMoneyPlant",
        "visibility": 1,
        "title": "Money Plant (North)"
    },
    {
        "key": "p1__eastPeaceLily",
        "visibility": 1,
        "title": "Peace Lily (East)"
    },
    {
        "key": "p2__westAglaonema",
        "visibility": 0,
        "title": "Aglaonema  (West)"
    },
    {
        "key": "p2__eastAglaonema",
        "visibility": 0,
        "title": "Aglaonema  (East)"
    },
    {
        "key": "p2__northAglaonema",
        "visibility": 0,
        "title": "Aglaonema  (North)"
    },
    {
        "key": "p2__westCoconut",
        "visibility": 0,
        "title": "Neem (South)"
    },
    {
        "key": "p2__sourthSuperWhite",
        "visibility": 0,
        "title": "Super White (East)"
    },
    {
        "key": "p2__eastPeperomia",
        "visibility": 0,
        "title": "Peperomia (East)"
    },
    {
        "key": "p2__westJackfruit",
        "visibility": 0,
        "title": "Jackfruit (West)"
    },
];

const defaultDataProp = {
    "p1": {
        "eastTulsi": {
            "title": "Tulsi",
            "direction": "East",
            "otherProp": ""
        },
        "westCoconut": {
            "title": "Coconut",
            "direction": "West",
            "otherProp": ""
        },
        "northBanyanTree": {
            "title": "Banyan Tree",
            "direction": "North",
            "otherProp": ""
        },
        "sourthSuperWhite": {
            "title": "Super White Gen",
            "direction": "South",
            "otherProp": ""
        },
        "westAreca": {
            "title": "Areca",
            "direction": "West",
            "otherProp": ""
        },
        "northMoneyPlant": {
            "title": "Money Plant",
            "direction": "North",
            "otherProp": ""
        },
        "eastPeaceLily": {
            "title": "Peace Lily",
            "direction": "East",
            "otherProp": ""
        }
    },
    "p2": {
        "eastTulsi": {
            "title": "Tulsi",
            "direction": "West",
            "otherProp": ""
        },
    },
    "c1": {
        "continentalOne": {
            "title": "Continental-1",
            "direction": "East",
            "otherProp": ""
        },
        "continentalTwo": {
            "title": "Continental-2",
            "direction": "West",
            "otherProp": ""
        },
        "continentalThree": {
            "title": "Continental-3",
            "direction": "North",
            "otherProp": ""
        }
    }
}

const toggleElement = function (cell, formatterdataProps, onRendered) {
    const rowData    = cell.getRow().getData();
    const value      = cell.getValue();
    const activeStat = value === 1 ? "checked" : "";

    const toggleElement = `<div class="custom-switch">
        <input type="checkbox" id="${rowData.key}" class="custom-control-input" value="${value}" ${activeStat}>
        <label class="custom-control-label" ></label>
    </div>`;

    return toggleElement;
};

const toggleVisiblity = function (e, cell) {
    if (isViewMode) return false;

    const newValue = cell.getValue() === 1 ? 0 : 1;
    cell.setValue(newValue);

    // TODO: Remove consolge statement
    // console.log(cell.getRow().getData());
};

// Create Tabulator table
const updateTabulator = () => {
    const divId = (isViewMode) ? "#viewSortableTable" : "#editSortableTable"

    // if ((tableObject??0) != 0) tableObject.destroy();

    tableObject = new Tabulator(divId, {
        height                	: 400,
        layout                	: "fitColumns",
        // pagination     		: "local",
        // paginationSize 		: 18,
        tooltips              	: true,
        movableRows             : !isViewMode,
        movableColumns        	: false,
        columnHeaderVertAlign 	: "top",
        placeholder           	: "No Data Available",
        // responsiveLayout     : "collapse",
        rowMoved: function (row) {
            $(row.getElement()).css("background-color", "orange");

            // TODO: Remove consolge statement
            // console.log(tableObject.getData());
        },
        columns: [
            {
                title: "",
                headerSort: false,
                rowHandle: true,
                formatter: "handle",
                frozen: true,
                width: 30,
                minWidth: 30,
                visible: !isViewMode
            },
            /* {
                title: "No.",
                formatter: "rownum",
                hozAlign: "center",
                width: 80,
            }, */
            {
                title: "Visibility",
                field: "visibility",
                hozAlign: "center",
                width: 100,
                formatter: toggleElement,
                cellClick: toggleVisiblity,
            },
            {
                title: "Title",
                field: "title",
                widthGrow: true
            },
        ],
    });

    tableObject.setData(tableData);
}

const generateTableData = () => {
    const info  = {'version': 1};
    const savedDataPropKeys = [];

    Object.assign(tableData, savedDataProp);

    for (const [indx, dataPropObj] of Object.entries(savedDataProp)) {
        savedDataPropKeys.push(dataPropObj.key);
    }

    for (const [key, dataPropList] of Object.entries(defaultDataProp)) {
        if (key.startsWith('c')) continue;

        for (const [dataPropKey, dataPropObj] of Object.entries(dataPropList)) {
            const dataPropCustomKey = `${key}__${dataPropKey}`;

            if (!savedDataPropKeys.includes(dataPropCustomKey)) {
                tableData.push({
                    key: dataPropCustomKey,
                    visibility: (key == `p${info.version}`) ? 1 : 0,
                    title: `${dataPropObj.title} (${dataPropObj.direction})`
                });
            }
        }
    }
}

generateTableData();
updateTabulator();
