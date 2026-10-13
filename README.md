# ST*AI*LISTIC
Group project for CS 321 - Software Engineering


## MEMBERS 
### Declan Buckley  
    - dbuckle6@gmu.edu : declanbuckley6218@gmail.com
    - https://github.com/declanbuckley6218 
### Rahul Sharma    
    - rsharm21@gmu.edu 
    - https://github.com/rahul-sharma-cs
### Spandan Khadka  
    - skhadka8@gmu.edu 
    - https://github.com/Spandankh

 
Team Leader: Declan Buckley 
Reason: Declan took initiative to create the group and get the project rolling by creating word documents and ensuring all team members were in contact. 

Team meeting time each week:  Sundays, 3:00pm, Fenwick 
Backup/Alternate: As decided or Friday, 1:30, Fenwick 

Project Idea: Outfit Picker 

## ST*AI*LISTIC

# Tech Stack
- Bun
- Next.js
- Tailwind CSS
- OpenRouter API
- Fast API
- Oracle 26ai w/ORDS


# Description: 

It is an app that chooses what to wear from the clothes a user already owns. The user saves their wardrobe under different categories and picks an occasion or a specific item that they want to wear. AI suggests complete outfits based on the selection or to fit the weather.  

The outfit picker handles the selection with four features:  
 - Wardrobe by category: User adds each clothing item under tops, bottoms, shoes, jackets, accessories 
 - AI outfit suggestions: User sets the kind of occasions they usually do, like class, work, gym. Based on the occasion and the weather, AI chooses the outfit for   them. 
 - Favorites and history: Users can save outfits that they like. 
The app will also explain the reasoning for certain decisions and guide the user in picking things for themselves.  

 

# Sketches: 

# System: 

# Relation to product: 
The system sketch shows how the outfit picker is built to deliver the features in our description. The user interacts with a mobile or web app, which connects to our Fast API backend.  Inside the backend, each part matches one of our features, the wardrobe stores clothing by category, the favorites store the user saved outfits, and the AI outfit engine creates an outfit suggestion based on occasion or the items selected by the user. The WardrobeDB stores information about the user’s clothes and saved outfit, while the AI engine uses the DB and the OpenRouter API to generate the outfit.  

 

# Value: 
This would help users save time when getting dressed, have a good fashion sense, and not forget stuff which has been sitting in the wardrobe. The system will aid them in discovering what outfits work well for them and inform them on how to make such decisions themselves, boosting their confidence and fashion sense.  

- Faster decisions 
- More use of what they own 
- Easy to style and learn fashion sense 
- Less repetition



