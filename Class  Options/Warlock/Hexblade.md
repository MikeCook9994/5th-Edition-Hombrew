---
type: subclass
class: warlock
status: wip
tags:
---

# `=this.file.name` Patron

Flavor text

## `=this.file.name` Spells

The magic of your patron ensures you always have certain spells ready; when you reach a Warlock level specified in the `=this.file.name` Spells table, you thereafter always have the listed spells prepared.

### `=this.file.name` Spells
| Warlock Level | Spells                                                           |
| :-----------: | ---------------------------------------------------------------- |
|       3       | Armor of Agathys, Searing Smite, Hex, Arcane Vigor, Magic Weapon |
|       5       | Bestow Curse, Haste                                              |
|       7       | Phantasmal Killer, Staggering Smite                              |
|       9       | Banishing Smite, Destructive Wave                                |
## Hexblade's Curse
*1st-level `=this.file.name` feature*

You can cast Hex without expending a spell slot and without the need for concentration. Casting Hex in this way casts it at the level of your Pact Magic spell slots. Once you use this feature, you can't use it again until you complete a Short or Long rest or you use your Magical Cunning feature.

Any attack roll you make against a creature that you have cursed is a critical hit on a roll of a 19 or 20 on the d20. Additionally, when a creature you have cursed dies, you regain hit points equal to your warlock level + your Charisma modifier (minimum of 1 hit point). The hit points you gain cannot exceed the perished creature's maximum hit points.

## Hex Warrior
*1st-level The Hexblade Feature*

You acquire the training necessary to effectively arm yourself for battle. You gain proficiency with medium armor, shields, and martial weapons.

The influence of your patron also allows you to mystically channel your will through a particular weapon. Whenever you finish a long rest, you can touch one weapon that you are proficient with and that lacks the two-handed property. When you attack with that weapon, you can use your Charisma modifier, instead of Strength or Dexterity, for the attack and damage rolls. This benefit lasts until you finish a long rest. If you later gain the Pact of the Blade feature, this benefit extends to every pact weapon you conjure with that feature, no matter the weapon’s type.



## Accursed Specter
*6th-level `=this.file.name` feature*

You can curse the soul of a person you slay, temporarily binding it to your service. When you slay a humanoid, you can cause its spirit to rise from its corpse as a spectar, the statistics for which are in the Monster Manual. When the specter appears, it gains temporary hit points equal to half your warlock level. Roll initiative for the specter, which has its own turns. It obeys your verbal commands, and it gains a special bonus to its attack rolls equal to your Charisma modifier (minimum of +0).

The specter remains in your service until the end of your next long rest, at which point it vanishes to the afterlife.

Once you bind a specter with this feature, you can't use the feature again until you finish a long rest.

```statblock
# config
layout: 5e 2024
dice: true
render: true

# statblock
crature: Accursed Specter
```

## Armor of Hexes
*10th-level `=this.file.name` feature*

Your curses grow more powerful. If a target you have cursed hits you with an attack roll, you can use your reaction to roll a d6. One a 4 or higher, the attack misses you, regardless of its roll.

## Master of Hexes
*14th-level `=this.file.name` feature*

Creatures have disadvantage on saving throws against your spells that would curse them. Additionally, your attacks against creatures that you have cursed deal an additional 1d6 necrotic damage.
