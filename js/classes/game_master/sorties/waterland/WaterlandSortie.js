class WaterlandSortie extends Sortie {

    playerStartLocation = new Point(36, 17);

    _barriers = [
        new MapPiecePlacer(new CastleWall(), [ 
            // Castle Greymoor Walls
            new Range(new Point(29,0), new Point(42,0)),
            new Range(new Point(29,1), new Point(29,4)),
            new Range(new Point(29,6), new Point(29,11)),
            new Range(new Point(42,1), new Point(42,2)),
            new Range(new Point(42,4), new Point(42,6)),
            new Range(new Point(42,8), new Point(42,11)),
            new Range(new Point(24,2), new Point(28,2)),
            new Range(new Point(24,3), new Point(24,7)),
            new Range(new Point(43,2), new Point(47,2)),
            new Range(new Point(47,3), new Point(47,7)),
            new Range(new Point(24,8), new Point(28,8)),
            new Range(new Point(29,11), new Point(35,11)),
            new Range(new Point(37,11), new Point(42,11)),
            new Range(new Point(33,16), new Point(35,16)),
            new Range(new Point(37,16), new Point(39,16)),
            new Range(new Point(33,12), new Point(33,15)),
            new Range(new Point(30,7), new Point(33,7)),
            new Range(new Point(35,7), new Point(38,7)),
            new Range(new Point(38,5), new Point(38,6)),
            new Range(new Point(39,12), new Point(39,15)),
            new Range(new Point(35,4), new Point(41,4)),
            new Range(new Point(43,5), new Point(45,5)),
            new Range(new Point(43,8), new Point(47,8)),
            new Range(new Point(26,4), new Point(26,7)),
            new Point(27,6),
            new Point(35,5),
            new Point(45,7),
            new Range(new Point(31,8), new Point(31,9)),
            new Range(new Point(33,9), new Point(33,10)),
            new Range(new Point(34,13), new Point(35,13)),
            new Range(new Point(37,13), new Point(38,13)),
            new Point(34,15),
            new Point(38,15),
            new Range(new Point(45,3), new Point(45,4)),
        ]),
        new MapPiecePlacer(new GreenSerpentLake(), [
            new Range(new Point(1,1), new Point(15,15))

        ]),
        new MapPiecePlacer(new FireWall(), [
            new Range(new Point(49, 0), new Point(49, 49)),
            new Range(new Point(0, 49), new Point(49, 49))
        ]),
        new MapPiecePlacer(new Tree(), [
            //These are the Tree Barrier Coordinates (Forest Walls)
            new Range(new Point(13, 39), new Point(13, 45)),
            new Range(new Point(14, 39), new Point(14, 41)),
            new Range(new Point(14, 43), new Point(16, 43)),
            new Range(new Point(14, 45), new Point(14, 48)),
            new Point(15, 48),
            new Range(new Point(15, 39), new Point(15, 40)),
            new Range(new Point(16, 38), new Point(17, 39)),
            new Range(new Point(17, 37), new Point(18, 38)),
            new Range(new Point(17, 46), new Point(22, 46)),
            new Range(new Point(18, 44), new Point(18, 45)),
            new Point(19, 47),
            new Point(22, 45),
            new Range(new Point(22, 47), new Point(24, 47)),
            new Point(24, 48),
            new Range(new Point(19, 33), new Point(19, 36)),
            new Range(new Point(18, 29), new Point(18, 32)),
            new Range(new Point(19, 32), new Point(22, 32)),
            new Point(22, 31),
            new Range(new Point(19, 29), new Point(19, 30)),
            new Range(new Point(20, 28), new Point(21, 29)),
            new Range(new Point(24, 34), new Point(24, 35)),
            new Range(new Point(22, 36), new Point(25, 37)),
            new Point(23, 38),
            new Range(new Point(24, 39), new Point(25, 29)),
            new Range(new Point(21, 39), new Point(21, 41)),
            new Range(new Point(20, 42), new Point(22, 42)),
            new Range(new Point(20, 42), new Point(22, 42)),
            new Range(new Point(18, 41), new Point(20, 41)),
            new Range(new Point(24, 42), new Point(24, 44)),
            new Range(new Point(25, 44), new Point(25, 45)),
            new Point(27, 48),
            new Range(new Point(27, 47), new Point(28, 47)),
            new Range(new Point(27, 44), new Point(30, 44)),
            new Range(new Point(29, 45), new Point(30, 45)),
            new Range(new Point(28, 39), new Point(28, 42)),
            new Point(29, 42),
            new Point(30, 39),
            new Range(new Point(28, 37), new Point(31, 37)),
            new Range(new Point(31, 38), new Point(31, 39)),
            new Range(new Point(21, 27), new Point(27, 27)),
            new Range(new Point(27, 28), new Point(27, 29)),
            new Range(new Point(24, 29), new Point(26, 29)),
            new Range(new Point(24, 30), new Point(24, 31)),
            new Range(new Point(25, 26), new Point(26, 26)),
            new Range(new Point(26, 24), new Point(26, 25)),
            new Range(new Point(27, 24), new Point(29, 24)),
            new Range(new Point(26, 31), new Point(26, 32)),
            new Range(new Point(27, 32), new Point(28, 32)),
            new Range(new Point(28, 33), new Point(28, 34)),
            new Range(new Point(29, 34), new Point(31, 34)),
            new Range(new Point(31, 35), new Point(36, 35)),
            new Range(new Point(28, 22), new Point(30, 22)),
            new Range(new Point(30, 20), new Point(31, 21)),
            new Range(new Point(29, 26), new Point(37, 26)),
            new Range(new Point(31, 24), new Point(31, 25)),
            new Range(new Point(29, 29), new Point(30, 29)),
            new Range(new Point(30, 30), new Point(30, 32)),
            new Range(new Point(31, 31), new Point(31, 32)),
            new Range(new Point(32, 31), new Point(33, 31)),
            new Range(new Point(33, 28), new Point(33, 30)),
            new Point(32, 29),
            new Range(new Point(29, 26), new Point(37, 26)),
            new Range(new Point(31, 24), new Point(31, 25)),
            new Range(new Point(33, 21), new Point(34, 21)),
            new Range(new Point(34, 22), new Point(36, 22)),
            new Range(new Point(35, 23), new Point(35, 24)),
            new Range(new Point(33, 24), new Point(34, 24)),
            new Range(new Point(35, 28), new Point(36, 28)),
            new Range(new Point(35, 29), new Point(35, 31)),
            new Range(new Point(36, 34), new Point(37, 34)),
            new Range(new Point(36, 31), new Point(36, 33)),
            new Range(new Point(37, 31), new Point(39, 31)),
            new Point(39, 30),
            new Range(new Point(36, 21), new Point(38, 21)),
            new Range(new Point(38, 20), new Point(41, 20)),
            new Range(new Point(40, 21), new Point(43, 21)),
            new Range(new Point(40, 22), new Point(40, 23)),
            new Range(new Point(37, 24), new Point(37, 25)),
            new Range(new Point(38, 25), new Point(41, 25)),
            new Point(38, 28),
            new Range(new Point(39, 27), new Point(40, 28)),
            new Range(new Point(39, 33), new Point(40, 34)),
            new Point(42, 23),
            new Range(new Point(43, 22), new Point(43, 24)),
            new Range(new Point(44, 22), new Point(45, 22)),
            new Range(new Point(45, 23), new Point(48, 23)),
            new Range(new Point(46, 24), new Point(47, 25)),
            new Range(new Point(44, 27), new Point(48, 27)),
            new Range(new Point(42, 29), new Point(44, 29)),
            new Range(new Point(46, 29), new Point(47, 29)),
            new Range(new Point(42, 30), new Point(42, 31)),
            new Range(new Point(43, 31), new Point(43, 33)),
            new Point(42, 33),
            new Range(new Point(45, 31), new Point(46, 31)),
            new Point(46, 32),
            new Range(new Point(48, 32), new Point(48, 33)),
        ])
    ];
    
    _characters = [
        // bandits in forest
        new MapPiecePlacer(new Bandit(), [
            new Point(15, 46),
            new Point(16, 46),
            new Point(17, 40),
            new Point(19, 40),
            new Point(19, 48),
            new Point(21, 33),
            new Point(21, 38),
            new Point(23, 30),
            new Point(23, 42),
            new Point(25, 30),
            new Point(25, 46),
            new Point(26, 33),
            new Point(26, 37),
            new Point(28, 23),
            new Point(28, 29),
            new Point(28, 38),
            new Point(30, 24),
            new Point(30, 36),
            new Point(31, 27),
            new Point(31, 33),
            new Point(32, 21),
            new Point(32, 24),
            new Point(32, 28),
            new Point(34, 28),
            new Point(34, 31),
            new Point(36, 29),
            new Point(38, 32),
            new Point(39, 23),
            new Point(41, 33),
            new Point(44, 24),
            new Point(44, 31),
            new Point(46, 30),
            new Point(47, 26),
            new Point(48, 31),
        ]),
        new MapPiecePlacer(new FloorTroll(), [
            // Hidden Trolls
            new Point(38,3),
            new Point(37,1),
            new Point(35,2),
            new Point(31,2),
            new Point(33,4),
            new Point(32,6),
            new Point(28,4),
            new Point(34,10),
            new Point(35,8),
            new Point(38,9),
            new Point(40,9),
            new Point(40,7),
            new Point(41,5),
            // Exposed Trolls
            new Point(36,6),
            new Point(28,7),
            new Point(25,5),
            new Point(31,10),
            new Point(45,6),
            new Point(33,8),
        ]),
    ];

    _cover = [
        new MapPiecePlacer(new CastleFloor(), [
            new Point(38,3),
            new Point(37,1),
            new Point(35,2),
            new Point(31,2),
            new Point(33,4),
            new Point(32,6),
            new Point(28,4),
            new Point(34,10),
            new Point(35,8),
            new Point(38,9),
            new Point(40,9),
            new Point(40,7),
            new Point(41,5),
        ]),
    ]

    _items = [
        new WaterstoneShard(new Point(32, 32)),
        new GrishamsHeirloom(new Point(34,34))
    ]

    _places = [
        new CastleGreymoor(this,
            new MapPlaceLayout(
                [// Castle Place Area
                    new Range(new Point(24 , 2), new Point(28 , 8)),
                    new Range(new Point(29 , 0), new Point(42 , 11)),
                    new Range(new Point(33 , 12), new Point(39 , 16)),
                    new Range(new Point(43 , 2), new Point(47 , 8)),
                ],
                // Doors && Signs
                [
                    new CastleDoor(new Point(42, 3), "ruler"),
                    new CastleDoor(new Point(29,5), "ruler"),
                    new CastleDoor(new Point(34,7), "danburite"),
                    new CastleDoor(new Point(42,7), "danburite"),
                    new CastleDoor(new Point(36,11), "absolute"),
                    new CastleDoor(new Point(46,5), "absolute"),
                    new CastleDoor(new Point(36,16), "absolute ruler danburite"),
                    //Castle Tables
                    new Table(new Point(36, 5)),
                    new Table(new Point(25, 7)),
                    new Table(new Point(46, 7)),
                    new Table(new Point(30, 8)),
                    new Table(new Point(31, 1)),
                    new Table(new Point(27, 4)),
                    new Table(new Point(34, 4)),
                    new Table(new Point(38, 8)),
                    new Table(new Point(40, 10)),
                    new Table(new Point(43, 6)),
                    new Table(new Point(34, 14)),
                ],
                'map_item_castle_floor',
                null, null
            )
        ),
        new BanditsForest(this,
            new MapPlaceLayout(
                [
                    // Forest Place Area
                    new Range(new Point(30, 21), new Point(41, 35)),
                    new Range(new Point(42, 21), new Point(48, 34)),
                    new Range(new Point(42, 21), new Point(48, 33)),
                    new Range(new Point(28, 22), new Point(29, 48)),
                    new Range(new Point(31, 36), new Point(36, 36)),
                    new Range(new Point(29, 35), new Point(32, 28)),
                    new Range(new Point(29, 38), new Point(31, 41)),
                    new Range(new Point(29, 41), new Point(29, 43)),
                    new Range(new Point(29, 44), new Point(31, 48)),
                    new Range(new Point(32, 46), new Point(32, 47)),
                    new Range(new Point(13, 39), new Point(28, 48)),
                    new Range(new Point(18, 29), new Point(23, 38)),
                    new Range(new Point(20, 28), new Point(28, 39)),
                    new Range(new Point(27, 25), new Point(27, 26)),
                    new Range(new Point(30, 35), new Point(30, 36)),
                    new Range(new Point(32, 37), new Point(32, 41)),
                    new Range(new Point(30, 42), new Point(31, 43)),
                    new Range(new Point(32, 44), new Point(32, 45)),
                    new Range(new Point(33, 46), new Point(33, 47)),
                    new Range(new Point(32, 48), new Point(32, 48))
                ],
                [],
                null, null, "barrier_tree"
            ))
    ]

    quests =[
        new GrishamsShopQuest(this),
        new BanditsForestQuest(this),
        new CastleGreymoorQuest(this),
    ]

    constructor(gameMaster) {

        super(gameMaster, "Waterland", new Range(new Point(0, 0), new Point(49, 49)));


        // now items that require gameMaster data can be added
        this._places.push(
            new GrishamsShop(this._gameMaster.availableItems, this)
        )

        ScriptMaster.addScripts(this.name, [
            new Script(
                "firewall_cannot_pass",
                [ "You must possess the Waterstone to pass!" ]
            ),
            new Script(
                "firewall_may_pass",
                [ "Welcome!" ]
            ),
            new Script(
                "respite_town",
                [
                    new ScriptLine(
                        "REIDITE<br>Father!"
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>Reidite?"
                    ),
                    new ScriptLine(
                        "REIDITE<br>Father, it’s terrible"
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>You saw Darburite."
                    ),
                    new ScriptLine(
                        "PC<br>What happened?"
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>Who is this?"
                    ),
                    new ScriptLine(
                        "CODEE<br>We are Warriors of Fate. Here to save the world. We would love to chat, but we have to get the Worldstone back in order! It’s critical."
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>Warriors of Fate?"
                    ),
                    new ScriptLine(
                        "PC<br>Codee is a Fairy Guide. I am but the hand of Fate."
                    ),
                    new ScriptLine(
                        "REIDITE<br>PC can weave the fabric of the world, Father. It is unlike anything I have ever witnessed."
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>These are trying times. Fate has brought us together, I see why you are in the company of my daughter. I’m sorry my… Darburite caused you pain."
                    ),
                    new ScriptLine(
                        "PC<br>He’s being controlled by the darkness."
                    ),
                    new ScriptLine(
                        "CODEE<br>PC! Stop it."
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>Yes, I saw it myself. When the rain first stopped. It was strange, and strange things were happening in the castle. Deep in the keep, the water kept disappearing."
                    ),
                    new ScriptLine(
                        "REIDITE<br>You don’t mean it was Darburite."
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>Darburite took the Wolrdstone from Azure Lake. Its color had been tainted into a dark blue. It was cursing this land, who was tasked to protect the Worldstone. Darburite was consumed by hatred. Greed."
                    ),
                    new ScriptLine(
                        "REIDITE<br>That’s not my brother. He’s kind and gentle."
                    ),
                    new ScriptLine(
                        "CODEE<br>We don’t have time. I need to zap the darkness out of the shards of the Worldstone. I can only hold the darkness back for a moment. We will need magic to put it back together quickly. PC, that’s your job."
                    ),
                    new ScriptLine(
                        "REIDITE<br>I will ensure no one disturbs you."
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>Forgive my tale. How can I help?"
                    ),
                    new ScriptLine(
                        "CODEE<br>Do you have all the shards of the Worldstone?"
                    ),
                    new ScriptLine(
                        "PC<br>Codee, be more considerate. They’re going through a tough time."
                    ),
                    new ScriptLine(
                        "CODEE<br>The world is going through a tough time! You don’t understand, if we don’t hurry and the stone isn’t put together right now, it will die. Water will die. Everyone will die!"
                    ),
                    // ************* We need to change these lines with whatever algo challenge we present
                    new ScriptLine(
                        "KING GREYMOOR<br>I will take you to the shards. I believe we have all but one. "
                    ),
                    new ScriptLine(
                        "PC<br>We have that"
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>Fate has brought you indeed."
                    ),
                    new ScriptLine(
                        "CODEE<br>Okay, PC, listen carefully. I need you to craft a spell that will help put all these pieces together and sort them in the correct order. If they’re not in the correct order - I won’t be able to keep the darkness ack long enough. Too many attempts, and the stone will die."
                    ),
                    new ScriptLine(
                        "PC<br>I am ready."
                    ),
                ]
            ),
            new Script(
                "worldstone_put_together",
                [
                    new ScriptLine(
                        "KING GREYMOOR<br>By all that is holy and right. You’ve done it!"
                    ),
                    new ScriptLine(
                        "CODEE<br>You say it like you doubted us."
                    ),
                    new ScriptLine(
                        "PC<br>I’m sure that having perfect strangers come up to you and say you’re the Warriors of Fate brings doubt in most people"
                    ),
                    new ScriptLine(
                        "REIDITE<br>True. Until they watch you weave the world to your needs. You really are something, PC."
                    ),
                    new ScriptLine(
                        "PC<br>Me? No, it’s all Codee"
                    ),
                    new ScriptLine(
                        "CODEE<br>It’s really all me."
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>PC, listen to me. What you’ve done is monumental, but you have to start believing in yourself. What you just did, no mortal can accomplish that task. You are probably more capable than any being in all of Crystalia."
                    ),
                    new ScriptLine(
                        "PC<br>I don’t know."
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>I do. I just witnessed it. Don’t doubt yourself. Keep going."
                    ),
                    new ScriptLine(
                        "CODEE<br>The stone. It’s put together, and I have whisked the darkness away from it, but it’s still not glowing."
                    ),
                    new ScriptLine(
                        "REIDITE<br>It probably needs to go back to its resting place. That is where it was able to connect with the land. "
                    ),
                    new ScriptLine(
                        "PC<br>It’s not raining either."
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>No. It won’t rain until we return this to Azure Lake to the Northwest"
                    ),
                    new ScriptLine(
                        "SOLDIER<br>My Liege! Monsters from the West! The Prince's Legions are upon us! Their magic is too strong, we can’t hurt them!"
                    ),
                    new ScriptLine(
                        "CODEE<br>What’s that bright flash of light?"
                    ),
                    new ScriptLine(
                        "PC<br>It’s Grisham’s Heirloom, its glowing!"
                    ),
                    new ScriptLine(
                        "CODEE<br>It’s reacting to the Worldstone. It seems the Worldstone is lending you its power."
                    ),
                    new ScriptLine(
                        "REIDITE<br>It shot a beam right at Danburites forces."
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>I am about to repeat myself… I don't believe it."
                    ),
                    new ScriptLine(
                        "REIDITE<br>I don’t believe it."
                    ),
                    new ScriptLine(
                        "CODEE<br>The gem is now able to repel the dark magic."
                    ),
                    new ScriptLine(
                        "SOLDIER<br>We can hurt the monsters! The King has repaired the Worldstone! The Gods are with us - ATTACK!"
                    ),
                    new ScriptLine(
                        "CODEE<br>That’s not how that happened!"
                    ),
                    new ScriptLine(
                        "PC<br>It’s fine Codee. Not everyone has to know that we saved them. We just have to save them."
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>Don't worry. I will ensure you heroes are given credit for what you've done"
                    ),
                    new ScriptLine(
                        "REIDITE<br>Come, let’s go to Azure Lake."
                    ),
                    new ScriptLine(
                        "KING GREYMOOR<br>I must stay here and defend my people. The last vestiges of water are here. We will wait for the rain here. Then, we will make a push for the Castle."
                    ),
                    new ScriptLine(
                        "CODEE<br>Onward!"
                    ),
                ]
            ),
            new Script(
                "at_the_lake",
                [
                    new ScriptLine(
                        "PC<br>We made it!"
                    ),
                    new ScriptLine(
                        "REIDITE<br>Quick, let’s restore the power to the land."
                    ),
                    new ScriptLine(
                        "DANBURITE<br>You think it’ll be that easy? I saw you used some of your witchcraft to weaken my forces, but I won’t be that easy to contend with."
                    ),
                    new ScriptLine(
                        "PC<br>Danburite."
                    ),
                    new ScriptLine(
                        "DANBURITE<br>KING Danburite."
                    ),
                    new ScriptLine(
                        "CODEE<br>You’re nothing but a usurper possessed by darkness"
                    ),
                    new ScriptLine(
                        "REIDITE<br>…"
                    ),
                    new ScriptLine(
                        "DANBURITE<br>I am not possessed by darkness, I control it. I called it, to take back what’s mine!"
                    ),
                    new ScriptLine(
                        "REIDITE<br>This isn’t you! You wouldn’t do this!"
                    ),
                    new ScriptLine(
                        "DANBURITE<br>I would do anything to take back what’s rightfully mine."
                    )
                ]
            ),
            new Script(
                "danburite_defeated",
                [
                    new ScriptLine(
                        "REIDITE<br>Why? Why did it have to be this way?"
                    ),
                    new ScriptLine(
                        "CODEE<br>He’s injured, but he’s still with us, Reidite. Stay with him and apply first aid. PC and I will handle the stone."
                    ),
                    new ScriptLine(
                        "PC<br>Handle the stone? I mean, we can’t just throw it in the Lake?"
                    ),
                    new ScriptLine(
                        "CODEE<br>What?! No, we can’t just *throw* it in the lake. We’re gonna need all your magic in order to put this in the lake. "
                    )
                ]
            ),
            new Script(
                "act_i_finale",
                [
                    new ScriptLine(
                        "REIDITE<br>It’s raining. IT’S RAINING!"
                    ),
                    new ScriptLine(
                        "PC<br>We did it."
                    ),
                    new ScriptLine(
                        "CODEE<br>You did it, PC. "
                    ),
                    new ScriptLine(
                        "REIDITE<br>It hasn’t rained in months. We thought this was the end. You two. You saved us all."
                    ),
                    new ScriptLine(
                        "CODEE<br>It was nothing."
                    ),
                    new ScriptLine(
                        "PC<br>It was actually quite a lot, Codee."
                    ),
                    new ScriptLine(
                        "CODEE<br>Will you just-"
                    ),
                    new ScriptLine(
                        "REIDITE<br>You are the strangest heroes I have ever met."
                    ),
                    new ScriptLine(
                        "CODEE<br>We’re the bes-"
                    ),
                    new ScriptLine(
                        "PC<br>Thank you, Princess Reidite."
                    ),
                    new ScriptLine(
                        "REIDITE<br>You must join us for a banquet at the Castle."
                    ),
                    new ScriptLine(
                        "CODEE<br>We can’t. This wasn’t the only Worldstone that was in danger. All may not be in trouble, but we must ensure all four are okay. "
                    ),
                    new ScriptLine(
                        "REIDITE<br>If I am honest, some time ago, my Fire magic became weaker. I thought it was due to the rain, but people have been mentioning the difficulty starting fires to keep warm."
                    ),
                    new ScriptLine(
                        "CODEE<br>That must be the fire worldstone."
                    ),
                    new ScriptLine(
                        "REIDITE<br>Travel [Northward] to the Ellevar Plains, there you will find the wandering Ellevar People. They worship the Gods of Fire and Light. We acknowledge those gods, but they should all be worshipped. None to be held above others."
                    ),
                    new ScriptLine(
                        "CODEE<br>Sounds like we’ve got our work cut out for us."
                    ),
                    new ScriptLine(
                        "PC<br>Can’t we just have one teensy banquet?"
                    ),
                    new ScriptLine(
                        "CODEE<br>We’ll have a banquet at the next one."
                    ),
                    new ScriptLine(
                        "REIDITE<br>No one throws a banquet quite like Westfalia."
                    ),
                    new ScriptLine(
                        "CODEE<br>Oh, alright. We deserve it"
                    ),
                    new ScriptLine(
                        "PC<br>Yes!!"
                    )
                ]
            ),
            // Be sure to add Narration Text between these two --- ** And so Westfalia Kingdom was saved and rain returned to all of Crystalia. However, there were many dangers afoot still. After a wonderful feast where our heroes enjoyed themselves and shared laughs with all, they were escorted to the edge of Westfalia Kingdom, where the Ellevar Plains await. **
            new Script(
                "entr'acte_heading_to_the_firelands",
                [
                    new ScriptLine(
                        "REIDITE<br>This is goodbye, then?"
                    ),
                    new ScriptLine(
                        "CODEE<br>We have to depart"
                    ),
                    new ScriptLine(
                        "PC<br>You should come with us. We could use a strong ally."
                    ),
                    new ScriptLine(
                        "CODEE<br>PC, we can’t bring anyone along. This is *our* journey. "
                    ),
                    new ScriptLine(
                        "PC<br>Just because it’s ours doesn’t mean we can’t bring friends along."
                    ),
                    new ScriptLine(
                        "REIDITE<br>I am flattered by your invitation, but Master Codee is right. I cannot join you. I have much to do here in Westfalia. My brother… I don’t believe the darkness poisoned his mind. "
                    ),
                    new ScriptLine(
                        "CODEE<br>The darkness doesn’t do that. It is attracted to the darkness in people’s hearts. There is light and dark in all of us, and we are each charged in keeping a balance. Too much of either is never good. "
                    ),
                    new ScriptLine(
                        "REIDITE<br>I will help my brother how I can. Father has already called forth doctors of the mind to try and talk to my brother, see what ails him. It seems that he has kept quiet about his heart for too long. "
                    ),
                    new ScriptLine(
                        "PC<br>I believe your family will recover."
                    ),
                    new ScriptLine(
                        "REIDITE<br>I don’t know about recover, but at least start anew."
                    ),
                    new ScriptLine(
                        "PC<br>We will make sure there’s a world out there so you can start anew."
                    ),
                    new ScriptLine(
                        "REIDITE<br>Thank you. I must return. Have a safe journey."
                    ),
                    new ScriptLine(
                        "PC<br>Goodbye, Princess."
                    ),
                    new ScriptLine(
                        "REIDITE<br>So long, PC. So long, Master Codee."
                    ),
                    new ScriptLine(
                        "CODEE<br>See ya! Be safe!"
                    ),
                ]
            )
        ]);

        return this;
    }
}