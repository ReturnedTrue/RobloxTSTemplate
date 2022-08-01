import { Networking } from "@flamework/networking";

interface ServerEvents {}

interface ServerFunctions {}

interface ClientEvents {}

interface ClientFunctions {}

export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
export const GlobalFunctions = Networking.createFunction<ServerFunctions, ClientFunctions>();
