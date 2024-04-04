---
type: spell
classes:
  - cleric
  - paladin
  - druid
level: 3
school: Evocation
status: complete
tags:
---
# `=this.file.name`
*`=join(list(this.level, choice(this.level = 1, "st", choice(this.level = 2, "nd", choice(this.level = 3, "rd", "th")))), "")`-level `=this.school`*

**Casting Time:** 1 reaction, which you take in response to a creature within 30 feet of you that you can see taking damage.
**Range:** 30 feet
**Components:** V, S
**Duration:** Instantaneous

You utter a brief prayer, and the creature that was damaged is instantly swaddled in radiant light. The creature regains hit points equal to 1d8 + your spellcasting ability modifier. Until the end of the creature's next turn, they shed bright light in a 10-foot radius and dim light for an additional 10 feet, and attacks against them have disadvantage. This spell has no effect on undead or constructs. 

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d8 for each spell slot level above 3rd.
