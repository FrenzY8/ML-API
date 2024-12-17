# Simple MLBB APi
APi simple buat informasi tentang Mobile Legends.

# Route
> **Main Route**:
- ```/api```
# **Hero Information**
- ```/api/mlbb?hero=HERO_NAME```
- Query: ```hero```
- **Test it now**: [Run It](https://prenn.vercel.app/api/mlbb?hero=Hanzo)

> Response:
```json
"heroInfo": {
    "price": "32000   599",
    "lane": "Jungler",
    "heroType": "Assassin",
    "specialty": "Chase/Burst",
    "region": "Cadia Riverlands",
    "city": "Scalet Shadow",
    "quote": "\"Hayabusa, sannjyo!\"",
    "resourceBar": "",
    "releaseDate": "2016",
    "voiceActor": "Fukagawa Kazumasa",
    "winRate": "1805W : 1734L (51%)",
    "baseStats": {
      "health": "24297.4",
      "healthRegen": "7.4",
      "mana": "",
      "manaRegen": "",
      "physicalAttack": "117",
      "physicalDefense": "17",
      "magicPower": "0",
      "magicDefense": "15",
      "attackSpeed": "1.06100%",
      "attackSpeedRatio": "100%",
      "movementSpeed": "260"
    }
  },
  "relationships": [],
  "skillInfo": {
    "passive": "Hayabusa's attacks apply a stack of Shadow Mark on hit (up to 4 stacks). Each stack lasts 6s and increases Hayabusa's damage to the enemy by 5%.",
    "skill_1_description": "Hayabusa shoots three returning shurikens in the target direction, each dealing 170(+70%Extra Physical Attack) Physical Damage to enemies hit and slowing them by 35% for 2s. Enemies hit by multiple shurikens take only 30% of the damage after the first hit. Hayabusa restores 10 energy for each non-minion enemy hit.\nPassive: Hayabusa gains 3% extra Spell Vamp each time Ninjutsu: Phantom Shuriken is leveled up.",
    "skill_2_description": "Hayabusa dashes in the target direction and releases four phantoms that travel in separate directions. The phantoms will remain at the end of their paths or attach themselves to the first enemy hero hit, dealing them 130(+30%Extra Physical Attack) Physical Damage and slowing them by 40% for 2s. Hayabusa will immediately stop if he hits an enemy hero during the dash.\nUse Again: Hayabusa teleports to a phantom's location and reduces the cooldown of Ninjutsu: Phantom Shuriken by 1s. If the phantom is attached to an enemy hero, he also deals 130(+30%Extra Physical Attack) Physical Damage to the enemy.",
    "skill_3_description": "Hayabusa blends into the shadows and launches 6 single-target attacks on enemies in the area, each time dealing 140(+75%Extra Physical Attack) Physical Damage.\nThe attacks prioritize enemies with Shadow Mark, each consuming a stack to deal 45(+20%Extra Physical Attack) extra Physical Damage, but doesn't apply additional Shadow Mark stacks or enjoy the bonus damage from Shadow Mark."
  },
  "lores": {
    "title": "Lore of Hayabusa, Crimson Shadow",
    "lore": "In the north of the Cadia Riverlands there lies a thick forest within a canyon. All around is aesthetic beauty, yet with a harsh and dangerous air. Myriad waterfalls flow like lengths of white silk, the water resounding throughout the area as it's splashed high into the heavens. When the wind picks up, fog and cherry blossoms float in the air—this is the home of the ninja, the Scarlet Shadow.Many years ago, the earliest disciple of the Cadia Riverlands defender known as the Great Dragon, arrived in Scarlet Shadow. He was a ninja master, and through his training achieved a great endurance allowing him to surpass the limitations of his physical form. Thus, he brought forth a special skill combining both physical and spiritual energies—ninjutsu. Those who followed under him also traveled to the canyon deep in the mountains, and there they built a village, naming themselves 'ninja'.After the ninja master passed away, the ninjas of the Scarlet Shadow split into two factions on account of their differing understandings of ninjutsu: one became known as the Scarlet Sect and the other, the Shadow Sect. The former advocated using all kinds of ninja equipment, while the latter focused on intent study into ninjutsu itself.Hayabusa is a ninja born into the Shadow Sect, second son of the Shadow Sect leader. He was sent to the Scarlet Sect head to study as their disciple, in an educational exchange between the two sects. They arranged for Hayabusa and Hanabi to grow up together, and if all went well, for them to marry once grown. Together they would become both links between, and hostages held by, the Scarlet and Shadow...When Hayabusa was sent to the Scarlet Sect, he had no idea that his family already had his life planned out for him. His father told him sternly: \"From this day, you're a disciple to be raised by both the Scarlet and Shadow sects. You should be every bit as outstanding as your brother; as my son, you cannot afford to fall behind!\"The greatest leader of the ninja had always been known as the 'Akakage', and Hayabusa's brother was widely considered to be in the running for the next strongest ninja, the next Akakage. To the young Hayabusa, the shadow cast by his brother was as great as a mountain and just as hard to climb out from. But he swore to himself: \"I'll follow in my brother's footsteps!\". To achieve this goal Hayabusa began training in earnest, and soon stood head and shoulders above the other disciples. This also placed a lot of competitive pressure on the proud Hanabi.From the first time Hayabusa beat Hanabi in a trial competition, he gained himself a rival that would last the entirety of his childhood. Hanabi would usually greet Hayabusa with a confrontational scowl, and on the eve of each full moon do her utmost to provoke a fight between them. Hayabusa started out a little tense, but soon gained self-confidence after a series of victories. Each of Hanabi's challenges all ended in defeat.Whenever a day of rest rolled around, Hayabusa would always rush off home, as Hanabi gazed on coldly. Whenever his father was away, Hayabusa would cause a racket and insist his brother take him mountain-climbing or fishing. He was usually completely fatigued having returned from a mission, however. Yet Hayabusa's brother's heart was kind, and he'd always get together the strength to take him on a trip—and when Kagura would come to visit, she'd always tag along and cause mischief for them, too.It was only with his brother that Hayabusa ever seemed like a carefree child. That was, until one day when they were on the road home and he told Hayabusa: \"I need to head out. It may be a long time before you see me again...\"Hayabusa understood that you didn't question a ninja on their mission. He looked up at his brother's ever-present smile, and nodded.And so the days passed, one by one. Days off came, and went, but Hayabusa saw no sign of his brother. He slowly grew used to living in a home now short a family member, grew used to being the big brother that would take care of Kagura. But deep in his heart, he'd always be yearning for his brother's return—\"Come back!\", he'd think; \"Look how much I've grown. I'm getting almost as good as you are, now...\"One day, Hayabusa was suddenly summoned home. His father's face was haggard as he told Hayabusa: \"Your brother's mission is now yours to bear. You are now my only son.\"...It felt like his whole world was spinning, but Hayabusa became aware of a scandal in Scarlet Shadow: the first Akakage had used secret arts to create the Demon Pneuma, an existence created to act as a shadow-opponent for use in training. Yet it grew sentient, and devoured him; disaster followed. Eventually the Demon Pneuma was sealed away, yet a part of its conscious managed to escape, and it ended up assuming control over the ninja prodigy, Hanzo—the Shadow of the time. Hanzo became a demonic form of his prior self, stealing away Scarlet Shadow treasures and causing a massacre, then fleeing.This betrayal of Hanzo's came to be a great shame of the Shadows. Countless ninja elites were ordered to eradicate this dangerous target yet each met with failure—and Hayabusa's brother was the latest sacrificed to that end.By this time, Hayabusa was already a teen. On the eve of the full moon each month, when the competition was held, he and Hanabi would lie upon the tall rooftops together and gaze at the moon. Sometimes Hanabi would shoot a glance at him, saying \"I'll become the Scarlet leader\". And Hayabusa would say, too: \"I'll find that guy\"—find that devilish Hanzo, complete his brother's mission, and become the Akakage in his place!The day of the coming-of-age ceremony just so happened to coincide with the full moon's eve. Hayabusa caught wind that Hanzo had appeared beyond the Cadia Riverlands, and knew that it was time for him to bid Scarlet Shadow farewell...As had become convention, this was the night that he and Hanabi would test each other upon the rooftops. Yet it was her coming-of-age ceremony; would she come at all? Given she was a childhood friend, he felt he should give her his farewell...With his bag packed, Hayabusa headed out with his emotions in turmoil. He hadn't walked more than a few steps when the heavy rain and fog suddenly stopped, blocked by a Seimei Umbrella. Kagura pressed close to him, saying \"Hayabusa, I want to go with you, too!\"Hayabusa waved a finger at her—\"Listen here! This isn't a game, I'm not heading out for fun!\"Just then, lit up by a blinding flash of lightning, Hayabusa caught sight of Hanabi stumbling over. Her face was as white as a sheet. Without a second thought, he handed the sodden Hanabi the umbrella, yet she walked past hurriedly as if she hadn't seen him at all. He could do naught but swallow the goodbye he'd prepared. It was on that night that Hayabusa bid his childhood farewell: \"Goodbye, Hanabi. Goodbye, Scarlet Shadow... I'll embark on my journey, forcing myself through the most grueling training, for I must become stronger than any of my line before me—Hanzo! I will find you, and defeat you!\"I must become the Akakage!\""
  },
  "proPlayers": [
    "KyleTzy",
    "Kairi",
    "Alberttt",
    "Kiing",
    "Demonkite"
  ]
```
- **Price**: Shows the hero's price in-game.
- **Lane**: The main lane or role for the hero, such as Jungler.
- **Hero Type**: The category of the hero, like Assassin.
- **Specialty**: The hero's main skill focus, such as Chase and Burst.
- **Region**: The hero's origin region in the lore, such as Cadia Riverlands.
- **City**: The specific city where the hero comes from, like Scarlet Shadow.
- **Quote**: The hero's iconic quote or phrase.
- **Resource Bar**: The type of resource the hero uses, such as mana, energy, or none.
- **Release Date**: The year the hero was introduced to the game.
- **Voice Actor**: The name of the voice actor who provides the hero's voice, like Fukagawa Kazumasa.
- **Win Rate (Esports)**: The hero's win-loss statistics, showing the number of wins, losses, and win percentage.
- **Base Stats**:
  - **Health**: The hero's health points.
  - **Health Regen**: The rate at which the hero regenerates health.
  - **Physical Attack**: The hero's base physical damage.
  - **Physical Defense**: The hero's resistance to physical attacks.
  - **Magic Defense**: The hero's resistance to magic attacks.
  - **Attack Speed**: How fast the hero attacks.
  - **Movement Speed**: How fast the hero moves across the battlefield.
  
- **Relationships**: Any significant relationships with other heroes (none provided here).
- **Skill Information**:
  - **Passive**: Describes the hero's passive ability that activates automatically.
  - **Skill 1 Description**: Explanation of the hero's first skill, including damage and any effects.
  - **Skill 2 Description**: Explanation of the hero's second skill, such as dash mechanics and damage effects.
  - **Skill 3 Description**: Explanation of the hero's ultimate skill, detailing how it works and bonus effects like Shadow Mark.

- **Lore**: The background story that describes the hero's origin and life journey.
- **Pro Players**: List of professional players who commonly use this hero, including KyleTzy, Kairi, Alberttt, Kiing, and Demonkite.

# IN-Game Items
- ```/api/mlbb-items?name=Malefic Gun```
- Query: ```name```

- Response:
