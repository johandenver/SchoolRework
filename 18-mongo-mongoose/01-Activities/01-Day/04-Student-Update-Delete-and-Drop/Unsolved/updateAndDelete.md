# Updates, Deletes and Drops

## Instructions

* Go back to your classroom database.

```
fill in mongo commands here
```

1. You've decided to take on a new hobby. Add Extreme Basketweaving to your array of hobbies.

db.students.update({"Name": "Luc"}, {$push: {"Hobbies": "Underwater Basket Weaving"}})

```
fill in mongo commands here
```

2. While practicing for your Extreme Basketweaving Competition, you broke the computer of the person next to you. They're using a new Operating System now. Change their os field.


db.students.update({"Name": "Luc"}, {$set: {"OS": "Mac"}})
```
fill in mongo commands here
```

3. Another student in your row saw you break that computer and wisely decided to move. Remove them from your database.

db.students.remove({"Name": "Greg"})
```
fill in mongo commands here
```

4. You are worried everyone else will leave and you'll have to sit all alone. You decide to bribe everyone who didn't leave with candy. Add a field of `gavecandy` with a value of false to everyone in the array so you can keep track.

db.students.update({"rownumber": "three"}, {$set: {"gavecandy": "false"}}, {multi: true})
```
fill in mongo commands here
```

5. All this work made you hungry, so you bought yourself some candy. Change the value of `gavecandy` to `true` in your entry.

db.students.update({"Name": "Jonathan"}, {$set: {"gavecandy": "true"}})
```
fill in mongo commands here
```
