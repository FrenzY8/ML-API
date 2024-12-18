# Simple MLBB APi
APi simple untuk informasi Mobile Legends, di ambil dari Liquipedia 😃.

# Information Collected
- Hero ⚔️
  - Stats
  - Price
  - Winrate in Proscene
  - Lore
  - etc.
- Items 🧑‍🔧
  - Price
  - Passive
  - Tips
  - etc.
- Pro Player 👨‍🏫
  - Name
  - Real Name
  - Team
  - Sallary
  - Expert Hero
  - etc.
- Patches
  - Version
  - Release Date
  - Change Logs

# Route
> **Main Route**:
- **Landing**
- https://ml-api-en.vercel.app/api/
- **Hero**
- https://ml-api-en.vercel.app/api/mlbb?hero=
- **Items**
- https://ml-api-en.vercel.app/api/mlbb-items?name=
- **Pro**
- https://ml-api-en.vercel.app/api/mlbb-pro?name=
- **Patches**
- https://ml-api-omega.vercel.app/api/mlbb-patch

# Setup Your APi
- **Resources**
  - axios
  - cheerio
- **Install**
- ```npm install```
- **Run it with:**
  - ```npm start```
  - ```node src/index.js```
- **Or deploy it on Vercel!**
> [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/FrenzY8/ML-API)

