import { EventInfoInterface, RepeatingEventInfoInterface } from "@/types/events";
import { OutfitInterface } from "@/types/outfits";
import { WardrobeArticlesInterface } from "@/types/wardrobe";

export default async function getEvents(): Promise<EventInfoInterface[]>{
        // const res = await fetch('need database call here');
        // const data = await res.json();
        return []; 
}
function seededRandom(seed: number) {
    return () => {
        seed = (seed + 0x6D2B79F5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const DRESS_CODES = ["Casual", "Business Casual", "Formal", "Athletic", "Semi-Formal", "Informal"];

export async function getEventsDummy(): Promise<EventInfoInterface[]> {
    const rand = seededRandom(42);
    // Separate generator for titles so adding them doesn't change the dates/outfits you already have
    const titleRand = seededRandom(7);
    const pick = <T,>(arr: T[]): T => arr[Math.floor(rand() * arr.length)];
    const pickTitle = (arr: string[]): string => arr[Math.floor(titleRand() * arr.length)];
    const allFits = [fit1, fit2, fit3, fit4];

    const baseDate = new Date();
    baseDate.setHours(0, 0, 0, 0);

    const data: EventInfoInterface[] = [];
    const exampleDesc = "Example description for an event";

    for (let iter = 25; iter > 0; iter--) {
        const startDateTime = new Date(baseDate);
        startDateTime.setDate(baseDate.getDate() + Math.floor(rand() * 45) - 10);
        startDateTime.setHours(8 + Math.floor(rand() * 13), rand() < 0.5 ? 0 : 30);

        const endDateTime = new Date(startDateTime.getTime() + (2 + Math.floor(rand() * 7)) * 30 * 60 * 1000);

        const isRepeating = iter % 5 === 0;

        let scheduledOutfitCreationDate: Date | null = null;
        if (rand() < 0.6) {
            scheduledOutfitCreationDate = new Date(startDateTime);
            scheduledOutfitCreationDate.setDate(startDateTime.getDate() - 1);
            scheduledOutfitCreationDate.setHours(18, 0, 0, 0);
        }

        // Same pick order as before (outfit, then dress code) so existing data stays identical
        const outfit = pick(allFits);
        const eventDressCode = pick(DRESS_CODES);
        const titlePool = TITLES_BY_DRESS_CODE[eventDressCode];
        const eventTitle = pickTitle(isRepeating ? titlePool.recurring : titlePool.oneOff);

        data.push({
            eventID: iter,
            repeatEventID: isRepeating ? iter / 5 : null,
            startDateTime,
            endDateTime,
            recursive: isRepeating,
            outfit,
            eventDressCode,
            scheduledOutfitCreationDate,
            description: exampleDesc,
            eventTitle,
        });
    }

    return data.sort((a, b) => a.startDateTime.getTime() - b.startDateTime.getTime());
}

export async function getRepeatingEventsDummy(): Promise<RepeatingEventInfoInterface[]> {
    const events = await getEventsDummy();
    const allFits = [fit1, fit2, fit3, fit4];
    const exampleDesc = "Example description for a repeating event";
    return events
        .filter(e => e.recursive && e.repeatEventID !== null)
        .map(e => {
            const endRecursionDate = new Date(e.startDateTime);
            endRecursionDate.setDate(endRecursionDate.getDate() + 56);
            return {
                repeatEventID: e.repeatEventID as number,
                event: e,
                endDate: e.endDateTime,
                recursive: true,
                startRecursionDate: e.startDateTime,
                endRecursionDate,
                outfitsWearable: [e.outfit, ...allFits.filter(f => f.outfitID !== e.outfit.outfitID).slice(0, 2)],
                description: exampleDesc,
                repeatEventTitle: e.eventTitle,
            };
        });
}


const shoes: WardrobeArticlesInterface = {
    itemID: 1,
    imageDataURL: "/shoes.png",
    itemName: "ASCIS shoes",
    itemDescription: "ASICS Gel-NYC White Roasted Coffee 'White Brown'",
    itemStyle: "Casual",
    itemColor: "Coffee",
    itemSecondaryColor: "White",
    itemType: "Shoes",
    itemEvent: "Informal",
    itemSize: "9.5",
} 
const pants: WardrobeArticlesInterface = {
    itemID: 2,
    imageDataURL: "/pants.png",
    itemName: "Brown Cargo Pants",
    itemDescription: "Brown Cargo Pants",
    itemStyle: "Casual",
    itemColor: "Brown",
    itemSecondaryColor: "Tan",
    itemType: "Pants",
    itemEvent: "Informal",
    itemSize: "32x32",
} 
const pants2: WardrobeArticlesInterface = {
    itemID: 6,
    imageDataURL: "/pants.png",
    itemName: "Brown Cargo Pants",
    itemDescription: "Brown Cargo Pants",
    itemStyle: "Casual",
    itemColor: "Brown",
    itemSecondaryColor: "Tan",
    itemType: "Pants",
    itemEvent: "Informal",
    itemSize: "32x32",
}
const shirt: WardrobeArticlesInterface = {
    itemID: 3,
    imageDataURL: "/shirt.png",
    itemName: "Favorite White Tee",
    itemDescription: "White tee shirt i really love and adore. It fits me super well!",
    itemStyle: "Casual",
    itemColor: "White",
    itemSecondaryColor: "White",
    itemType: "T-Shirt",
    itemEvent: "Informal",
    itemSize: "Large",
} 
const shirt2: WardrobeArticlesInterface = {
    itemID: 5,
    imageDataURL: "/shirt.png",
    itemName: "Favorite White Tee",
    itemDescription: "White tee shirt i really love and adore. It fits me super well!",
    itemStyle: "Casual",
    itemColor: "White",
    itemSecondaryColor: "White",
    itemType: "T-Shirt",
    itemEvent: "Informal",
    itemSize: "Large",
} 
const jacket: WardrobeArticlesInterface = {
    itemID: 4,
    imageDataURL: "/jacket.png",
    itemName: "Brown Jacket",
    itemDescription: "Brown jacket with fuzzy neckline and cuffs, super warm and I adore it.",
    itemStyle: "Casual",
    itemColor: "Brown",
    itemSecondaryColor: "Cream",
    itemType: "Jacket",
    itemEvent: "Informal",
    itemSize: "Large",
} 
const shirt3: WardrobeArticlesInterface = {
    itemID: 7,
    imageDataURL: "/shirt.png",
    itemName: "Favorite White Tee",
    itemDescription: "White tee shirt i really love and adore. It fits me super well!",
    itemStyle: "Casual",
    itemColor: "White",
    itemSecondaryColor: "White",
    itemType: "T-Shirt",
    itemEvent: "Informal",
    itemSize: "Large",
} 
const jacket2: WardrobeArticlesInterface = {
    itemID: 8,
    imageDataURL: "/jacket.png",
    itemName: "Brown Jacket",
    itemDescription: "Brown jacket with fuzzy neckline and cuffs, super warm and I adore it.",
    itemStyle: "Casual",
    itemColor: "Brown",
    itemSecondaryColor: "Cream",
    itemType: "Jacket",
    itemEvent: "Informal",
    itemSize: "Large",
} 
const fit1: OutfitInterface = {
    outfitID: 1,
    outfitArticles: [jacket, shirt, pants,shirt2,pants2, jacket2, shirt3, shoes],
    outfitName: "Fall Day Exploring",
    outfitDescription: "Nice and warm, brown tones, good for a fall dayy! Wore it and loved it.",
    outfitStyle: "Going Out",
    outfitEvent: undefined,
}
const fit2: OutfitInterface = {
    outfitID: 2,
    outfitArticles: [shirt, pants],
    outfitName: "Day in lounging",
    outfitDescription: "Just a lounging around the house outfit",
    outfitStyle: "Lounging",
    outfitEvent: undefined,
}
const fit3: OutfitInterface = {
    outfitID: 3,
    outfitArticles: [shirt, pants, shoes],
    outfitName: "Simple fit",
    outfitDescription: "Simple outfit for a warm or hot day",
    outfitStyle: "Casual",
    outfitEvent: undefined,
}
const fit4: OutfitInterface = {
    outfitID: 4,
    outfitArticles: [pants],
    outfitName: "Incomplete Outfit for School",
    outfitDescription: "I need to build this outfit still, i was editing and had to do something else.",
    outfitStyle: undefined,
    outfitEvent: undefined,
}
const TITLES_BY_DRESS_CODE: Record<string, { oneOff: string[]; recurring: string[] }> = {
    "Casual": {
        oneOff: ["Brunch with Friends", "Farmers Market Run", "Movie Night", "Park Picnic", "Coffee Catch-Up"],
        recurring: ["Weekly Game Night", "Sunday Brunch Club", "Friday Hangout"],
    },
    "Business Casual": {
        oneOff: ["Client Lunch", "Team Offsite", "Project Kickoff", "Networking Mixer", "Quarterly Review"],
        recurring: ["Weekly Team Sync", "Monday Standup", "Biweekly 1:1"],
    },
    "Formal": {
        oneOff: ["Black Tie Gala", "Wedding Ceremony", "Awards Banquet", "Charity Dinner", "Opera Night"],
        recurring: ["Monthly Board Meeting", "Weekly Chamber Dinner", "Season Ticket Concert"],
    },
    "Athletic": {
        oneOff: ["Pickup Basketball", "5K Fun Run", "Hiking Trip", "Gym Session", "Tennis Match"],
        recurring: ["Morning Run Club", "Weekly Yoga Class", "Tuesday Soccer League"],
    },
    "Semi-Formal": {
        oneOff: ["Birthday Dinner", "Cocktail Hour", "Graduation Party", "Anniversary Dinner", "Art Gallery Opening"],
        recurring: ["Monthly Dinner Club", "Weekly Date Night", "Thursday Wine Tasting"],
    },
    "Informal": {
        oneOff: ["Lazy Day at Home", "Study Session", "Errands Run", "Video Game Marathon", "Family BBQ"],
        recurring: ["Weekend Chill Day", "Weekly Study Group", "Saturday Errands"],
    },
};