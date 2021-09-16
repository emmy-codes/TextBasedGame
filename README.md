# TextBasedGame (Solo project)

This was my first exposure to JavaScript and I instantly went for the option to make a text based game when our Industry Leader offered it.

This game was heavily based off games I played as a child, one was on a floppy disk and I remember the name as The Secret Garden, but googling nowadays I can't seem to find anything to match it. It was also inspired by Realms of Kaos, a MUD I played as a teenager in around 2000-2002.

We had three weeks to complete this project which wasn't much when you had to learn, understand, practice and succeed with brand new concepts, so I received a lot of help with what I needed to use and how to use it. This was a brand new language for me. 

I wanted to create a game that receieved your text input, which turned out to be a large challenge. I hadn't learned about arrays and found the concept confusing, but I focused on the fact that this would enable my text box to look for the exact words I wanted the user to input, and to react differently depending on the word.

The best way I knew at the time to send the user to another page (for example, typing "Go North" in the input box) was by making a new page for it, so each of my "Go" commands needed to link to snother page also.

I started learning about arrays and methods and used them to create my "key words" that the user could input to get a reaction. Not knowing much about anything and knowing I wanted to have different text and different key words active on different pages, I created variables that contained the links to another page, and each page had its own descriptions and words that were allowed to be used (the object with the page numbers contained the arrays that would react to an input command for that particular page).

I discovered event.preventDefault() after I tried inputting something and my page refreshed instead, and inputField.value = '' which removed the writing from the input box after hitting enter. The event listener with property "submit" was very useful, there's nothing worse than not being able to hit enter on a page in my opinion!

This was a very confusing project at the time of doing, but looking back on it I have a much greater understanding of what was being done, as well as an idea on what could be done better. I vow to re-do this project in React and improve on all the things I didn't know how to fix at the time.