# **Pro Player**
- ```/api/mlbb-pro?name=PRO_NAME```
- Query: ```name```
- **Test it now**: [Here](https://ml-api-en.vercel.app/api/mlbb-pro?name=Kairi)
```json
{
  "Name": "Gilang",
  "Nationality": "Indonesia",
  "Born": "July 22, 2002 (age 22)",
  "Status": "Active",
  "Role": "Mid Laner",
  "Team": "Fnatic ONIC",
  "Expert Hero": [
    "Pharsa",
    "Valentina",
    "Lylia",
    "Kadita",
    "Novaria"
  ],
  "Social Media": {
    "Instagram": "https://www.instagram.com/p/DClEXinzGGQ/?img_index=4&igsh=MTNsa3F2M3hrZW9paw==",
    "TikTok": "https://tiktok.com/@gilang_sanz",
    "YouTube": "https://www.youtube.com/channel/UCVHRjymdEIozj5LwncO2sSw"
  },
  "Trophies": [
    "MPL ID S8 Champion",
    "MPL ID S8 Champion",
    "MPL ID S10 Champion",
    "MPL ID S10 Champion",
    "MPL ID S11 Champion",
    "MPL ID S11 Champion",
    "MSC 2023",
    "MSC 2023",
    "MPL ID S12 Champion",
    "MPL ID S12 Champion",
    "MPL ID S13 Champion",
    "MPL ID S13 Champion",
    "MPL Indonesia Season 13",
    "Games of the Future 2024",
    "M5 World Championship",
    "MPL Indonesia Season 12",
    "Snapdragon Pro Series Season 3 SEA - Challenge Finals",
    "MLBB Southeast Asia Cup 2023",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 10",
    "ONE Esports MPL Invitational 2021",
    "MPL Indonesia Season 8",
    "MPL Indonesia Season 14",
    "MPL Indonesia Season 14",
    "MPL Indonesia Season 14",
    "MPL Indonesia Season 13",
    "MPL Indonesia Season 13",
    "H3RO Esports 5.0",
    "MPL Indonesia Season 13",
    "MPL Indonesia Season 13",
    "MPL Indonesia Season 13",
    "MPL Indonesia Season 13",
    "M5 World Championship",
    "MPL Indonesia Season 12",
    "MPL Indonesia Season 12",
    "MPL Indonesia Season 12",
    "MPL Indonesia Season 12",
    "MLBB Southeast Asia Cup 2023",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "MPL Indonesia Season 11",
    "ONE Esports MPL Invitational 2021",
    "MPL Indonesia Season 8",
    "MPL Indonesia Season 7",
    "MPL Indonesia Season 7",
    "MPL Indonesia Season 6",
    "MPL Indonesia Season 6",
    "MPL Indonesia Season 6",
    "MDL Indonesia Season 1"
  ],
  "Trivia": [
    "The only player to win both MPL Indonesia and MDL Indonesia as the main roster.",
    "Became the first player to have won MPL Indonesia four-peat (S10-S13). He achieved this together with his teammates Kairi, CW, and Kiboy on ONIC."
  ],
  "Statistics": [
    "Has 100% win rate with Fanny at MPL Indonesia Season 9. ( 6 win, 0 loss )",
    "Had the most appearance on Team of the week in MPL Indonesia Season 11 (4)",
    "Had the highest average damage per minute in M5 World Championship (3972) "
  ],
  "Pro Photo": "https://liquipedia.net/commons/images/d/d3/FNOC_Sanz_S14.png",
  "Alternate IDs": "SanzJago, Sanztuy, Sanz",
  "Approx. Total Winnings": "$221,615"
}
```
- **Name**: The player's full name, in this case, "Gilang."
- **Nationality**: The country the player is from, Indonesia.
- **Born**: The player's birthdate, July 22, 2002, and their current age (22 years old).
- **Status**: The player's current activity status in esports, which is "Active."
- **Role**: The player's main in-game role, here it is "Mid Laner."
- **Team**: The player's current esports team, "Fnatic ONIC."
- **Expert Hero**: The heroes that the player is known to excel with, including:
  - Pharsa
  - Valentina
  - Lylia
  - Kadita
  - Novaria
- **Social Media**: Links to the player's social media accounts:
  - Instagram: [Link](https://www.instagram.com/p/DClEXinzGGQ/?img_index=4&igsh=MTNsa3F2M3hrZW9paw==)
  - TikTok: [Link](https://tiktok.com/@gilang_sanz)
  - YouTube: [Link](https://www.youtube.com/channel/UCVHRjymdEIozj5LwncO2sSw)
  
- **Trophies**: A list of major tournaments and achievements the player has won, including:
  - MPL Indonesia Champion (multiple seasons)
  - MSC (Mobile Legends Southeast Asia Cup) Champion (2023)
  - M5 World Championship
  - Snapdragon Pro Series (SEA - Challenge Finals)
  - MLBB Southeast Asia Cup 2023
  - And many more MPL Indonesia and MDL Indonesia titles.

- **Trivia**:
  - "The only player to win both MPL Indonesia and MDL Indonesia as the main roster."
  - "Became the first player to have won MPL Indonesia four-peat (Seasons 10 to 13), together with teammates Kairi, CW, and Kiboy on ONIC."

- **Statistics**:
  - "Has a 100% win rate with Fanny at MPL Indonesia Season 9 (6 wins, 0 losses)."
  - "Had the most appearances on Team of the Week in MPL Indonesia Season 11 (4 times)."
  - "Had the highest average damage per minute in M5 World Championship (3972)."

- **Pro Photo**: A link to the player's professional photo: [Link](https://liquipedia.net/commons/images/d/d3/FNOC_Sanz_S14.png)
- **Alternate IDs**: Other names or gamer tags the player is known by: SanzJago, Sanztuy, Sanz.
- **Approx. Total Winnings**: The player's total estimated earnings from esports tournaments, which is approximately $221,615.

# **Hero Information**
- ```/api/mlbb?hero=HERO_NAME```
- Query: ```hero```
- **Test it now**: [Here](https://ml-api-en.vercel.app/api/mlbb?hero=Hanzo)

# Response:
```json
{
  "heroInfo": {
    "price": "32000   599",
    "lane": "Jungler",
    "heroType": "Assassin",
    "specialty": "Poke/Burst",
    "region": "Cadia Riverlands",
    "city": "Scalet Shadow",
    "quote": "\"Out of my way or get torn to pieces!\"",
    "resourceBar": "",
    "releaseDate": "2018-12-04",
    "voiceActor": "Kimura Ryohei",
    "winRate": "114W : 148L (43.51%)",
    "baseStats": {
      "health": "25947",
      "healthRegen": "7",
      "mana": "00",
      "manaRegen": "0",
      "physicalAttack": "108",
      "physicalDefense": "17",
      "magicPower": "0",
      "magicDefense": "15",
      "attackSpeed": "1.08100%",
      "attackSpeedRatio": "100%",
      "movementSpeed": "260"
    }
  },
  "relationships": [],
  "skillInfo": {
    "passive": "Hanzo When units are eliminated nearby, the Blood Demon absorbs their souls into its body into Demon Blood.\n\nHanzo gains 2 Demon Blood for each non-hero on death and 20 Demon Blood if it's a hero.",
    "skill_1_description": "Every 5 basic attacks by Hanzo (temporarily unlocks) this ability for 6.5s.\n\nHanzo uses Ame no Habakiri to devour a target and digest them over a period of time. By doing so Hanzo gets 10 Demon Blood. (Can only be used against Minions and Creeps. Targeting Lord or Turtle deals 500 True Damage).",
    "skill_2_description": "Every 5 basic attacks by Hanzo temporarily unlocks this skill for 6.5s.\n\nHanzo burrows underground and lunges forward to attack enemies in a line, dealing 300(+60%Total, Physical Attack) and 15% of the target's max HP as Physical Damage, knocking them airborne and gaining 10 Demon Blood. (Damage reduced against non-hero units)",
    "skill_3_description": "Hanzo summons demonic spikes at the target location, dealing 160(+60%Total Physical Attack) immediate Physical Damage. \nIf an enemy is hit, the skill will strike again after 0.5 s, dealing 40(+15%Total Physical Attack) Physical Damage to targets in the area and slowing them by 40% until no target is hit or dealing additional damage for 8 times. Every unit hit grants him 1 Demon Blood."
  },
  "lores": {
    "title": "Lore of Hanzo, Akuma Ninja",
    "lore": "Long ago, the House of Akakage was hailed as the Gods of Ninja Arts. For generations, the Akakages researched and taught advanced ninjutsu. In order to achieve the pinnacle of ninja arts, the Akakages used forbidden ninjutsu to rid their hearts of evil, anger, and greed by condensing them into a demon called, Hanekage. No one expected that Hanekage would have consciousness despite lurking within their bodies."
  },
  "proPlayers": [
    "Xev"
  ]
}
```
- **Price**: Indicates the hero's in-game price, either 32000 in-game currency or 599 premium currency.
- **Lane**: The hero's primary lane or role, which is Jungler in this case.
- **Hero Type**: The category or class of the hero, here it's an Assassin.
- **Specialty**: Describes the hero's key strengths, which in this case are Poke (long-range harassment) and Burst (high-damage quick attacks).
- **Region**: The lore region where the hero originates from, Cadia Riverlands.
- **City**: The hero's home city in the lore, Scarlet Shadow.
- **Quote**: The hero’s signature quote: "Out of my way or get torn to pieces!"
- **Resource Bar**: The resource the hero uses (mana, energy, etc.), which is empty in this case.
- **Release Date**: The date the hero was released, December 4, 2018.
- **Voice Actor**: The voice actor for the hero, Kimura Ryohei.
- **Win Rate (Pro Scene)**: The hero’s win-loss ratio, showing 114 wins, 148 losses, and a 43.51% win rate.
- **Base Stats**:
  - **Health**: The hero’s base health points.
  - **Health Regen**: The rate at which the hero regenerates health.
  - **Mana**: Indicates the hero’s mana (0 here, meaning the hero doesn't use mana).
  - **Mana Regen**: The rate of mana regeneration (0 here).
  - **Physical Attack**: The hero’s base physical damage.
  - **Physical Defense**: The hero’s resistance to physical attacks.
  - **Magic Defense**: The hero’s resistance to magic attacks.
  - **Attack Speed**: The base speed at which the hero performs basic attacks.
  - **Attack Speed Ratio**: The percentage of attack speed compared to its base value.
  - **Movement Speed**: How fast the hero moves around the battlefield.

- **Relationships**: Lists other characters related to the hero (none provided here).
  
- **Skill Information**:
  - **Passive**: Hanzo's passive skill allows him to absorb Demon Blood from nearby enemies when they are eliminated. He gains 2 Demon Blood from non-hero units and 20 from hero kills.
  - **Skill 1 Description**: Every 5 basic attacks temporarily unlock this ability for 6.5 seconds. Hanzo devours a target, gaining 10 Demon Blood (can only target minions and creeps, but deals 500 True Damage to Lords or Turtles).
  - **Skill 2 Description**: Every 5 basic attacks temporarily unlock this skill for 6.5 seconds. Hanzo lunges forward in a line, dealing physical damage and knocking enemies airborne while gaining 10 Demon Blood.
  - **Skill 3 Description**: Hanzo summons spikes at a target location, dealing physical damage. If an enemy is hit, the spikes will strike again, and the attack repeats up to 8 times, slowing targets and gaining Demon Blood.

- **Lore**: The backstory of Hanzo, which explains how the Akakage clan created a demon named Hanekage by condensing their negative emotions. This demon, Hanekage, later gained consciousness.
  
- **Pro Players**: Lists professional players who are known to use this hero in **Pro Scene**, such as Xev.

# IN-Game Items
- ```/api/mlbb-items?name=Malefic Gun```
- Query: ```name```
- **Test it now**: [Here](https://ml-api-en.vercel.app/api/mlbb-items?name=Malefic_Gun)
# Response:
```json
{

  "price": "2050",
  "recipe": [
    "Regular Spear",
    "Legion Sword"
  ],
  "tips": "\"Best equipped by Physical heroes to reduce enemies' Regen effects (Heal, Shields or Lifesteal).\"",
  "applications": "Lifebane can be applied to targets through Basic Attacks, damaging Talent Effects, damaging Skills (except for  Minsitthar's  King's Calling Royal Guard Attacks) and from damaging Item effects.",
  "description": "Sea Halberd is a Tier 3 Attack equipment",
  "Attack Speed": "+ 20%",
  "Physical Attack": "+ 80",
  "Passive": "Lifebane\nPunish"
}
```

- **Price**: The cost of the item in the game currency, showing how much it costs to purchase.
- **Recipe**: Lists the items required to build or craft this item. It shows the components needed to combine into the final item.
- **Tips**: Provides guidance on how the item should be used, including which types of heroes benefit most from it and the item’s effects in battle.
- **Applications**: Explains how the item’s passive effect (Lifebane) is applied, including through basic attacks, damaging skills, or item effects.
- **Description**: A short description of the item, indicating its tier and classification (e.g., Tier 3 Attack item).
- **Attack Speed**: Shows the percentage increase in attack speed the item provides to the hero.
- **Physical Attack**: Indicates the amount of physical attack power the item grants to the hero.
- **Passive**: Describes the passive ability of the item (Lifebane/Punish), which activates automatically when certain conditions are met.

# **Patches**
- ```/api/mlbb-patch```
- Query:
- **Test it now**: [Here](https://ml-api-en.vercel.app/api/mlbb-patch)

# Response
```json
[
  {
    "version": "Patch 1.9.20E",
    "releaseDate": "2024-11-12",
    "changeLogs": "Hero Adjustments\nBug Fixes"
  },
  {
    "version": "Patch 1.9.20D",
    "releaseDate": "2024-11-05",
    "changeLogs": "Revamped Hero:  Granger, Death Chanter. A demon hunter who can have infinite firepower by killing enemies.\nHero Adjustments\nBattle Spell Adjustments:  Regen\nEquipment Adjustments\nBattlefield Adjustments"
  },
  {
    "version": "Patch 1.9.20C",
    "releaseDate": "2024-10-10",
    "changeLogs": "Bug Fixes"
  },
  {
    "version": "Patch 1.9.20B",
    "releaseDate": "2024-09-25",
    "changeLogs": "Hero Balance Adjustments:  Zhuxin, The previous nerfs we made on Zhuxin's teamfight capability were a bit too much. We aim to partially revert these changes to maintain her competitiveness.\nBug Fixes"
  },
  {
    "version": "Patch 1.9.20",
    "releaseDate": "2024-09-18",
    "changeLogs": "New Hero:  Suyou, Mask of the Immortal. An exorcist from Zhu'an who has inherited the power of the Immortal Nuo.\nHero Adjustments\nBattlefield Adjustments\nSystem Adjustments\nEvents"
  },
  {
    "version": "Patch 1.9.06C",
    "releaseDate": "2024-08-08",
    "changeLogs": "Aspirants Unite Event Extension Notice, Due to the overwhelming enthusiasm from players for the Aspirants Unite Return event, we have decided to extend the event duration by 5 days to ensure all players have ample time to fully experience and participate in this special return event.\nBug Fixes"
  },
  {
    "version": "Patch 1.9.06B",
    "releaseDate": "2024-08-05",
    "changeLogs": "Kishin Densetsu Event Delay Notice, Currently, there are some issues with the gaming experience of this themed event. Due to our high regard for game quality and player experience, we have decided to delay the launch of the Kishin Densetsu event.\nBug Fixes"
  },
  {
    "version": "Patch 1.9.06",
    "releaseDate": "2024-07-31",
    "changeLogs": "Revamped Hero  Phoveus, Chains of Sin. A Fighter that pursues those who blink or dash.\nHero Adjustments\nBattlefield Adjustments\nSystem Adjustments\nGame Modes"
  },
  {
    "version": "Patch 1.8.92C",
    "releaseDate": "2024-07-22",
    "changeLogs": "Hero Adjustments:  Zhuxin"
  },
  {
    "version": "Patch 1.8.92B",
    "releaseDate": "2024-06-26",
    "changeLogs": "Hero Adjustments\nEquipment Stat Adjustments: Sky Piercer"
  },
  {
    "version": "Patch 1.8.92",
    "releaseDate": "2024-06-19",
    "changeLogs": "New Hero:  Zhuxin, Beacon of Spirits. A Mage who guides the ember butterflies using her Lantern of Spirits, deals AOE Damage to enemies and pulls them airborne.\nHero Adjustments\nBattlefield Adjustments\nSystem Adjustments\nEvents"
  },
  {
    "version": "Patch 1.8.78C",
    "releaseDate": "2024-05-27",
    "changeLogs": "Hero Adjustments\nBattlefield Adjustments"
  },
  {
    "version": "Patch 1.8.78B",
    "releaseDate": "2024-04-30",
    "changeLogs": "Events\nOptimizations\nBug Fixes"
  },
  {
    "version": "Patch 1.8.78",
    "releaseDate": "2024-04-23",
    "changeLogs": "Revamped Hero :  Helcurt, Shadowbringer\nHero Adjustments\nEquipment Adjustments\nTalent Adjustments\nBattlefield Adjustments\nSystem Adjustments\nEvents\nBug Fixes"
  },
  {
    "version": "Patch 1.8.66B",
    "releaseDate": "2024-03-28",
    "changeLogs": "Hero Adjustments"
  },
  {
    "version": "Patch 1.8.66",
    "releaseDate": "2024-03-13",
    "changeLogs": "New Heroes :  Chip, Phase Technician. SA Support/Tank hero who can use portals to roam the battlefield and support his allies.\nHero Adjustments\nBattlefield Adjustments\nEquipment Adjustments\nSystem Adjustments\nEvents\nGame Modes"
  },
  {
    "version": "Patch 1.8.56B",
    "releaseDate": "2024-02-26",
    "changeLogs": "Hero Adjustments\nBug Fixes"
  },
  {
    "version": "Patch 1.8.56",
    "releaseDate": "2024-01-31",
    "changeLogs": "Revamped hero :  Aurora, Frost Oracle\nHero Adjustments\nSystem Adjustments"
  },
  {
    "version": "Patch 1.8.47B",
    "releaseDate": "2024-01-10",
    "changeLogs": "Hero Adjustments"
  },
  {
    "version": "Patch 1.8.47",
    "releaseDate": "2023-12-27",
    "changeLogs": "New Hero:  Cici, Buoyant Performer. A cheerful performer who spreads fun and wonderment."
  },
  {
    "version": "Patch 1.8.44",
    "releaseDate": "2023-12-20",
    "changeLogs": "Battlefield Adjustments: Revamped Fighter equipment, Turtle and Scavenger Crab adjustments.\nDraw Events: KOF and Dawning Stars collab skins return for a limited time.\nSeason Settlement: S30 will end at 12/23 00:00 (Server Time) and the new season S31 will begin at 12/23 02:00 (Server Time)."
  },
  {
    "version": "Patch 1.8.30B",
    "releaseDate": "2023-11-14",
    "changeLogs": "Hero Adjustments\nBug Fixes"
  },
  {
    "version": "Patch 1.8.30",
    "releaseDate": "2023-11-07",
    "changeLogs": "Revamped Hero:  Moskov, Spear of Quiescence\nBattlefield Adjustments\nNew Event: M5 Pass"
  },
  {
    "version": "Patch 1.8.22",
    "releaseDate": "2023-10-19",
    "changeLogs": "Bug Fixes"
  },
  {
    "version": "Patch 1.8.20B",
    "releaseDate": "2023-10-18",
    "changeLogs": "Hero Adjustments\nBattlefield Adjustments"
  },
  {
    "version": "Patch 1.8.20",
    "releaseDate": "2023-09-19",
    "changeLogs": "New Hero:  Nolan, the Cosmic Wayfinder.\nRevamped Hero: Lolita, the Steel Elf has returned.\nNew Interface: The new Main Interface is now online, with interactive content waiting for you to explore.\nNew Season: S30 will start on 9/23/2023 at 02:00:00 (Server Time).\n7th Anniversary Celebration: The 7th Anniversary Celebration will start on 9/23/2023 at 00:00:00 (Server Time)."
  },
  {
    "version": "Patch 1.8.08",
    "releaseDate": "2023-08-08",
    "changeLogs": "New Item: Great Dragon Spear\nBeyond the Clouds Event Series"
  },
  {
    "version": "Patch 1.7.94",
    "releaseDate": "2023-06-26",
    "changeLogs": "New Hero: Ixia, marksman that makes her own weapon with unique trajectories.\nRevamped Emblems & Hero Setup"
  },
  {
    "version": "Patch 1.7.82B",
    "releaseDate": "2023-06-04",
    "changeLogs": "Hero Adjustments"
  },
  {
    "version": "Patch 1.7.82",
    "releaseDate": "2023-05-16",
    "changeLogs": "New Hero: Star Rebel - Novaria, a long-range Mage capable of dealing high burst damage to enemies from afar and passing through terrain.\nNew Event: MSC"
  },
  {
    "version": "Patch 1.7.68",
    "releaseDate": "2023-03-22",
    "changeLogs": "Revamped Hero: Minsitthar, Courageous Warrior\nNew Event: ALLSTAR\nNew Map: Harmonia\nEquipment Adjustment"
  },
  {
    "version": "Patch 1.7.58",
    "releaseDate": "2023-02-14",
    "changeLogs": "New Hero: Arlott, Lone Lancer\nNew Event: MLBB x Jujutsu Kaisen\nNew Function: Resource Sorting"
  },
  {
    "version": "Patch 1.7.44C",
    "releaseDate": "2022-12-28",
    "changeLogs": "Hero Adjustments\nBug Fixes"
  },
  {
    "version": "Patch 1.7.44B",
    "releaseDate": "2022-12-23",
    "changeLogs": "Hero Adjustments\nBug Fixes"
  },
  {
    "version": "Patch 1.7.44",
    "releaseDate": "2022-12-20",
    "changeLogs": "Revamped Hero: Hanabi, the Scarlet Flower\nNew Season: Season 27\nNew Event: M4 Pass\nNew Equipment: Swift Crossbow"
  },
  {
    "version": "Patch 1.7.32C",
    "releaseDate": "2022-11-30",
    "changeLogs": "Hero Adjustments\nBattlefield Adjustments"
  },
  {
    "version": "Patch 1.7.32B",
    "releaseDate": "2022-11-11",
    "changeLogs": "Hero Adjustments"
  },
  {
    "version": "Patch 1.7.32",
    "releaseDate": "2022-11-07",
    "changeLogs": "New Hero: Joy, Flash of Miracle\nNew Event: Double 11 2022 & MLBB X Neymar Jr Collaboration\nHero Adjustments"
  },
  {
    "version": "Patch 1.7.20B",
    "releaseDate": "2022-10-24",
    "changeLogs": "Hero & Battlefield Adjustments"
  },
  {
    "version": "Patch 1.7.20",
    "releaseDate": "2022-09-20",
    "changeLogs": "Revamped Heroes: Lesley - Deadly Sniper, Gusion - Holy Blade\nNew Event: MLBB X Saint Seiya Collaboration"
  },
  {
    "version": "Patch 1.7.08",
    "releaseDate": "2022-08-09",
    "changeLogs": "MLBB x Kung Fu Panda\nBlacklist International's M3 Championship Skin\nNew Hero: Rogue Appraiser - Fredrinn, a tank/fighter who can form a variety of attacks with different skill combos."
  },
  {
    "version": "Patch 1.6.94B",
    "releaseDate": "2022-07-12",
    "changeLogs": "Hero Adjustments"
  },
  {
    "version": "Patch 1.6.94",
    "releaseDate": "2022-06-28",
    "changeLogs": "Revamped Heroes: Vexana - Shimmer of Hope, Leomord - Sworn Sword, Faramis - Soul Binder\nNew Season: S25"
  },
  {
    "version": "Patch 1.6.84",
    "releaseDate": "2022-05-23",
    "changeLogs": "New Hero: Julian, Scarlet Raven\nNew Event: MLBB x Transformers and MSC!"
  },
  {
    "version": "Patch 1.6.72",
    "releaseDate": "2022-04-11",
    "changeLogs": "Revamped Hero: Akai, the almighty Panda Warrior, is ready to cause more chaos with his updated kit!\nNew Event: The 515 Party is about to begin!\nNew UI: The Profile screen has received a full revamp.\nNew System: Creation Camp, a new Custom system, is available soon.\nMagic Chess S8 will end on 04/30/2022 at 00:00:00 (server time), while the new season, Magic Chess: To Be Hero, will begin shortly afterward."
  },
  {
    "version": "Patch 1.6.66B",
    "releaseDate": "2022-03-29",
    "changeLogs": "Hero Adjustments"
  },
  {
    "version": "Patch 1.6.66",
    "releaseDate": "2022-03-21",
    "changeLogs": "New Hero: Defier of Light - Xavier, a glass cannon mage that boasts insane sustained damage.\nOptimized some of the tank and fighter heroes to bring them back to the limelight.\nS23 will end at 23:59:59 on 03/25/2022 (Server Time). Players who've reached the Master or higher rank can claim Masha \"Spirited Gauntlet\" as the Season Finale reward."
  },
  {
    "version": "Patch 1.6.58",
    "releaseDate": "2022-02-21",
    "changeLogs": "New Hero: Cursed Needle - Melissa, A rebellious girl that runs a tailor shop and solves problems for people.\nNew Feature: Graffiti and Skin Paint will be available soon.\nNew Mode: Overdrive will be available soon."
  },
  {
    "version": "Patch 1.6.50B",
    "releaseDate": "2022-01-27",
    "changeLogs": "Beatrix Passive Skill Adjustments"
  },
  {
    "version": "Patch 1.6.50",
    "releaseDate": "2022-01-17",
    "changeLogs": "New Hero: Martial Genius - Yin, a gifted Kungfu boy possessed by an Evil God.\nNew Event: Aspirants Unite is now available! Join the event for a chance to get exclusive skins.\nMagic Chess S7 will end on 01/30/2022 at 00:00:00, while Magic Chess S8 - Evolution will begin shortly after."
  },
  {
    "version": "Patch 1.6.42",
    "releaseDate": "2021-12-21",
    "changeLogs": "New Hero: Forsaken Warden - Edith, the primal warden that watched over the sealed Evil Gods on Sanctum Island.\nNew Map: Sanctum Island will be available soon.\nS22 will end on 12/24/2021 at 23:59:59 (Server Time). Players who've reached the Master or higher rank can claim Terizla \"Rustwreck\" as the Season Finale reward.\nBattlefield Adjustments: Lord can now evolve in the late game, along with lots of adjustments to Creeps, Minions, and Turrets."
  },
  {
    "version": "Patch 1.6.34",
    "releaseDate": "2021-11-25",
    "changeLogs": "New Hero: Prophetess of the Night - Valentina, the unpredictable shadow predator.\nNew Event: M3 Pass, complete tasks to receive multiple event rewards.\nNew Mode: New gameplay, 2-Player Survival, is now available in Boommander Mode.\nNew Skin: Starlight Fest Skin - Kagura \"Water Lily\"."
  },
  {
    "version": "Patch 1.6.26B",
    "releaseDate": "2021-11-01",
    "changeLogs": "Hero Adjustments"
  },
  {
    "version": "Patch 1.6.26",
    "releaseDate": "2021-10-26",
    "changeLogs": "New Hero: Duke of Shards - Aamon, a master assassin wielding lethal mana shards.\nPractice Mode and Tutorial to the Training Camp\nNew Event: Carnival Event\nHero Adjustments"
  },
  {
    "version": "Patch 1.6.18B",
    "releaseDate": "2021-09-27",
    "changeLogs": "Hero Adjustments"
  },
  {
    "version": "Patch 1.6.18",
    "releaseDate": "2021-09-21",
    "changeLogs": "New Hero: The Budding Hope - Floryn, a kind-hearted girl who is determined to spread greenery throughout the world.\nRevamped Heroes: Blade of Roses - Lancelot, Swan Princess - Odette, Crimson Shadow - Hayabusa, Onmyouji Master - Kagura\nThe 5th Anniversary Skin, Miya's \"Moon Priestess\"\nNew System: Familiarity System\nGame Interface Optimization"
  },
  {
    "version": "Patch 1.6.10",
    "releaseDate": "2021-08-23",
    "changeLogs": "New Hero: Warrior of Ferocity - Aulus, a ferocious warrior who gets stronger as he fights. With powers that unlock with level, Aulus has the ability to dominate the battlefield in the late game.\nRevamped Hero: Jetpack Rebel - Kimmy, we optimized the experience of Kimmy's exclusive Basic Attack gameplay, granting her more stable damage output and battle performance.\nMythic Battlefield Adjustments\nNew Event: MLBB X Transformers Begins"
  },
  {
    "version": "Patch 1.5.96",
    "releaseDate": "2021-07-19",
    "changeLogs": "New Hero: Spacetime Walker - Natan, the savior who travels through time and space, and a magic Marksman who can inflict damage to enemies within a specific area.\nFree Magic Chess Commanders\nNew Mode: Natan's War v15.1"
  },
  {
    "version": "Patch 1.5.88B",
    "releaseDate": "2021-07-09",
    "changeLogs": "Eudora Skill Adjustments"
  },
  {
    "version": "Patch 1.5.88",
    "releaseDate": "2021-06-14",
    "changeLogs": "New Revamped Heroes: Shadow Blade - Karina, Blade of Enmity - Alpha, Son of Minos - Minotaur, Monkey King - Sun\nNew Equipment: War Axe, Shadow Twinblades, Radiant Armor\nNew Feature: Assisted Aiming Mode, Custom Action System\nEquipment Effect Adjustments\nSystem Adjustments"
  },
  {
    "version": "Patch 1.5.78",
    "releaseDate": "2021-05-10",
    "changeLogs": "New Hero: Shadow of Dread - Phoveus, he punishes anyone who frequently uses Blink.\nRevamped Hero: Frozen King - Bane, we've given Bane new battle and display effects, and also revamped his Passive to make it stack up to 2, while shrinking its area of effect to make him more balanced as a Fighter."
  },
  {
    "version": "Patch 1.5.70",
    "releaseDate": "2021-04-12",
    "changeLogs": "New Hero: The Swamp Spirits - Gloo, a mischievous troublemaker, is composed of mysterious creatures that merge together.\nNew Event: 515 eParty Preview"
  },
  {
    "version": "Patch 1.5.62B",
    "releaseDate": "2021-03-24",
    "changeLogs": "Hero Adjustments\nBattlefield and System Adjustments\nMode Update: Survival: Nexus v.36.1"
  },
  {
    "version": "Patch 1.5.62",
    "releaseDate": "2021-03-15",
    "changeLogs": "New Hero: The Dawnbreak Soldier - Beatrix\nRevamped Hero: The Dark Angel - Argus"
  },
  {
    "version": "Patch 1.5.52",
    "releaseDate": "2021-02-01",
    "changeLogs": "New Hero: Yve - Astrowarden, a mage wielding the power of the galaxy who can use skills freely in her domain.\nNew Functions & Events\nSystem Adjustments"
  },
  {
    "version": "Patch 1.5.46",
    "releaseDate": "2021-01-12",
    "changeLogs": "New Hero: Paquito - Heavenly Fist, a firm and righteous champion.\nHero Adjustments\nNew Functions & Events\nGame Performance Upgrade"
  },
  {
    "version": "Patch 1.5.38B",
    "releaseDate": "2021-01-04",
    "changeLogs": "Hero Adjustments\nBattlefield Adjustments"
  },
  {
    "version": "Patch 1.5.38",
    "releaseDate": "2020-12-15",
    "changeLogs": "Hero Adjustments\nWeekly Free Heroes & New Skins\nBattlefield Adjustments\nNew Functions & Events\nSystem Adjustments"
  },
  {
    "version": "Patch 1.5.32",
    "releaseDate": "2020-11-24",
    "changeLogs": "New Heroes : Mathilda\nRevamped Heroes : Clint\nHero Adjustments\nWeekly Free Heroes & New Skins\nBattlefield Adjustments\nNew Functions & Events\nSystem Adjustments\nBug Fix"
  },
  {
    "version": "Patch 1.5.24B",
    "releaseDate": "2020-11-05",
    "changeLogs": "New Hero: Shadow Ranger - Benedetta, a ranger that fights for hope.\nHero Adjustments"
  },
  {
    "version": "Patch 1.5.24",
    "releaseDate": "2020-10-25",
    "changeLogs": "New Heroes : Benedetta, the Shadow Ranger\nRevamped Heroes : Lapu-Lapu, the Courageous Blade!\nHero Adjustments\nWeekly Free Heroes & New Skins\nBattlefield Adjustments\nSystem Adjustments\nBug Fix"
  },
  {
    "version": "Patch 1.5.16B",
    "releaseDate": "2020-10-11",
    "changeLogs": "Hero Adjustments\nBug Fixes"
  },
  {
    "version": "Patch 1.5.16",
    "releaseDate": "2020-09-20",
    "changeLogs": "New Hero : Brody, the Lone Star\nRevamped Heroes : Miya, Layla, Alucard, Eudora, Zilong, Saber\nHero Adjustments\nWeekly Free Heroes & New Skins\nBattlefield Adjustments\nEquipment Adjustments\nNew functions & New Events\nSystem Adjustments\nBug Fix"
  },
  {
    "version": "Patch 1.5.08",
    "releaseDate": "2020-08-25",
    "changeLogs": "New Hero : Barats, the Dino Rider, Yuki, the Snow Witch (Magic Chess)\nHero Adjustments\nWeekly Free Heroes and New Skins\nBattlefield Adjustments\nEquipment Adjustments\nSystem Adjustments\nBrawl Mode\nBug Fixes"
  },
  {
    "version": "Patch 1.4.94B",
    "releaseDate": "2020-07-30",
    "changeLogs": "Bug Fixes"
  },
  {
    "version": "Patch 1.4.94",
    "releaseDate": "2020-07-14",
    "changeLogs": "New Hero : Khaleed, Desert Scimitar\nHero Adjustments\nWeekly Free Heroes and New Skins\nBattlefield Adjustments\nEquipments Adjustments\nNew Events & Features\nSystem Adjustments"
  },
  {
    "version": "Patch 1.4.86",
    "releaseDate": "2020-06-16",
    "changeLogs": "New Hero: Black Dragon - Yu Zhong, a powerful fighter who can transform into a Black Dragon and sweep across the battlefield.\nRevamped Hero: Paenlong Legend - Yi Sun-shin, the Admiral who can fight using different weapons."
  },
  {
    "version": "Patch 1.4.76",
    "releaseDate": "2020-05-12",
    "changeLogs": "New Hero: Yin-yang Geomancer - Luo Yi, a Mage who roams between the binary of Yin and Yang, excels at dealing damage and inflicting CC effects from distance.\nNew Event: Midnight Summoning"
  },
  {
    "version": "Patch 1.4.70",
    "releaseDate": "2020-04-21",
    "changeLogs": "New Hero: Icefield Companions - Popol and Kupa, the strongest duo from the northern icefield.\nNew Event: 515 eParty"
  },
  {
    "version": "Patch 1.4.60",
    "releaseDate": "2020-03-18",
    "changeLogs": "New Hero: The Ocean Gladiator - Atlas, mecha-piloting Ancient Creature\nRevamped Heroes: The Valkyrie - Freya, The Akuma Ninja - Hanzo, Bright Claw - Natalia, Perfumed Knight - Lancelot"
  },
  {
    "version": "Patch 1.4.50",
    "releaseDate": "2020-02-11",
    "changeLogs": "New Hero: The Embrace of Night - Cecilion, he is the lover of the Shadow of Twilight, Carmilla.\nNew Event: Happy Valentine's!"
  },
  {
    "version": "Patch 1.4.44",
    "releaseDate": "2020-01-14",
    "changeLogs": "New Hero: The Shadow of Twilight - Carmilla, a Blood Demon who can pass the damage to multiple enemies via the link of curse."
  },
  {
    "version": "Patch 1.4.36",
    "releaseDate": "2019-12-17",
    "changeLogs": "New Hero : Silvanna, the Imperial Knightess\nBan Hero : Belerick, the Guard of Nature.\nHero Adjustments\nWeekly Free Heroes and New Skins\nBattlefield Adjustments\nEquipments Adjustments\nSpells Adjustments\nNew Events & Features\nSystem Adjustments\nBug Fix"
  },
  {
    "version": "Patch 1.4.28",
    "releaseDate": "2019-11-19",
    "changeLogs": "New Hero : Wanwan, Agile Tiger\nRevamped Heroes : Pharsa, Wings of Vengeance\nHero Adjustments\nWeekly Free Heroes and New Skins\nBattlefield Adjustments\nNew Event and System\nSystem Adjustments\nBug Fixes"
  },
  {
    "version": "Patch 1.4.20",
    "releaseDate": "2019-10-15",
    "changeLogs": "New Hero : Ling, Cyan Finch\nHero Adjustments\nWeekly Free Heroes and New Skins\nBattlefield Adjustments\nBattle Spells Adjustments\nNew Events And Systems\nSystem Adjustments\nBug Fix"
  },
  {
    "version": "Patch 1.4.14",
    "releaseDate": "2019-09-17",
    "changeLogs": "1."
  },
  {
    "version": "Patch 1.4.06",
    "releaseDate": "2019-08-20",
    "changeLogs": "Revamped Hero: The Protector - Bruno\nOptimization of Heroes\nNew Event: KOF Collaboration\nSystem Optimization"
  },
  {
    "version": "Patch 1.3.96",
    "releaseDate": "2019-07-23",
    "changeLogs": "New Heroes & Revamped Heroes\nSystem Adjustments\nBug Fixes"
  },
  {
    "version": "Patch 1.3.90",
    "releaseDate": "2019-06-27",
    "changeLogs": "New Hero: Little Wizard - Lylia, a mage who can return to her position a few seconds ago and deal high damage through a series of explosions.\nNew Mode: Mirror & Brawl, we have transplanted Mirror Mode to the map of Brawl"
  }
]
```
- **version**: Patch version code..
- **releaseDate**: Patch release date.
- **changeLogs**: Change that have been made in that patch.
# Collected from [Liquipedia](https://liquipedia.net/mobilelegends/Main_Page)
