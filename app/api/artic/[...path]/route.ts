import { NextRequest, NextResponse } from "next/server";
import { ARTIC_API, ARTIC_HEADERS } from "@/lib/artic";

export async function GET(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
    const { path } = await context.params;
    const valid = path.length >= 1 && path[0] === "artworks" &&
        (path.length === 1 || (path.length === 2 && (path[1] === "search" || /^\d+$/.test(path[1]))));
    if (!valid) return NextResponse.json({ error: "Invalid artwork path" }, { status: 400 });

    try {
        const url = `${ARTIC_API}/${path.join("/")}${request.nextUrl.search}`;
        const response = await fetch(url, { headers: ARTIC_HEADERS, next: { revalidate: 300 } });
        if (!response.ok) return NextResponse.json({ error: "Artwork service unavailable" }, { status: response.status });
        return NextResponse.json(await response.json());
    } catch {
        return NextResponse.json({ error: "Artwork service unavailable" }, { status: 502 });
    }
}
