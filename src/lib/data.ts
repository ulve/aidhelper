export const battleTraits = [
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz ",
    subfaction: "All",
    name: "Frothing Zealots",
    text: 'If a friendly MOONCLAN unit receives the rally command while it is affected by the Light of the Bad Moon, you can return 1 slain model to the unit that receives the command for each 4+ instead of each 6.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "All",
    name: "Lunar Squigs",
    text: 'While GLOOMSPITE GITZ SQUIG units are affected by the Light of the Bad Moon they can attempt a charge even if they ran in the same turn.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "All",
    name: "Moonlit Hide",
    text: 'Add 1 to save rolls for attacks that target GLOOMSPITE GITZ TROGGOTH units while they are affected by the Light of the Bad Moon.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "All",
    name: "Spiderfang Venom",
    text: 'While SPIDERFANG units are affected by the Light of the Bad Moon, their Spider Venom ability causes mortal wounds on an unmodified roll of 5+ instead of a 6.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "All",
    subfaction: "Da King’s Gitz",
    name: "Lairs of the Loonking’s Ladz",
    text: 'If you command a KING’S GITZ army, you can re-roll the dice roll when using the Bad Moon Loonshrine’s Moonclan Lairs ability.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "All",
    subfaction: "Badsnatchers",
    name: "Harbingers of the Everdank",
    text: 'Each time a casting roll is made for a friendly BADSNATCHERS MOONCLAN WIZARD, if that WIZARD is wholly within 9" of any other friendly BADSNATCHERS MOONCLAN WIZARDS, you can re-roll 1 of the dice in that casting roll.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "All",
    subfaction: "Jaws of Mork",
    name: "Crushing Gobs",
    text: 'Add 1 to the Attacks characteristic of Fang-filled Gobs, Massive Fang-filled Gobs and Huge Fang-filled Gobs used by friendly JAWS OF MORK SQUIG units if they made a charge move in the same turn.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "All",
    subfaction: "Glogg’s Megamob",
    name: "Monstrous Regeneration",
    text: 'Each time a friendly GLOGG’S MEGAMOB TROGGOTH unit fights, after all of its attacks have been resolved, the effect of its Regeneration or Greater Regeneration ability is triggered.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "All",
    subfaction: "Grimscuttle",
    name: "Through the Cracks they Creep",
    text: 'During deployment, if any friendly GRIMSCUTTLE SKITTERSTRAND ARACHNAROKS have been set up in ambush as reserve units using the Ambush From Beyond ability, instead of setting up another friendly GRIMSCUTTLE SPIDERFANG unit, you can place that unit to one side and say that it will join a friendly GRIMSCUTTLE SKITTERSTRAND ARACHNAROK in ambush as a reserve unit. Up to 2 units can join each friendly GRIMSCUTTLE SKITTERSTRAND ARACHNAROK as a reserve unit. When a friendly GRIMSCUTTLE SKITTERSTRAND ARACHNAROK is set up on the battlefield for the first time, set up all units that joined it wholly within 12" of it and more than 9" from all enemy units.'
  },
].sort((a, b) => a.pack.localeCompare(b.pack) || a.subfaction.localeCompare(b.subfaction) || a.name.localeCompare(b.name))

