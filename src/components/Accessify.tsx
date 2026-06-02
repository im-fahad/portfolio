"use client";

import { AccessifyWidget } from "@glitchlab/accessify/react";

// Floating accessibility widget. Mounted in app/layout so it appears on every
// route. The resume pages place their "Download PDF" button at bottom-left
// so this widget can sit at bottom-right without overlap.
export default function Accessify() {
    return (
        <AccessifyWidget
            position="bottom-right"
            size="M"
            colorScheme="dark"
            lang="en"
        />
    );
}
