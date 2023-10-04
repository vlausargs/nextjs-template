/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jt8paa8emyeooxr")

  collection.name = "items_locations"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jt8paa8emyeooxr")

  collection.name = "item_stocks"

  return dao.saveCollection(collection)
})
