# Checkerboard Assessment

yarn install

yarn run dev

# Enjoy!

As mentioned in the comments, decided to go the route of creating 2 Context.Providers, knowing the user inputs would be needed down to the "Piece" level, and wanted to avoid prop drilling. As functionality came into play for the "Board" and movement of "Pieces" I felt the tradeoff was worth the extra time. I also felt, given the requirements of code that is "scalable" this would be an approach that could offer the ability for engineers to easily implement new features, as well as additional components. 

The use of useReducer helps in understanding the code base, given the dispatch type gives some clue to the unsuspecting engineer what is happening within the code to update State.

All in all, this was a great exercise! It makes me realize I will take a little more time this evening to hopefully get it fully working, so that if the opposing piece is in an area the current move could go, it checks to see if it will make the jump.

Thank you again for the opportunity to show you what I got!

Darren Napier