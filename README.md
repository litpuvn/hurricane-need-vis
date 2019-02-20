# hurricane-need-vis

**Live demo：** https://litpuvn.github.io/hurricane-need-vis

**Data Description：**
<br>
>map.json: geojson of houston counties and districts from
  [reference](https://github.com/codeforamerica/click_that_hood/blob/master/public/data/houston.geojson) <br>
>userData.json: show userConcern via wordCloud 
```
  {
     "region": regionID,
     "user": userID,
     "user_content": userConcern
  }
``` 
>region_concern.json: show region concern via map and dots
```
   {
     "region": regionID,
     "concern": concern items,
     "context": " lack",
     "count": needs_frequency
   }
```
>need_tweet.json: show user's needs from tweet
```
  {
    "region": regionID,
    "user": userID,
    "user_content": userConcern,
  }
```
>streamData.js: show regionConern via streamgraph (javascript object)
  
  
    
