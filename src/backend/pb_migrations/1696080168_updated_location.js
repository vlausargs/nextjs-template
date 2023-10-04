/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("68hqssjpc72mkny")

  collection.name = "locations"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("68hqssjpc72mkny")

  collection.name = "location"

  return dao.saveCollection(collection)
})
