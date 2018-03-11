import { LatLngObject } from "./lat-lng-object";

export class MarkerObject {
    icon?: {
        url?: string | string[];
        size?: {
            width?: number;
            height?: number;
            anchor?: [number, number];
        }
    };

    inforWindowAnchor?: [number, number];

    position?: LatLngObject | {
        lat?: number;
        lng?: number;
    };

    opacity?: number;

    zIndex?: number;

    anchor?: number;

    draggable?: boolean;

    title?: string;

    snippet?: string;

    visible?: boolean;

    rotation?: number;

    animation?: any;

    disableAutoPan?: boolean;

    flat?: boolean;

    data?: any;

    id?: number;
}
