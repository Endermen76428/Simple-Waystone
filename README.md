# Simple Waystone

# Craft
## <Waystone>

To create a Waystone you first need to create a Warpstone. And With it and any material you can create your Waystone:

![Warpstone](doc/1.0%20-%20Recipe%20Warpstone.png)
![Waystone](doc/1.1%20-%20Recipe%20Waystone%20Default.png)

## <Warpstone Pedestal>

To create the Warpstone Pedestal you need 3 Obsidian, 3 Polished Andesite and 1 Warpstone.
With this block you can teleport like a normal Waystone;

![Warpstone Pedestal](doc/1.2%20-%20Recipe%20Warpstone%20Pedestal.png)

## <Teleporter Pad>

To create the Teleporter Pad you need a Broken Teleporter Shard and a normal Teleporter Shard.
With this when you step on this block you can teleport to destination registered at the Teleport Shard.

![Broken Teleport Shard](doc/1.3.0%20-%20Recipe%20Broken%20Teleport%20Shard.png)
![Teleport Shard](doc/1.3.1%20-%20Recipe%20Teleport%20Shard.png)
![Teleprot Pad](doc/1.3.2%20-%20Recipe%20Teleporter%20Pad.png)

# Coloring Waystones:

Using a dye in a activated waystone, it will paint the waystone text, there are 16 colors.

![Waystone Color](doc/2.0%20-%20Waystone%20Colors.gif)

# Register Waystone:

When you place the Waystone on the ground, a screen will appear where you can name your waystone and define whether it will be public. (Public waystones can be used by other players even if you have not claimed them)

![Waystone Register](doc/4.0%20-%20Waystone%20Register.png)

# Claim Waystone:
To claim a waystone you just need to interact with one, it will play a sound if it is successfully claimed. Be careful where you place your waystone in your secret base :)

![Waystone Acquired](doc/4.1%20-%20Waystone%20Acquired.png)

# Teleport Between Waystones:

After creating your waystone, click on it again to access a screen with all your private and public waystones.

- Each dimension will have a color;
- If a Waystone is more than 700 blocks away, you will need XP to teleport it. (1 level every 700 blocks)
- Between dimensions it always costs 3 levels;
- Waystone play a sound when teleport;
- Favorite Waystones always will appear on the top of the list.

![Waystone List](doc/5.0%20-%20Waystone%20List.png)

# Warpstone Pedestal:

It works the same way as any other waystone, but you can't create a point where you place the pedestal you only can teleport to other waystones already created.
Perfect to place at your secret room, where you can leave but no enter.

![Warpstone Pedestal](doc/1.2%20-%20Warpstone%20Pedestal.png)

# Teleport Items:

Have 3 Items to teleport without a waystone:

- Warpstone: You use it to create a waystone but also has a function, it makes it easier to not need to interact with a waystone to teleport. (60s cooldown after use)

![Warpstone](doc/1.0%20-%20Recipe%20Warpstone.png)

- Golden Feather: Similar to Warpstone but consumed on used.

![Golden Feather](doc/1.4%20-%20Recipe%20Golden%20Feather.png)

- Return Scroll: Similar to Warpstone but consumes durability on used.

![Return Scroll](doc/1.5%20-%20Recipe%20Return%20Scroll.png)

Each teleport item play a diferent sound when teleport.

# Teleporter Pad:

The Teleporter Pad is similar to a waystone, but here you only need to step on this block and you will be teleported to destination registered in the Teleport Shard;

After you create one Pad you can place it on the ground and it automatically registered the position of that Pad on the Teleport Shard.
The pad will become empty, and when you place another registered Teleport Shard on that empty pad, it will be linked to the Shard.

![Register Teleport Pad](doc/6.0%20-%20Register%20Teleporter%20Pad.gif)
![Use Teleport Pad](doc/6.1%20-%20Use%20Teleporter%20Pad.gif)

It also works with Items and Entities:

![Item Use Teleport Pad](doc/6.2%20-%20Item%20Use%20Teleporter%20Pad.gif)
![Entity Use Teleport Pad](doc/6.3%20-%20Entity%20Use%20Teleporter%20Pad.gif)

# Waystone Settings:

