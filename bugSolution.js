```javascript
//Correct usage of $in operator in MongoDB aggregation pipeline
db.collection.aggregate([
  {
    $match: {
      "tags": {
        $all: ["tag1", "tag2"] // Use $all instead of $in if all tags must be present
      }
    }
  }
]);
//Alternative solution to check for the existence of at least one tag
db.collection.aggregate([
    {
        $match: {
            $expr: {
                $in: [ "tag1", "$tags" ]
            }
        }
    }
]);
```