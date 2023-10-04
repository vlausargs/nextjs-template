/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rbsknvj42oipbkb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nojxdiwg",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "OPEN",
        "HOLD",
        "EXPIRED"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rbsknvj42oipbkb")

  // remove
  collection.schema.removeField("nojxdiwg")

  return dao.saveCollection(collection)
})