export const commandAbilities = [
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    phase: "Any Hero Phase",
    phaseOrder: 0,
    name: "Rally",
    text: 'You can use this command ability at the start of the hero phase. The unit that receives the command must be more than 3" from all enemy units. Roll 1 dice for each slain model from that unit. For each 6, you can return 1 slain model to that unit. You can only return models to that unit that have a combined Wounds characteristic of 10 or less. For example, if the unit that received the command has a Wounds characteristic of 2, you can return a maximum of 5 models to that unit.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    phase: "Your Movement Phase",
    phaseOrder: 1,
    name: "At the Double",
    text: 'You can use this command ability after you declare that a friendly unit will run. That unit must receive the command. The run roll is not made for that unit. Instead, 6" is added to that unit’s Move characteristic in that phase. The unit is still considered to have run.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    phase: "Enemy Movement Phase",
    phaseOrder: 1,
    name: "Redeploy",
    text: 'You can use this command ability in the enemy movement phase after an enemy unit finishes a normal move, run or retreat. The unit that receives the command must be within 9" of that enemy unit and more than 3" from all enemy units. You can make a D6" move with the unit that receives the command, but it must finish the move more than 3" from all enemy units and cannot shoot later in the turn.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    phase: "Your Charge Phase",
    phaseOrder: 2,
    name: "Forward to Victory",
    text: 'You can use this command ability after you make a charge roll for a friendly unit. That unit must receive the command. You can re-roll the charge roll for that unit.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    phase: "Enemy Charge Phase",
    phaseOrder: 2,
    name: "Unleash Hell",
    text: 'You can use this command ability after an enemy unit finishes a charge move. The unit that receives the command must be within 6" of that enemy unit and more than 3" from all other enemy units. Models in the unit that receives the command that are within 6" of the target unit can shoot in that phase, but when they do so, you must subtract 1 from hit rolls for their attacks and they can only target the unit that made the charge move.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    phase: "Attack Phase",
    phaseOrder: 3,
    name: "Any All-out Attack",
    text: 'You can use this command ability when you pick a friendly unit to shoot in your shooting phase or fight in the combat phase. That unit must receive the command. Add 1 to hit rolls for attacks made by that unit until the end of that phase.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    phase: "Any Attack Phase",
    phaseOrder: 3,
    name: "All-out Defence",
    text: 'You can use this command ability when a friendly unit is picked as the target of an attack in the shooting or combat phase. That unit must receive the command. Add 1 to save rolls for attacks that target that unit until the end of that phase.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    phase: "Any Battleshock Phase",
    phaseOrder: 4,
    name: "Inspiring Presence",
    text: 'You can use this command ability at the start of the battleshock phase. The unit that receives the command does not have to take battleshock tests in that phase.'
  },
].sort((a, b) => a.phaseOrder - b.phaseOrder || a.phase.localeCompare(b.phase) || a.pack.localeCompare(b.pack) || a.subfaction.localeCompare(b.subfaction) || a.name.localeCompare(b.name))

export const monstrousRampages = [
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "All",
    name: "Ensnaring Webbing",
    text: 'Only an ARACHNAROK unit can carry out this monstrous rampage. Pick 1 enemy HERO within 3" of this ARACHNAROK unit that is not a MONSTER and roll a dice. If the score equals or exceeds that HERO’s Wounds characteristic, that hero cannot fight in the following combat phase.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "All",
    name: "Giant Boing!",
    text: 'Only a MANGLER SQUIGS unit that has made a charge move this turn can carry out this monstrous rampage. This MANGLER SQUIGS unit can make a 3D6" move but it must finish that move within 3" of any enemy units.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Roar",
    text: 'Pick 1 enemy unit within 3" of this model and roll a dice. On a 3+, that unit cannot issue or receive commands in the following combat phase.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Stomp",
    text: 'Pick 1 enemy unit within 3" of this model that is not a MONSTER and roll a dice. On a 2+, that unit suffers D3 mortal wounds.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Titanic Duel",
    text: 'Pick 1 enemy MONSTER within 3" of this model. Add 1 to hit rolls for attacks made by this model that target that enemy MONSTER until the end of the following combat phase.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Smash To Rubble",
    text: 'Pick 1 faction terrain feature or defensible terrain feature within 3" of this model and roll a dice. On a 3+, the terrain feature is demolished if it was defensible (see 17.2.3), and the scenery rules on its warscroll cannot be used for the rest of the battle if it was a faction terrain feature.'
  }
].sort((a, b) => a.pack.localeCompare(b.pack) || a.subfaction.localeCompare(b.subfaction) || a.name.localeCompare(b.name))

