---
title: "Fabric mod: Simple item"
description: "How to make a simple item with Fabric Minecraft modding toolchain"
date: 2020-06-10
---

Adding an item is super simple with Fabric. First, you need to register your item:

```java
public class MyMod implements ModInitializer {
    @Override
    public void onInitialize() {
        Registry.register(
            // You want to register an item
            Registry.ITEM,
            // Your item ID will be my_mod:my_item
            new Identifier("my_mod", "my_item"),
            // Your item will appear in Miscellaneous tab
            // There're more settings, take a look at those using
            // your IDE autocompletion feature
            new Item(new Item.Settings().group(ItemGroup.MISC))
        );
    }
}
```

Now you may want to give it a texture. To do that, you need to create a JSON model - a file, where you declare which texture to assign to an item and how to position it in hand, world, inside inventories, etc. - and a PNG texture.

```json
// Note: remove all comments, Minecraft doesn't support them
// File: src/main/resources/assets/my_mod/models/item/my_item.json
{
  // You can extend any existing model
  // Minecraft's item/generated is a simple generic item
  "parent": "item/generated",
  "textures": {
    // You can have layers!
    // Each value is a texture identifier
    // Path to texture for this must be following:
    // src/main/resources/assets/my_mod/textures/item/my_item.png
    "layer0": "my_mod:item/my_item"
  }
}
```

That's it! You now should have an item
