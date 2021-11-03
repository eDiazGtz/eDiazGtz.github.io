// manages lessons on platform
class LessonMaster {

    static adminCallback;

    static completedLessons = [
        
    ];

    static gameMaster;

    static lessons = [
        new Lesson(
            "summoning_scroll",
            "Summon Characters Skill",
            new SummoningScroll(),
            `Classes is an OOP concept that helps us keep our code modular and extensible.<br><br>
                In this lesson, you will learn to harness the power of classes to add new characters you can choose from.`,
            "", "abc.com"
        ),
        new Lesson(
            "grishams_heirloom",
            "Gain Magic Skills",
            new AncientMagicScroll(),
            "", ""
        ),
        new Lesson(
            "cerulean_compass",
            "Find the hidden bandits",
            new CeruleanCompass(),
            "", ""
        )
    ]

    // move lessons slugs from lessonSlugs to completedLessonSlugs as you complete the lessons.
    static lessonSlugs = [
        LessonMaster.lessons.ADDITIONAL_PLAYERS,
        LessonMaster.lessons.CREATE_NEW_CLASS
    ]

    // used by StageManager to move forward when the demo Continue button has been clicked.
    static lessonCompleted = () =>  {
        if ( LessonMaster.adminCallback ) this.adminCallback(LessonMaster.gameMaster.map.getMap(), LessonMaster.gameMaster.player);
    };

    // called from different parts of framework
    // return lessonPresented? true / false
    static presentLesson = (lessonSlug, act, adminCallback = null) => {

        LessonMaster.adminCallback = adminCallback;

        let lesson = LessonMaster.lessons.filter(lesson => lesson.slug === lessonSlug)[0] || null;

        if ( (LessonMaster.gameMaster.mode.indexOf("demo") === -1 &&
                LessonMaster.gameMaster.mode.indexOf("normal") === -1) ||
                    !lesson ) return false;

        // move from lessons to completedLessons
        LessonMaster.completedLessons.push(lesson);
        LessonMaster.lessons = this.lessons.filter(lesson => lesson.slug !== lessonSlug);
        
        document.dispatchEvent(new CustomEvent(StageManager.EVENTS.DISPLAY_LESSON, {detail: {lesson, act}}));
        
        return true;
    }
}