export const heroicActions = [
  {
    pack: "Glomepite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "All",
    name: "Beckon the Loonatic Hordes",
    text: 'Only a MOONCLAN HERO affected by the Light of the Bad Moon can carry out this heroic action. This HERO can immediately issue the Rally command up to 3 times without any command points being spent. Each unit that receives the command must be a different'
  },
  {
    pack: "Glomepite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "All",
    name: "Wade and Smash",
    text: 'Only a DANKHOLD TROGGBOSS within 3" of any enemy units can carry out this heroic action. This DANKHOLD TROGGBOSS can make a 6" move but must finish the move within 3" of any enemy units. At the end of that move, roll a dice for each enemy unit within 1" of this DANKHOLD TROGGBOSS. On a 2+, that unit suffers D3 mortal wounds.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Heroic Leadership",
    text: 'Pick 1 friendly h ero and roll a dice. Add 2 to the roll if your general has been slain. On a 4+, you receive 1 command point that can only be spent during that turn to allowthat hero to issue a command.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Heroic Willpower",
    text: 'Pick 1 friendly hero that is not a Wizard. If it is the enemy hero phase, that hero can attempt to unbind 1 spellin that phase as if they were a Wizard. If it is your hero phase, that hero can attempt to dispel 1 endless spell in that phase as if they were a Wizard (you can still only attempt to unbind or dispel the same spell or endless spell once in the same phase).'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Heroic Recovery",
    text: 'Pick 1 friendly hero that is more than 3” from all enemy units and make a heroic recovery roll by rolling 2D6. If the roll is less than or equal to that hero’s Bravery characteristic, you can heal up to D3 wounds allocated to that hero.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Thier Finest Hour",
    text: 'Pick 1 friendly h ero. Add 1 to wound rolls for attacks made by that hero until the end of that turn, and add 1 to save rolls for attacks that target that h ero until the end of that turn. You cannot carry out this heroic action with the same hero more than once in the same battle'
  }
].sort((a, b) => a.pack.localeCompare(b.pack) || a.subfaction.localeCompare(b.subfaction) || a.name.localeCompare(b.name))

export const commandTraits = [
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Battle-lust",
    text: 'You can re-roll run rolls and charge rolls for this general.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "High Priest",
    text: 'You can re-roll chanting rolls for this general.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Skilled Leader",
    text: 'If this general is on the battlefield at the start of your hero phase, roll a dice. On a 5+, you receive 1 extra command point.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Heroic Stature",
    text: 'Add 1 to this general’s Wounds characteristic.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Master of Magic",
    text: 'Once per hero phase, you can re-roll 1 casting roll, dispelling roll or unbinding roll for this general.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Blessings of the Bad Moon",
    name: "The Clammy Hand",
    text: 'If this general is within 12" of a Bad Moon Loonshrine in your army at the end of your turn, you can use the Bad Moon Loonshrine’s Moonclan Lair scenery rule 2 times at the end of that turn.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Blessings of the Bad Moon",
    name: "Loon-touched",
    text: 'WIZARD only. This general can cast 1 additional spell in each of your hero phases while they are affected by the Light of the Bad Moon.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Blessings of the Bad Moon",
    name: "Fight Another Day",
    text: 'LOONBOSS only. Each time this general fights, after all of their attacks have been resolved, they can make a 2D6" move. If they do so, they must finish the move more than 3" from all enemy units.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Blessings of the Bad Moon",
    name: "Supa-nasty Venom",
    text: 'SPIDERFANG HERO with mount only. Double the number of mortal wounds that are inflicted by this general’s Spider Venom ability.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Blessings of the Bad Moon",
    name: "Squig Whisperer",
    text: 'SQUIG HERO with mount only. Add 1 to hit rolls and wound rolls for attacks made by this general’s mount.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Fortuitous Troggboss Traits",
    name: "Alpha Trogg",
    text: 'Add 2 to this general’s Wounds characteristic. In addition, this general gains the MONSTER keyword.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Fortuitous Troggboss Traits",
    name: "Trogg Smash",
    text: 'Once per battle, when this general fights, after all of their attacks have been resolved, you can say they will perform a Trogg Smash. If you do so, roll a dice for each enemy unit within 3" of this general. On a 2+, that unit suffers D3 mortal wounds.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Fortuitous Troggboss Traits",
    name: "Loonskin",
    text: 'If your general has this command trait, you can include 1 of the following endless spells in your army without spending any points to do so: Mork’s Mighty Mushroom, Scuttletide or Malevolent Moon. In addition, in your hero phase, this general can attempt to cast the spell that summons that endless spell in the same manner as a WIZARD.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "All",
    name: "Shock and Awe",
    text: 'If your army is a Scions of the Storm army and this general is on the battlefield at the end of your movement phase, subtract 1 from hit rolls for attacks that target friendly SCIONS OF THE STORM units that were set up in that phase until the end of that turn.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "All",
    name: "Staunch Defender",
    text: 'You can re-roll the dice that determines the number of mortal wounds caused to an enemy unit by a friendly STORMKEEP REDEEMER unit using the Shield of Civilisation battle trait if that friendly unit is wholly within 12" of this general.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "All",
    name: "Envoy of the Heavens",
    text: 'If a friendly STORMCAST ETERNALS model is slain wholly within 12" of this general, you can add 1 to save rolls for attacks that target the slain model’s unit until the end of that phase. The same unit cannot benefit from this ability more than once per turn.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "All",
    name: "Master of the Celestial Menagerie",
    text: 'If this general has the Behemoth battlefield role and is on the battlefield, subtract 1 from wound rolls for attacks made with melee weapons that target friendly STORMCAST ETERNALS units that have the Behemoth battlefield role.'
  },
].sort((a, b) => a.pack.localeCompare(b.pack) || a.subfaction.localeCompare(b.subfaction) || a.name.localeCompare(b.name))

