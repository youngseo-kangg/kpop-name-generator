import { NameType, NameTypeDetail } from "../types";

export const nameTypeDetails: Record<NameType, NameTypeDetail> = {
    [NameType.A]: {
        description: 'A charismatic and strong leader-type idol',
        subDescription: [
            'Possesses strong leadership and a sense of responsibility',
            'Has a powerful stage presence',
            'Plays a central role in leading the team'
        ],
        emojis: ['🔥', '🏆', '🚀'],
    },
    [NameType.B]: {
        description: 'An artistic and aesthetically creative idol',
        subDescription: [
            'Excels in unique stage production and concept expression',
            'Has a distinct fashion sense',
            'Can pull off various concepts flawlessly'
        ],
        emojis: ['🎨', '🌈', '🎭'],
    },
    [NameType.C]: {
        description: 'A perfectionist and analytical idol',
        subDescription: [
            'A hardworking individual who practices meticulously',
            'Pays attention to even the smallest details',
            'Strives for a flawless performance on stage'
        ],
        emojis: ['🧐', '📊', '🔍'],
    },
    [NameType.D]: {
        description: 'A gentle and soothing idol with a healing presence',
        subDescription: [
            'Has an emotional and warm vocal tone',
            'Provides comfort and stability to fans',
            'Quiet but possesses a deep charm'
        ],
        emojis: ['🌿', '💙', '☕'],
    },
    [NameType.E]: {
        description: 'An adventurous and daring idol',
        subDescription: [
            'Fearless when it comes to new concepts and styles',
            'Has a global mindset and explores various opportunities',
            'Known for constant reinvention and transformation'
        ],
        emojis: ['✈️', '🌍', '🏄'],
    },
    [NameType.F]: {
        description: 'A warm-hearted idol who loves their fans the most',
        subDescription: [
            'Always cherishes and prioritizes fans',
            'Plays the role of a mood-maker in the group',
            'A caring personality who looks after those around them'
        ],
        emojis: ['🤗', '💖', '🍪'],
    },
    [NameType.G]: {
        description: 'A strategic and hardworking idol',
        subDescription: [
            'Thorough and meticulous when it comes to practice and preparation',
            'Highly disciplined with excellent self-management skills',
            'Works with long-term goals in mind and steadily grows'
        ],
        emojis: ['📅', '📖', '🛠️'],
    },
    [NameType.H]: {
        description: 'An entertainer-type idol full of humor and energy',
        subDescription: [
            'Has a great sense of humor and vibrant energy',
            'Shines on variety shows and entertainment programs',
            'Keeps fans engaged with their lively and fun personality'
        ],
        emojis: ['😂', '🎉', '🤹'],
    },
    [NameType.I]: {
        description: 'A quiet but deeply charismatic idol',
        subDescription: [
            'Has a soulful music style and unique aura',
            'Thoughtful and philosophical in interviews',
            'Calm in nature but exudes a powerful stage presence'
        ],
        emojis: ['📚', '🌙', '🎧'],
    },
    [NameType.J]: {
        description: 'A natural performer with an electrifying stage presence',
        subDescription: [
            'Excels in both dancing and singing, an all-rounder',
            'Becomes the most radiant on stage',
            'Has energetic stage manners and strong expressions'
        ],
        emojis: ['🎤', '🍻', '💃'],
    },
};