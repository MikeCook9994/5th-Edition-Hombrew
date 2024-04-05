# Revised Skill Points

## Problem

5e fundamentally lacks player choice over the course of level progression. Beyond level 1, most classes and subclasses make few decisions. Only classes that learn spells are regularly making choices impact how their character plays from another character of the same class/subclass. Every 4th level (5, 9, 13, 17) provides an ASI or Ability Score Improvement which offers some choice. The optional rule of feats in place of choosing an ASI drastically expands this potential but is still limited to every 4th level which results in players making a choice about their character maybe once every 3-6 months depending on the pace of the campaign and their current level progression.

## Solution

5e’s proficiency system is a wonderful way to handle combat proficiency as it does not punish the player for investing into a specific type of weapon (e.g., versatile vs. heavy weapons) and then being forced or encouraged to use a weapon not of that type, thus sacrificing or forgoing that investment. However, I feel that the proficiency bonus overly simplifies skill progression and does not enable the player to make more granular decisions that may better aid how the current campaign is being played.

By introducing a small level of complexity via bookkeeping and a table lookup, which is only ever consulted during level up (something commonly automated by technology-based character managers), player choice is enhanced by giving them decisions to make about their character every level regardless of their class/subclass. Additionally, I believe it better reflects skill progression from a roleplay perspective by enabling players to progress skills they are using commonly and thus likely improving in and even provides a framework for training new proficiencies.

### Skill Points

This system is designed to be almost identical in power (e.g., the sum of skill bonuses should be nearly equivalent between the vanilla system and this one). As opposed to simply applying your general proficiency bonus when making a skill check using a skill you are proficient in, you have a distinct bonus for each skill you have chosen to be proficient in. Points are assigned to each skill from a pool of available skill points. The number of skill points available to a character is given by the following formula:

```
rounddown(# of proficiencies * ((character level / 4 ) + 2 ))
```

Or, if you would prefer not to utilize a formula, a table detailing the total number of skill points given level and the number of proficiencies is below, where the columns are the character level, and the rows are the number of skill proficiencies the player has:

|   | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 2 | 2 | 2 | 3 | 3 | 3 | 3 | 4 | 4 | 4 | 4 | 5 | 5 | 5 | 5 | 6 | 6 |
| 2 | 4 | 5 | 5 | 6 | 6 | 7 | 7 | 8 | 8 | 9 | 9 | 10 | 10 | 11 | 11 | 12 | 12 |
| 3 | 6 | 7 | 8 | 9 | 9 | 10 | 11 | 12 | 12 | 13 | 14 | 15 | 15 | 16 | 17 | 18 | 18 |
| 4 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
| 5 | 11 | 12 | 13 | 15 | 16 | 17 | 18 | 20 | 21 | 22 | 23 | 25 | 26 | 27 | 28 | 30 | 31 |
| 6 | 13 | 15 | 16 | 18 | 19 | 21 | 22 | 24 | 25 | 27 | 28 | 30 | 31 | 33 | 34 | 36 | 37 |
| 7 | 15 | 17 | 19 | 21 | 22 | 24 | 26 | 28 | 29 | 31 | 33 | 35 | 36 | 38 | 40 | 42 | 43 |
| 8 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40 | 42 | 44 | 46 | 48 | 50 |
| 9 | 20 | 22 | 24 | 27 | 29 | 31 | 33 | 36 | 38 | 40 | 42 | 45 | 47 | 49 | 51 | 54 | 56 |
| 10 | 22 | 25 | 27 | 30 | 32 | 35 | 37 | 40 | 42 | 45 | 47 | 50 | 52 | 55 | 57 | 60 | 62 |
| 11 | 24 | 27 | 30 | 33 | 35 | 38 | 41 | 44 | 46 | 49 | 52 | 55 | 57 | 60 | 63 | 66 | 68 |
| 12 | 27 | 30 | 33 | 36 | 39 | 42 | 45 | 48 | 51 | 54 | 57 | 60 | 63 | 66 | 69 | 72 | 75 |
| 13 | 29 | 32 | 35 | 39 | 42 | 45 | 48 | 52 | 55 | 58 | 61 | 65 | 68 | 71 | 74 | 78 | 81 |
| 14 | 31 | 35 | 38 | 42 | 45 | 49 | 52 | 56 | 59 | 63 | 66 | 70 | 73 | 77 | 80 | 84 | 87 |
| 15 | 33 | 37 | 41 | 45 | 48 | 52 | 56 | 60 | 63 | 67 | 71 | 75 | 78 | 82 | 86 | 90 | 93 |
| 16 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 68 | 72 | 76 | 80 | 84 | 88 | 92 | 96 | 100 |
| 17 | 38 | 42 | 46 | 51 | 55 | 59 | 63 | 68 | 72 | 76 | 80 | 85 | 89 | 93 | 97 | 102 | 106 |
| 18 | 40 | 45 | 49 | 54 | 58 | 63 | 67 | 72 | 76 | 81 | 85 | 90 | 94 | 99 | 103 | 108 | 112 |

