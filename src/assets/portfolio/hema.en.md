`
### Hematolysis
#### Survival-horror system addon for Garry's Mod

* 2021 - 2023
* Used technology: LUA

Hematolysis is an addon for Garry's mod which aims to give a *survival-horror* aspect.

My project is divided into three main components: the heads-up display (HUD), an infection system, and an inventory system that allows multiple interactions with each item.

{{gallery:0}}

---

### The HUD and the infection system

{{gallery:1}}

All graphic elements were created by me in Photoshop. I started with the design, then cut each image individually before implementing them in the game. The electrocardiogram is animated using After Effects.

The project also includes a rather simple infection system. When a player is hit by a zombie, their infection percentage increases, and if it reaches 100%, the player transforms into a zombie.

Certain items can temporarily reduce the infection level.

The magazine bullet counter also features a procedural animation that plays each time a bullet is fired.

---

### The inventory system


{{gallery:2}}

This is undoubtedly the most complex part of the project.

Each player can carry only a limited number of weapons, ammo, and items combined. Each item is displayed in a window triggered by a button, and can be equipped, used, combined, or dropped.


The project also includes an item combination system, where two items are consumed to create a new one (see second illustration).

Additionally, players can view the inventories of nearby players. A player can see what another player is carrying if they are visible and within a certain distance (see third illustration).

This part of the project taught me a lot about client-server interaction. For example, to display a player’s inventory contents or possible combinations, I implemented a client function that requests the necessary information from the server.

The same applies to using items, combining items, and, more generally, any action the client cannot perform alone and that requires server intervention to relay actions or information.

This is by far the largest project I have developed, and it has allowed me to learn new methodologies and development principles.
