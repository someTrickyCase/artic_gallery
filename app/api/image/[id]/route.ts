import { NextRequest, NextResponse } from "next/server";
import { ARTIC_HEADERS, ARTIC_IIIF } from "@/lib/artic";

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;
    const size = request.nextUrl.searchParams.get("size") ?? "400";
    if (!/^[0-9a-f-]{36}$/i.test(id) || !["400", "843"].includes(size)) {
        return NextResponse.json({ error: "Invalid image request" }, { status: 400 });
    }

    try {
        const response = await fetch(`${ARTIC_IIIF}/${id}/full/${size},/0/default.jpg`, {
            headers: ARTIC_HEADERS,
            next: { revalidate: 86400 },
        });
        if (!response.ok) return NextResponse.json({ error: "Image unavailable" }, { status: response.status });
        return new NextResponse(response.body, {
            headers: { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=86400" },
        });
    } catch {
        return NextResponse.json({ error: "Image unavailable" }, { status: 502 });
    }
}
