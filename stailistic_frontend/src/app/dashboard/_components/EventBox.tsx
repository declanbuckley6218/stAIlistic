import { EventInfoInterface, RepeatingEventInfoInterface } from "./getEvents";
import { OutfitInterface, OutfitPhotosBox } from "./OutfitBox";

const formatDate = (d: Date) =>
    d.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });

const formatTime = (d: Date) =>
    d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

const formatShortDate = (d: Date) =>
    d.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });

const formatWeekday = (d: Date) =>
    d.toLocaleDateString([], { weekday: "long" });

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <span className="text-stailistictext-gray flex flex-row gap-1">
            <p className="font-bold">{label}</p>
            {children}
        </span>
    );
}

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full bg-stailistic-blue-muted/10 text-stailistic-blue-muted text-xs font-bold px-3 py-1">
            {children}
        </span>
    );
}

export default function EventBox({ eventInfo }: { eventInfo: EventInfoInterface }) {
    const scheduled = eventInfo.scheduledOutfitCreationDate;

    return (
        <div className="relative w-full grid gap-4 border border-stailistictext-darkgray/15 justify-center bg-white h-fit py-4 px-2 min-h-30 mx-1 my-1 overflow-hidden rounded-sm">
            <div className="w-full flex flex-col items-center gap-2 px-2">
                <p className="text-stailistic-blue-muted font-bold text-2xl text-center">
                    {eventInfo.eventTitle ?? "Untitled Event"}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                    <Badge>{eventInfo.eventDressCode}</Badge>
                    {eventInfo.recursive && <Badge>Repeating</Badge>}
                </div>
            </div>

            <div className="grid gap-1 px-2">
                <InfoRow label="Date:">{formatDate(eventInfo.startDateTime)}</InfoRow>
                <InfoRow label="Time:">
                    {formatTime(eventInfo.startDateTime)} – {formatTime(eventInfo.endDateTime)}
                </InfoRow>
                <p className="text-stailistictext-gray mt-1">{eventInfo.description}</p>
            </div>

            <div className="relative grid w-full gap-1 bg-stailistic-blue-muted/10">
                {eventInfo.outfit ? (
                    <OutfitDisplay fitInfo={eventInfo.outfit} label="Event's Outfit:" />
                ) : scheduled ? (
                    <InfoRow label="Outfit Scheduled For:">{formatShortDate(scheduled)}</InfoRow>
                ) : (
                    <InfoRow label="No Outfit Assigned or Scheduled!">{null}</InfoRow>
                )}
            </div>

            {eventInfo.outfit && scheduled && (
                <p className="text-xs text-stailistictext-gray text-center">
                    Outfit review scheduled for {formatShortDate(scheduled)}
                </p>
            )}
        </div>
    );
}

export function RepeatEventBox({ repEventInfo }: { repEventInfo: RepeatingEventInfoInterface }) {
    const { event, startRecursionDate, endRecursionDate, outfitsWearable } = repEventInfo;

    return (
        <div className="relative w-full grid gap-4 border border-stailistictext-darkgray/15 justify-center bg-white h-fit py-4 px-2 min-h-30 mx-1 my-1 overflow-hidden rounded-sm">
            <div className="w-full flex flex-col items-center gap-2 px-2">
                <p className="text-stailistic-blue-muted font-bold text-2xl text-center">
                    {repEventInfo.repeatEventTitle ?? "Untitled Series"}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                    <Badge>{event.eventDressCode}</Badge>
                    <Badge>Every {formatWeekday(startRecursionDate)}</Badge>
                </div>
            </div>

            <div className="grid gap-1 px-2">
                <InfoRow label="Time:">
                    {formatTime(event.startDateTime)} – {formatTime(event.endDateTime)}
                </InfoRow>
                <InfoRow label="Starts:">{formatShortDate(startRecursionDate)}</InfoRow>
                <InfoRow label="Ends:">{formatShortDate(endRecursionDate)}</InfoRow>
                <p className="text-stailistictext-gray mt-1">{repEventInfo.description}</p>
            </div>

            <div className="grid w-full gap-2 bg-stailistic-blue-muted/10 p-2">
                <p className="text-stailistictext-gray font-bold">
                    Outfits you can wear ({outfitsWearable.length}):
                </p>
                {outfitsWearable.length === 0 ? (
                    <p className="text-stailistictext-gray">No outfits assigned yet.</p>
                ) : (
                    <div className="flex flex-col gap-2">
                        {outfitsWearable.map(fit => (
                            <OutfitDisplay key={fit.outfitID} fitInfo={fit} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function OutfitDisplay({ fitInfo, label }: { fitInfo: OutfitInterface; label?: string }) {
    return (
        <div className="shadow-[0_0_15px_3px_rgba(0,0,0,0.1)] w-full gap-2 flex flex-col justify-center bg-white h-fit py-4 px-2 border border-stailistictext-gray/20 rounded-sm overflow-hidden">
            <div className="w-full flex justify-center gap-2 bg-white h-fit px-2">
                {label && (
                    <p className="text-stailistictext-gray font-bold">{label}</p>
                )}
                <p className="text-stailistic-blue-muted font-bold">
                    {fitInfo.outfitName ?? "Unnamed Outfit"}
                </p>
            </div>
            <OutfitPhotosBox urls={fitInfo.outfitArticles} />
        </div>
    );
}