export const artifactsOfPower = [
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "Storm-forged Weapons",
    name: "Blade of Heroes",
    text: 'Pick 1 of the bearer’s melee weapons. You can re-roll hit rolls for attacks made with that weapon that target a HERO or MONSTER.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "Storm-forged Weapons",
    name: "Hammer of Might",
    text: 'Pick 1 of the bearer’s melee weapons. If the unmodified wound roll for an attack made with that weapon is 6, double the Damage characteristic of that weapon for that attack.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "Storm-forged Weapons",
    name: "Fang of Dracothion",
    text: 'Pick 1 of the bearer’s melee weapons. If any wounds caused by attacks made with that weapon are allocated to an enemy model, that enemy model suffers 1 mortal wound at the end of each turn.'
  },

  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "Heaven-wrought Armour",
    name: "Drakescale Armour",
    text: 'You can re-roll save rolls for attacks made with weapons that have a Damage characteristic of 2 or more that target the bearer.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "Heaven-wrought Armour",
    name: "Mirrorshield",
    text: 'The bearer cannot be picked as the target of a shooting attack unless the attacking unit is within 9" of the bearer.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "Heaven-wrought Armour",
    name: "Amulet of Silvered Sigmarite",
    text: 'Your opponent cannot re-roll hit rolls for attacks made with melee weapons that target the bearer.'
  },

  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "Artefacts of the Tempest",
    name: "Quicksilver Draught",
    text: 'Once per battle, at the end of the charge phase, you can say that the bearer will drink their quicksilver draught. If you do so, the bearer fights at the start of the following combat phase, but the bearer cannot fight again in that phase unless an ability or spell allows them to fight more than once.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "Artefacts of the Tempest",
    name: "Luckstone",
    text: 'Once per battle, before you make a hit or wound roll for an attack made by the bearer, a save roll for an attack that targets the bearer, or a run or charge roll for the bearer, you can say that the bearer will draw upon the power of the luckstone. If you do so, instead of making the roll, you must choose the result of the roll. The result chosen for a D6 roll must be a whole number from 1 to 6, and the result chosen for a 2D6 roll must be a whole number from 2 to 12. The result cannot be re-rolled, but any modifiers are applied to it as normal.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "Artefacts of the Tempest",
    name: "Obsidian Amulet",
    text: 'Once per battle, at the start of the hero phase, you can say the bearer will raise their obsidian amulet. If you do so, ignore the effects of spells or the abilities of endless spells on the bearer until your next hero phase.'
  },

  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Amulet of Destiny",
    text: 'The bearer has a ward of 6+.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Vial of Manticore Venom",
    text: 'Pick 1 of the bearer’s melee weapons. Add 1 to wound rolls for attacks made with that weapon.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Arcane Tome",
    text: 'HERO that does not have the WIZARD, PRIEST or KHORNE keyword. The bearer becomes a WIZARD that can only cast Arcane Bolt, Mystic Shield and spells to summon endless spells on your army roster. They can attempt to cast 1 spell in your hero phase and attempt to unbind 1 spell in the enemy hero phase.'
  },
  {
    pack: "Core Book",
    faction: "All",
    subfaction: "All",
    name: "Seed of Rebirth",
    text: 'You can re-roll heroic recovery rolls for the bearer.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Troglodytic Treasures",
    name: "Leering Gitshield",
    text: 'Unmodified hit rolls of 1 for attacks that target the bearer cause 1 mortal wound to the attacking unit after all of that unit’s attacks have been resolved. In addition, if the bearer is slain by an attack made by an enemy unit, subtract 1 from hit rolls for attacks made by that unit until the end of the battle.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Troglodytic Treasures",
    name: "Backstabber’s Blade",
    text: 'Once per battle, at the end of the combat phase, you can say the bearer will use the Backstabber’s Blade. If you do so, pick 1 enemy unit within 1" of the bearer and roll a dice. On a 2+, that unit suffers D6 mortal wounds that cannot be negated.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Troglodytic Treasures",
    name: "The Clammy Cowl",
    text: 'Subtract 1 from hit rolls for attacks that target the bearer.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Troglodytic Treasures",
    name: "Loonstone Teefcaps",
    text: 'SQUIG HERO with mount or companion only. Improve the Rend characteristic of the bearer’s Fang-filled Gob, Massive Fang-filled Gob or Huge Fang-filled Gobs by 1.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Troglodytic Treasures",
    name: "Moonface Mommet",
    text: 'WIZARD only. At the start of the combat phase, pick 1 enemy unit within 12" of the bearer. Subtract 1 from save rolls for attacks that target that unit until the end of the phase.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Troglodytic Treasures",
    name: "Staff of Sneaky Stealin’",
    text: 'WIZARD only. Add 1 to casting rolls for the bearer. Each time the bearer unbinds a spell, add 1 to casting rolls for the bearer for the rest of the battle.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Venomous Valuables",
    name: "Headdress of Many Eyes",
    text: 'SCUTTLEBOSS only. Only unmodified hit rolls of 5 or 6 successfully score a hit for attacks that target the bearer.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Venomous Valuables",
    name: "Nibbla’s ’Itty Ring",
    text: 'WIZARD only. Once per battle, at the start of your hero phase, you can say the bearer will call upon the ring’s power. If you do so, roll a dice and add the result to casting rolls made by the bearer until the end of the phase.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Venomous Valuables",
    name: "Totem of the Spider God",
    text: 'While other friendly SPIDERFANG units are wholly within 12" of the bearer, add 1 to the number of mortal wounds caused by the Spider Venom ability of those units if the unmodified hit roll was 6.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Glinty Gubbinz that Troggoths Found",
    name: "Glowy Howzit",
    text: 'The bearer has a ward of 4+. At the end of each phase, if the bearer was allocated any wounds in that phase that were not negated, roll a dice. On a 1, the bearer eats the Glowy Howzit and it cannot be used again for the rest of the battle.'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Glinty Gubbinz that Troggoths Found",
    name: "Speaky-skull Fetish",
    text: 'At the start of your hero phase roll 3 dice. For each 6, you receive 1 extra command point. In addition, the bearer can issue the same command up to 2 times in the same phase (a command point is spent each time a command is issued by the bearer as normal).'
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "Glinty Gubbinz that Troggoths Found",
    name: "Pet Gribbly",
    text: 'Add 1 to the bearer’s Wounds characteristic. In addition, each time a wound is allocated to the bearer and not negated, roll a dice. On a 1, the Pet Gribbly is squished. When the Pet Gribbly is squished, the bearer becomes enraged for the rest of the battle. Add 1 to hit rolls and wound rolls for attacks made by the bearer while they are enraged.'
  }
].sort((a, b) => a.pack.localeCompare(b.pack) || a.subfaction.localeCompare(b.subfaction) || a.name.localeCompare(b.name))

