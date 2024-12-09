```javascript
//Incorrect usage of $in operator in MongoDB aggregation pipeline
db.collection.aggregate([
  {
    $match: {
      "tags": {
        $in: ["tag1", "tag2"]
      }
    }
  }
]);
```