By clicking on the Waystone while hold the shift you access the Settings Screen:

There are some buttons:

- **"Waystone Info"**: Informations about this Waystone that you are using;
- **"Player Settings"**: Where you can change your informations;
- **"Remove Waystone"**: To remove some Corrupted Waystone or any other that you created before;
- **"Favorite Waystones"**: Select some Waystone to be displayed at the top of the Waystones List;
- **"Administrator"**: Change essentials functions of the Addon (Need "admin" tag).

![General Settings](doc/7.0%20-%20Waystone%20General%20Settings.png)

## Waystone Info:
Here you can know some informations about this waystone, like:
The current discount level for teleports from this waystone (Click to remove upgrade);
Which direction who teleport to this waystone will appear.

![Waystone info](doc/7.0.0%20-%20Waystone%20Info.gif)

Discount level is represented by Ore Blocks, to set a upgrade discount you only need to hold the ore block in your hand and interact with your waystone:

- **None:** Has 0% of Xp Discount;
- **Iron Block:** Has 30% of Xp Discount;
- **Diamond Block:** Has 50% of Xp Discount;
- **Netherite Block:** Has 100% of Xp Discount;

![Waystone Discount](doc/7.0.1%20-%20Waystone%20Discount.gif)


## Player Settings:

Here we have some configuration like:

- **"A-z / Z-a":** Alphabetical order of the Waystones list;
- **"Order of Dimension":** Which dimension will appear first in the list;
- **"Show Dimension":** Which dimension will appear exclusively in the list.

![Player Settings](doc/7.1%20-%20Player%20Settings.png)

## Remove Waystone:

Now you can remove yours created Waystones, only select which Waystone you would to delete and confirm.

![Remove Waystone](doc/7.2%20-%20Remove%20Waystone.png)

## Favorite Waystones:
Select which section you want to set or remove your favorite waystones;
Favorite Waystones always will appear at the top of the list;

![Favorite Waystone Painel](doc/7.3.0%20-%20Favorite%20Waystone%20Painel.png)

The toggle is enabled that waystone is marked as favorite otherwise it will be considered a normal waystone.

![Favorite Waystone Select](doc/7.3.1%20-%20Favorite%20Waystone%20Select.png)

## Admin Panel
To acess the Admin Panel you will need the tag "admin", so run the command "/tag @s add admin";
Here you can configure:
- **Maximum Xp Cost:** The maximum XP cost a teleporter can have;
- **Increase Xp Distance:** The XP will be based on the selected distance;
- **Cost Between Dimension:** Cost of XP per teleporter between dimensions;
- **Can Teleport Waystone:** If teleportation via waystone is allowed (if not, only teleportation items work);
- **Can Teleport Dimension:** If it's possible to teleport between dimensions;
- **Waystone Cooldown:** Set a cooldown in seconds to use Waystones;
- **Warpstone Cooldown:** Set a cooldown in seconds to use Warpstone;
- **Disable Dicount Upgrade:** Disblade the Xp Discount Upgrade.

![Admin Panel](doc/7.4%20-%20Admin%20Panel.png)

# Convert Waystone into Warpstone:
To convert use a brush on any Waystone to transform it into a Warpstone.

![Convert Waystone](doc/3.0%20-%20Waystone%20Convert.gif)

# Waystone Placer:
Run the command **"/tag @s add waystone_placer"**, after this use a netherite sword to select which waystone category you want to place.

![Waystone Placer](doc/3.0%20-%20Waystone%20Placer.gif)

- Structures:

Structures with a waystone can now appear in the overworld.

![Default Waystone](doc/9.0%20-%20Structure%20Default.png)
![Desert Waystone](doc/9.1%20-%20Structure%20Desert.png)
![Taiga Waystone](doc/9.2%20-%20Structure%20Taiga.png)
![Ocean Waystone](doc/9.3%20-%20Structure%20Ocean.png)
![Nether Waystone](doc/9.4%20-%20Structure%20Nether.png)
![Basalt Deltas Waystone](doc/9.5%20-%20Structure%20Basalt%20Deltas.png)

**- Other Infos:**
This addon don't disable Achievements;
This addon don't use player.json;
This addon is compatible with other addons.