export const grandStrategies = [
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    name: "Draconith Defiance",
    text: 'When the battle ends, you complete this grand strategy if the only HEROES on the battlefield are friendly DRACONITH, STARDRAKE or DRACOTH units.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    name: "Pillars of Victory",
    text: 'When the battle ends, you complete this grand strategy if the only Battleline units on the battlefield are friendly REDEEMER units.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    name: "Sacred Charge",
    text: 'When the battle ends, you complete this grand strategy if there are 2 or more friendly CITIES OF SIGMAR units on the battlefield.'
  },

  {
    pack: "Contest of Generals",
    faction: "All",
    name: "Vendetta",
    text: "When the battle ends, you complete this grand strategy if the model chosen to be your opponent’s general has been slain and the model chosen to be your general has not been slain."
  },
  {
    pack: "Contest of Generals",
    faction: "All",
    name: "Hold the Line",
    text: "When the battle ends, you complete this grand strategy if there are any Battleline units from your starting army on the battlefield."
  },
  {
    pack: "Contest of Generals",
    faction: "All",
    name: "Sever the Head",
    text: 'When the battle ends, you complete this grand strategy if there are no HEROES from your opponent’s starting army on the battlefield.'
  },

  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    name: "A Scheme for Every Occasion",
    text: "When the battle ends, you complete this grand strategy if you completed at least 4 battle tactics and all of the battle tactics you completed were from the ‘Nasty Tricks’ list."
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    name: "Chasing the Moon",
    text: "When the battle ends, you complete this grand strategy if the model picked to be your general has not been slain and they have been affected by the Light of the Bad Moon in at least 3 battle rounds."
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    name: "Protect da Shrine!",
    text: "When the battle ends, you complete this grand strategy there is a Bad Moon Loonshrine from your army on the battlefield, there are no enemy models within 12\" of it and it was not affected by a successful Smash To Rubble monstrous rampage."
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    name: "Superior Spell-flinger",
    text: "When the battle ends, you complete this grand strategy if there are 2 or more friendly Gloomspite Gitz endless spells on the battlefield.",
  },
].sort((a, b) => a.pack.localeCompare(b.pack) || a.name.localeCompare(b.name))

