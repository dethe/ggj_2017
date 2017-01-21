# Tempest in a Teapot

Global Game Jam 2017

A sailing game that takes place during a storm (or storms?) in a teapot. Within the teapot are many seas: The Assam Sea, the Pekoe Sea, the Sea of Green, etc. Players must avoid obstacles: Sugarcube Bergs, Dormouse, and dock at the islands (Scone Island, Biscuit Island, Cookie Island, Cream Island) to trade cargo: magic books, fancy dancers.

Goal: Make it to the Spout with the highest value cargo you can manage.
Mechanic: Avoid obstacles at sea, buy and sell in port, placing characters in different slots of your

Question: can you defeat obstacles? How do you avoid them and make that interesting?

If we need names for characters (or players): Prospero, Miranda, Ariel, Caliban, Sycorax, Iris, Ceres, Juno, Alonso, Sebastian, Antonio, Ferdinand, Gonzalo, Adrian, Francisco, Trinculo, Stephano,

Sea of Assam
    Obstacles: Sugar bergs (give sugar bowls), sargasso tea leaves (give fortunes)
    Island: Cookie Island
    Things to buy: London tube passes, hardtack, grog

Sea of Pekoe
    Obstacles: Surf ninjas (give surfboards), samovars, lemon wedges
    Island: Biscuit island
    Things to buy: Antimacassars, sea sickness pills

Green Sea
    Obstacles: Yellow submarines, holes in spacetime
    Island: Cucumber Sandwich Island
    Things to buy: Cozies, Smoking Jackets

Sea of Oolong
    Obstacles: Dormouse (dormice?), Americans
    Island: Sponge Cake Island
    Things to buy: Expired leases, brass rings

Rooibos Sea
    Obstacles: Left-handed smoke shifter, maelstrom (takes you to a teapot within the teapot)
    Island: Cream Island
    Things to buy: Magic books, fancy dancers

Gunpowder Sea
    Obstacles: cannons, driftwood
    Island: Scone Island
    Things to buy: Opium, pepper
    You can get to the Spout from the Gunpowder Sea

Jasmine Sea
    Obstacles: tempest
    Island: None known
    Things to buy: Nothing

In the centre is the tempest, but it drifts around and can pull you in from any of the other seas. It has no island and is its own obstacle.

What you can sell at each island, and for how much is random (based on its base value), but influenced by the character you have
assigned for haggling. Characters are distributed randomly about the islands. You start with a small number of Guinea coins to trade with. Islands have limited supplies of guineas and cannot simply buy all your stuff.

Defeating the obstacles can sometimes give you trade good too.

Escaping out the spout give you points based on the base price of each trade good.

Each Sea is a hexagon 1000 pixels per side. The 0,0 of the world is at the centre of the Jasmine Sea. The
outer seas are truncated by the walls of the teapot, which form a radius of 2000 pixels.

Ship position should be a vector from 0,0.

If mag(pos) < 1000 ship is in Jasmine Sea.
If mag(pos) > 2000 ship has hit the wall of the teapot
If 

All trade items and base prices:

    Sugar bowls (5g)
    Fortunes (2g)
    London tube passes (3g)
    Hardtack (1g)
    Grog (6g)
    Surfboards (give bonus to avoid Tempest or Maelstrom)
