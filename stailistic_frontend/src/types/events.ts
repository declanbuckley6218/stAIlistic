import { OutfitInterface } from "./outfits";

export interface EventInfoInterface{
    eventID: number,
    repeatEventID: number | null,
    startDateTime: Date,
    endDateTime: Date,
    recursive: boolean,
    outfit: OutfitInterface,
    eventDressCode: string,
    scheduledOutfitCreationDate: Date | null,
    description: string,
    eventTitle: string,
}

export interface RepeatingEventInfoInterface{
    repeatEventID: number,
    event: EventInfoInterface,
    endDate: Date,
    recursive: boolean,
    startRecursionDate: Date,
    endRecursionDate: Date,
    outfitsWearable: OutfitInterface[],
    description: string,
    repeatEventTitle: string

}