export const battleTactics = [
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "All",
    name: "Pioneers of the Realms",
    text: 'You complete this tactic if all of the objectives wholly within your opponent’s territory are contested by friendly CITIES OF SIGMAR units at the end of this turn.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "All",
    name: "No Challenge Too Great",
    text: 'You complete this tactic if an enemy HERO is slain by wounds caused by an attack made with a melee weapon by a friendly REDEEMER unit during this turn.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "All",
    name: "Hammerstrike Assault",
    text: 'Pick 1 HERO in your opponent’s starting army that is on the battlefield, that has a Wounds characteristic of 10 or more and that has 0 wounds allocated to it. You complete this tactic if that HERO is slain during this turn.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "All",
    name: "Lightning-shattered Morale",
    text: 'Pick 1 unit in your opponent’s starting army that is on the battlefield and that has a Bravery characteristic of 10 or more. You complete this tactic if any models in that unit flee during this turn.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "All",
    name: "Draconith Destruction",
    text: 'Pick 1 unit in your opponent’s starting army that is on the battlefield and that has 10 or more models. You complete this tactic if that unit is destroyed by wounds caused by attacks made by friendly DRACONITH, STARDRAKE or DRACOTH units during this turn.'
  },
  {
    pack: "Stormcast Eternals",
    faction: "Stormcast Eternals",
    subfaction: "All",
    name: "A Matter of Honour",
    text: 'Pick 1 MONSTER in your opponent’s starting army that is on the battlefield. You complete this tactic if that unit is destroyed by wounds caused by attacks made by friendly DRACONITH or STARDRAKE units during this turn.'
  },
  {
    pack: "Contest of Generals",
    faction: "All",
    subfaction: "All",
    name: "Break their Spirit",
    text: "Pick 1 enemy unit wholly within your opponent’s territory. You complete this tactic if that unit is destroyed during this turn."
  },
  {
    pack: "Contest of Generals",
    faction: "All",
    subfaction: "All",
    name: "Broken Ranks",
    text: "Pick 1 unit from your opponent’s starting army that is on the battlefield. You complete this tactic if that unit is destroyed during this turn."
  },
  {
    pack: "Contest of Generals",
    faction: "All",
    subfaction: "All",
    name: "Conquer",
    text: "Pick 1 objective marker on the battlefield that your opponent controls. You complete this tactic if you control that objective marker at the end of this turn."
  },
  {
    pack: "Contest of Generals",
    faction: "All",
    subfaction: "All",
    name: "Repel",
    text: "Pick 1 enemy unit wholly or partially within your territory. You complete this tactic if that unit is destroyed during this turn."
  },
  {
    pack: "Contest of Generals",
    faction: "All",
    subfaction: "All",
    name: "Seize the Centre",
    text: "You complete this tactic if there are more friendly than enemy models within 6\" of the centre of the battlefield at the end of this turn."
  },
  {
    pack: "Contest of Generals",
    faction: "All",
    subfaction: "All",
    name: "Slay the Warlord",
    text: "You complete this tactic if the model chosen to be your opponent’s general is slain during this turn"
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "All",
    name: "Follow da Moon",
    text: "You cannot pick this tactic in the first battle round. You complete this tactic if at the end of this turn every friendly GLOOMSPITE GITZ unit on the battlefield is affected by the Light of the Bad Moon and you control more objectives than your opponent."
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "All",
    name: "Glory Grabbers",
    text: "Pick 1 objective controlled by your opponent. You complete this tactic if at the end of this turn you control that objective and a friendly GLOOMSPITE GITZ unit that was added to your army as a replacement unit using the Bad Moon Loonshrine."
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "All",
    name: "Venomous Assault",
    text: "You complete this tactic if at least 8 mortal wounds were caused by the Spider Venom ability of friendly SPIDERFANG units during this turn and not negated."
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "All",
    name: "Stab ’Em in the Dark",
    text: "Pick 1 enemy unit on the battlefield. You complete this tactic if that unit was destroyed by an attack made by a friendly GLOOMSPITE GITZ unit during this turn while it was not affected by the Light of the Bad Moon."
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "All",
    name: "Moonlight Raid",
    text: "Pick 1 objective controlled by your opponent. You complete this tactic if at the end of this turn you control that objective and every friendly GLOOMSPITE GITZ unit that is contesting it is affected by the Light of the Bad Moon."
  },
  {
    pack: "Gloomspite Gitz",
    faction: "Gloomspite Gitz",
    subfaction: "All",
    name: "You Ain’t So Big",
    text: "Pick 1 enemy MONSTER on the battlefield. You complete this tactic if that MONSTER was slain by an attack made by a friendly GLOOMSPITE GITZ TROGGOTH unit during this turn."
  }
].sort((a, b) => a.pack.localeCompare(b.pack) || a.subfaction.localeCompare(b.subfaction) || a.name.localeCompare(b.name))