A character’s base proficiencies always provide the number of skill points defined by the function/table. Additional skill points can be awarded just like you could do with the old system if you chose to. Acquiring a new proficiency after level 1 (e.g., by taking the skilled feat), will award skill points retroactively.

### Training

Starting at level 5 and whenever your proficiency bonus increases, a character can choose to start training a skill. A character can be training at most one skill at a time and that skill must be one that was available for them to choose at level 1 or a skill otherwise approved by the DM. Training a skill allows the character to allocate skill points into that skill; however, they are not considered proficient in that skill for the purposes of determining how many skill points they have available to the character.

A character training a skill becomes proficient in that skill when they have assigned skill points equal to their proficiency bonus when they started training the skill. For example, if a character started training a skill at level 5, they become proficient in the skill once they have assigned 3 skill points into it, even if they don’t allocate the third skill point until level 9 when their proficiency bonus has increased to 4.

### Assigning Skill Points

Assigning Skills points is handled by a set of rules. The number of skill points assigned to a skill is known as that skill’s skill bonus. Proficiency bonus refers to your character’s overall proficiency bonus.

1. A character can only assign skill points in skills they are proficient in or are training.
2. A skill a character is proficient in or training must have a minimum of one skill point assigned.
3. Once a skill point is assigned it cannot be reallocated.
4. A character can allocate at most twice their proficiency bonus (given by their level) into a skill.
1. Expertise in a skill (rogues, bards) is handled by adding your proficiency bonus in addition to the skill bonus. A feature that says you add “twice your proficiency bonus” to a skill check follows this same rule of simply adding your proficiency bonus once to the skill bonus.

## Benefits

A ranger may choose proficiency in stealth at level 1 but may then find themselves in a party with otherwise non dexterous characters so stealth, when done as a party, is rarely a viable option. In the existing system, they are locked into this stealth proficiency which they may often find lacking value and feel like they have made an incorrect decision. Skill proficiencies inherently improve over time as a result of the proficiency bonus which means you are continually becoming better at skills you may not often be exercising or even care to see improved. From my perspective this is both a failure of design with regards to roleplay and character choice that this system resolves.

Alternatively, you may have the opposite where a singular character is not proficient in stealth. They can now choose to start training that skill and get some skill points into it to better their enable their party to do what many of them do best.

Additionally, this does not punish players for taking proficiencies in less commonly used skills like nature or animal handling because, they are in no way required to continue to progress the skill beyond what they choose to start with.


## Drawbacks and Design Consideration

### Complexity

This system obviously introduces some added complexity by giving 5e one of its few lookup tables. Though, 5e does generally follow the principal of only providing lookup tables that need to be consulted during level up (spell slots and multiclassing spell slot table). This follows that same rule.

### Power Creep

In order to simplify the formula, I chose to make this skill system award a bit more power than the vanilla skill system. If you were to attempt to match the power of the vanilla system exactly by having, for example, exactly 8 skill points at level 1 with 4 proficiencies or 15 skill points level 5 with 5 proficiencies, you end up with the slightly more complicated formula of: 

```
    rounddown(# of proficiencies * ((character level + 7) / 4))
```

Which is technically no more complex mathematically but the numbers it gives makes the math a bit more difficult by hand and the number 7 really sticks out as “why”.

The chosen formula we use can very easily be explained. In vanilla 5e, each skill proficiency starts with 2 points and you accumulate 1 additional point into each skill every 4 levels. It is a bit of a happy accident that ends being equivalent to you getting a proficiency bonus of 7 at level 20 in the vanilla game.

### Beyond Level 17

I chose to omit it from the table in this document, but there is no reason you cannot continue to award skill points beyond level 17  by just using the formula. The scaling on skill points is linear with a low slope so you should not have to worry too much about characters becoming overpowered by level 20  or beyond. As I said above, the number of skill points available at level 20  would be equivalent in power to the proficiency bonus increasing to 7 at level 20. 

### Tools and Weapon Proficiency

You can apply this same system onto tool and weapon proficiencies if you want to. Tools are effectively the same as skills, but weapons would require you to categorize weapons into groups (versatile weapons, heavy weapons, ranged weapons, etc…). I think this is a bit much, but to each their own. Training can be applied in the same way as well.