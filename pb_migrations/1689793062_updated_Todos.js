migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9cthcivc5gsf42s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cdofgotc",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pfsoqtdh",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9cthcivc5gsf42s")

  // remove
  collection.schema.removeField("cdofgotc")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
