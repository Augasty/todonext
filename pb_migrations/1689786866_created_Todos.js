migrate((db) => {
  const collection = new Collection({
    "id": "9cthcivc5gsf42s",
    "created": "2023-07-19 17:14:26.822Z",
    "updated": "2023-07-19 17:14:26.822Z",
    "name": "Todos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pfsoqtdh",
        "name": "Text",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9cthcivc5gsf42s");

  return dao.deleteCollection(collection);
})
